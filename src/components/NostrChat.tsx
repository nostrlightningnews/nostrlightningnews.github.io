import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { useChannelMessages } from '@/hooks/useChannelMessages';
import { useAuthor } from '@/hooks/useAuthor';
import { genUserName } from '@/lib/genUserName';
import { useQueryClient } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';

// Lightning News Chat Channel tag - used to identify messages for this chat
const CHANNEL_TAG = 'lightning-news-chat';

interface ChatMessageProps {
  event: NostrEvent;
}

function ChatMessage({ event }: ChatMessageProps) {
  const author = useAuthor(event.pubkey);
  const metadata = author.data?.metadata;
  const displayName = metadata?.name || genUserName(event.pubkey);
  const avatar = metadata?.picture;
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex gap-3 p-3 rounded-lg bg-background/50 border-l-2 border-primary/50 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarImage src={avatar} alt={displayName} />
        <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
          {initial}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-primary text-sm truncate">
            {displayName}
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date(event.created_at * 1000).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
        <p className="text-sm text-foreground/90 break-words whitespace-pre-wrap">
          {event.content}
        </p>
      </div>
    </div>
  );
}

function ChatMessageSkeleton() {
  return (
    <div className="flex gap-3 p-3">
      <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-12" />
        </div>
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

export function NostrChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  
  const { user, metadata } = useCurrentUser();
  const { mutate: publishEvent, isPending } = useNostrPublish();
  const { data: messages, isLoading, isError } = useChannelMessages({
    channelTag: CHANNEL_TAG,
    limit: 100,
  });

  const isLoggedIn = !!user;

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current && messages) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current && isLoggedIn) {
      inputRef.current.focus();
    }
  }, [isOpen, isLoggedIn]);

  const handleSendMessage = () => {
    if (!message.trim() || !isLoggedIn || isPending) return;

    publishEvent({
      kind: 1,
      content: message.trim(),
      tags: [
        ['t', CHANNEL_TAG],
      ],
    }, {
      onSuccess: () => {
        setMessage('');
        // Invalidate the query to fetch new messages immediately
        queryClient.invalidateQueries({ queryKey: ['channel-messages', CHANNEL_TAG] });
      },
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-300 z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Container */}
      <div 
        className={`fixed bottom-6 right-6 w-[400px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-card border border-border rounded-xl shadow-2xl flex flex-col z-40 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-background/50 rounded-t-xl">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <h3 className="font-semibold text-sm">Nostr Chat</h3>
            {messages && messages.length > 0 && (
              <span className="text-xs text-muted-foreground">
                ({messages.length} messages)
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-muted"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-3" ref={scrollAreaRef}>
          <div className="space-y-2">
            {/* Welcome Message */}
            <div className="flex gap-3 p-3 rounded-lg bg-primary/10 border-l-2 border-primary">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                  ⚡
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-semibold text-primary text-sm mb-1">System</div>
                <p className="text-sm text-muted-foreground">
                  Welcome to Lightning News Nostr chat! {isLoggedIn ? 'Start chatting below.' : 'Sign in with Nostr to participate.'}
                </p>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <>
                <ChatMessageSkeleton />
                <ChatMessageSkeleton />
                <ChatMessageSkeleton />
              </>
            )}

            {/* Error State */}
            {isError && (
              <div className="text-center py-4 text-muted-foreground text-sm">
                Unable to load messages. Please try again later.
              </div>
            )}

            {/* Messages */}
            {messages?.map((event) => (
              <ChatMessage key={event.id} event={event} />
            ))}

            {/* Empty State (after loading) */}
            {!isLoading && !isError && messages?.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No messages yet. Be the first to say something!
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-3 border-t border-border bg-background/50 rounded-b-xl">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              placeholder={isLoggedIn ? "Type your message..." : "Sign in to chat"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={!isLoggedIn || isPending}
              className="flex-1 bg-muted/50 border-muted focus-visible:ring-primary"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!isLoggedIn || !message.trim() || isPending}
              className="px-4"
            >
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
          {isLoggedIn && metadata?.name && (
            <p className="text-xs text-muted-foreground mt-2">
              Chatting as <span className="text-primary font-medium">{metadata.name}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

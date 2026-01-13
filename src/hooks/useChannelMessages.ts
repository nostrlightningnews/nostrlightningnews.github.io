import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';

interface UseChannelMessagesOptions {
  channelTag: string;
  limit?: number;
}

export function useChannelMessages({ channelTag, limit = 50 }: UseChannelMessagesOptions) {
  const { nostr } = useNostr();

  return useQuery<NostrEvent[]>({
    queryKey: ['channel-messages', channelTag, limit],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      
      // Query for kind 1 events with the specific channel tag
      // This uses a simple "t" tag approach for public chat rooms
      const events = await nostr.query(
        [{ 
          kinds: [1], 
          '#t': [channelTag],
          limit,
        }],
        { signal }
      );

      // Sort by created_at ascending (oldest first for chat display)
      return events.sort((a, b) => a.created_at - b.created_at);
    },
    refetchInterval: 3000, // Refetch every 3 seconds for real-time updates
    staleTime: 1000,
  });
}

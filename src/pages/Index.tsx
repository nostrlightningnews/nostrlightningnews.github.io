import { useSeoMeta } from '@unhead/react';
import { ExternalLink, Calendar, Blocks, Link2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LoginArea } from '@/components/auth/LoginArea';
import { NostrChat } from '@/components/NostrChat';

// Nostr ecosystem content
const nostrContent = [
  {
    category: "Web / Multi-Platform",
    title: "Shakespeare - AI-Powered Website Builder",
    description: "A conversational, AI-assisted web app & app builder that lets you create decentralized websites or apps using natural language. Powered via Nostr keys & protocols instead of centralised logins.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    platform: "Web",
    status: "Beta",
    url: "https://shakespeare.diy/"
  },
  {
    category: "Developer / Utility",
    title: "Grimoire - Creative Exploration Client",
    description: "A new tool described as a magical digital spellbook — a creative, idea-sharing and exploration client for the Nostr network.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    platform: "Web",
    status: "New",
    url: "https://nostrapps.com/grimoire"
  },
  {
    category: "Authentication / Identity",
    title: "Nostr Authenticator",
    description: "A password-less authentication app using Nostr signing for decentralized login — akin to a Nostr-based SSO/auth service.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=400&fit=crop",
    platform: "Web / App",
    status: "Latest",
    url: "https://getalby.com/"
  },
  {
    category: "Authentication / Identity",
    title: "Aegis v0.3.5 - Cross-Platform Signer",
    description: "A dedicated Nostr signer that manages event signing across apps securely, supporting multiple connection methods with polished visuals and improved cross-platform reliability.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    platform: "Android/iOS/Desktop",
    status: "Updated",
    url: "https://nostrapps.com/aegis?utm_source=chatgpt.com"
  },
  {
    category: "Content & Media",
    title: "Plebs v2.7.32 - Video Platform",
    description: "Decentralized video publishing/discovery — users publish videos, creators earn engagement, and it doesn't rely on centralized systems. Latest release with reliability improvements.",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=400&fit=crop",
    platform: "Web",
    status: "Updated",
    url: "https://plebs.app/"
  },
  {
    category: "Messaging & Chat",
    title: "Nostr Ynstant Messenger (NYM) v2.24.62",
    description: "Lightweight direct messaging on Nostr, supporting both ephemeral and persistent chats. Recent hotfix removing stale relay dependencies to improve connection reliability.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=400&fit=crop",
    platform: "Web/Apps",
    status: "Hotfix",
    url: "https://github.com/Spl0itable/NYM"
  }
];

const Index = () => {
  useSeoMeta({
    title: 'Lightning News - Nostr Edition',
    description: 'The latest updates from the Nostr ecosystem - Apps, tools, and developments in decentralized social networking.',
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://lightning.news/wp-content/uploads/2025/01/Lightning-news-logo-small-dark.png.webp"
                alt="Lightning News"
                className="h-8 w-auto"
              />
            </div>

            {/* Auth Section */}
            <LoginArea className="flex-shrink-0" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black border-b border-border py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Nostr Apps & Tools
          </h1>
          <p className="text-muted-foreground text-lg">
            The latest updates from the Nostr ecosystem
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-8">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Weekly Post Header */}
          <Card className="mb-8 bg-card/50 border-border">
            <CardContent className="p-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                <a
                  href="https://njump.me/naddr1qvzqqqr4gupzpsfl6wqsk2scwf5g6c0q5zxkwtw06nslqx4d6942xf9h7z6xydh2qy88wumn8ghj7mn0wvhxcmmv9uqzgdfsxy6xzven8qknzef38yknge3nxyknsvp4xukkgefkxvuxyvf5v9nx2dqfddnsr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Nostr Ecosystem: Recent Launches and New Tools
                </a>
              </h2>
              <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span><strong className="text-primary">Date:</strong> January 12, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Blocks className="h-4 w-4 text-primary" />
                  <span><strong className="text-primary">Block Height:</strong> 875,432</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-primary" />
                  <a
                    href="https://njump.me/naddr1qvzqqqr4gupzpsfl6wqsk2scwf5g6c0q5zxkwtw06nslqx4d6942xf9h7z6xydh2qy88wumn8ghj7mn0wvhxcmmv9uqzgdfsxy6xzven8qknzef38yknge3nxyknsvp4xukkgefkxvuxyvf5v9nx2dqfddnsr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View on Nostr
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nostrContent.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full bg-card hover:border-primary transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <CardContent className="p-5">
                    {/* Category Badge */}
                    <Badge className="mb-3 bg-primary text-primary-foreground font-bold text-xs">
                      {item.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        📱 {item.platform}
                      </span>
                      <span className="flex items-center gap-1">
                        🔖 {item.status}
                      </span>
                      <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-8 bg-black">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://lightning.news/wp-content/uploads/2025/01/Lightning-news-logo-small-dark.png.webp"
                alt="Lightning News"
                className="h-8 w-auto"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://njump.me/nprofile1qqsz24rre52v5xxtugwzpud2ewhpeu8de8gr9753v8q38su4cw5xkhqhr4xr9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Nostr"
              >
                <svg className="h-5 w-5" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M128 0C57.3 0 0 57.3 0 128c0 70.7 57.3 128 128 128 70.7 0 128-57.3 128-128C256 57.3 198.7 0 128 0zm20.6 189.7c-11.2 5.9-25.4 8.3-42.6 7.2-17.2-1.1-31.8-6.2-43.6-15.3-12.5-9.7-20.3-22.5-23.3-38.5-2.6-13.6-1.3-26.7 3.7-39.2 5.1-12.7 13.7-23.3 25.9-31.7 10.9-7.5 23.6-12.4 38.1-14.7 11.5-1.8 22.5-1.5 33.2 1 11.3 2.7 21.1 7.6 29.3 14.8 8.4 7.4 14.5 16.5 18.2 27.4 3.9 11.4 5 23.2 3.3 35.4-1.8 12.8-6.3 24.3-13.6 34.5-7.1 9.8-16.2 17.2-27.6 22.1zm-7.9-95.9c-6.9-4.2-14.8-6.2-23.5-5.8-8.7.3-16.4 2.8-23.1 7.5-6.7 4.7-11.5 10.7-14.4 18.1-2.9 7.3-3.3 14.8-1.3 22.3 2.1 7.9 6.4 14.3 12.8 19.2 6.4 4.9 13.8 7.6 22.3 8.1 8.5.5 16.3-1.4 23.4-5.6 7.1-4.3 12.3-10.2 15.7-17.8 3.3-7.6 4.1-15.4 2.2-23.5-1.9-8.1-6.2-14.8-13.1-19.5l-1 .5z"/>
                </svg>
              </a>
              <a
                href="https://x.com/LightningNews21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="X (Twitter)"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@LightningNews21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="YouTube"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lightning News
            </div>
          </div>
        </div>
      </footer>

      {/* Nostr Chat */}
      <NostrChat />
    </div>
  );
};

export default Index;

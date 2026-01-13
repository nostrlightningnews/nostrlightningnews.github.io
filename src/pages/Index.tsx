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
              {/* Nostr - Nostrich */}
              <a
                href="https://njump.me/nprofile1qqsz24rre52v5xxtugwzpud2ewhpeu8de8gr9753v8q38su4cw5xkhqhr4xr9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Nostr"
              >
                <svg className="h-6 w-6" viewBox="0 0 875 875" fill="currentColor">
                  <path d="M597.6 388.9c-3.5-84.5-38.6-137.2-123.3-168.7-57.7-21.5-109.5-9.2-156.4 29.1-36 29.4-55.3 68.3-60.3 114.6-1 9.6-.5 19.4-1.4 29-.7 7.5-5.2 11.9-12.7 13.2-7.7 1.3-13.9-1.5-17.6-8.5-2.9-5.4-4.2-11.4-4.8-17.5-5.9-60.6 8.8-115.1 48.5-161.7 45.4-53.3 103.7-79.2 173.4-77.3 65.7 1.8 120.7 28.7 163.2 77.8 36.2 41.9 54.1 91.6 56.8 147 .2 4.7.3 9.3.3 14v261.3c0 13.5-7.7 22.5-19.8 23.5-12.3 1-22.3-7.1-24.4-20-.6-3.6-.5-7.3-.5-11V401.9c0-4.3 0-8.6 0-13z"/>
                  <path d="M336.5 516.9c-2.4 22.2 1.8 43.6 9.6 64.2 15.3 40.3 42.7 69.8 81.5 88.6 59.3 28.7 125.5 18.8 173.5-26.3 6.9-6.5 13.1-13.6 19.1-21 7.9-9.8 19.4-12 29.2-5.7 10.1 6.5 13.1 18.4 7.2 29.5-3.2 6-7.7 11.2-12.2 16.2-56.9 62.9-152.2 84.3-228.9 51.5-75.9-32.5-120.7-90.9-132.3-172.5-1.7-11.8-1.5-23.8-2.1-35.7-.4-8.2 3.3-14.5 10.8-17.9 7.7-3.5 15-2.2 21.2 3.5 4.4 4.1 6.4 9.4 6.7 15.3.4 8.8 1.1 17.5 2.3 26.1-.1-4.5-.2-9.1-.3-13.6 0-1.2 0-2.3.7-3.2z"/>
                  <path d="M535.9 465.9c-14.7-3.1-29.3-6.3-44-9.5-16.1-3.5-32.1-7.2-48.2-10.6-5.6-1.2-9.1-4.4-10.8-9.7-1.8-5.6-.4-10.6 3.6-14.6 4.5-4.6 10.3-5.8 16.4-4.5 31.6 6.8 63.1 13.8 94.7 20.5 9.3 2 14.8 8.7 14.5 17.4-.4 11-6.2 18.7-16.6 21.2-12.5 3-25.1 5.6-37.7 8.2-29.2 6.1-58.4 12.1-87.7 18-7.7 1.6-15 .3-20.1-6.2-5.1-6.4-5.5-13.5-1.3-20.5 3.5-5.8 9-8.2 15.6-9.2.6-.1 1.2-.1 1.8-.2 39.8-8.4 79.6-16.8 119.3-25.2.2 8.2.3 16.5.5 24.9z"/>
                  <path d="M598.8 325.1c.1 6.7-2.2 12.2-7.7 16.2-5.6 4-11.7 4.6-18 1.6-6.2-3-10-8-11.1-14.8-2.9-17.4-10.1-32.6-22.9-44.6-16.9-15.8-37.2-22.8-60-22.2-12.2.3-22.1-7.8-23.3-18.8-1.3-11.4 5.6-21.2 17-23.7 4.3-.9 8.8-1 13.2-.4 47.8 6.4 84.4 31 107.2 73.2 7.7 14.3 11.5 29.9 12.8 46.1-.1-4.2-.2-8.4-.3-12.6z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/LightningNewsX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="X (Twitter)"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Lightningnews1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="YouTube"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/lightning-news/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/lightningnews1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { FloatingActions } from "../components/floating-actions";
import { ScrollProgress } from "../components/scroll-progress";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Daze Antony — Legal Advisor & Global Entrepreneur" },
      { name: "description", content: "Daze Antony (Bindu Antony) — Founder & CEO of D&R Goldenwings International. Legal advisory, international trade, corporate strategy, and business consultancy." },
      { name: "author", content: "Daze Antony" },
      { property: "og:title", content: "Daze Antony — Legal Advisor & Global Entrepreneur" },
      { property: "og:description", content: "Daze Antony (Bindu Antony) — Founder & CEO of D&R Goldenwings International. Legal advisory, international trade, corporate strategy, and business consultancy." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Daze Antony" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Daze Antony — Legal Advisor & Global Entrepreneur" },
      { name: "twitter:description", content: "Daze Antony (Bindu Antony) — Founder & CEO of D&R Goldenwings International. Legal advisory, international trade, corporate strategy, and business consultancy." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/841d90a5-722b-46f6-8eef-14839211d39a/id-preview-feccce67--68a14922-ffa1-46a0-9d4c-86efdd370bcd.lovable.app-1781901240275.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/841d90a5-722b-46f6-8eef-14839211d39a/id-preview-feccce67--68a14922-ffa1-46a0-9d4c-86efdd370bcd.lovable.app-1781901240275.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Cormorant:ital,wght@1,400&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "D&R Goldenwings International Trading Co.",
          url: "https://dazeanteny.lovable.app",
          founder: { "@type": "Person", name: "Daze Antony" },
          sameAs: ["http://dandrinternational.com/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <SiteHeader />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </QueryClientProvider>
  );
}

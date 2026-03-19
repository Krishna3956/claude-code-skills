import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { MarketingThemeProvider } from "@/components/marketing/MarketingThemeProvider";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingThemeProvider>
      <div className="marketing-shell">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--mk-bg-strong)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--mk-text)]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </MarketingThemeProvider>
  );
}

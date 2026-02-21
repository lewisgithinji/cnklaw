import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { QuickContactFAB } from "@/components/ui/QuickContactFAB";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1 w-full relative">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <QuickContactFAB />
    </div>
  );
}

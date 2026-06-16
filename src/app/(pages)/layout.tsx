import type { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Navigation } from "@/components/layout/header-navigation";

const navigationData: Navigation[] = [
  {
    titleKey: "home",
    href: "/",
  },
  {
    titleKey: "agenda",
    items: [
      {
        titleKey: "speakers",
        href: "/speakers",
      },
      {
        titleKey: "keynotes",
        href: "/#benefits",
      },
    ],
  },
  {
    titleKey: "sponsors",
    href: "/#sponsors",
  },
  {
    titleKey: "team",
    href: "/team",
  },
  {
    titleKey: "codeOfConduct",
    href: "/code-of-conduct",
  },
];

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-col bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--border)40%,transparent)0,color-mix(in_oklab,var(--border)40%,transparent)1px,transparent_0,transparent_50%)] bg-size-[12px_12px] bg-fixed">
      <div className="mx-auto h-full w-full max-w-336 px-4 sm:px-6 lg:px-8">
        <div className="bg-background h-full w-full max-w-7xl border-x">
          {/* Header Section */}
          <Header navigationData={navigationData} />

          {/* Main Content */}
          <main className="flex flex-1 flex-col *:scroll-mt-16">
            {children}
          </main>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PagesLayout;

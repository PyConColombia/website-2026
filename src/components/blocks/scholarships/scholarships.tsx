"use client";

import { ArrowRightIcon, ClipboardListIcon } from "lucide-react";
import Link from "next/link";

import { scholarshipsByLocale } from "@/assets/data/scholarships";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useLanguage, useTranslations } from "@/contexts/language-context";

const Scholarships = () => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const scholarships = scholarshipsByLocale[locale];
  const defaultOpenSections = scholarships.sections.map(
    (section) => section.id,
  );

  return (
    <>
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-12 lg:px-8">
          <div className="space-y-4 text-center">
            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="bg-background text-sm font-normal"
              >
                {scholarships.eyebrow}
              </Badge>
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.2}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl lg:text-5xl">
                {scholarships.title}
              </h1>
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.4}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                {scholarships.description}
              </p>
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.6}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-center gap-4">
                <PrimaryFlowButton size="lg" asChild>
                  <Link href="#program">
                    {t("blocks.scholarshipsUi.readProgram")}
                    <ArrowRightIcon />
                  </Link>
                </PrimaryFlowButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg text-base shadow-none"
                  asChild
                >
                  <Link
                    href={
                      scholarships.intro.formUrl ??
                      "mailto:scholarships@pycon.co"
                    }
                    target={scholarships.intro.formUrl ? "_blank" : undefined}
                    rel={
                      scholarships.intro.formUrl
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {t("blocks.scholarshipsUi.contact")}
                    <ClipboardListIcon />
                  </Link>
                </Button>
              </div>
            </MotionPreset>
          </div>
        </div>
      </section>

      <section
        id="program"
        className="px-4 pb-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[18rem_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-lg border bg-card p-5">
              <p className="mb-4 text-sm font-medium uppercase text-primary">
                {t("blocks.scholarshipsUi.onThisPage")}
              </p>
              <nav className="space-y-2">
                <Link
                  href="#overview"
                  className="text-muted-foreground hover:text-foreground block text-sm transition-colors"
                >
                  {t("blocks.scholarshipsUi.overview")}
                </Link>
                {scholarships.sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-muted-foreground hover:text-foreground block text-sm transition-colors"
                  >
                    {section.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <article className="space-y-8">
            <div
              id="overview"
              className="scroll-mt-24 rounded-lg border bg-card px-5 py-6 shadow-sm sm:px-8 sm:py-10 lg:px-12"
            >
              <div className="text-muted-foreground space-y-4 text-base leading-7">
                {scholarships.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {scholarships.intro.formUrl ? (
                  <p>{scholarships.intro.applyLead}</p>
                ) : (
                  <p>
                    {scholarships.intro.applyLead}{" "}
                    <span className="text-foreground font-medium">
                      {scholarships.intro.formFallback}
                    </span>
                  </p>
                )}
              </div>

              {scholarships.intro.formUrl ? (
                <div className="mt-6">
                  <PrimaryFlowButton size="lg" asChild>
                    <Link
                      href={scholarships.intro.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {scholarships.intro.formLabel}
                      <ClipboardListIcon />
                    </Link>
                  </PrimaryFlowButton>
                </div>
              ) : null}
            </div>

            <div className="rounded-lg border bg-card px-5 py-2 shadow-sm sm:px-8 lg:px-12">
              <Accordion
                type="multiple"
                defaultValue={defaultOpenSections}
                className="w-full"
              >
                {scholarships.sections.map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4 pb-6 text-base leading-7">
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.items ? (
                        <ul className="list-disc space-y-2 pl-5">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Scholarships;

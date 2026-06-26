"use client";

import { ArrowLeftIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import { XSocialIcon } from "@/components/icons/x-social-icon";
import { Button } from "@/components/ui/button";
import { MotionPreset } from "@/components/ui/motion-preset";
import PersonImage from "@/components/ui/person-image";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/contexts/language-context";
import { getTeamMemberBySlug } from "@/lib/team";

type TeamMemberDetailProps = {
  slug: string;
};

const formatRole = (role: string) => {
  const normalizedRole = role.toLocaleLowerCase();

  return normalizedRole.charAt(0).toLocaleUpperCase() + normalizedRole.slice(1);
};

const TeamMemberDetail = ({ slug }: TeamMemberDetailProps) => {
  const { t } = useTranslations();
  const member = useMemo(() => getTeamMemberBySlug(slug), [slug]);

  if (!member) {
    return null;
  }

  const localizedVolunteerRole = t(
    `blocks.team.volunteers.roles.${member.slug}`,
  );
  const displayRole =
    member.kind === "volunteer" &&
    localizedVolunteerRole !== `blocks.team.volunteers.roles.${member.slug}`
      ? localizedVolunteerRole
      : formatRole(member.role);

  return (
    <section className="overflow-hidden py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="gap-2 px-0">
            <Link href="/team">
              <ArrowLeftIcon className="size-4" />
              {t("blocks.team.detail.back")}
            </Link>
          </Button>
        </MotionPreset>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border-border/60 overflow-hidden rounded-[18px] border p-4 shadow-xs">
              <PersonImage
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                sizes="(max-width: 1024px) 100vw, 360px"
                className="aspect-square w-full rounded-[14px] object-cover"
              />
            </div>
          </MotionPreset>

          <div className="space-y-8">
            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.1}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <p className="text-primary text-sm font-medium uppercase">
                  {member.kind === "volunteer"
                    ? t("blocks.team.volunteers.title")
                    : t("blocks.team.eyebrow")}
                </p>
                <h1 className="text-3xl font-semibold md:text-4xl">
                  {member.name}
                </h1>
                <p className="text-muted-foreground text-xl">{displayRole}</p>
              </div>

              <div className="flex items-center gap-3">
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <LinkedinIcon className="size-5 shrink-0" />
                  </a>
                ) : null}
                {member.github ? (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <GithubIcon className="size-5 shrink-0" />
                  </a>
                ) : null}
                {member.x ? (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} X`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <XSocialIcon className="size-5 shrink-0" />
                  </a>
                ) : null}
              </div>
            </MotionPreset>

            <Separator />

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.2}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-semibold">
                {t("blocks.team.detail.about")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("blocks.team.cardDescription")}
              </p>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;

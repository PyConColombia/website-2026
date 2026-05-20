"use client";

import { GithubIcon, LinkedinIcon, XIcon } from "lucide-react";

import Image from "next/image";

import { type TeamMember, teamMembers } from "@/assets/data/team";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";
import { assetPath } from "@/lib/utils";

const socialButtonClassName =
  "bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 size-8";

const formatRole = (role: string) => {
  const normalizedRole = role.toLocaleLowerCase();

  return normalizedRole.charAt(0).toLocaleUpperCase() + normalizedRole.slice(1);
};

const TeamMemberSocialLinks = ({ member }: { member: TeamMember }) => (
  <div className="flex items-center gap-3">
    {member.linkedin ? (
      <Button size="icon" asChild className={socialButtonClassName}>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
        >
          <LinkedinIcon className="size-4" />
        </a>
      </Button>
    ) : null}
    {member.github ? (
      <Button size="icon" asChild className={socialButtonClassName}>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} GitHub`}
        >
          <GithubIcon className="size-4" />
        </a>
      </Button>
    ) : null}
    {member.x ? (
      <Button size="icon" asChild className={socialButtonClassName}>
        <a
          href={member.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} X`}
        >
          <XIcon className="size-4" />
        </a>
      </Button>
    ) : null}
  </div>
);

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const hasSocial = Boolean(member.linkedin || member.github || member.x);

  return (
    <Card className="group hover:border-primary/60 h-full gap-0 overflow-hidden rounded-sm border-2 py-0 shadow-none transition-colors duration-300">
      <CardContent className="overflow-hidden px-0">
        <div className="overflow-hidden">
          <Image
            src={assetPath(member.image)}
            alt={member.name}
            width={400}
            height={304}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="mx-auto h-76 w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center gap-1 p-5">
          <div className="grow">
            <CardTitle className="text-lg font-semibold">
              {member.name}
            </CardTitle>
            <p className="text-muted-foreground">{formatRole(member.role)}</p>
          </div>
          {hasSocial ? <TeamMemberSocialLinks member={member} /> : null}
        </div>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  const { t } = useTranslations();

  return (
    <section id="team" className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionPreset
          fade
          slide={{ direction: "down", offset: 50 }}
          blur
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 space-y-4 text-center sm:mb-16 lg:mb-24"
        >
          <p className="text-primary text-sm font-medium uppercase">
            {t("blocks.team.eyebrow")}
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            {t("blocks.team.title")}
          </h2>
          <p className="text-muted-foreground text-xl">
            {t("blocks.team.subtitle")}
          </p>
        </MotionPreset>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 2xl:gap-24">
          {teamMembers.map((member, index) => (
            <MotionPreset
              key={`${member.name}-${member.image}`}
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.1 + index * 0.08}
              transition={{ duration: 0.5 }}
              className="h-full w-full md:[&:nth-child(3n+1):last-child]:col-start-2"
            >
              <TeamMemberCard member={member} />
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

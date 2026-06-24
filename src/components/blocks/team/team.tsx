"use client";

import { GithubIcon, LinkedinIcon } from "lucide-react";

import {
  type TeamMember,
  teamMembers,
  type VolunteerMember,
  volunteerMembers,
} from "@/assets/data/team";
import { XSocialIcon } from "@/components/icons/x-social-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MotionPreset } from "@/components/ui/motion-preset";
import PersonImage from "@/components/ui/person-image";
import { useTranslations } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

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
          <XSocialIcon className="size-4" />
        </a>
      </Button>
    ) : null}
  </div>
);

const TeamMemberCard = ({
  member,
  role,
}: {
  member: TeamMember;
  role?: string;
}) => {
  const hasSocial = Boolean(member.linkedin || member.github || member.x);
  const displayRole = role ?? formatRole(member.role);

  return (
    <Card className="group hover:border-primary/60 h-full gap-0 overflow-hidden rounded-sm border-2 py-0 shadow-none transition-colors duration-300">
      <CardContent className="overflow-hidden px-0">
        <div className="overflow-hidden">
          <PersonImage
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="mx-auto aspect-square h-76 w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center gap-1 p-5">
          <div className="grow">
            <CardTitle className="text-lg font-semibold">
              {member.name}
            </CardTitle>
            <p className="text-muted-foreground">{displayRole}</p>
          </div>
          {hasSocial ? <TeamMemberSocialLinks member={member} /> : null}
        </div>
      </CardContent>
    </Card>
  );
};

const TeamMemberGrid = ({
  members,
  getRole,
}: {
  members: TeamMember[];
  getRole?: (member: TeamMember, index: number) => string | undefined;
}) => {
  const lastRowCardCount = members.length % 3;
  const firstLastRowIndex = members.length - lastRowCardCount;

  const getCenteredRowClassName = (index: number) => {
    if (lastRowCardCount === 1 && index === firstLastRowIndex) {
      return "md:col-start-3";
    }

    if (lastRowCardCount === 2 && index === firstLastRowIndex) {
      return "md:col-start-2";
    }
  };

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-6 md:gap-12 lg:gap-16 2xl:gap-24">
      {members.map((member, index) => (
        <MotionPreset
          key={`${member.name}-${member.image}`}
          fade
          blur
          slide={{ direction: "up", offset: 50 }}
          delay={0.1 + index * 0.08}
          inView={false}
          transition={{ duration: 0.5 }}
          className={cn(
            "h-full w-full md:col-span-2",
            getCenteredRowClassName(index),
          )}
        >
          <TeamMemberCard member={member} role={getRole?.(member, index)} />
        </MotionPreset>
      ))}
    </div>
  );
};

const Team = () => {
  const { t } = useTranslations();

  const getVolunteerRole = (member: VolunteerMember) => {
    const localizedRole = t(`blocks.team.volunteers.roles.${member.slug}`);

    return localizedRole === `blocks.team.volunteers.roles.${member.slug}`
      ? formatRole(member.role)
      : localizedRole;
  };

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

        <TeamMemberGrid members={teamMembers} />

        {volunteerMembers.length > 0 ? (
          <div className="mt-16 space-y-10 sm:mt-20 lg:mt-24">
            <MotionPreset
              fade
              slide={{ direction: "down", offset: 40 }}
              blur
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h3 className="text-2xl font-semibold md:text-3xl">
                {t("blocks.team.volunteers.title")}
              </h3>
            </MotionPreset>

            <TeamMemberGrid
              members={volunteerMembers}
              getRole={(member) => getVolunteerRole(member as VolunteerMember)}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Team;

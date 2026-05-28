"use client";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { XSocialIcon } from "@/components/icons/x-social-icon";
import { useTranslations } from "@/contexts/language-context";
import { assetPath } from "@/lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socialLinks: SocialLink[] = [
  {
    label: "X",
    href: "https://x.com/pyconcolombia",
    icon: XSocialIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/pyconcolombia",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pyconcolombia/",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pycon-colombia/",
    icon: LinkedinIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/pyconcolombia",
    icon: YoutubeIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/pyconcolombia",
    icon: GithubIcon,
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VbD4Fju90x2nq0jHYL03",
    icon: WhatsAppIcon,
  },
];

const Footer = () => {
  const { t } = useTranslations();
  const year = new Date().getFullYear();

  const legalLinks = [
    {
      label: t("footer.codeOfConduct"),
      href: "/code-of-conduct",
    },
    {
      label: t("footer.scholarships"),
      href: "/scholarships",
    },
  ];

  const footerLinks = [
    {
      label: t("footer.home"),
      href: "/#pycon-hero",
    },
    {
      label: t("footer.keynoteSpeakers"),
      href: "/#benefits",
    },
    {
      label: t("footer.gallery"),
      href: "/#gallery",
    },
    {
      label: t("footer.team"),
      href: "/team",
    },
  ];

  return (
    <footer className="bg-[#0F172B] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:py-20">
        <div className="max-w-2xl space-y-6">
          <Link href="/#pycon-hero" className="inline-flex items-center gap-3">
            <span className="size-10 overflow-hidden rounded-full bg-white ring-2 ring-white/25">
              <Image
                src={assetPath("/favicon/apple-touch-icon.png")}
                alt={t("blocks.headerUi.brandAlt")}
                width={40}
                height={40}
                className="size-full object-contain"
              />
            </span>
            <span
              className="text-2xl tracking-wide text-white"
              style={{ fontFamily: "var(--font-button)" }}
            >
              PYCON COLOMBIA 2026
            </span>
          </Link>

          <p className="max-w-xl text-base leading-7 text-white/75">
            {t("footer.descriptionLead")}
            <br />
            {t("footer.descriptionJoin")}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/12"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              {t("footer.legal")}
            </h2>
            <ul className="space-y-3 text-white/70">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              {t("footer.contact")}
            </h2>
            <Link
              href="mailto:Hello@pycon.co"
              className="block text-white/70 transition-colors hover:text-white"
            >
              Hello@pycon.co
            </Link>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              {t("footer.links")}
            </h2>
            <ul className="space-y-3 text-white/70">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl justify-center px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/60">
            {t("footer.copyright").replace("{year}", String(year))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

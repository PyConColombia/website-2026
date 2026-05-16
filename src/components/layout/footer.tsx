"use client";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "@/contexts/language-context";
import { assetPath } from "@/lib/utils";

const socialLinks = [
  {
    label: "X",
    href: "https://twitter.com/pyconcolombia",
    icon: XIcon,
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
    label: "YouTube",
    href: "https://www.youtube.com/pyconcolombia",
    icon: YoutubeIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/pyconcolombia",
    icon: GithubIcon,
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

"use client";

import { ChevronLeftIcon } from "lucide-react";

import Link from "next/link";
import ResetPasswordForm from "@/components/auth/reset-password/reset-password-form";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/contexts/language-context";

const ResetPassword = () => {
  const { t } = useTranslations();
  const p = (key: string) => t(`blocks.auth.resetPage.${key}`);

  return (
    <div className="flex flex-col gap-6">
      <Link href="/">
        <Logo />
      </Link>

      <div>
        <h1 className="mb-2 text-2xl font-semibold">{p("title")}</h1>
        <p className="text-muted-foreground">{p("subtitle")}</p>
      </div>

      <div className="space-y-3">
        <ResetPasswordForm />

        <Button asChild variant="ghost" className="group w-full">
          <Link href="/login">
            <ChevronLeftIcon className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            <p>{p("backToLogin")}</p>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;

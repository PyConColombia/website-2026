"use client";

import Link from "next/link";
import RegisterForm from "@/components/auth/register/register-form";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/contexts/language-context";

const Register = () => {
  const { t } = useTranslations();
  const p = (key: string) => t(`blocks.auth.registerPage.${key}`);

  return (
    <div className="flex flex-col gap-6">
      <Link href="/">
        <Logo />
      </Link>

      <div>
        <h1 className="mb-2 text-2xl font-semibold">{p("title")}</h1>
        <p className="text-muted-foreground">{p("subtitle")}</p>
      </div>

      <RegisterForm />

      <div className="space-y-4">
        <p className="text-muted-foreground text-center">
          {p("footerPrefix")}{" "}
          <Link href="/login" className="text-foreground hover:underline">
            {p("footerLink")}
          </Link>
        </p>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <p>{p("orLower")}</p>
          <Separator className="flex-1" />
        </div>

        <Button variant="ghost" className="w-full" asChild>
          <Link href="#">{p("google")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default Register;

"use client";

import Link from "next/link";
import LoginForm from "@/components/auth/login/login-form";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/contexts/language-context";

const Login = () => {
  const { t } = useTranslations();
  const p = (key: string) => t(`blocks.auth.loginPage.${key}`);

  return (
    <div className="flex flex-col gap-6">
      <Link href="/">
        <Logo />
      </Link>

      <div>
        <h1 className="mb-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          {p("title")}
        </h1>
        <p className="text-muted-foreground">{p("subtitle")}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="grow" asChild>
          <Link href="#">{p("google")}</Link>
        </Button>
        <Button variant="outline" className="grow" asChild>
          <Link href="#">{p("facebook")}</Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Separator className="flex-1" />
        <p>{p("or")}</p>
        <Separator className="flex-1" />
      </div>

      <div className="space-y-6">
        <LoginForm />

        <p className="text-muted-foreground text-center">
          {p("footerPrefix")}{" "}
          <Link href="/register" className="text-foreground hover:underline">
            {p("footerLink")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

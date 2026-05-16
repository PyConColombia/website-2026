"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "@/contexts/language-context";

const RegisterForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const router = useRouter();
  const { t } = useTranslations();
  const f = (key: string) => t(`blocks.auth.registerForm.${key}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="username">
          {f("usernameLabel")}
        </Label>
        <Input
          type="text"
          id="username"
          placeholder={f("usernamePlaceholder")}
        />
      </div>

      <div className="space-y-1">
        <Label className="leading-5" htmlFor="userEmail">
          {f("emailLabel")}
        </Label>
        <Input
          type="email"
          id="userEmail"
          placeholder={f("emailPlaceholder")}
        />
      </div>

      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="password">
          {f("passwordLabel")}
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="••••••••••••••••"
            className="pr-9"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPasswordVisible((prevState) => !prevState)}
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">
              {isPasswordVisible ? f("hidePassword") : f("showPassword")}
            </span>
          </Button>
        </div>
      </div>

      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="confirmPassword">
          {f("confirmPasswordLabel")}
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="••••••••••••••••"
            className="pr-9"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setIsConfirmPasswordVisible((prevState) => !prevState)
            }
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          >
            {isConfirmPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">
              {isConfirmPasswordVisible ? f("hidePassword") : f("showPassword")}
            </span>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox id="rememberMe" className="size-6" />
        <Label htmlFor="rememberMe">{f("privacyLabel")}</Label>
      </div>

      <PrimaryFlowButton
        className="w-full *:w-full [&>button]:after:-inset-55"
        type="submit"
      >
        {f("submit")}
      </PrimaryFlowButton>
    </form>
  );
};

export default RegisterForm;

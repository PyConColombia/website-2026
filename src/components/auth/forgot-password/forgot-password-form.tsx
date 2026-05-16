"use client";

import { useRouter } from "next/navigation";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "@/contexts/language-context";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const { t } = useTranslations();
  const f = (key: string) => t(`blocks.auth.forgotForm.${key}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/reset-password");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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

      <PrimaryFlowButton
        className="w-full *:w-full [&>button]:after:-inset-55"
        type="submit"
      >
        {f("submit")}
      </PrimaryFlowButton>
    </form>
  );
};

export default ForgotPasswordForm;

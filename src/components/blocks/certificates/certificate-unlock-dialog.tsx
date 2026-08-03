"use client";

import { KeyRoundIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useState, useTransition } from "react";

import { unlockCertificate } from "@/app/(pages)/certificates/[id]/actions";
import CertificateKeyInvalid from "@/components/blocks/certificates/certificate-key-invalid";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { Input } from "@/components/ui/input";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";

type CertificateUnlockDialogProps = {
  certificateId: string;
};

const CertificateUnlockDialog = ({
  certificateId,
}: CertificateUnlockDialogProps) => {
  const { t } = useTranslations();
  const router = useRouter();
  const [key, setKey] = useState("");
  const [isPending, startTransition] = useTransition();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <CertificateKeyInvalid />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(async () => {
      const result = await unlockCertificate(certificateId, key);

      if (result === "ok") {
        router.refresh();
        return;
      }

      setFailed(true);
    });
  };

  return (
    <section className="overflow-hidden py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-lg space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="bg-background text-sm font-normal"
          >
            {t("blocks.certificates.eyebrow")}
          </Badge>
        </MotionPreset>

        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 50 }}
          delay={0.15}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold md:text-4xl">
            {t("blocks.certificates.unlockTitle")}
          </h1>
        </MotionPreset>

        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 50 }}
          delay={0.3}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-lg">
            {t("blocks.certificates.unlockSubtitle")}
          </p>
        </MotionPreset>
      </div>

      <Dialog open modal>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-md"
          onPointerDownOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
          onInteractOutside={(event) => event.preventDefault()}
        >
          <DialogHeader className="gap-2 p-6 pb-0 text-center sm:text-center">
            <DialogTitle>{t("blocks.certificates.unlockTitle")}</DialogTitle>
            <DialogDescription>
              {t("blocks.certificates.unlockSubtitle")}
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 p-6 pt-4"
          >
            <label htmlFor="certificate-key" className="sr-only">
              {t("blocks.certificates.unlockLabel")}
            </label>
            <Input
              id="certificate-key"
              name="key"
              type="password"
              autoComplete="off"
              autoFocus
              required
              value={key}
              disabled={isPending}
              onChange={(event) => setKey(event.target.value)}
              placeholder={t("blocks.certificates.unlockPlaceholder")}
              className="h-11 text-base"
            />
            <PrimaryFlowButton
              size="lg"
              type="submit"
              className="w-full *:w-full [&>button]:after:-inset-55"
              disabled={isPending || !key.trim()}
            >
              <KeyRoundIcon />
              {isPending
                ? t("blocks.certificates.unlockSubmitting")
                : t("blocks.certificates.unlockSubmit")}
            </PrimaryFlowButton>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificateUnlockDialog;

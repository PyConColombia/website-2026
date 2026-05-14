import type { Metadata } from "next";

import ResetPassword from "@/components/auth/reset-password/reset-password";
import { getSiteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Reset Password",
  robots: "noindex,nofollow",
  alternates: {
    canonical: `${getSiteUrl()}/reset-password`,
  },
};

const ResetPasswordPage = () => {
  return <ResetPassword />;
};

export default ResetPasswordPage;

import type { Metadata } from "next";

import Register from "@/components/auth/register/register";
import { getSiteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Register",
  robots: "noindex,nofollow",
  alternates: {
    canonical: `${getSiteUrl()}/register`,
  },
};

const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;

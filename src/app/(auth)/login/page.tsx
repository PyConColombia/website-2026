import type { Metadata } from "next";

import Login from "@/components/auth/login/login";
import { getSiteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Login",
  robots: "noindex,nofollow",
  alternates: {
    canonical: `${getSiteUrl()}/login`,
  },
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;

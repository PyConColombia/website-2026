import type { Metadata } from "next";

import CodeOfConduct from "@/components/blocks/code-of-conduct/code-of-conduct";
import { getSiteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "Read the PyCon Colombia Code of Conduct, enforcement procedure, and health and safety policy.",
  alternates: {
    canonical: `${getSiteUrl()}/code-of-conduct`,
  },
};

const CodeOfConductPage = () => {
  return <CodeOfConduct />;
};

export default CodeOfConductPage;

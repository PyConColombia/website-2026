import Image from "next/image";

import { assetPath, cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="bg-primary ring-primary/30 size-8 overflow-hidden rounded-full ring-2">
        <Image
          src={assetPath("/favicon/apple-touch-icon.png")}
          alt="PyCon Colombia"
          width={32}
          height={32}
          className="size-full object-contain"
        />
      </div>
      <span className="text-primary [font-family:var(--font-button)] text-xl tracking-wide">
        PYCON COLOMBIA 2026
      </span>
    </div>
  );
};

export default Logo;

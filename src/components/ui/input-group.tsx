import type * as React from "react";

import { cn } from "@/lib/utils";

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "border-input bg-background flex w-full items-center overflow-hidden rounded-md border shadow-xs",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & {
  align?: "inline-start" | "inline-end";
}) {
  return (
    <div
      data-slot="input-group-addon"
      className={cn(
        "text-muted-foreground flex shrink-0 items-center px-3 [&_svg:not([class*='size-'])]:size-4",
        align === "inline-end" && "ml-auto border-l pl-2",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input-group-input"
      className={cn(
        "placeholder:text-muted-foreground h-9 min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { InputGroup, InputGroupAddon, InputGroupInput };

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import type { ReactNode } from "react";

interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx("font-sans text-gray-100", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}

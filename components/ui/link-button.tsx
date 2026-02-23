"use client";

import { LiquidButton } from "@/components/ui/liquid-glass-button";

interface LinkButtonProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl" | "xxl" | "icon";
}

export function LinkButton({
  href,
  external = false,
  children,
  className,
  size = "xl",
}: LinkButtonProps) {
  const handleClick = () => {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

  return (
    <LiquidButton size={size} onClick={handleClick} className={className}>
      {children}
    </LiquidButton>
  );
}

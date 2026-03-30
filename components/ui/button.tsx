import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { APP } from "@/lib/App";

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "outlineBlue"
  | "secondary"
  | "blue"
  | "ghost"
  | "link"
  | "linkBlue";

type ButtonSize = "default" | "sm" | "lg" | "icon";

// ─── Class Maps (all styles live in globals.css) ──────────────────────────────

const variantClass: Record<ButtonVariant, string> = {
  default: "btn-default",
  destructive: "btn-destructive",
  outline: "btn-outline",
  outlineBlue: "btn-outline-blue",
  secondary: "btn-secondary",
  blue: "btn-blue",
  ghost: "btn-ghost",
  link: "btn-link",
  linkBlue: "btn-link-blue",
};

const sizeClass: Record<ButtonSize, string> = {
  default: "btn-size-default",
  sm: "btn-size-sm",
  lg: "btn-size-lg",
  icon: "btn-size-icon",
};

// ─── Helper ───────────────────────────────────────────────────────────────────

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn("btn", variantClass[variant], sizeClass[size], className);
}

// ─── Component ────────────────────────────────────────────────────────────────

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  wtsBtn?: boolean;
  callBtn?: boolean;
  storeBtn?: boolean;
};

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  wtsBtn,
  callBtn,
  storeBtn,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const cls = buttonVariants({ variant, size, className });

  if (wtsBtn) {
    return (
      <Link
        aria-label="Contact Us On WhatsApp"
        href={`https://wa.me/${APP.phone}?text=I%20Contact%20You%20For%20Used%20Furniture`}
      >
        <Comp data-slot="button" className={cls} {...props} />
      </Link>
    );
  }

  if (callBtn) {
    return (
      <Link aria-label="Call To Us" href={`tel:${APP.phone}`}>
        <Comp data-slot="button" className={cls} {...props} />
      </Link>
    );
  }

  if (storeBtn) {
    return (
      <Link
        aria-label="Our Used Furniture Store"
        href="https://share.google/iLEgJq3Qt9DduRnRi"
      >
        <Comp data-slot="button" className={cls} {...props} />
      </Link>
    );
  }

  return <Comp data-slot="button" className={cls} {...props} />;
}

export { Button, type ButtonVariant, type ButtonSize };

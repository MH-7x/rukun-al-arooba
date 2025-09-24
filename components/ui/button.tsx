import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { APP } from "@/lib/App";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#C07D53] text-shadow-2xs text-primary-foreground shadow-xs hover:bg-[#C07D53]/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[#C07D53] bg-background shadow-xs hover:bg-[#C07D53]/10 text-[#C07D53]",
        outlineBlue:
          "border border-[#14435a] bg-background shadow-xs hover:bg-[#14435a]/10 text-[#14435a]",
        secondary:
          "bg-secondary text-[#353535] shadow-xs hover:bg-secondary/80",
        blue: "bg-[#144E5A] text-primary-foreground shadow-xs hover:bg-[#144E5A]/90",
        ghost:
          "hover:bg-accent text-[#353535] hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-[#C07D53] underline-offset-4 hover:underline",
        linkBlue: "text-[#14435a] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  wtsBtn,
  callBtn,
  storeBtn,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    wtsBtn?: boolean;
    callBtn?: boolean;
    storeBtn?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  if (wtsBtn) {
    return (
      <Link
        aria-label="Contact Us On WhatsApp"
        href={`https://wa.me/${APP.phone}?text=I%20Contact%20You%20For%20Used%20Furniture`}
      >
        <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </Link>
    );
  }
  if (callBtn) {
    return (
      <Link aria-label="Call To Us" href={`tel:${APP.phone}`}>
        <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </Link>
    );
  }
  if (storeBtn) {
    return (
      <Link
        aria-label="Our Used Furniture Store"
        href={`https://share.google/iLEgJq3Qt9DduRnRi`}
      >
        <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </Link>
    );
  }
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

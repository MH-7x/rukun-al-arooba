import { clsx, type ClassValue } from "clsx"

import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createEncodedUrl = (arabicSlug: string): string => {
  const encodedSlug = encodeURIComponent(arabicSlug);
  return `/${encodedSlug}`;
};
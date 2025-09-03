"use client";

import { toast as sonnerToast, Toaster as SonnerToaster } from "sonner";

export const Toaster = SonnerToaster;
export const useToast = () => {
  return {
    toast: sonnerToast,
  };
};



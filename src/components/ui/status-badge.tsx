import { cn } from "@/lib/utils";

export function Badge({ status }: { status: "Paid" | "Pending" | "Failed" }) {
  const color =
    status === "Paid"
      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
      : status === "Pending"
      ? "bg-amber-500/15 text-amber-700 dark:text-amber-300"
      : "bg-red-500/15 text-red-700 dark:text-red-300";
  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs", color)}>
      {status}
    </span>
  );
}



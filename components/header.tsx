import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="h-16 shrink-0 flex items-center justify-between border-b border-border bg-background px-6">
      <div />
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}

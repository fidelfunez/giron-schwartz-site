import { ViewfinderCorners } from "./ViewfinderFrame";

type Props = {
  className?: string;
  compact?: boolean;
  tagline: string;
};

export function LogoLockup({ className = "", compact, tagline }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ViewfinderCorners className="h-9 w-9 shrink-0 text-[#E9CB97]" />
      <div className="leading-tight">
        <p className="font-[family-name:var(--font-nexa)] text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white">
          Girón & Schwartz
        </p>
        <p
          className={`font-[family-name:var(--font-quincy)] text-[#E9CB97] ${compact ? "text-xs" : "text-sm"}`}
        >
          {tagline}
        </p>
      </div>
    </div>
  );
}

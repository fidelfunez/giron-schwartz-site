import Image from "next/image";

type Props = {
  className?: string;
  compact?: boolean;
};

export function LogoLockup({ className = "", compact }: Props) {
  return (
    <div className={`flex items-center overflow-visible ${className}`}>
      <Image
        src="/photos/logos/giron-schwartz-logo-horizontal-new.webp"
        alt="Girón & Schwartz"
        width={1000}
        height={530}
        priority={compact}
        className={
          compact
            ? "h-10 w-auto origin-left scale-[1.65] transform"
            : "h-14 w-auto"
        }
      />
    </div>
  );
}

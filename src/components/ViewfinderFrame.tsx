type Props = {
  className?: string;
  color?: string;
};

/** Logo-derived corner motif (viewfinder / frame). */
export function ViewfinderCorners({ className = "", color = "currentColor" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 14V4h10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M34 4h10v10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M44 34v10H34"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M14 44H4V34"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ViewfinderHighlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block px-2 py-1 ${className}`}>
      <span
        className="pointer-events-none absolute inset-0 border border-[#E9CB97]/80"
        aria-hidden
      >
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-[#E9CB97]" />
        <span className="absolute right-0 bottom-0 h-3 w-3 border-b border-r border-[#E9CB97]" />
      </span>
      {children}
    </span>
  );
}

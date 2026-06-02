"use client";

import { useEffect, useRef, useState } from "react";

/** One tile in Featured Work — embed or outbound link. */
export type FeaturedWorkEntry =
  | {
      type: "vimeo";
      title: string;
      vimeoId: string;
      vimeoHash?: string;
    }
  | { type: "youtube"; title: string; youtubeId: string }
  /** Shared Drive file — embed uses official `/preview` player (link sharing must allow viewers). */
  | { type: "googleDrive"; title: string; fileId: string }
  | {
      type: "link";
      title: string;
      href: string;
      linkLabel: string;
      /** Public path only, e.g. `/photos/featured/card.webp` — decorative tile background */
      backgroundImage?: string;
    }
  | { type: "pending"; title: string };

function buildVimeoSrc(entry: Extract<FeaturedWorkEntry, { type: "vimeo" }>): string | null {
  const id = entry.vimeoId.trim();
  if (!/^\d{6,12}$/.test(id)) return null;
  const q = new URLSearchParams({
    dnt: "1",
    title: "0",
    byline: "0",
    portrait: "0",
    color: "e9cb97",
  });
  if (entry.vimeoHash?.trim()) q.set("h", entry.vimeoHash.trim());
  return `https://player.vimeo.com/video/${id}?${q.toString()}`;
}

function buildYouTubeSrc(id: string): string | null {
  const v = id.trim();
  if (!/^[a-zA-Z0-9_-]{10,12}$/.test(v)) return null;
  const q = new URLSearchParams({ rel: "0", modestbranding: "1" });
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v)}?${q}`;
}

function buildGoogleDrivePreviewSrc(fileId: string): string | null {
  const id = fileId.trim();
  if (!/^[a-zA-Z0-9_-]{10,100}$/.test(id)) return null;
  return `https://drive.google.com/file/d/${encodeURIComponent(id)}/preview`;
}

function isSafeExternalHref(href: string): boolean {
  try {
    const u = new URL(href);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

/** Allow only same-origin static assets (no `..`, common image extensions). */
function isSafePublicImagePath(src: string): boolean {
  const s = src.trim();
  if (!s.startsWith("/") || s.includes("..")) return false;
  return /\.(png|jpe?g|webp|avif)$/i.test(s);
}

export function FeaturedWorkMediaCard({
  entry,
  pendingLabel,
  newTabHint,
}: {
  entry: FeaturedWorkEntry;
  pendingLabel: string;
  newTabHint: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const embedSrc =
    entry.type === "vimeo"
      ? buildVimeoSrc(entry)
      : entry.type === "youtube"
        ? buildYouTubeSrc(entry.youtubeId)
        : entry.type === "googleDrive"
          ? buildGoogleDrivePreviewSrc(entry.fileId)
          : null;

  useEffect(() => {
    if (!embedSrc) return;
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { root: null, rootMargin: "120px 0px", threshold: 0.01 },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [embedSrc]);

  const showIframe = Boolean(embedSrc && inView);

  const mediaBox = (() => {
    if (entry.type === "pending") {
      return (
        <div className="flex h-full items-center justify-center bg-white/[0.03] px-4 text-center">
          <p className="font-heading text-[0.65rem] font-bold uppercase leading-snug tracking-[0.16em] text-white/40">
            {pendingLabel}
          </p>
        </div>
      );
    }

    if (entry.type === "link") {
      if (!isSafeExternalHref(entry.href)) {
        return (
          <div className="flex h-full items-center justify-center bg-white/[0.03] px-4 text-center text-sm text-white/45">
            Invalid link
          </div>
        );
      }
      const bgSrc = entry.backgroundImage?.trim();
      const showPhoto = Boolean(bgSrc && isSafePublicImagePath(bgSrc));

      return (
        <a
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-full w-full flex-col overflow-hidden px-6 text-center transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9CB97]"
        >
          {showPhoto && bgSrc ? (
            <span className="pointer-events-none absolute inset-0" aria-hidden>
              <img
                src={bgSrc}
                alt=""
                className="h-full w-full object-cover transition duration-300 motion-safe:group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/40 transition duration-300 group-hover:from-black/85 group-hover:via-black/50" />
            </span>
          ) : (
            <span
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] to-white/[0.02] transition group-hover:from-white/[0.1] group-hover:to-white/[0.04]"
              aria-hidden
            />
          )}
          <span className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-3 py-8">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#E9CB97] drop-shadow md:text-sm">
              {entry.linkLabel}
            </span>
            <span className="sr-only">{newTabHint}</span>
            <span
              className="inline-flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/80 drop-shadow"
              aria-hidden
            >
              <span className="opacity-80">↗</span>
              {entry.href.replace(/^https?:\/\//, "").split("/")[0]}
            </span>
          </span>
        </a>
      );
    }

    if (!embedSrc) {
      return (
        <div className="flex h-full items-center justify-center bg-white/[0.03] px-4 text-center">
          <p className="font-heading text-[0.65rem] font-bold uppercase leading-snug tracking-[0.16em] text-white/40">
            {pendingLabel}
          </p>
        </div>
      );
    }

    if (!showIframe) {
      return (
        <div
          className="h-full w-full animate-pulse bg-white/[0.06]"
          aria-hidden
        />
      );
    }

    const allow =
      entry.type === "youtube"
        ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        : entry.type === "googleDrive"
          ? "autoplay; fullscreen"
          : "autoplay; fullscreen; picture-in-picture";

    /** Drive’s /preview player adds a dark top chrome; clip by oversizing + shifting up (cannot style inside iframe). */
    if (entry.type === "googleDrive") {
      return (
        <div className="relative h-full w-full overflow-hidden bg-black">
          <iframe
            src={embedSrc}
            title={entry.title}
            className="absolute inset-x-0 top-0 h-[118%] w-full border-0 -translate-y-[11%]"
            allow={allow}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      );
    }

    return (
      <iframe
        src={embedSrc}
        title={entry.title}
        className="h-full w-full border-0"
        allow={allow}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  })();

  return (
    <figure ref={ref} className="flex min-w-0 flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-black ring-1 ring-white/10">
        {mediaBox}
      </div>
      <figcaption className="mt-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/85 md:text-sm">
        {entry.title}
      </figcaption>
    </figure>
  );
}

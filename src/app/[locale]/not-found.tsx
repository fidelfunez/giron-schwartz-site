import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <p className="font-[family-name:var(--font-quincy)] text-2xl text-white">
        404
      </p>
      <p className="mt-2 font-[family-name:var(--font-sans)] text-white/60">
        Página no encontrada / Page not found
      </p>
      <Link
        href="/"
        className="mt-8 text-sm uppercase tracking-widest text-[#E9CB97] hover:underline"
      >
        Inicio / Home
      </Link>
    </div>
  );
}

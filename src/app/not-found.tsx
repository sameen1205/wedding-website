import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#16060B] text-ivory px-4 text-center">
      <h2 className="font-serif text-5xl sm:text-6xl text-gold-metallic mb-4">404</h2>
      <p className="font-serif text-2xl sm:text-3xl text-amber-200 mb-6">Page Not Found</p>
      <p className="font-sans text-sm text-amber-100/70 max-w-md mb-8">
        The page you are looking for does not exist. Please return to Sameen &amp; Anula&apos;s wedding celebrations.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-metallic via-amber-400 to-gold-antique text-charcoal font-sans text-xs tracking-widest uppercase font-bold hover:shadow-lg hover:shadow-gold/30 transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}


export default function Header() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 top-0 z-50 w-full border-b backdrop-blur md:sticky">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* md-lg screen navigation */}
        <div className="flex items-center justify-center gap-3">
          {/* logo */}
          <img src="logo.svg" alt="Logo" className="w-10" />
        </div>
      </div>
    </header>
  );
}

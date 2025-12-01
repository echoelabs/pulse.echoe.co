import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 py-12 text-black md:px-12">
      <Separator className="mb-12 bg-gray-200" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tighter">pulse</h3>
          <p className="font-mono text-xs text-gray-400">
            © 2025 Echoe Labs
            <br />
            ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex gap-12 font-mono text-sm text-gray-500">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-black">LEGAL</span>
            <a href="#" className="transition-colors hover:text-black">
              PRIVACY
            </a>
            <a href="#" className="transition-colors hover:text-black">
              TERMS
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-black">CONNECT</span>
            <a href="#" className="transition-colors hover:text-black">
              TWITTER
            </a>
            <a href="#" className="transition-colors hover:text-black">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

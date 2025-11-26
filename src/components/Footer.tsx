import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer className="w-full bg-white text-black py-12 px-4 md:px-12">
            <Separator className="mb-12 bg-gray-200" />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                    <h3 className="text-2xl font-bold tracking-tighter mb-2">pulse</h3>
                    <p className="text-xs text-gray-400 font-mono">
                        © 2025 Echoe Labs<br />
                        ALL RIGHTS RESERVED.
                    </p>
                </div>

                <div className="flex gap-12 text-sm font-mono text-gray-500">
                    <div className="flex flex-col gap-2">
                        <span className="text-black font-bold">LEGAL</span>
                        <a href="#" className="hover:text-black transition-colors">PRIVACY</a>
                        <a href="#" className="hover:text-black transition-colors">TERMS</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-black font-bold">CONNECT</span>
                        <a href="#" className="hover:text-black transition-colors">TWITTER</a>
                        <a href="#" className="hover:text-black transition-colors">GITHUB</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white pt-16 pb-24 lg:pb-8 dark:border-gray-800 dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    About Remnika
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Corporate
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Become an Agent
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Support */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Legal & Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Fraud Awareness
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Sitemap
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Accessibility Statement
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                                    Consumer Rights
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Send From */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Send Money From
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🇺🇸</span>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">United States</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🇬🇧</span>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">United Kingdom</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🇨🇦</span>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">Canada</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🇦🇺</span>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">Australia</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🇸🇬</span>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">Singapore</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🇲🇾</span>
                                <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">Malaysia</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us & App */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Follow Us
                        </h3>
                        <div className="flex gap-4">
                            <Link href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#c00101] hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-[#c00101]">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#c00101] hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-[#c00101]">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#c00101] hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-[#c00101]">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#c00101] hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-[#c00101]">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#c00101] hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-[#c00101]">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>

                        <div className="mt-8">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                                Download App
                            </h3>
                            <div className="flex flex-col gap-3">
                                <button className="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-2 text-left text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-gray-900">
                                    <div className="text-2xl"></div>
                                    <div>
                                        <div className="text-[10px] uppercase">Download on the</div>
                                        <div className="text-sm font-bold leading-none">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-2 text-left text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-gray-900">
                                    <div className="text-2xl">▶</div>
                                    <div>
                                        <div className="text-[10px] uppercase">Get it on</div>
                                        <div className="text-sm font-bold leading-none">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-800 md:flex-row">
                    <div className="mb-4 text-center md:mb-0 md:text-left">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Remnika is a product of Klubnika Bytes.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © 2026 Klubnika Bytes. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                            Terms
                        </Link>
                        <Link href="#" className="text-sm text-gray-600 hover:text-[#c00101] dark:text-gray-400 dark:hover:text-red-400">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

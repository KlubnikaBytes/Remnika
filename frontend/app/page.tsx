import Link from 'next/link'
import { ArrowRight, Zap, Shield, CheckCircle, Globe2, MapPin, Building2, Smartphone, CreditCard, Home as HomeIcon, Search, Briefcase, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-red-950">
      {/* Animated Background Elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-rose-400/20 to-red-400/20 blur-3xl animate-[gradient-shift_20s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-red-400/20 to-rose-400/20 blur-3xl animate-[gradient-shift-reverse_25s_ease-in-out_infinite]" />
      </div>

      {/* Header */}
      <header className="relative border-b border-gray-200/50 bg-white/80 shadow-sm backdrop-blur-xl dark:border-gray-800/50 dark:bg-gray-900/80">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#c00101] to-[#8f0101] shadow-lg">
                <Globe2 className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#c00101] to-[#8f0101] bg-clip-text text-transparent">
                Remnika
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden gap-2 border-gray-200 hover:bg-gray-50 hover:text-[#c00101] md:flex dark:border-gray-800 dark:hover:bg-gray-900">
                <Smartphone className="h-4 w-4" />
                Download App
              </Button>
              <Link href="/login">
                <Button variant="ghost" className="hover:bg-[#c00101]/10 dark:hover:bg-[#c00101]/20">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-[#c00101] to-[#8f0101] hover:from-[#a00101] hover:to-[#6f0000] shadow-lg shadow-[#c00101]/50">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative px-4 py-20 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-6 flex justify-center gap-2">
              <Badge variant="secondary" className="gap-1.5 px-4 py-2">
                <Zap className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-semibold">Instant Transfer</span>
              </Badge>
              <Badge variant="secondary" className="gap-1.5 px-4 py-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold">Bank-Level Security</span>
              </Badge>
            </div>

            <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Send Money{' '}
              <span className="bg-gradient-to-r from-[#c00101] via-[#a00101] to-[#8f0101] bg-clip-text text-transparent">
                Worldwide
              </span>
              <br />
              in Minutes
            </h2>

            <p className="mb-12 text-xl text-gray-600 dark:text-gray-400">
              Fast, secure, and transparent international money transfers.
              <br />
              No hidden fees. Best exchange rates guaranteed.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/send-money">
                <Button size="lg" className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#c00101] to-[#8f0101] px-8 py-7 text-lg font-semibold shadow-2xl shadow-[#c00101]/50 transition-all hover:shadow-3xl hover:shadow-[#c00101]/60 sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a00101] to-[#6f0000] opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative z-10 flex items-center gap-2">
                    Send Money Now
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="w-full rounded-2xl border-2 px-8 py-7 text-lg font-semibold sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Remnika */}
        <section className="bg-white py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Remnika</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg transition-transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold">Fast</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Send money in seconds to your loved ones anywhere in the world.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg transition-transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold">Safe</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your transfers are protected by industry-leading security and compliance standards. We’ve successfully processed millions of secure transactions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg transition-transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold">Guaranteed</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enjoy transparent pricing and our 100% satisfaction guarantee — no hidden fees, no surprises.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business / Agent */}
        {/* Business / Agent Section Removed as per digital-only requirement */}

        {/* Ways to Send & Receive */}
        {/* Ways to Send & Receive */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Send */}
              <div>
                <h2 className="mb-8 text-3xl font-bold">Ways to Send Money</h2>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-full bg-red-100 p-3 text-[#c00101]">
                        <Smartphone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold">Mobile App</h3>
                        <p className="text-gray-600 dark:text-gray-400">Send money anytime, anywhere using our top-rated mobile app.</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-full bg-red-100 p-3 text-[#c00101]">
                        <Globe2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold">Website</h3>
                        <p className="text-gray-600 dark:text-gray-400">Send money securely from the comfort of your home via our website.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Receive */}
              <div>
                <h2 className="mb-8 text-3xl font-bold">Ways to Receive Money</h2>
                <div className="space-y-4">
                  {[
                    { icon: Building2, title: 'Bank Account', desc: 'Send and receive money directly to a bank account.', color: 'bg-blue-100 text-blue-600' },
                    { icon: Smartphone, title: 'Mobile Wallet', desc: 'Transfer funds to mobile money or e-wallets within minutes.', color: 'bg-purple-100 text-purple-600' },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 rounded-full p-3 ${item.color}`}>
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work With Us */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#c00101]">More Services</h2>
            <h3 className="mb-8 text-3xl font-bold">Work With Us at Remnika</h3>
            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                At Remnika, powered by Klubnika Bytes, you’ll be doing more than just a job — you’ll be part of a mission.
              </p>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                We believe sending money is personal. Behind every transfer is a family, a dream, or a moment that matters. That’s why we’re committed to fairness, empathy, and respect for every customer we serve.
              </p>
              <p className="mb-8 text-xl font-medium text-gray-900 dark:text-white">
                Join us as we build better financial access for people around the world.
              </p>
              <Button size="lg" className="bg-[#c00101] hover:bg-[#a00101]">
                <Briefcase className="mr-2 h-5 w-5" />
                Find your next career
              </Button>
            </div>
          </div>
        </section>

        {/* Features Split */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden border-0 bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-xl">
                <CardContent className="flex flex-col items-center p-12 text-center">
                  <TrendingUp className="mb-6 h-16 w-16 opacity-80" />
                  <h3 className="mb-4 text-3xl font-bold">Best Exchange Rates</h3>
                  <p className="mb-8 text-lg opacity-80">
                    We offer the most competitive rates in the market, updated in real-time.
                  </p>
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Check Rates
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-0 bg-gradient-to-br from-gray-900 to-black text-white shadow-xl">
                <CardContent className="flex flex-col items-center p-12 text-center">
                  <Search className="mb-6 h-16 w-16 opacity-80" />
                  <h3 className="mb-4 text-3xl font-bold">Track Your Transfer</h3>
                  <p className="mb-8 text-lg opacity-80">
                    Get real-time updates on every transfer you send with Remnika.
                  </p>
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Track a transfer
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Supported Countries */}
        <section className="bg-white py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Send Money From These Countries</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {[
                { flag: '🇺🇸', name: 'United States' },
                { flag: '🇬🇧', name: 'United Kingdom' },
                { flag: '🇲🇾', name: 'Malaysia' },
                { flag: '🇨🇦', name: 'Canada' },
                { flag: '🇸🇬', name: 'Singapore' },
                { flag: '🇦🇺', name: 'Australia' },
              ].map((country) => (
                <div key={country.name} className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 p-6 text-center transition-colors hover:border-[#c00101]/20 hover:bg-[#c00101]/5 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-red-900">
                  <span className="mb-3 text-4xl">{country.flag}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{country.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">Send money from {country.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Gift, Copy, Share2, Users, Coins } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input' // Correct import for Input placeholder

export default function ReferralsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-red-950">
            {/* Header */}
            <header className="relative border-b border-gray-200/50 bg-white/80 shadow-sm backdrop-blur-xl dark:border-gray-800/50 dark:bg-gray-900/80">
                <div className="container mx-auto px-4">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/dashboard">
                            <Button variant="ghost">
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Dashboard
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#c00101] to-[#8f0101] bg-clip-text text-transparent">
                            Invite Friends
                        </h1>
                        <div className="w-24" />
                    </div>
                </div>
            </header>

            <main className="container relative mx-auto px-4 py-12">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-rose-100 p-8 shadow-inner dark:from-red-900/40 dark:to-rose-900/40">
                            <Gift className="h-16 w-16 text-[#c00101] dark:text-red-400" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Give <span className="text-[#c00101]">$20</span>, Get <span className="text-[#8f0101]">$20</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Invite your friends to SendMoney. When they send their first $100, you both get a $20 bonus!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="overflow-hidden border-0 shadow-xl">
                            <CardContent className="p-8">
                                <p className="mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Your Referral Code</p>
                                <div className="mb-6 flex items-center gap-2 rounded-xl bg-gray-50 p-2 dark:bg-gray-800">
                                    <div className="flex-1 text-center font-mono text-2xl font-bold tracking-widest text-gray-900 dark:text-white">
                                        JOHNDOE2026
                                    </div>
                                    <Button variant="outline" className="h-12 w-12 rounded-lg p-0">
                                        <Copy className="h-5 w-5" />
                                    </Button>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-[#c00101] to-[#8f0101] py-6 text-lg font-bold shadow-lg shadow-[#c00101]/25 transition-shadow hover:shadow-[#c00101]/40">
                                    <Share2 className="mr-2 h-5 w-5" />
                                    Share Link
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="border-0 shadow-lg">
                                <CardContent className="flex flex-col items-center p-6 text-center">
                                    <div className="mb-4 rounded-full bg-red-100 p-3 dark:bg-red-900/30">
                                        <Users className="h-6 w-6 text-[#c00101] dark:text-red-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12</h3>
                                    <p className="text-sm text-gray-500">Friends Invited</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card className="border-0 shadow-lg">
                                <CardContent className="flex flex-col items-center p-6 text-center">
                                    <div className="mb-4 rounded-full bg-rose-100 p-3 dark:bg-rose-900/30">
                                        <Coins className="h-6 w-6 text-[#8f0101] dark:text-rose-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$240</h3>
                                    <p className="text-sm text-gray-500">Earned so far</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    )
}

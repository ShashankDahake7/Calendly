import React from "react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Calendar, Clock, Users, ArrowRight, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-blue-50">
            {/* Navigation */}
            <nav className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
                            <Calendar className="h-8 w-8 text-blue-600" />
                            <span className="text-2xl font-bold text-gray-900">Calendly</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Individuals</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Teams</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Enterprise</a>
                            <div className="relative group">
                                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Resources
                                </button>
                            </div>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" asChild className="hover:text-blue-600 transition-colors">
                                <SignInButton />
                            </Button>
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                                <SignUpButton />
                            </Button>
                            <UserButton />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50" />
                <main className="container mx-auto px-4 py-16 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-xl">
                            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                                Easy scheduling
                                <span className="text-blue-600 inline-block hover:scale-105 transition-transform"> ahead</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Streamline your scheduling with our intuitive platform. Connect with people efficiently and focus on what matters most.
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                                    View Demo
                                </Button>
                            </div>
                        </div>

                        {/* Added Illustration */}
                        <div className="hidden lg:block relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-3xl" />
                            <div className="transform hover:scale-105 transition-transform duration-500 relative">
                                {/* SVG goes here */}
                                <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-2xl">
                                    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="20" y="20" width="360" height="260" rx="8" fill="#ffffff" stroke="#e5e7eb" stroke-width="2" />
                                        <rect x="20" y="20" width="360" height="50" rx="8" fill="#f3f4f6" />
                                        <text x="40" y="50" font-family="sans-serif" font-size="16" fill="#1e40af">February 2025</text>
                                        <g transform="translate(35, 90)">
                                            <text x="0" y="0" font-family="sans-serif" font-size="12" fill="#6b7280">Mon</text>
                                            <text x="50" y="0" font-family="sans-serif" font-size="12" fill="#6b7280">Tue</text>
                                            <text x="100" y="0" font-family="sans-serif" font-size="12" fill="#6b7280">Wed</text>
                                            <text x="150" y="0" font-family="sans-serif" font-size="12" fill="#6b7280">Thu</text>
                                            <text x="200" y="0" font-family="sans-serif" font-size="12" fill="#6b7280">Fri</text>
                                            <g transform="translate(0, 30)">
                                                <rect x="0" y="0" width="40" height="30" rx="4" fill="#e5e7eb" />
                                                <text x="15" y="20" font-family="sans-serif" font-size="14" fill="#6b7280">1</text>
                                                <rect x="50" y="0" width="40" height="30" rx="4" fill="#2563eb" />
                                                <text x="65" y="20" font-family="sans-serif" font-size="14" fill="#ffffff">2</text>
                                                <rect x="100" y="0" width="40" height="30" rx="4" fill="#e5e7eb" />
                                                <text x="115" y="20" font-family="sans-serif" font-size="14" fill="#6b7280">3</text>
                                                <rect x="250" y="0" width="90" height="25" rx="4" fill="#dbeafe" />
                                                <text x="270" y="17" font-family="sans-serif" font-size="12" fill="#2563eb">9:00 AM</text>
                                                <rect x="250" y="35" width="90" height="25" rx="4" fill="#dbeafe" />
                                                <text x="270" y="52" font-family="sans-serif" font-size="12" fill="#2563eb">11:00 AM</text>
                                                <rect x="250" y="70" width="90" height="25" rx="4" fill="#dbeafe" />
                                                <text x="270" y="87" font-family="sans-serif" font-size="12" fill="#2563eb">2:00 PM</text>
                                            </g>
                                        </g>
                                        <circle cx="350" cy="35" r="15" fill="#93c5fd" opacity="0.5" />
                                        <circle cx="40" cy="250" r="10" fill="#93c5fd" opacity="0.3" />
                                        <circle cx="370" cy="250" r="12" fill="#93c5fd" opacity="0.4" />
                                    </svg>
                                </svg>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <div className="flex items-center justify-center py-16 bg-white/70 backdrop-blur-md">
                {/* Features Grid */}
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    <div className="p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <Clock className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Easy Scheduling</h3>
                        <p className="text-gray-600 leading-relaxed">Share your link and let others pick available time slots</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <Calendar className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Calendar Sync</h3>
                        <p className="text-gray-600 leading-relaxed">Automatically syncs with your calendar</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <Users className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Team Coordination</h3>
                        <p className="text-gray-600 leading-relaxed">Coordinate with your team seamlessly</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <ArrowRight className="h-10 w-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Instant Bookings</h3>
                        <p className="text-gray-600 leading-relaxed">Get notified instantly when someone books</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-gray-50 to-gray-100 mt-auto border-t">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {/* Logo Column */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center space-x-2 mb-4 hover:scale-105 transition-transform">
                                <Calendar className="h-8 w-8 text-blue-600" />
                                <span className="text-xl font-bold text-gray-900">Calendly</span>
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div>
                            <h3 className="font-semibold mb-4 text-gray-800">About</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Press</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-gray-800">Solutions</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Enterprise</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Teams</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-gray-800">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Developers</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-gray-800">Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Security</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm">© 2024 Calendly. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;
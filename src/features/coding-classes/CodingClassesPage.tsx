'use client';
import Image from "next/image";

export default function CodingClassesPage() {
    return (
        <div className="min-h-screen bg-[#f8f9f6] text-gray-900 font-sans">

            {/* HERO */}
            <section className="relative h-[580px] md:h-[640px] flex items-center overflow-hidden">
                <Image
                    src="/images/coding2.png"
                    alt="Coding Classes in Lucknow"
                    fill
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/60 to-black/10"></div>
                <div className="relative z-10 px-8 md:px-16 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 backdrop-blur-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span className="text-emerald-300 text-xs font-semibold tracking-widest uppercase">HI Labs · Lucknow</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
                        Coding Classes<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                            in Lucknow
                        </span>
                    </h1>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                        HI Labs offers beginner-to-advanced coding classes in Lucknow — structured curriculum, real projects, and a clear path to your first tech job.
                    </p>
                    <button className="px-6 py-3 rounded-full bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition shadow-lg text-sm">
                        Get Started
                    </button>
                </div>
            </section>

            {/* INTRO */}
            <section className="w-full px-6 py-14">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Left card – text */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
                        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4 block">About the Program</span>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 leading-tight">
                            The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-900">Coding Classes for Beginners</span> in Lucknow
                        </h2>
                        <p className="text-gray-700 font-medium leading-relaxed mb-4">
                            Looking for <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-900">programming classes for beginners in Lucknow</strong>? HI Labs is a <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-900">coding training institute in Lucknow</strong> built specifically for people starting from zero — no prior experience needed.
                        </p>
                        <p className="text-gray-700 font-medium leading-relaxed">
                            Our structured approach takes you from basic logic to building real applications, with hands-on projects, mentorship, and a clear path to your first tech role.
                        </p>
                    </div>

                    {/* Right card – image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200 min-h-[280px]">
                        <Image
                            src="/images/coding1.png"
                            alt="Coding classes at HI Labs"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 inset-x-0 p-6">
                            <p className="text-white font-semibold text-base">HI Labs · Lucknow</p>
                            <p className="text-white/70 text-sm font-light mt-0.5">Coding Training Institute</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT YOU'LL LEARN */}
            <section className="max-w-5xl mx-auto px-6 pb-16">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-64 flex-shrink-0">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-3">
                            What You&apos;ll<br />Learn
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            From zero to job-ready — a practical coding curriculum built by HI Labs.
                        </p>
                    </div>
                    <div className="flex-1 divide-y divide-gray-200">
                        {[
                            { title: "Programming Fundamentals", points: ["Logic building and problem solving", "Variables, loops, and functions", "Writing clean, readable code"] },
                            { title: "Web Development", points: ["HTML & CSS for structure and styling", "JavaScript for interactivity", "Responsive design for all devices"] },
                            { title: "Python Programming", points: ["Python syntax and scripting", "Automation and file handling", "Backend basics with Python"] },
                            { title: "Data Structures & Algorithms", points: ["Arrays, stacks, queues, and trees", "Sorting and searching algorithms", "Interview-ready DSA practice"] },
                            { title: "Version Control with Git", points: ["Git commands and workflows", "Branching and merging", "Collaborating on GitHub"] },
                            { title: "Real-World Projects", points: ["Build full projects end-to-end", "Deploy to live environments", "Portfolio-ready work"] },
                        ].map((item, i) => (
                            <div key={i} className="py-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
                                <h3 className="sm:w-52 flex-shrink-0 font-bold text-gray-900 text-base">{item.title}</h3>
                                <ul className="flex-1 space-y-1.5">
                                    {item.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE + IMAGE */}
            <section className="max-w-5xl mx-auto px-6 pb-14">
                <div className="bg-gray-900 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4 block">Why HI Labs</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose HI Labs for Coding?</h2>
                        <ul className="space-y-3.5 text-gray-300 text-sm">
                            {[
                                "Beginner-friendly, structured coding curriculum",
                                "Hands-on coding practice from day one",
                                "Small batches with personal attention",
                                "Learn from working developers, not just teachers",
                                "Internship and placement support after completion",
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1 w-4 h-4 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-64 rounded-xl overflow-hidden ring-1 ring-white/10">
                        <Image
                            src="/images/students-learning.jpg"
                            alt="Students learning to code at HI Labs"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* ROADMAP */}
            <section className="max-w-5xl mx-auto px-6 pb-14">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4 block">Your Journey</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Program Roadmap</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { step: "Foundations", desc: "Logic, syntax & basics" },
                            { step: "Core Skills", desc: "Web, Python & DSA" },
                            { step: "Projects", desc: "Build real applications" },
                            { step: "Placement", desc: "Internship & job support" },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#f8f9f6] border border-gray-200 rounded-xl p-5 text-center hover:border-emerald-300 hover:shadow-sm transition">
                                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center mx-auto mb-3">
                                    {i + 1}
                                </div>
                                <h3 className="text-gray-900 font-bold text-sm mb-1">{item.step}</h3>
                                <p className="text-gray-500 text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="bg-gray-900 py-14 flex flex-col items-center justify-center text-center px-6">
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">HI Labs</span>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Trained by HI Labs. Hired by Industry.
                </h2>
            </section>

        </div>
    );
}

'use client';
import React from "react";
import Image from "next/image";

export default function AICoursePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">

            {/* HERO */}
            <section className="relative h-[580px] md:h-[640px] flex items-center overflow-hidden">
                <Image
                    src="/images/ai-course1.png"
                    alt="AI Course Hero"
                    fill
                    className="object-cover object-center"
                />
                {/* Dark gradient — heavier on the left so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Text — left aligned */}
                <div className="relative z-10 px-8 md:px-16 max-w-xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">HI Labs · Lucknow</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
                        AI Course<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            in Lucknow
                        </span>
                    </h1>

                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                        HI Labs offers a structured AI program combining theory, hands-on projects, and a guaranteed internship to make you industry-ready.
                    </p>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition shadow-lg text-sm">
                            Get Started
                        </button>
                        <button className="px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition text-sm">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* WHAT YOU'LL LEARN */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What You&apos;ll Learn</h2>
                <p className="text-gray-500 mb-10 text-sm">A curriculum built for real-world AI roles.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                        { title: "Python for AI", desc: "Programming foundation with Python libraries used in AI." },
                        { title: "Machine Learning", desc: "Supervised, unsupervised, and reinforcement learning." },
                        { title: "Deep Learning", desc: "Neural networks for complex prediction tasks." },
                        { title: "Natural Language Processing", desc: "Text analysis using modern NLP and transformers." },
                        { title: "Computer Vision", desc: "Image recognition and object detection with CNNs." },
                        { title: "AI Tools & Frameworks", desc: "TensorFlow, PyTorch, and scikit-learn in real projects." },
                    ].map((item, i) => (
                        <div key={i} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="text-gray-900 font-semibold mt-2 mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE + IMAGE */}
            <section className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center border-t border-gray-100">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose HI Labs?</h2>
                    <ul className="space-y-3 text-gray-600 text-sm">
                        {[
                            "Industry-oriented curriculum",
                            "Hands-on projects from day one",
                            "Expert mentorship",
                            "Guaranteed internship opportunity",
                        ].map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="mt-0.5 w-4 h-4 rounded-full bg-gray-900 flex-shrink-0 flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative h-60 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/images/data-analysis-python.jpg"
                        alt="Data Analysis with Python"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ROADMAP */}
            <section className="max-w-5xl mx-auto px-6 py-14 border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Program Roadmap</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Training", "Evaluation", "Internship", "Graduation"].map((step, i) => (
                        <div key={i} className="border border-gray-200 rounded-xl p-5 text-center hover:shadow-sm transition">
                            <p className="text-gray-400 text-xs mb-1">Step {i + 1}</p>
                            <h3 className="text-gray-900 font-semibold">{step}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="bg-black py-14 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Trained by HI Labs. Hired by Industry.
                </h2>
            </section>

        </div>
    );
}

'use client';
import Image from "next/image";

export default function DataScienceCoursePage() {
    return (
        <div className="min-h-screen bg-[#f9f9f7] text-gray-900 font-sans">

            {/* HERO */}
            <section className="relative h-[560px] md:h-[620px] flex items-center overflow-hidden">
                <Image
                    src="/images/data-analysis-python.jpg"
                    alt="Data Science Course in Lucknow"
                    fill
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/10"></div>
                <div className="relative z-10 px-8 md:px-16 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-400/40 bg-violet-400/10 backdrop-blur-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                        <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">HI Labs · Lucknow</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
                        Data Science<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                            Course in Lucknow
                        </span>
                    </h1>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                        HI Labs offers a structured data science program in Lucknow — from Python and statistics to machine learning and real-world placement.
                    </p>
                    <button className="px-6 py-3 rounded-full bg-violet-500 text-white font-semibold hover:bg-violet-400 transition shadow-lg text-sm">
                        Get Started
                    </button>
                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-5xl mx-auto px-6 py-14">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 max-w-3xl">
                    <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-4 block">About the Program</span>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 leading-tight">
                        The Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-gray-900">Data Science Training Institute</span> in Lucknow
                    </h2>
                    <p className="text-gray-700 font-medium leading-relaxed mb-4">
                        Looking for a <strong className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-gray-900">data science course with placement in Lucknow</strong>? HI Labs is a structured <strong className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-gray-900">data science training institute in Lucknow</strong> that takes you from zero to job-ready.
                    </p>
                    <p className="text-gray-700 font-medium leading-relaxed">
                        Our curriculum covers Python, statistics, machine learning, and real-world projects — with a guaranteed internship and placement support built into the program.
                    </p>
                </div>
            </section>

            {/* TWO CARDS */}
            <section className="max-w-5xl mx-auto px-6 pb-14 grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-900 rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                        <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4 block">What You'll Learn</span>
                        <h3 className="text-white text-xl font-bold mb-5 leading-snug">Core Data Science Skills</h3>
                        <ul className="space-y-3">
                            {[
                                "Python for data analysis",
                                "Statistics & probability",
                                "Machine learning algorithms",
                                "Data visualization with Matplotlib & Seaborn",
                                "SQL & database querying",
                            ].map((pt, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between min-h-[280px] shadow-sm">
                    <div>
                        <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-4 block">Career Outcomes</span>
                        <h3 className="text-gray-900 text-xl font-bold mb-5 leading-snug">From Training to Full-Time Role</h3>
                        <ul className="space-y-3">
                            {[
                                "Guaranteed internship at partner companies",
                                "Real project experience on your resume",
                                "Placement support for top performers",
                                "Network with industry professionals",
                                "Career mentorship throughout the program",
                            ].map((pt, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0"></span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ROADMAP */}
            <section className="max-w-5xl mx-auto px-6 pb-14">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
                    <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-4 block">Your Journey</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Program Roadmap</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { step: "Python & Stats", desc: "Foundations of data science" },
                            { step: "ML & Modelling", desc: "Build predictive models" },
                            { step: "Real Projects", desc: "Work on live datasets" },
                            { step: "Placement", desc: "Internship & job support" },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#f9f9f7] border border-gray-200 rounded-xl p-5 text-center hover:border-violet-300 hover:shadow-sm transition">
                                <div className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center mx-auto mb-3">
                                    {i + 1}
                                </div>
                                <h3 className="text-gray-900 font-bold text-sm mb-1">{item.step}</h3>
                                <p className="text-gray-500 text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-900 py-14 flex flex-col items-center justify-center text-center px-6">
                <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">HI Labs</span>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Learn Data Science. Get Placed. Build a Career.
                </h2>
            </section>

        </div>
    );
}

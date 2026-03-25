'use client';
import React from "react";

export default function AICoursePage() {
    return (
        <div className="min-h-screen bg-[#050507] text-white font-sans">

            {/* 🔷 HERO SECTION */}
            <section className="relative text-center pt-56 pb-28 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/aibackground1.jpg.png')",
                    }}
                ></div>


                {/* 🔥 Dark Overlay (VERY IMPORTANT) */}
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black"></div>
                {/* 🔥 Content */}
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white">
                        AI Course in Lucknow
                    </h1>

                    <p className="text-white/70 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                        Master Artificial Intelligence and Machine Learning with real-world
                        projects and industry-level training.
                    </p>

                    <button className="px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300 shadow-lg">
                        Get Started
                    </button>
                </div>

            </section>

            {/* 🔷 FEATURES */}
            <section className="px-6 md:px-16 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: "Machine Learning",
                        desc: "Learn core ML algorithms and real-world applications.",
                    },
                    {
                        title: "Deep Learning",
                        desc: "Work with neural networks and advanced AI models.",
                    },
                    {
                        title: "Real Projects",
                        desc: "Build industry-ready AI projects for your portfolio.",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="group bg-black text-white p-7 rounded-2xl border border-white/20 
                        transition-all duration-300 ease-in-out 
                        hover:bg-white hover:text-black hover:scale-[1.03] hover:shadow-2xl"
                    >
                        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300"></h3>
                        <p className="text-white/70 group-hover:text-black/70 transition-colors duration-300 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* 🔷 ABOUT */}
            <section className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white/90 tracking-tight leading-snug">
                        Why Choose Our Program?
                    </h2>

                    <p className="text-white/70 group-hover:text-black/70 transition-colors duration-300 leading-relaxed">                        Our AI program is designed with a structured roadmap including
                        training, evaluation, and internship to make you job-ready.
                    </p>

                    <ul className="space-y-3 text-gray-300">
                        <li>✔ Industry-oriented curriculum</li>
                        <li>✔ Hands-on projects</li>
                        <li>✔ Expert mentorship</li>
                        <li>✔ Internship opportunity</li>
                    </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl h-72 backdrop-blur-xl"></div>
            </section>

            {/* 🔷 STATS */}
            <section className="px-6 md:px-16 py-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center border-t border-white/10">
                {[
                    { num: "500+", label: "Students" },
                    { num: "50+", label: "Projects" },
                    { num: "90%", label: "Success Rate" },
                    { num: "100%", label: "Practical Learning" },
                ].map((item, i) => (
                    <div key={i}>
                        <h3 className="text-3xl font-semibold text-white">{item.num}</h3>
                        <p className="text-gray-400 mt-1">{item.label}</p>
                    </div>
                ))}
            </section>

            {/* 🔷 ROADMAP */}
            <section className="px-6 md:px-16 py-24">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
                    Program Roadmap
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {["Training", "Evaluation", "Internship", "Graduation"].map(
                        (step, i) => (
                            <div
                                key={i}
                                className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl text-center 
                hover:bg-white/15 hover:border-white/30 transition duration-300"
                            >
                                <p className="text-white/70 text-sm mb-2">Step {i + 1}</p>
                                <h3 className="text-white text-lg font-semibold">{step}</h3>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* 🔷 CTA */}
            <section className="text-center py-24 px-6">
                <div className="max-w-3xl mx-auto bg-white/10 border border-white/20 backdrop-blur-xl p-10 rounded-2xl">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                        Start Your AI Journey Today 🚀
                    </h2>

                    <p className="text-white/70 mb-6">
                        Join our program and become industry-ready with real-world experience.
                    </p>

                    <button className="px-7 py-3 bg-white text-black rounded-full hover:scale-105 transition">
                        Enroll Now
                    </button>
                </div>
            </section>

        </div>
    );
}
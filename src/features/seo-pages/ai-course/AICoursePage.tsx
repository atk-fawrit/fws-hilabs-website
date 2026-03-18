import React from "react";

export default function AICoursePage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">

            {/* 🔷 HERO SECTION */}
            <section className="relative text-center py-24 px-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-transparent blur-3xl"></div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    AI Course in Lucknow
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                    Master Artificial Intelligence and Machine Learning with real-world projects and industry-level training.
                </p>

                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition duration-300 shadow-lg">
                    Get Started
                </button>
            </section>

            {/* 🔷 FEATURES / CARDS */}
            <section className="px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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
                        className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
            hover:scale-105 hover:shadow-2xl transition duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* 🔷 ABOUT SECTION */}
            <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Why Choose Our Program?
                    </h2>
                    <p className="text-gray-400 mb-4">
                        Our AI program is designed with a structured roadmap including training,
                        evaluation, and internship to make you job-ready.
                    </p>

                    <ul className="space-y-3 text-gray-300">
                        <li>✔ Industry-oriented curriculum</li>
                        <li>✔ Hands-on projects</li>
                        <li>✔ Expert mentorship</li>
                        <li>✔ Internship opportunity</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 h-64 rounded-xl"></div>
            </section>

            {/* 🔷 STATS SECTION */}
            <section className="px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                {[
                    { num: "500+", label: "Students" },
                    { num: "50+", label: "Projects" },
                    { num: "90%", label: "Success Rate" },
                    { num: "100%", label: "Practical Learning" },
                ].map((item, i) => (
                    <div key={i}>
                        <h3 className="text-3xl font-bold text-blue-400">{item.num}</h3>
                        <p className="text-gray-400">{item.label}</p>
                    </div>
                ))}
            </section>

            {/* 🔷 PROCESS / TIMELINE */}
            <section className="px-6 md:px-16 py-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Program Roadmap
                </h2>

                <div className="flex flex-col md:flex-row justify-between gap-6">
                    {["Training", "Evaluation", "Internship", "Graduation"].map(
                        (step, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-white/5 backdrop-blur-lg p-6 rounded-xl text-center 
                hover:scale-105 transition duration-300"
                            >
                                <p className="text-blue-400 mb-2">Step {i + 1}</p>
                                <h3 className="text-xl font-semibold">{step}</h3>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* 🔷 CTA */}
            <section className="text-center py-20 px-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-xl">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Your AI Journey Today 🚀
                    </h2>
                    <button className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
                        Enroll Now
                    </button>
                </div>
            </section>

        </div>
    );
}
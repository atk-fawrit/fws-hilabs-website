'use client';

export default function CourseOverview() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Course Overview</h2>
        <div className="h-1 w-20 bg-blue-600 rounded mt-4"></div>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        The Backend Developer program focuses on building server-side applications and APIs using Node.js and Express. Participants will learn how to design RESTful services, manage databases, implement authentication, and deploy scalable backend systems. This course provides a solid foundation in server architecture and prepares developers to work on production-ready backend codebases.
      </p>
    </section>
  );
}

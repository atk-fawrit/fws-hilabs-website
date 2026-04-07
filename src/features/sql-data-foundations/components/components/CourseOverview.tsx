'use client';

export default function CourseOverview() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Course Overview</h2>
        <div className="h-1 w-20 bg-blue-600 rounded mt-4"></div>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        SQL & Data Foundations provides a structured introduction to relational databases and data querying using SQL. Participants will learn how to design database schemas, write complex queries, and apply data manipulation techniques used daily by analysts, engineers, and business intelligence professionals. This course serves as a prerequisite for advanced data and analytics programs.
      </p>
    </section>
  );
}

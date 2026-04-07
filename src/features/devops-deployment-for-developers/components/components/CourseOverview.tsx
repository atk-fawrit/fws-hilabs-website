'use client';

export default function CourseOverview() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Course Overview</h2>
        <div className="h-1 w-20 bg-blue-600 rounded mt-4"></div>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        The DevOps & Deployment for Developers program introduces software engineers to the principles and practices of DevOps, continuous integration, containerization, and cloud deployment. Participants will gain hands-on experience with industry-standard tools including Docker, Kubernetes, GitHub Actions, and AWS — enabling them to confidently deploy, monitor, and scale production systems.
      </p>
    </section>
  );
}

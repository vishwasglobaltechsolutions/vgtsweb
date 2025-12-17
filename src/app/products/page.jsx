import React from 'react'

const page = () => {
  const products = [
    {
      title: 'JobHook',
      subtitle: 'Job Portal for Government & Private Jobs',
      description:
        'Aggregate government and private job openings, set smart alerts, filter by location/role, and track applications with resume builder support.'
    },
    {
      title: 'Educational Institute Management App',
      subtitle: 'ERP for schools, colleges and coaching institutes',
      description:
        'End‑to‑end institute operations: admissions, fees, attendance, timetable, exams, results, LMS, HR/payroll and parent/student portals.'
    },
    {
      title: 'Online Exam Portal',
      subtitle: 'Secure assessments with analytics',
      description:
        'Create and schedule tests with question banks, randomization, timer, negative marking, proctoring options, instant results and detailed analytics.'
    }
  ];
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Products</h1>
      <div className="h-1 rounded-xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 mb-4" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          > 
            <h2 className="text-lg font-semibold text-gray-900">{p.title}</h2>
            <div className="h-1 w-full rounded-xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 mb-4" />

            
            {p.subtitle ? (
              <p className="mt-1 text-sm text-gray-500">{p.subtitle}</p>
            ) : null}
            {p.description ? (
              <p className="mt-3 text-sm leading-6 text-gray-600">{p.description}</p>
            ) : null}
            <div className="mt-4">
              <a 
                href={idx === 0 ? 'https://jobhook.in/' : 'https://wa.me/919156589900?text=I am interested in your product. Can you please provide me more details?'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Let's Connect
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default page
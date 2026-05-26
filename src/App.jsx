import headshot from './assets/headshot.png'

const projects = [
  {
    title: 'Course Scheduler',
    description:
      'Built a full-stack academic scheduling platform with role-based access for students, faculty, and administrators using React, Node.js, and AWS services.',
    tech: ['React', 'Node.js', 'REST APIs', 'Tailwind CSS', 'AWS'],
  },
  {
    title: 'AI Steps',
    description:
      'Developed backend services in Python with MySQL and OpenAPI documentation to power personalized recommendation workflows using LLM integration.',
    tech: ['Python', 'REST APIs', 'MySQL', 'Swagger/OpenAPI', 'LLM Integration'],
  },
  {
    title: 'AWDEA Nonprofit Platform',
    description:
      'Delivered a scalable nonprofit portal with secure admin tools, Stripe payments, and AWS serverless workflows for accessibility-focused events.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS Lambda', 'Stripe', 'RBAC'],
  },
]

const skillGroups = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML/CSS', 'Python', 'Java', 'SQL'] },
  { category: 'Frameworks & Libraries', items: ['React', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'Databases & Tools', items: ['MySQL', 'MongoDB', 'Firebase', 'Postman', 'Swagger/OpenAPI', 'Git'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Linux'] },
]

const timelineItems = [
  {
    label: 'Education',
    title: 'BCIT Computer Systems Technology',
    meta: '01/2023 - 12/2024 | Burnaby, BC',
    details: [
      'Object-Oriented Programming, Data Structures & Algorithms',
      'Cloud Computing with AWS, Serverless Computing, Software Architecture',
      'Mobile App Development, Networking, and Security',
    ],
  },
  {
    label: 'Experience',
    title: 'Cloud & Full Stack Developer Intern',
    meta: 'AWDEA | 05/2024 | Vancouver, BC',
    details: [
      'Contributed to a scalable React/Node.js nonprofit platform with MongoDB and AWS Lambda.',
      'Integrated Stripe payment workflows, RBAC authorization, and secure admin tools.',
      'Automated scheduling and raffle tasks with EventBridge and improved UX through CloudFront.',
    ],
  },
  {
    label: 'Experience',
    title: 'Service Industry Experience',
    meta: '10/2016 - 12/2022 | Vancouver, BC',
    roles: ['Store Clerk at Tiger Sugar', 'Line Cook at Sanpoutei Ramen', 'Cashier at T&T Supermarket'],
    details: ['Career exploration and personal self-learning.'],
  },
  {
    label: 'Education',
    title: 'The ExDegree',
    meta: 'Ongoing | Vancouver, BC',
    details: ['Continued technical growth through practical software projects and self-directed learning.'],
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#f4f2ef] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="border-b border-slate-200 pb-6 pt-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Emily Lin</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Junior full-stack developer building scalable, user-focused web experiences.
              </p>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
              <a href="#about" className="transition hover:text-slate-900">About</a>
              <a href="#experience" className="transition hover:text-slate-900">Timeline</a>
              <a href="#projects" className="transition hover:text-slate-900">Projects</a>
              <a href="#skills" className="transition hover:text-slate-900">Skills</a>
              <a href="#contact" className="transition hover:text-slate-900">Contact</a>
            </nav>
          </div>
        </header>

        <main className="space-y-24 py-12">
          <section className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.05)] sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
              <div className="space-y-6">
                <div className="max-w-xl space-y-4">
                  <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-500">Vancouver, BC • Software Developer</p>
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    I build scalable applications with React, Node.js, Python, and AWS.
                  </h1>
                  <p className="text-lg leading-8 text-slate-600">
                    Junior full-stack developer with hands-on software delivery experience, backend API expertise, and cloud deployment skills.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Contact Emily
                  </a>
                  <a href="https://github.com/Emily0816Lin" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] bg-slate-50 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src={headshot}
                    alt="Emily Lin"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Connect</p>
                  <div className="mt-6 space-y-3 text-sm text-slate-700">
                  <a href="mailto:emilysmileee@gmail.com" className="block rounded-2xl bg-white px-4 py-3 transition hover:bg-slate-100">Email: emilysmileee@gmail.com</a>
                  <a href="https://github.com/Emily0816Lin" target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-3 transition hover:bg-slate-100">GitHub</a>
                  <a href="https://linkedin.com/in/emily-l-54a945291" target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-3 transition hover:bg-slate-100">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-500">About</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Junior full-stack developer with a product engineering mindset.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                I combine a BCIT Computer Systems Technology foundation with hands-on experience building cloud-native applications in React, Node.js, Python, and AWS. I enjoy collaborating in Agile teams and delivering software that balances usability, performance, and reliability.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {[
                'BCIT CST background in software architecture and teamwork.',
                'Front-end development with React, responsive design, and accessible UI.',
                'Backend systems, API design, database integration, and serverless deployment.',
                'Service industry experience supporting teamwork, communication, and problem-solving.',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-500">Timeline</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Education and experience shaped through software, service, and self-learning.
              </h2>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="relative space-y-8 before:absolute before:bottom-6 before:left-4 before:top-6 before:w-px before:bg-slate-200 sm:before:left-6">
                {timelineItems.map((item) => (
                  <article key={item.title} className="relative grid gap-4 pl-12 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:pl-16">
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm sm:left-2">
                      <span className="h-3 w-3 rounded-full bg-slate-950" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.meta}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5">
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      {item.roles && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.roles.map((role) => (
                            <span key={role} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                              {role}
                            </span>
                          ))}
                        </div>
                      )}
                      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="hidden">
              <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Education</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">BCIT Computer Systems Technology</h3>
                <p className="mt-2 text-sm text-slate-600">Burnaby, BC | 01/2023 – 12/2024</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  <li>Object-Oriented Programming, Data Structures & Algorithms</li>
                  <li>Cloud Computing with AWS, Serverless Computing, Software Architecture</li>
                  <li>Mobile App Development, Networking, and Security</li>
                </ul>
                <div className="mt-6 rounded-3xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  <p className="font-semibold text-slate-900">Previous degree</p>
                  <p>Transportation Technology and Management, Feng Chia University, Taichung, Taiwan | 09/2011 – 06/2015</p>
                </div>
              </article>
              <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Experience</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">Cloud & Full Stack Developer Intern</h3>
                <p className="mt-2 text-sm text-slate-600">AWDEA | Vancouver, BC | 05/2024</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  <li>Contributed to a scalable React/Node.js nonprofit platform with MongoDB and AWS Lambda.</li>
                  <li>Integrated Stripe payment workflows, RBAC authorization, and secure admin tools.</li>
                  <li>Automated scheduling and raffle tasks with EventBridge and improved UX through CloudFront.</li>
                </ul>
              </article>
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-500">Featured Projects</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Product-focused apps built for scale and clarity.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Case Study</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-500">Skills</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A balanced toolkit for frontend, backend, and cloud-facing work.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.category} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{group.category}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="rounded-[32px] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-[0_32px_90px_rgba(15,23,42,0.12)] sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-400">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Let’s build the next experience together.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">I’m available for junior full-stack software developer roles where I can apply AWS, API design, and modern frontend engineering to build polished products.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a href="mailto:emilysmileee@gmail.com" className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto">Email Emily</a>
                <a href="https://github.com/Emily0816Lin" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-full border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400 sm:w-auto">View GitHub</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

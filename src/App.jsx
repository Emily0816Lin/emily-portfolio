import { useEffect } from 'react'
import headshot from './assets/headshot.png'
import aiStepsImage from './assets/ai_steps.png'
import awdeaImage from './assets/awdea.jpg'
import courseSchedulerImage from './assets/course_scheduler.png'
import resumePdf from './assets/My_resume.pdf'

const projects = [
  {
    title: 'Course Scheduler',
    image: courseSchedulerImage,
    link: 'https://github.com/Emily0816Lin/CourseScheduler',
    description:
      'Built a full-stack academic scheduling platform with role-based access for students, faculty, and administrators using React, Node.js, and AWS services.',
    tech: ['React', 'Node.js', 'REST APIs', 'Tailwind CSS', 'AWS'],
  },
  {
    title: 'AI Steps',
    image: aiStepsImage,
    link: 'https://github.com/Emily0816Lin/AI_Steps',
    description:
      'Developed backend services in Python with MySQL and OpenAPI documentation to power personalized recommendation workflows using LLM integration.',
    tech: ['Python', 'REST APIs', 'MySQL', 'Swagger/OpenAPI', 'LLM Integration'],
  },
  {
    title: 'AWDEA Nonprofit Platform',
    image: awdeaImage,
    link: 'https://www.awdea.org/',
    description:
      'Delivered a scalable nonprofit portal with secure admin tools, Stripe payments, and AWS serverless workflows for accessibility-focused events.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS Lambda', 'Stripe API'],
  },
]

const skillGroups = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS', icon: 'https://cdn.simpleicons.org/css/663399' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/000000' },
      { name: 'SQL', initials: 'SQL' },
      { name: 'C', icon: 'https://cdn.simpleicons.org/c/A8B9CC' },
      { name: 'Kotlin', icon: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
      { name: 'R', icon: 'https://cdn.simpleicons.org/r/276DC3' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
      { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/000000' },
      { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
      { name: 'RESTful APIs', initials: 'API' },
    ],
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
      { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
      { name: 'Swagger/OpenAPI', icon: 'https://cdn.simpleicons.org/swagger/85EA2D' },
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'Bash/Shell Scripting', icon: 'https://cdn.simpleicons.org/gnubash/4EAA25' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
      { name: 'Terraform', icon: 'https://cdn.simpleicons.org/terraform/844FBA' },
      { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins/D24939' },
      { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    ],
  },
]

const timelineItems = [
  {
    id: 'bcit',
    label: 'Education',
    title: 'Academic Years',
    subtitle: 'BCIT (British Columbia Institute of Technology)',
    timeRange: '01/2023 - 12/2024',
    location: 'Burnaby, BC',
    details: ['GPA 4.0', 'Specialized in Cloud Computing.'],
  },
  {
    id: 'awdea-intern',
    label: 'Experience',
    title: 'Full-stack Developer - Intern',
    subtitle: 'AWDEA (Adults with Disability Entertainment Access)',
    timeRange: '05/2024',
    location: 'Vancouver, BC',
    details: [
      // 'Contributed to a scalable React/Node.js nonprofit platform with MongoDB and AWS Lambda.',
      // 'Integrated Stripe payment workflows, RBAC authorization, and secure admin tools.',
      // 'Automated scheduling and raffle tasks with EventBridge and improved UX through CloudFront.',

      'Built a scalable nonprofit platform using React, Node.js, MongoDB, and AWS.',
      'Developed admin tools and Stripe payment integration for donations.',
      'Implemented authentication and role-based access control (RBAC).',
      'Automated raffle and scheduling workflows with AWS Lambda and EventBridge.',
      'Improved performance and user experience using AWS CloudFront CDN.',
      'Collaborated in Agile development, testing, debugging, and deployment.',
    ],
  },
  {
    id: 'service-industry',
    label: 'Experience',
    title: 'Service Industry Experience',
    timeRange: '10/2016 - 12/2022',
    location: 'Vancouver, BC',
    roles: ['Store Clerk at Tiger Sugar', 'Line Cook at Sanpoutei Ramen', 'Cashier at T&T Supermarket'],
    details: ['Career exploration and personal self-learning.'],
  },
  {
    id: 'bachelor-degree',
    label: 'Education',
    title: 'Academic Years',
    subtitle: 'Feng Chia University',
    timeRange: '09/2011 - 06/2015',
    location: 'Taichung, Taiwan',
    details: ['Bachelor of Transportation Technology and Management'],
  },
]

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -60px 0px' },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handlePrintResume = () => {
    const resumeWindow = window.open(resumePdf, '_blank')
    if (resumeWindow) {
      resumeWindow.addEventListener('load', () => {
        resumeWindow.print()
      })
    }
  }

  return (
    <div id="top" className="min-h-screen bg-transparent text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="sticky top-3 z-50 -mx-2 rounded-full border border-white/45 bg-white/20 px-4 py-1.5 shadow-[0_10px_28px_rgba(15,23,42,0.07)] backdrop-blur-xl">
          <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
            <span className="justify-self-center px-3 py-1 text-lg font-semibold tracking-tight text-slate-950 sm:justify-self-start">
              <span className="typing-header">
                <span className="typing-copy name-gradient">Emily Lin</span>
                <span className="typing-caret" aria-hidden="true" />
              </span>
            </span>
            <nav className="flex flex-wrap justify-center gap-4 text-base font-medium text-slate-600 sm:text-lg">
              <a href="#about" className="rounded-full px-3 py-1.5 transition hover:-translate-y-1 hover:scale-105 hover:bg-white/80 hover:text-slate-900 hover:shadow-[0_12px_26px_rgba(15,23,42,0.14)]">About me</a>
              <a href="#skills" className="rounded-full px-3 py-1.5 transition hover:-translate-y-1 hover:scale-105 hover:bg-white/80 hover:text-slate-900 hover:shadow-[0_12px_26px_rgba(15,23,42,0.14)]">Skills</a>
              <a href="#projects" className="rounded-full px-3 py-1.5 transition hover:-translate-y-1 hover:scale-105 hover:bg-white/80 hover:text-slate-900 hover:shadow-[0_12px_26px_rgba(15,23,42,0.14)]">Projects</a>
              <a href="#experience" className="rounded-full px-3 py-1.5 transition hover:-translate-y-1 hover:scale-105 hover:bg-white/80 hover:text-slate-900 hover:shadow-[0_12px_26px_rgba(15,23,42,0.14)]">Education & Experience</a>
              <a href="#contact" className="rounded-full px-3 py-1.5 transition hover:-translate-y-1 hover:scale-105 hover:bg-white/80 hover:text-slate-900 hover:shadow-[0_12px_26px_rgba(15,23,42,0.14)]">Contact</a>
            </nav>
            {/* <a href="#top" className="justify-self-center rounded-full px-4 py-2 text-base font-semibold text-slate-700 transition hover:-translate-y-1 hover:scale-105 hover:bg-white/80 hover:text-slate-950 hover:shadow-[0_12px_26px_rgba(15,23,42,0.14)] sm:justify-self-end sm:text-lg">
              Top
            </a> */}
          </div>
        </header>

        <main className="space-y-24 py-12">
          <section className="scroll-reveal rounded-[32px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(236,253,245,0.74)_42%,rgba(239,246,255,0.86))] p-8 shadow-[0_30px_90px_rgba(37,99,235,0.12)] sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-center lg:gap-12">
              <div className="min-w-0 space-y-6">
                <div className="max-w-2xl space-y-4">
                  <h1 className="hero-greeting text-[clamp(2.7rem,8vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-slate-950">
                    <span className="typing-hero">
                      <span className="typing-copy">
                        Hi, I am <span className="name-gradient">Emily Lin</span>
                      </span>
                      <span className="typing-caret" aria-hidden="true" />
                    </span>
                  </h1>
                  <p className="text-lg leading-8 text-slate-600">
                    Junior full-stack developer with hands-on software delivery experience, backend API expertise, and cloud deployment skills.
                  </p>
                </div>

                <div className="hero-actions flex flex-wrap gap-3">
                  <a href="mailto:emilysmileee@gmail.com" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0f172a,#0f766e)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,118,110,0.22)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,118,110,0.28)]">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                    </svg>
                    Gmail
                  </a>
                  <a href="https://www.linkedin.com/in/emily-l-54a945291/" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M6.94 8.98H3.75v10.28h3.19zM5.35 7.58a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7M20.25 19.26v-5.64c0-3.02-1.61-4.42-3.76-4.42a3.24 3.24 0 0 0-2.94 1.62V8.98h-3.06v10.28h3.19v-5.09c0-1.34.25-2.64 1.92-2.64 1.64 0 1.66 1.54 1.66 2.72v5.01z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/Emily0816Lin" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.86c-2.72.59-3.29-1.16-3.29-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.87 1.49 2.28 1.06 2.84.81.09-.63.34-1.06.62-1.3-2.17-.25-4.45-1.09-4.45-4.82 0-1.07.38-1.94 1.01-2.62-.1-.25-.44-1.24.1-2.59 0 0 .82-.26 2.69 1a9.3 9.3 0 0 1 4.9 0c1.86-1.26 2.68-1 2.68-1 .54 1.35.2 2.34.1 2.59.63.68 1 1.55 1 2.62 0 3.74-2.28 4.57-4.46 4.81.35.3.66.9.66 1.81v2.69c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l4 4v14H7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 13h6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 17h6" />
                    </svg>
                    Resume
                  </a>
                </div>
              </div>

              <div className="hero-headshot flex justify-center lg:justify-end">
                <img
                  src={headshot}
                  alt="Emily Lin"
                  className="aspect-[3/4] w-[min(72vw,18rem)] rounded-[999px] border-8 border-white object-cover object-center shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:w-72 lg:w-full lg:max-w-72"
                />
              </div>
            </div>
          </section>

          <section id="about" className="scroll-reveal space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-title-gradient text-4xl font-semibold tracking-tight sm:text-5xl">About me</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-700 sm:text-3xl">
                full-stack developer with a product engineering mindset.
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
                <div key={item} className="scroll-reveal rounded-3xl border border-white/80 bg-white/85 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(14,165,233,0.14)]">
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-reveal space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-title-gradient text-4xl font-semibold tracking-tight sm:text-5xl">Skills</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-700 sm:text-3xl">
                A balanced toolkit for frontend, backend, and cloud-facing work.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.category} className="scroll-reveal rounded-3xl border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(240,249,255,0.76))] p-8 shadow-[0_18px_42px_rgba(15,23,42,0.08)]">
                  <h3 className="text-lg font-semibold text-slate-950">{group.category}</h3>
                  <ul className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-5">
                    {group.items.map((item) => (
                      <li key={item.name} className="relative">
                        <div
                          aria-label={item.name}
                          className="group relative flex aspect-square items-center justify-center rounded-2xl p-1 transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-300"
                          tabIndex="0"
                          title={item.name}
                        >
                          {item.icon ? (
                            <img src={item.icon} alt="" className="h-full w-full object-contain drop-shadow-[0_12px_16px_rgba(15,23,42,0.22)] transition group-hover:drop-shadow-[0_16px_22px_rgba(15,23,42,0.28)]" loading="lazy" />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-100 text-lg font-semibold text-slate-900 shadow-[0_12px_20px_rgba(15,23,42,0.16)] transition group-hover:shadow-[0_16px_26px_rgba(15,23,42,0.22)]">{item.initials}</span>
                          )}
                          <span className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 group-focus:opacity-100">
                            {item.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-reveal space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-title-gradient text-4xl font-semibold tracking-tight sm:text-5xl">Featured Projects</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-700 sm:text-3xl">
                Product-focused apps built for scale and clarity.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title}`}
                  className="scroll-reveal group relative min-h-[24rem] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-focus:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/5 transition group-hover:from-slate-950 group-hover:via-slate-950/80 group-focus:from-slate-950 group-focus:via-slate-950/80" />
                  <div className="relative flex h-full min-h-[24rem] flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-72 group-hover:opacity-100 group-focus:mt-4 group-focus:max-h-72 group-focus:opacity-100">
                      <p className="text-sm leading-7 text-slate-200">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-slate-100 backdrop-blur">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition group-hover:translate-x-1 group-focus:translate-x-1">
                        Click to view
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="m13 6 6 6-6 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="experience" className="education-section scroll-reveal space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-title-gradient text-4xl font-semibold tracking-tight sm:text-5xl">Education & Experience</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-700 sm:text-3xl">
                Education and experience shaped through software, service, and self-learning.
              </h2>
            </div>

            <div className="timeline-panel rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.09)] sm:p-8 lg:p-10">
              <div className="relative space-y-8 before:absolute before:bottom-6 before:left-4 before:top-6 before:w-px before:bg-slate-200 sm:before:left-6">
                {timelineItems.map((item) => (
                  <article key={item.id} className="scroll-reveal timeline-item group relative grid gap-4 pl-12 transition hover:-translate-y-1 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:pl-16">
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm sm:left-2">
                      <span className="h-3 w-3 rounded-full bg-slate-950" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.timeRange}</p>
                      <p className="text-sm leading-6 text-slate-600">{item.location}</p>
                    </div>
                    <div className="rounded-3xl bg-[linear-gradient(145deg,rgba(248,250,252,1),rgba(236,253,245,0.78))] p-5 shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition group-hover:shadow-[0_22px_44px_rgba(14,165,233,0.16)]">
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      {item.subtitle && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                            {item.subtitle}
                          </span>
                        </div>
                      )}
                      {item.roles && (
                        <div className={item.subtitle ? 'mt-2 flex flex-wrap gap-2' : 'mt-4 flex flex-wrap gap-2'}>
                          {item.roles.map((role) => (
                            <span key={role} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                              {role}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.details.length > 0 && (
                        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex gap-3">
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="scroll-reveal rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0f172a_0%,#164e63_46%,#831843_100%)] px-8 py-12 text-white shadow-[0_32px_90px_rgba(15,23,42,0.22)] sm:p-12">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contact</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-300 sm:text-3xl">Let’s build the next experience together.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">Passionate about building scalable full-stack products — from intuitive frontend interfaces to resilient backend services and cloud infrastructure.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a href="mailto:emilysmileee@gmail.com" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-slate-100 sm:w-auto">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                  </svg>
                  Gmail
                </a>
                <a href="https://www.linkedin.com/in/emily-l-54a945291/" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-slate-400 sm:w-auto">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M6.94 8.98H3.75v10.28h3.19zM5.35 7.58a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7M20.25 19.26v-5.64c0-3.02-1.61-4.42-3.76-4.42a3.24 3.24 0 0 0-2.94 1.62V8.98h-3.06v10.28h3.19v-5.09c0-1.34.25-2.64 1.92-2.64 1.64 0 1.66 1.54 1.66 2.72v5.01z" />
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/Emily0816Lin" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-slate-400 sm:w-auto">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.86c-2.72.59-3.29-1.16-3.29-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.87 1.49 2.28 1.06 2.84.81.09-.63.34-1.06.62-1.3-2.17-.25-4.45-1.09-4.45-4.82 0-1.07.38-1.94 1.01-2.62-.1-.25-.44-1.24.1-2.59 0 0 .82-.26 2.69 1a9.3 9.3 0 0 1 4.9 0c1.86-1.26 2.68-1 2.68-1 .54 1.35.2 2.34.1 2.59.63.68 1 1.55 1 2.62 0 3.74-2.28 4.57-4.46 4.81.35.3.66.9.66 1.81v2.69c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
              <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-700 bg-white text-left shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
                <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">Resume</h3>
                    <p className="mt-1 text-sm text-slate-600">Preview, download, or print the full resume.</p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a href={resumePdf} download="Emily-Lin-Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0f172a,#0f766e)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,118,110,0.24)]">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
                      </svg>
                      Download
                    </a>
                    <button type="button" onClick={handlePrintResume} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-100">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8V3h10v5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 14h10v7H7z" />
                      </svg>
                      Print
                    </button>
                  </div>
                </div>
                <iframe
                  src={`${resumePdf}#view=FitH`}
                  title="Emily Lin resume"
                  className="h-[80rem] w-full bg-white"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

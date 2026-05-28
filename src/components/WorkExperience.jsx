import { useState } from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Senior Analyst – UI Developer",
    company: "eClerx",
    period: "Sep 2024 – Mar 2026",
    color: "#22D3EE",
    highlights: [
      "Managed, updated, and published website content using a CMS tool for a large-scale production environment.",
      "Translated Figma UI designs into responsive CMS components and web pages with pixel-perfect accuracy.",
      "Used JIRA for sprint tracking, task management, workflow visualization, and cross-functional team collaboration.",
      "Ensured content accuracy, UI consistency, and quality across all CMS-published pages.",
      "Coordinated with design and QA teams to deliver error-free, responsive, and visually consistent deliverables.",
    ],
  },
  {
    id: 2,
    role: "UI Developer",
    company: "Ixia Solution LLP",
    period: "Nov 2022 – Dec 2023",
    color: "#818CF8",
    highlights: [
      "Built responsive web pages adapting seamlessly to desktops, tablets, and smartphones using CSS media queries.",
      "Diagnosed and resolved layout inconsistencies, JavaScript errors, and cross-browser compatibility issues using browser DevTools.",
      "Managed code repositories using TFS and Git/GitHub; raised and reviewed pull requests following best practices.",
      "Created visual documentation (flowcharts, architecture diagrams) using draw.io for stakeholder communication.",
    ],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Konverge Technologies Pvt Ltd",
    period: "Sep 2021 – Oct 2022",
    color: "#34D399",
    highlights: [
      "Installed, configured, and customized open-source HRMS (OpenCATS) to meet organizational HR requirements.",
      "Designed relational database schemas optimizing data integrity, performance, and scalability.",
      "Created draw.io diagrams for software architecture, workflows, and data flows.",
    ],
  },
  {
    id: 4,
    role: "Production Supervisor",
    company: "DSA Electro Controls Pvt Ltd",
    period: "Sep 2020 – Aug 2021",
    color: "#FBBF24",
    highlights: [
      "Supervised a team of 15 employees, managing attendance, task assignments, and production timelines.",
      "Conducted quality analysis on finished products and coordinated with sales/purchasing teams for material availability.",
    ],
  },
  {
    id: 5,
    role: "Web Developer",
    company: "NP Infosec",
    period: "Dec 2018 – Aug 2020",
    color: "#F87171",
    highlights: [
      "Designed, implemented, tested, and maintained web pages and software per client requirements.",
      "Developed REST APIs for Android application integration.",
      "Resolved legacy code bugs and improved overall system stability.",
    ],
  },
];

export default function WorkExperience() {
  const [activeExp, setActiveExp] = useState(0);
  const exp = experiences[activeExp];

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work Experience
        </h2>
        <p className="text-white/50 text-center mb-16 text-lg">
          6+ years across frontend, web development &amp; production roles
        </p>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Sidebar Tabs ── */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:min-w-[260px] pb-2 lg:pb-0">
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActiveExp(i)}
                style={activeExp === i ? { borderLeftColor: e.color } : {}}
                className={`
                  flex-shrink-0 flex items-start gap-3 text-left px-5 py-4 rounded-2xl
                  border-l-4 transition-all duration-200 cursor-pointer
                  ${activeExp === i
                    ? "bg-white/10 border-l-4"
                    : "bg-white/5 border-l-4 border-transparent hover:bg-white/8"
                  }
                `}
              >
                <FaBriefcase
                  className="mt-1 flex-shrink-0 text-sm"
                  style={{ color: activeExp === i ? e.color : "rgba(255,255,255,0.3)" }}
                />
                <div>
                  <p
                    className="font-semibold text-sm leading-snug"
                    style={{ color: activeExp === i ? "#fff" : "rgba(255,255,255,0.55)" }}
                  >
                    {e.role}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5">{e.company}</p>
                </div>
              </button>
            ))}
          </div>

          {/* ── Detail Panel ── */}
          <div className="flex-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden shadow-2xl">

            {/* Colour accent bar */}
            <div
              className="h-1 w-full transition-all duration-300"
              style={{ background: exp.color }}
            />

            <div className="p-8 md:p-10">

              {/* Header row */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {exp.role}
                  </h3>
                  <span
                    className="inline-block border rounded-xl px-4 py-1.5 text-sm font-semibold"
                    style={{ borderColor: exp.color, color: exp.color }}
                  >
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-4">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: exp.color }}
                    />
                    <span className="text-white/75 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Dot navigation */}
              <div className="flex gap-2 mt-10">
                {experiences.map((e, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveExp(i)}
                    className="h-2 rounded-full transition-all duration-300 cursor-pointer border-0"
                    style={{
                      width: activeExp === i ? "28px" : "8px",
                      background: activeExp === i ? exp.color : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
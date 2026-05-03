import React from 'react';
import { motion } from 'framer-motion';

// Raw SVG Components to bypass lucide-react export issues
const Icons = {
  Terminal: () => <svg size="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal" width="20" height="20"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>,
  Cpu: () => <svg size="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu" width="24" height="24"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>,
  Cloud: () => <svg size="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud" width="24" height="24"><path d="M17.5 19x2a4.5 4.5 0 0 1 0-9 5 5 0 1 1 9.5 0c.3 0 .7 0 1 .3a3 3 0 1 1 0 6H17.5Z"/></svg>,
  Bot: () => <svg size="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot" width="24" height="24"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
  Shield: () => <svg size="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield" width="24" height="24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>,
  Code2: () => <svg size="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2" width="24" height="24"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
  Workflow: () => <svg size="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow" width="24" height="24"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>,
  Github: () => <svg size="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" width="20" height="20"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  Linkedin: () => <svg size="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" width="20" height="20"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  Mail: () => <svg size="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" width="24" height="24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 py-12 ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 hover:border-[#38bdf8]/50 transition-colors ${className}`}>
    {children}
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-[#e2e8f0]">
      {/* Navigation */}
      <nav className="border-b border-[#1e293b] sticky top-0 bg-[#020617]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-mono font-bold text-lg">
            <Icons.Terminal />
            <span>RAANAN_PERETZ</span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#experience" className="hover:text-[#38bdf8]">Experience</a>
            <a href="#projects" className="hover:text-[#38bdf8]">Projects</a>
            <a href="#stack" className="hover:text-[#38bdf8]">Stack</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-24 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 text-[#38bdf8] px-3 py-1 rounded-full text-xs font-bold mb-6 border border-[#0ea5e9]/20">
            <Icons.Bot />
            IT ENGINEERING LEADER
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">AI-Driven</span> Infrastructure.
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mb-10 leading-relaxed">
            14 years of evolution from bare-metal systems to lean, automated, cloud-native powerhouses. Currently leading IT Engineering at LivePerson.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/raanan-peretz-a9378352/" 
              target="_blank" 
              className="bg-[#38bdf8] text-[#020617] px-6 py-3 rounded-lg font-bold hover:bg-[#7dd3fc] transition-colors flex items-center gap-2"
            >
              Connect <Icons.Linkedin />
            </a>
            <a 
              href="#projects" 
              className="bg-[#1e293b] text-[#f8fafc] px-6 py-3 rounded-lg font-bold hover:bg-[#334155] transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Icons.Code2 /> Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-[#38bdf8]/10 p-3 rounded-lg">
                <Icons.Workflow />
              </div>
              <a href="https://github.com/raananp/ITAgent" target="_blank" className="text-[#94a3b8] hover:text-[#38bdf8]">
                <Icons.Github />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">ITAgent</h3>
            <p className="text-[#94a3b8] mb-6 flex-grow">
              A flagship open-source IT Orchestration platform. Features a visual workflow builder (React Flow) for "Zero-Touch" onboarding and identity lifecycle management.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['React', 'Node.js', 'PostgreSQL', 'Docker'].map(tag => (
                <span key={tag} className="text-[10px] font-bold bg-[#1e293b] px-2 py-1 rounded border border-[#334155]">{tag}</span>
              ))}
            </div>
          </Card>

          <Card className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-[#818cf8]/10 p-3 rounded-lg">
                <Icons.Terminal />
              </div>
              <a href="https://github.com/raananp/Powershell-Gui-2019" target="_blank" className="text-[#94a3b8] hover:text-[#818cf8]">
                <Icons.Github />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">IT Automation Hub (v11.3)</h3>
            <p className="text-[#94a3b8] mb-6 flex-grow">
              A modular .NET-based PowerShell GUI framework created in 2019. Standardized global onboarding and AD management for enterprise teams.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['PowerShell', '.NET', 'Active Directory', 'Automation'].map(tag => (
                <span key={tag} className="text-[10px] font-bold bg-[#1e293b] px-2 py-1 rounded border border-[#334155]">{tag}</span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Skills / Stack Bento */}
      <Section id="stack" className="py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Icons.Cloud /> Technical Arsenal
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'AWS Migration', icon: Icons.Cloud, color: '#38bdf8' },
            { name: 'Enterprise AI', icon: Icons.Bot, color: '#818cf8' },
            { name: 'Infrastracture as Code', icon: Icons.Code2, color: '#34d399' },
            { name: 'Cloud Security', icon: Icons.Shield, color: '#f87171' },
            { name: 'Platform Eng', icon: Icons.Cpu, color: '#fbbf24' },
            { name: 'CI/CD Pipelines', icon: Icons.Workflow, color: '#a78bfa' },
            { name: 'Identity Mgmt', icon: Icons.Shield, color: '#2dd4bf' },
            { name: 'JAMF Certified', icon: Icons.Cloud, color: '#60a5fa' },
          ].map((skill, index) => (
            <div key={index} className="bg-[#0f172a] border border-[#1e293b] p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 hover:bg-[#1e293b] transition-colors group">
              <skill.icon />
              <span className="text-xs font-bold tracking-wider">{skill.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section id="experience" className="py-20">
        <h2 className="text-3xl font-bold mb-12">The 14-Year Evolution</h2>
        <div className="space-y-12 border-l border-[#1e293b] ml-4 pl-8 relative">
          {[
            { 
              year: '2023 - Present', 
              role: 'Senior Manager, IT Engineering @ LivePerson', 
              desc: 'Leading a high-performance team to migrate global data centers to AWS using custom Terraform modules & Jenkins. Architecting Zero-Trust SaaS security and AppStream 2.0 deployments.' 
            },
            { 
              year: '2021 - 2023', 
              role: 'Team Lead, Infrastructure Migration @ LivePerson', 
              desc: 'Spearheaded migration of 4 global regions to AWS. Managed compliance (SOX/ISO) and the transition from Pulse VPN to Jamf Trust & Intune for 500+ endpoints.' 
            },
            { 
              year: '2020 - 2021', 
              role: 'Head of IT @ Source Defense (Startup)', 
              desc: 'Managed the entire IT stack for 100+ users. Developed the initial web applications for HR/IT onboarding workflows and led the On-Prem to Azure AD migration.' 
            },
            { 
              year: '2018 - 2020', 
              role: 'System Specialist @ LivePerson', 
              desc: 'Developed "LPSync" for global onboarding. Automated Jenkins pipelines for OS deployments and migrated Jamf Pro from on-prem to SaaS.' 
            },
            { 
              year: '2014 - 2018', 
              role: 'System Administrator @ Clalit Health Services', 
              desc: 'Managed a massive enterprise infrastructure of 25,000 endpoints and 1,000 servers. Led the SCCM 2007 to 2012 migration and OSD/WMI automation.' 
            },
            { 
              year: '2012 - 2014', 
              role: 'Infrastructure Team Leader @ Kaplan Hospital', 
              desc: 'Led the computing infrastructure team. Designed network layouts and managed the IT budget for critical hospital operations.' 
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#38bdf8] border-4 border-[#020617]" />
              <div className="text-xs font-bold text-[#38bdf8] mb-1">{item.year}</div>
              <h3 className="text-lg font-bold mb-2">{item.role}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono font-bold text-lg mb-2">
              <Icons.Terminal />
              <span>RAANAN_PERETZ</span>
            </div>
            <p className="text-sm text-[#64748b]">Built with React, Vite, and CI/CD best practices.</p>
          </div>
          <div className="flex gap-6 text-[#94a3b8]">
            <a href="https://github.com/raananp" target="_blank" className="hover:text-[#f8fafc]"><Icons.Github /></a>
            <a href="https://www.linkedin.com/in/raanan-peretz-a9378352/" target="_blank" className="hover:text-[#f8fafc]"><Icons.Linkedin /></a>
            <a href="mailto:raanan@example.com" className="hover:text-[#f8fafc]"><Icons.Mail /></a>
          </div>
        </div>
      </footer>

      {/* Inline Tailwind-like classes for speed in this environment */}
      <style>{`
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-6xl { max-width: 72rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .pt-24 { padding-top: 6rem; }
        .pb-32 { padding-bottom: 8rem; }
        .mt-20 { margin-top: 5rem; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .mb-12 { margin-bottom: 3rem; }
        .ml-4 { margin-left: 1rem; }
        .pl-8 { padding-left: 2rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .grid { display: grid; }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .md\\:grid-cols-2 { @media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        .md\\:grid-cols-4 { @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        .md\\:flex-row { @media (min-width: 768px) { flex-direction: row; } }
        .text-sm { font-size: 0.875rem; }
        .text-xs { font-size: 0.75rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-5xl { font-size: 3rem; }
        .md\\:text-7xl { @media (min-width: 768px) { font-size: 4.5rem; } }
        .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .tracking-tight { letter-spacing: -0.025em; }
        .tracking-wider { letter-spacing: 0.05em; }
        .leading-relaxed { line-height: 1.625; }
        .text-transparent { color: transparent; }
        .bg-clip-text { -webkit-background-clip: text; background-clip: text; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-\\[\\#38bdf8\\] { --tw-gradient-from: #38bdf8; --tw-gradient-to: rgb(56 189 248 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-\\[\\#818cf8\\] { --tw-gradient-to: #818cf8; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }
        .border { border-width: 1px; }
        .border-b { border-bottom-width: 1px; }
        .border-t { border-bottom-width: 1px; }
        .border-l { border-left-width: 1px; }
        .sticky { position: sticky; }
        .top-0 { top: 0; }
        .z-50 { z-index: 50; }
        .backdrop-blur-md { backdrop-filter: blur(12px); }
        .bg-opacity-80 { background-opacity: 0.8; }
        .lucide { display: inline-block; vertical-align: middle; stroke: currentColor; }
      `}</style>
    </div>
  );
};

export default App;

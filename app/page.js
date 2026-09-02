"use client";

import { useEffect, useMemo, useState } from "react";

const domains = [
  { id: 1, name: "IT Concepts & Terminology", weight: 13, code: "01", tone: "cyan", topics: ["Data representation", "Computing basics", "Troubleshooting method"] },
  { id: 2, name: "Infrastructure", weight: 24, code: "02", tone: "lime", topics: ["Devices & peripherals", "Networks", "Wireless configuration"] },
  { id: 3, name: "Applications & Software", weight: 18, code: "03", tone: "violet", topics: ["Operating systems", "Applications", "Browser configuration"] },
  { id: 4, name: "Software Development", weight: 13, code: "04", tone: "orange", topics: ["Programming logic", "Data types", "Development methods"] },
  { id: 5, name: "Data & Databases", weight: 13, code: "05", tone: "blue", topics: ["Database structures", "Data operations", "Backups & reporting"] },
  { id: 6, name: "Security", weight: 19, code: "06", tone: "red", topics: ["Security principles", "Threats", "Safe practices"] }
];

const quiz = [
  {
    question: "A user can reach websites by IP address but not by name. Which service is the likely cause?",
    choices: ["DHCP", "DNS", "NAT", "Bluetooth"],
    answer: 1,
    why: "DNS translates human-readable domain names into IP addresses."
  },
  {
    question: "Which storage option has no moving parts and usually provides the fastest startup time?",
    choices: ["HDD", "Optical disc", "SSD", "Magnetic tape"],
    answer: 2,
    why: "An SSD uses flash memory rather than spinning platters."
  },
  {
    question: "Which principle gives a user only the access required to do their job?",
    choices: ["Open access", "Least privilege", "Availability", "Obfuscation"],
    answer: 1,
    why: "Least privilege reduces exposure by limiting permissions to what is necessary."
  }
];

function Icon({ name, size = 20 }) {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    route: <><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M8.5 16.5c2-1 2.5-3 3-5s1.5-3.5 4-4"/></>,
    bolt: <path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    play: <path d="m8 5 11 7-11 7V5Z"/>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M21 12h-2M12 21v-2M3 12h2"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  const [done, setDone] = useState([]);
  const [question, setQuestion] = useState(0);
  const [choice, setChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    try { setDone(JSON.parse(localStorage.getItem("techplus-progress") || "[]")); } catch {}
  }, []);

  const progress = useMemo(() => domains.filter(d => done.includes(d.id)).reduce((sum, d) => sum + d.weight, 0), [done]);

  function toggleDomain(id) {
    const next = done.includes(id) ? done.filter(x => x !== id) : [...done, id];
    setDone(next);
    localStorage.setItem("techplus-progress", JSON.stringify(next));
  }

  function submitAnswer(index) {
    if (answered) return;
    setChoice(index);
    setAnswered(true);
    if (index === quiz[question].answer) setScore(s => s + 1);
  }

  function nextQuestion() {
    setQuestion(q => (q + 1) % quiz.length);
    setChoice(null);
    setAnswered(false);
  }

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Tech Plus Prep Lab home">
          <span className="brand-mark">T+</span>
          <span>PREP LAB</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#domains">Domains</a>
          <a href="#plan">Study plan</a>
          <a href="#practice">Practice</a>
        </nav>
        <a className="button compact" href="#practice"><Icon name="play" size={16}/> Quick quiz</a>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot"/> FC0-U71 · CompTIA Tech+</div>
          <h1>Build the foundation.<br/><span>Pass with confidence.</span></h1>
          <p className="hero-lead">One focused dashboard for the concepts, checkpoints, and practice you need to turn IT fundamentals into exam-day readiness.</p>
          <div className="hero-actions">
            <a className="button primary" href="#domains">Start the roadmap <Icon name="arrow" size={18}/></a>
            <a className="text-link" href="#plan">View 4-week plan <span>↘</span></a>
          </div>
          <div className="proof-row">
            <div><strong>6</strong><span>exam domains</span></div>
            <div><strong>60</strong><span>minutes</span></div>
            <div><strong>650</strong><span>passing score*</span></div>
          </div>
        </div>

        <div className="hero-panel" aria-label="Readiness dashboard">
          <div className="panel-top">
            <span>YOUR READINESS</span><span className="status">IN PROGRESS</span>
          </div>
          <div className="readiness-main">
            <div className="ring" style={{"--progress": `${progress * 3.6}deg`}}>
              <div><strong>{progress}%</strong><span>covered</span></div>
            </div>
            <div className="readiness-copy">
              <span>Current checkpoint</span>
              <strong>{done.length ? `${done.length} of 6 domains` : "Start with Domain 1"}</strong>
              <p>{done.length ? "Keep building consistent coverage." : "Map the terms, then test recall."}</p>
            </div>
          </div>
          <div className="signal-grid" aria-hidden="true">
            {[42,72,50,84,62,94,54,76,68,88,46,80].map((h,i)=><span key={i} style={{height:`${h}%`}}/>)}
          </div>
          <div className="panel-note"><Icon name="bolt" size={17}/><span><strong>Best next move</strong> Complete one domain, then answer 10 mixed questions.</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Exam details">
        <div className="shell ticker-inner">
          <span>FOUNDATIONAL IT</span><i/> <span>UP TO 70 QUESTIONS</span><i/> <span>MULTIPLE CHOICE</span><i/> <span>VENDOR-NEUTRAL</span><i/> <span>FC0-U71</span>
        </div>
      </section>

      <section id="domains" className="section shell">
        <div className="section-heading split">
          <div><span className="kicker">01 / KNOW THE BLUEPRINT</span><h2>Six domains.<br/>One clear roadmap.</h2></div>
          <p>Prioritize by exam weight, but build the concepts in sequence. Mark a domain complete when you can explain every topic without notes.</p>
        </div>
        <div className="domain-grid">
          {domains.map(domain => (
            <article className={`domain-card ${domain.tone} ${done.includes(domain.id) ? "complete" : ""}`} key={domain.id}>
              <div className="domain-head"><span>{domain.code}</span><strong>{domain.weight}%</strong></div>
              <div className="domain-icon"><Icon name={domain.id === 2 ? "route" : domain.id === 6 ? "target" : "grid"} size={25}/></div>
              <h3>{domain.name}</h3>
              <ul>{domain.topics.map(t => <li key={t}>{t}</li>)}</ul>
              <button onClick={() => toggleDomain(domain.id)} aria-pressed={done.includes(domain.id)}>
                <span>{done.includes(domain.id) ? "Covered" : "Mark covered"}</span>
                <span className="check-box"><Icon name="check" size={15}/></span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="plan" className="plan-section">
        <div className="shell">
          <div className="section-heading split light">
            <div><span className="kicker">02 / TRAIN WITH INTENT</span><h2>A practical<br/>four-week sprint.</h2></div>
            <p>Use short, repeatable sessions. Learn, retrieve from memory, then fix the gaps—before moving on.</p>
          </div>
          <div className="plan-grid">
            {[
              ["WEEK 01", "Map the foundations", "Domains 1 + 2", "Learn core terminology, devices, ports, networks, and the troubleshooting sequence."],
              ["WEEK 02", "Understand the systems", "Domains 3 + 4", "Connect operating systems and applications to programming logic and software methods."],
              ["WEEK 03", "Protect the data", "Domains 5 + 6", "Work through databases, security controls, threats, and responsible technology use."],
              ["WEEK 04", "Close every gap", "Mixed review", "Run timed sets, review every miss, and explain weak concepts in your own words."]
            ].map((item, i) => (
              <article className="week" key={item[0]}>
                <div className="week-number">0{i+1}</div>
                <span>{item[0]}</span><h3>{item[1]}</h3><strong>{item[2]}</strong><p>{item[3]}</p>
              </article>
            ))}
          </div>
          <div className="method-row">
            <span>THE 45-MINUTE LOOP</span>
            <div><b>20</b><small>learn</small></div><Icon name="arrow"/><div><b>15</b><small>recall</small></div><Icon name="arrow"/><div><b>10</b><small>review</small></div>
          </div>
        </div>
      </section>

      <section id="practice" className="section shell practice-section">
        <div className="practice-intro">
          <span className="kicker">03 / CHECK YOUR RECALL</span>
          <h2>Quick diagnostic.</h2>
          <p>Choose the best answer. The value is in understanding why—not memorizing the option.</p>
          <div className="quiz-score"><Icon name="target"/><span><strong>{score}</strong> correct · question {question + 1} of {quiz.length}</span></div>
        </div>
        <div className="quiz-card">
          <div className="quiz-meta"><span>QUESTION {String(question + 1).padStart(2,"0")}</span><span>TECH+ CHECKPOINT</span></div>
          <h3>{quiz[question].question}</h3>
          <div className="choices">
            {quiz[question].choices.map((answer, i) => {
              const state = answered ? (i === quiz[question].answer ? "correct" : choice === i ? "wrong" : "muted") : "";
              return <button className={state} key={answer} onClick={() => submitAnswer(i)} disabled={answered}>
                <span>{String.fromCharCode(65+i)}</span>{answer}{state === "correct" && <Icon name="check" size={18}/>} 
              </button>;
            })}
          </div>
          {answered && <div className="explanation"><strong>{choice === quiz[question].answer ? "Correct." : "Not quite."}</strong> {quiz[question].why}</div>}
          <div className="quiz-footer"><span>{answered ? "Review the reason before moving on." : "Select one answer."}</span><button className="button primary" onClick={nextQuestion} disabled={!answered}>Next question <Icon name="arrow" size={17}/></button></div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div><span className="brand"><span className="brand-mark">T+</span><span>PREP LAB</span></span><p>Learn the system. Trust the process.</p></div>
          <p className="disclaimer">Independent study companion. CompTIA and Tech+ are trademarks of CompTIA, Inc. *Always verify current exam details with the official exam page before booking.</p>
        </div>
      </footer>
    </main>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { chapters, glossary, reviewQuestions } from "../data/materials";

function Icon({ name, size = 20 }) {
  const paths = {
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    check: <path d="m5 12 4 4L19 6"/>, target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M21 12h-2M12 21v-2M3 12h2"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>, menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    light: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  const [completed, setCompleted] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { try { setCompleted(JSON.parse(localStorage.getItem("techplus-id-progress") || "[]")); } catch {} }, []);
  const progress = useMemo(() => Math.round((completed.length / chapters.length) * 100), [completed]);
  function toggleChapter(id) { const next = completed.includes(id) ? completed.filter(x => x !== id) : [...completed, id]; setCompleted(next); localStorage.setItem("techplus-id-progress", JSON.stringify(next)); }

  return <main>
    <header className="topbar"><div className="shell nav-inner">
      <a className="brand" href="#atas"><span className="brand-mark">T+</span><span><b>PREP LAB</b><small>PANDUAN FC0-U71</small></span></a>
      <nav><a href="#materi">Materi</a><a href="#strategi">Strategi belajar</a><a href="#evaluasi">Evaluasi</a><a href="#glosarium">Glosarium</a></nav>
      <a className="nav-cta" href="#materi">Mulai belajar <Icon name="arrow" size={16}/></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu"><Icon name="menu"/></button>
    </div>{menuOpen && <div className="mobile-nav"><a href="#materi">Materi</a><a href="#strategi">Strategi belajar</a><a href="#evaluasi">Evaluasi</a><a href="#glosarium">Glosarium</a></div>}</header>

    <section id="atas" className="hero shell"><div className="hero-copy">
      <div className="eyebrow"><span>COMPTIA TECH+</span><i/> FC0-U71 · VERSION 2.0</div>
      <h1>Fondasi IT yang<br/><em>runtut dan utuh.</em></h1>
      <p>Materi belajar berbahasa Indonesia untuk memahami seluruh domain CompTIA Tech+. Istilah teknis standar tetap dipertahankan agar kamu terbiasa dengan bahasa yang muncul pada ujian.</p>
      <div className="hero-actions"><a className="button primary" href="#materi">Buka materi Bab 1 <Icon name="arrow" size={18}/></a><a className="button soft" href="#strategi">Lihat cara belajar</a></div>
      <div className="exam-facts"><div><strong>6</strong><span>domain utama</span></div><div><strong>31</strong><span>subbab materi</span></div><div><strong>60</strong><span>menit ujian</span></div><div><strong>650</strong><span>skor kelulusan</span></div></div>
    </div><div className="hero-card">
      <div className="hero-card-head"><span>PROGRES BELAJAR</span><span>{completed.length}/6 BAB</span></div>
      <div className="progress-number"><strong>{progress}%</strong><span>materi selesai</span></div><div className="progress-track"><span style={{width:`${progress}%`}}/></div>
      <div className="chapter-mini-list">{chapters.map(ch => <a href={`#bab-${ch.id}`} key={ch.id} className={completed.includes(ch.id)?"done":""}><span>0{ch.id}</span><b>{ch.shortTitle}</b><i><Icon name="check" size={13}/></i></a>)}</div>
      <p><Icon name="light" size={17}/> Tandai bab setelah kamu mampu menjelaskan kembali konsep utamanya tanpa melihat catatan.</p>
    </div></section>

    <section className="blueprint-strip"><div className="shell">{chapters.map(ch => <a href={`#bab-${ch.id}`} key={ch.id}><span>0{ch.id}</span><b>{ch.weight}%</b></a>)}</div></section>

    <section id="materi" className="learning shell"><aside className="toc"><div className="toc-title"><Icon name="book" size={18}/><span>DAFTAR MATERI</span></div>
      {chapters.map(ch => <div className="toc-group" key={ch.id}><a className="toc-chapter" href={`#bab-${ch.id}`}><span>0{ch.id}</span>{ch.shortTitle}</a><div>{ch.sections.map(s => <a key={s.id} href={`#bagian-${s.id}`}>{s.id} {s.navTitle}</a>)}</div></div>)}
    </aside><div className="material-column"><div className="material-intro"><span className="section-label">MATERI LENGKAP</span><h2>Belajar per bab,<br/>pahami sampai ke subbab.</h2><p>Urutannya mengikuti Exam Objectives FC0-U71. Setiap subbab berisi konsep inti, istilah penting, dan contoh penerapan agar materi tidak berhenti sebagai hafalan.</p></div>
      {chapters.map(ch => <article id={`bab-${ch.id}`} className="chapter" key={ch.id}>
        <header className="chapter-header"><div className="chapter-number">0{ch.id}</div><div><span>BAB {ch.id} · BOBOT {ch.weight}%</span><h2>{ch.title}</h2><p>{ch.description}</p></div></header>
        <div className="chapter-objective"><Icon name="target" size={18}/><div><strong>Target pemahaman</strong><p>{ch.objective}</p></div></div>
        <div className="subsections">{ch.sections.map(s => <section id={`bagian-${s.id}`} className="subsection" key={s.id}>
          <div className="subsection-title"><span>{s.id}</span><div><small>{s.label}</small><h3>{s.title}</h3></div></div><p className="lead">{s.summary}</p>
          <div className="concept-grid">{s.concepts.map(c => <div className="concept" key={c.term}><strong>{c.term}</strong><p>{c.explanation}</p></div>)}</div>
          {s.example && <div className="example"><span>CONTOH PENERAPAN</span><p>{s.example}</p></div>}<div className="remember"><span>INGAT</span><p>{s.remember}</p></div>
        </section>)}</div>
        <button className={`complete-button ${completed.includes(ch.id)?"is-complete":""}`} onClick={() => toggleChapter(ch.id)}><span className="complete-icon"><Icon name="check" size={17}/></span><span><b>{completed.includes(ch.id)?"Bab sudah dipahami":"Tandai bab sudah dipahami"}</b><small>{completed.includes(ch.id)?"Klik kembali untuk membatalkan":"Progres tersimpan pada browser ini"}</small></span></button>
      </article>)}
    </div></section>

    <section id="strategi" className="strategy-section"><div className="shell strategy-grid"><div className="strategy-heading"><span className="section-label">STRATEGI BELAJAR</span><h2>Jangan hanya membaca.<br/>Bangun recall.</h2><p>Siklus sederhana ini membuat sesi belajar lebih terarah dan membantu menemukan bagian yang belum benar-benar dipahami.</p></div><div className="study-loop">
      <div><span>01</span><strong>Baca konsep</strong><p>Pelajari satu subbab selama 20–25 menit. Cari hubungan antaristilah, bukan definisi terpisah.</p></div><div><span>02</span><strong>Tutup catatan</strong><p>Jelaskan kembali konsep menggunakan bahasamu sendiri atau gambar alur sederhananya.</p></div><div><span>03</span><strong>Coba langsung</strong><p>Praktikkan hal kecil: cek IP address, kelola permission, atau buat tabel database sederhana.</p></div><div><span>04</span><strong>Perbaiki celah</strong><p>Catat bagian yang salah, pelajari ulang, lalu uji kembali setelah jeda satu atau dua hari.</p></div>
    </div></div></section>

    <section id="evaluasi" className="review shell"><div className="review-heading"><span className="section-label">EVALUASI RINGKAS</span><h2>Tiga pertanyaan untuk<br/>menguji cara berpikir.</h2><p>Kuis dibuat singkat. Fokus utama situs ini tetap materi dan pemahaman konsep.</p></div><div className="question-list">{reviewQuestions.map((q,i) => <article key={q.question}><span>0{i+1}</span><h3>{q.question}</h3><details><summary>Lihat jawaban dan penjelasan</summary><p><strong>{q.answer}</strong> — {q.explanation}</p></details></article>)}</div></section>

    <section id="glosarium" className="glossary-section"><div className="shell"><div className="glossary-heading"><div><span className="section-label">GLOSARIUM INTI</span><h2>Istilah yang perlu<br/>langsung dikenali.</h2></div><p>Gunakan nama global standard IT saat belajar. Terjemahan di bawah hanya membantu memahami fungsi dan konteksnya.</p></div><div className="glossary-grid">{glossary.map(g => <div key={g.term}><strong>{g.term}</strong><p>{g.meaning}</p></div>)}</div></div></section>

    <footer><div className="shell footer-inner"><div><span className="brand"><span className="brand-mark">T+</span><span><b>PREP LAB</b><small>PANDUAN FC0-U71</small></span></span><p>Bangun fondasi. Pahami sistem. Hadapi ujian dengan tenang.</p></div><p className="disclaimer">Situs pendamping belajar independen. CompTIA dan Tech+ adalah trademark milik CompTIA, Inc. Periksa kembali detail ujian terbaru pada situs resmi CompTIA sebelum melakukan pendaftaran.</p></div></footer>
  </main>;
}

import Link from "next/link";
import { chapters } from "../data/materials";
import { Icon, SiteFooter, SiteHeader } from "./SiteChrome";
import ChapterCompletion from "./ChapterCompletion";

export default function ChapterPage({chapterId}){
  const chapter=chapters.find(c=>c.id===chapterId);
  const prev=chapters.find(c=>c.id===chapterId-1);
  const next=chapters.find(c=>c.id===chapterId+1);
  return <main><SiteHeader/>
    <div className="mobile-chapter-nav">{chapters.map(c=><Link className={c.id===chapterId?"active":""} href={`/materi/bab-${c.id}`} key={c.id}>Bab {c.id}</Link>)}</div>
    <section className="chapter-hero"><div className="shell"><div className="breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/materi">Materi</Link><span>/</span><b>Bab {chapter.id}</b></div>
      <div className="chapter-hero-grid"><div><span className="section-label">BAB {chapter.id} · BOBOT {chapter.weight}%</span><h1>{chapter.title}</h1><p>{chapter.description}</p></div><div className="chapter-stat"><strong>{chapter.sections.length}</strong><span>subbab</span><i/><strong>{chapter.weight}%</strong><span>bobot ujian</span></div></div>
    </div></section>
    <section className="chapter-layout shell"><aside className="chapter-sidebar"><Link className="back-home" href="/materi"><Icon name="back" size={16}/> Semua bab</Link><div className="side-chapters">{chapters.map(c=><Link className={c.id===chapterId?"active":""} href={`/materi/bab-${c.id}`} key={c.id}><span>0{c.id}</span><b>{c.shortTitle}</b></Link>)}</div><div className="side-subtitle">DALAM BAB INI</div><div className="side-sections">{chapter.sections.map(s=><a href={`#bagian-${s.id}`} key={s.id}><span>{s.id}</span>{s.navTitle}</a>)}</div></aside>
      <article className="chapter-content"><div className="chapter-objective"><Icon name="target" size={18}/><div><strong>Target pemahaman</strong><p>{chapter.objective}</p></div></div>
        {chapter.sections.map((s,index)=><section id={`bagian-${s.id}`} className="subsection" key={s.id}><div className="reading-progress"><span>SUBBAB {index+1} DARI {chapter.sections.length}</span><i><b style={{width:`${((index+1)/chapter.sections.length)*100}%`}}/></i></div><div className="subsection-title"><span>{s.id}</span><div><small>{s.label}</small><h2>{s.title}</h2></div></div><p className="lead">{s.summary}</p><div className="concept-grid">{s.concepts.map(c=><div className="concept" key={c.term}><strong>{c.term}</strong><p>{c.explanation}</p></div>)}</div>{s.example&&<div className="example"><span>CONTOH PENERAPAN</span><p>{s.example}</p></div>}<div className="remember"><span>INGAT</span><p>{s.remember}</p></div></section>)}
        <ChapterCompletion chapterId={chapterId}/>
        <nav className="chapter-pagination">{prev?<Link href={`/materi/bab-${prev.id}`}><Icon name="back"/><span><small>BAB SEBELUMNYA</small><b>{prev.shortTitle}</b></span></Link>:<span/>}{next?<Link className="next" href={`/materi/bab-${next.id}`}><span><small>BAB BERIKUTNYA</small><b>{next.shortTitle}</b></span><Icon name="arrow"/></Link>:<Link className="next" href="/evaluasi"><span><small>SELESAI</small><b>Evaluasi ringkas</b></span><Icon name="arrow"/></Link>}</nav>
      </article></section><SiteFooter/></main>
}

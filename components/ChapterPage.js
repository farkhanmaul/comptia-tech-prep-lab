import Link from "next/link";
import { chapters } from "../data/materials";
import { Icon, SiteFooter, SiteHeader } from "./SiteChrome";
import { ChapterProgressSummary, ChapterSidebarTracker, SubsectionNavigation, SubsectionProgress } from "./ChapterProgress";

export default function ChapterPage({chapterId}){
  const chapter=chapters.find(c=>c.id===chapterId);
  const prev=chapters.find(c=>c.id===chapterId-1);
  const next=chapters.find(c=>c.id===chapterId+1);
  return <main><SiteHeader/>
    <div className="mobile-chapter-nav">{chapters.map(c=><Link className={c.id===chapterId?"active":""} href={`/materi/bab-${c.id}`} key={c.id}>Bab {c.id}</Link>)}</div>
    <section className="chapter-hero"><div className="shell"><div className="breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/materi">Materi</Link><span>/</span><b>Bab {chapter.id}</b></div>
      <div className="chapter-hero-grid"><div><span className="section-label">BAB {chapter.id} · {chapter.officialTitle}</span><h1>{chapter.title}</h1><p>{chapter.description}</p></div><div className="chapter-stat"><strong>{chapter.weight}%</strong><span>bobot ujian</span><i/><strong className="secondary-stat">{chapter.sections.length}</strong><span>subbab</span></div></div>
    </div></section>
    <section className="chapter-layout shell"><aside className="chapter-sidebar"><Link className="back-home" href="/materi"><Icon name="back" size={16}/> Semua bab</Link><div className="side-chapters">{chapters.map(c=><Link className={c.id===chapterId?"active":""} href={`/materi/bab-${c.id}`} key={c.id}><span>0{c.id}</span><b>{c.shortTitle}</b></Link>)}</div><div className="side-subtitle">PROGRES DALAM BAB INI</div><ChapterSidebarTracker chapterId={chapterId} sections={chapter.sections.map(({id,navTitle})=>({id,navTitle}))}/></aside>
      <article className="chapter-content"><div className="chapter-objective"><Icon name="target" size={18}/><div><strong>Setelah mempelajari bab ini, kamu mampu:</strong><ul>{chapter.objectives.map(item=><li key={item}>{item}</li>)}</ul></div></div>
        {chapter.sections.map((s,index)=>{
          const previousSection=chapter.sections[index-1];
          const nextSection=chapter.sections[index+1];
          const previous=previousSection?{href:`#bagian-${previousSection.id}`,label:previousSection.id}:prev?{href:`/materi/bab-${prev.id}#bagian-${prev.sections.at(-1).id}`,label:prev.sections.at(-1).id,external:true}:null;
          const following=nextSection?{href:`#bagian-${nextSection.id}`,label:nextSection.id}:{href:next?`/materi/bab-${next.id}#bagian-${next.sections[0].id}`:"/evaluasi",label:next?next.sections[0].id:"Evaluasi",external:true};
          return <section id={`bagian-${s.id}`} className="subsection" key={s.id}><SubsectionProgress chapterId={chapterId} index={index} total={chapter.sections.length}/><div className="subsection-title"><span>{s.id}</span><div><small>{s.label}</small><h2>{s.title}</h2></div></div><p className="lead">{s.summary}</p><div className="concept-grid">{s.concepts.map(c=><div className="concept" key={c.term}><strong>{c.term}</strong><p>{c.explanation}</p></div>)}</div>{s.example&&<div className="example"><span>CONTOH PENERAPAN</span><p>{s.example}</p></div>}<div className="remember"><span>INGAT</span><p>{s.remember}</p></div><SubsectionNavigation chapterId={chapterId} sectionId={s.id} previous={previous} next={following}/></section>
        })}
        <ChapterProgressSummary chapterId={chapterId}/>
        <nav className="chapter-pagination">{prev?<Link href={`/materi/bab-${prev.id}`}><Icon name="back"/><span><small>BAB SEBELUMNYA</small><b>{prev.shortTitle}</b></span></Link>:<span/>}{next?<Link className="next" href={`/materi/bab-${next.id}`}><span><small>BAB BERIKUTNYA</small><b>{next.shortTitle}</b></span><Icon name="arrow"/></Link>:<Link className="next" href="/evaluasi"><span><small>SELESAI</small><b>Evaluasi ringkas</b></span><Icon name="arrow"/></Link>}</nav>
      </article></section><SiteFooter/></main>
}

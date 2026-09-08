import Link from "next/link";
import { chapters } from "../data/materials";
import { lessonDetails } from "../data/lesson-details";
import { Icon, SiteFooter, SiteHeader } from "./SiteChrome";
import { LessonNavigation, LessonProgress, LessonSidebarTracker } from "./ChapterProgress";
import KnowledgeCheck from "./KnowledgeCheck";
import LessonModule from "./LessonModule";

function routeFor(id){const [chapter,section]=id.split(".");return `/materi/${chapter}/${section}`}

export default function ChapterPage({chapterId,sectionId}){
  const chapter=chapters.find(item=>item.id===chapterId);
  const currentId=sectionId||chapter?.sections[0]?.id;
  const sectionIndex=chapter?.sections.findIndex(item=>item.id===currentId)??-1;
  const section=chapter?.sections[sectionIndex];
  if(!chapter||!section)return <main><SiteHeader/><section className="inner-content shell"><h1>Materi tidak ditemukan</h1><Link className="button primary" href="/materi">Kembali ke materi</Link></section><SiteFooter/></main>;

  const allSections=chapters.flatMap(item=>item.sections.map(part=>({...part,chapterId:item.id})));
  const globalIndex=allSections.findIndex(item=>item.id===currentId);
  const before=allSections[globalIndex-1];
  const after=allSections[globalIndex+1];
  const previous=before?{href:routeFor(before.id),label:`${before.id} ${before.navTitle}`}:null;
  const next=after?{href:routeFor(after.id),label:`${after.id} ${after.navTitle}`}:{href:"/evaluasi",label:"Evaluasi ringkas"};
  const detail=lessonDetails[currentId];

  return <main><SiteHeader/>
    <div className="mobile-chapter-nav">{chapters.map(item=><Link className={item.id===chapterId?"active":""} href={routeFor(item.sections[0].id)} key={item.id}>Bab {item.id}</Link>)}</div>
    <div className="lesson-layout shell">
      <aside className="lesson-sidebar"><Link className="back-home" href="/materi"><Icon name="back" size={16}/> Semua materi</Link><nav className="chapter-switcher" aria-label="Pilih bab">{chapters.map(item=><Link className={item.id===chapterId?"active":""} href={routeFor(item.sections[0].id)} key={item.id}><span>0{item.id}</span><b>{item.shortTitle}</b></Link>)}</nav><div className="active-chapter-label">Bab {chapterId} · {chapter.sections.length} subbab</div><LessonSidebarTracker chapterId={chapterId} currentId={currentId} sections={chapter.sections.map(({id,navTitle})=>({id,navTitle}))}/></aside>
      <article className="lesson-article"><div className="lesson-breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/materi">Materi</Link><span>/</span><b>Bab {chapterId}</b></div><LessonProgress chapterId={chapterId} total={chapter.sections.length} sectionId={currentId}/><header className="lesson-header"><div className="lesson-meta">BAB {chapterId} · SUBBAB {sectionIndex+1} DARI {chapter.sections.length} · {chapter.officialTitle}</div><h1>{section.title}</h1><p>{section.summary}</p></header>
        <section className="article-section key-concepts"><h2>Konsep penting</h2><dl>{section.concepts.map(item=><div key={item.term}><dt>{item.term}</dt><dd>{item.explanation}</dd></div>)}</dl></section>
        <LessonModule detail={detail}/>
        {section.example&&<section className="article-section case-study"><h2>Studi kasus</h2><p>{section.example}</p></section>}
        <KnowledgeCheck sectionId={section.id} quiz={detail.quiz}/>
        <LessonNavigation sectionId={section.id} previous={previous} next={next}/>
      </article>
    </div><SiteFooter/>
  </main>;
}

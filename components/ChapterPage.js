import Link from "next/link";
import { chapters } from "../data/materials";
import { lessonDetails } from "../data/lesson-details";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { LessonProgress } from "./ChapterProgress";
import KnowledgeCheck from "./KnowledgeCheck";
import LessonModule from "./LessonModule";
import LessonSidebar from "./LessonSidebar";

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
  const next=after?{href:routeFor(after.id),label:`${after.id} ${after.navTitle}`}:{href:`/evaluasi?bab=${chapterId}`,label:`Evaluasi Bab ${chapterId}`};
  const detail=lessonDetails[currentId];
  const sideSections=chapter.sections.map(({id,navTitle})=>({id,navTitle}));

  return <main className="lesson-page"><SiteHeader/>
    <div className="lesson-layout shell">
      <LessonSidebar chapters={chapters} chapterId={chapterId} currentId={currentId} sections={sideSections}/>
      <div className="lesson-main">
        <div className="lesson-breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/materi">Materi</Link><span>/</span><b>Bab {chapterId}</b></div>
        <LessonProgress chapterId={chapterId} total={chapter.sections.length} sectionId={currentId} index={sectionIndex}/>
        <article className="lesson-article lesson-frame">
          <header className="lesson-header"><div className="lesson-meta">BAB {chapterId} · {chapter.officialTitle}</div><h1>{section.title}</h1><p>{section.summary}</p></header>
          <LessonModule detail={detail} concepts={section.concepts} example={section.example}/>
        </article>
        <KnowledgeCheck sectionId={section.id} quiz={detail.quiz} previous={previous} next={next}/>
      </div>
    </div><SiteFooter/>
  </main>;
}

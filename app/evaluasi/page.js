import Link from "next/link";
import ChapterEvaluation from "../../components/ChapterEvaluation";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { chapters } from "../../data/materials";
import { lessonDetails } from "../../data/lesson-details";

export const metadata={title:"Evaluasi Bab | CompTIA Tech+ Prep Lab"};

function sampleQuestions(sections){
  const indexes=sections.length<=4?sections.map((_,index)=>index):[0,Math.floor((sections.length-1)/3),Math.floor((sections.length-1)*2/3),sections.length-1];
  return [...new Set(indexes)].slice(0,4).map(index=>{const section=sections[index];return {id:section.id,...lessonDetails[section.id].quiz}});
}

export default function EvaluationPage(){
  const evaluationChapters=chapters.map(chapter=>({id:chapter.id,title:chapter.shortTitle,questions:sampleQuestions(chapter.sections)}));
  return <main><SiteHeader/><section className="page-hero"><div className="shell"><div className="breadcrumb"><Link href="/">Beranda</Link><span>/</span><b>Evaluasi bab</b></div><span className="section-label">EVALUASI BAB</span><h1>Uji penguasaan, bukan sekadar ingatan.</h1><p>Setiap bab memiliki empat soal yang mewakili definisi, skenario, perbandingan, dan penerapan. Pembahasan muncul setelah kamu menjawab.</p></div></section><section className="inner-content shell"><ChapterEvaluation chapters={evaluationChapters}/><Link className="button soft back-material" href="/materi">Kembali ke peta materi</Link></section><SiteFooter/></main>;
}

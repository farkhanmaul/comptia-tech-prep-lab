import Link from "next/link";
import { reviewQuestions } from "../../data/materials";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata={title:"Evaluasi | CompTIA Tech+ Prep Lab"};

export default function EvaluationPage(){return <main><SiteHeader/><section className="page-hero"><div className="shell"><div className="breadcrumb"><Link href="/">Beranda</Link><span>/</span><b>Evaluasi</b></div><span className="section-label">EVALUASI RINGKAS</span><h1>Uji cara berpikir.</h1><p>Kuis sengaja singkat. Gunakan pertanyaan ini setelah menyelesaikan materi untuk mengecek apakah konsep sudah dapat diterapkan, bukan hanya diingat.</p></div></section><section className="inner-content shell"><div className="question-list evaluation-list">{reviewQuestions.map((q,i)=><article key={q.question}><span>0{i+1}</span><h3>{q.question}</h3><details><summary>Lihat jawaban dan penjelasan</summary><p><strong>{q.answer}</strong> — {q.explanation}</p></details></article>)}</div><Link className="button soft back-material" href="/materi">Kembali ke peta materi</Link></section><SiteFooter/></main>}

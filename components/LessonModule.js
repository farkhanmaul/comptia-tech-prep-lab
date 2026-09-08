export default function LessonModule({detail}){
  if(!detail)return null;
  return <div className="lesson-module">
    <section className="lesson-objective"><span>TUJUAN PEMBELAJARAN</span><p>{detail.objective}</p></section>

    <section className="lesson-block"><span className="lesson-kicker">CARA KERJA & HUBUNGAN KONSEP</span><div className="lesson-prose">{detail.mechanism.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></section>

    <section className={`lesson-visual ${detail.visual.type}`} aria-label={detail.visual.title}><div className="lesson-visual-head"><span>VISUAL KONSEP</span><strong>{detail.visual.title}</strong></div><div className="lesson-visual-content">{detail.visual.items.map(([label,text],index)=><div className="visual-item" key={label}><i>{String(index+1).padStart(2,"0")}</i><div><strong>{label}</strong><p>{text}</p></div></div>)}</div></section>

    <div className="lesson-two-column"><section className="lesson-block pitfalls"><span className="lesson-kicker">KESALAHAN UMUM & BATASAN</span><ul>{detail.pitfalls.map(item=><li key={item}>{item}</li>)}</ul></section><section className="lesson-block exam-note"><span className="lesson-kicker">CATATAN UNTUK UJIAN</span><p>{detail.examNote}</p></section></div>

    <section className="lesson-recap"><span>RINGKASAN INTI</span><ul>{detail.recap.map(item=><li key={item}>{item}</li>)}</ul></section>
  </div>;
}

export default function LessonModule({detail}){
  if(!detail)return null;
  const caption=detail.visual.type==="flow"?"Baca mengikuti arah connector untuk melihat urutan proses.":detail.visual.type==="compare"?"Setiap node mewakili pilihan yang setara untuk dibandingkan.":"Connector membantu menunjukkan keterkaitan antarlapisan atau komponen.";
  return <>
    <section className="article-section lesson-goal"><h2>Tujuan pembelajaran</h2><p>{detail.objective}</p></section>
    <section className="article-section"><h2>Cara kerja dan hubungan konsep</h2>{detail.mechanism.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>
    <figure className={`concept-diagram ${detail.visual.type}`}><h2>{detail.visual.title}</h2><div className="diagram-canvas">{detail.visual.items.map(([label,text],index)=><div className="diagram-node" key={label}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{label}</strong><p>{text}</p></div></div>)}</div><figcaption>{caption}</figcaption></figure>
    <section className="article-section common-errors"><h2>Kesalahan yang sering terjadi</h2>{detail.pitfalls.map((item,index)=><p key={item}><strong>{index+1}.</strong> {item}</p>)}</section>
    <aside className="exam-callout"><strong>Catatan untuk ujian</strong><p>{detail.examNote}</p></aside>
    <section className="article-section lesson-recap"><h2>Ringkasan</h2><ul>{detail.recap.map(item=><li key={item}>{item}</li>)}</ul></section>
  </>;
}

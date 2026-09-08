"use client";

import { useEffect, useState } from "react";
import { readProgress, writeProgress } from "../data/navigation";
import { Icon } from "./SiteChrome";

export default function KnowledgeCheck({sectionId,quiz}){
  const [selected,setSelected]=useState(null);
  const [solved,setSolved]=useState(false);

  useEffect(()=>setSolved(readProgress().includes(sectionId)),[sectionId]);

  function choose(index){
    setSelected(index);
    if(index!==quiz.answer)return;
    const progress=readProgress();
    if(!progress.includes(sectionId))writeProgress([...progress,sectionId]);
    setSolved(true);
  }

  const answered=selected!==null;
  const correct=selected===quiz.answer;
  return <section className={`knowledge-check ${solved?"solved":""}`} id={`quiz-${sectionId}`}><div className="knowledge-head"><div><h2>Latihan singkat</h2><p>Jawab benar untuk menyelesaikan subbab ini.</p></div>{solved&&<em><Icon name="check" size={14}/> Dipahami</em>}</div><h3>{quiz.question}</h3><div className="quiz-options">{quiz.options.map((option,index)=>{
    const state=answered&&index===selected?(correct?"correct":"incorrect"):answered&&index===quiz.answer?"answer":"";
    return <button className={state} onClick={()=>choose(index)} key={option} aria-pressed={selected===index}><span>{String.fromCharCode(65+index)}</span>{option}</button>;
  })}</div>{answered&&<div className={`quiz-feedback ${correct?"correct":"incorrect"}`} role="status"><strong>{correct?"Tepat.":"Belum tepat."}</strong><p>{quiz.explanation}{!correct&&" Coba pilih jawaban lain setelah meninjau penjelasan di atas."}</p></div>}</section>;
}

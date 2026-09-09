"use client";

import { useEffect, useMemo, useState } from "react";

const questionTypes=["Definisi","Skenario","Perbandingan","Penerapan"];

export default function ChapterEvaluation({chapters}){
  const [chapterId,setChapterId]=useState(chapters[0].id);
  const [answers,setAnswers]=useState({});
  useEffect(()=>{
    const requested=Number(new URLSearchParams(window.location.search).get("bab"));
    if(chapters.some(item=>item.id===requested))setChapterId(requested);
  },[chapters]);
  const chapter=chapters.find(item=>item.id===chapterId);
  const questions=chapter.questions;
  const answered=questions.filter(item=>answers[item.id]!==undefined).length;
  const correct=questions.filter(item=>answers[item.id]===item.answer).length;
  const complete=answered===questions.length;
  const score=complete?Math.round(correct/questions.length*100):null;
  const summary=useMemo(()=>complete?`${correct} dari ${questions.length} jawaban benar · skor ${score}%`:`${answered} dari ${questions.length} soal dijawab`,[complete,correct,questions.length,score,answered]);

  return <div className="evaluation-lab">
    <nav className="evaluation-tabs" aria-label="Pilih evaluasi bab">{chapters.map(item=><button className={item.id===chapterId?"active":""} onClick={()=>setChapterId(item.id)} key={item.id} aria-pressed={item.id===chapterId}>Bab {item.id}<span>{item.title}</span></button>)}</nav>
    <div className="evaluation-summary"><div><span>Evaluasi Bab {chapter.id}</span><strong>{chapter.title}</strong></div><b>{summary}</b></div>
    <div className="evaluation-questions">{questions.map((item,index)=>{
      const selected=answers[item.id];
      const hasAnswer=selected!==undefined;
      const isCorrect=selected===item.answer;
      return <article key={item.id}><div className="evaluation-question-head"><span>{questionTypes[index]}</span><b>{index+1}/{questions.length}</b></div><h2>{item.question}</h2><div className="evaluation-options">{item.options.map((option,optionIndex)=>{const state=hasAnswer&&optionIndex===selected?(isCorrect?"correct":"incorrect"):hasAnswer&&optionIndex===item.answer?"answer":"";return <button className={state} onClick={()=>setAnswers(current=>({...current,[item.id]:optionIndex}))} key={option} aria-pressed={selected===optionIndex}><span>{String.fromCharCode(65+optionIndex)}</span>{option}</button>})}</div>{hasAnswer&&<div className={`evaluation-feedback ${isCorrect?"correct":"incorrect"}`} role="status"><strong>{isCorrect?"Benar.":"Belum tepat."}</strong><p>{item.explanation}</p></div>}</article>;
    })}</div>
    {complete&&<div className="evaluation-result"><span>HASIL BAB {chapter.id}</span><strong>{score}%</strong><p>{score>=75?"Pemahaman dasar sudah cukup kuat. Tinjau kembali jawaban yang salah sebelum berpindah bab.":"Pelajari ulang subbab yang masih salah, lalu ulangi evaluasi untuk memperkuat pemahaman."}</p><button className="button soft" onClick={()=>setAnswers(current=>{const next={...current};questions.forEach(item=>delete next[item.id]);return next})}>Ulangi evaluasi bab</button></div>}
  </div>;
}

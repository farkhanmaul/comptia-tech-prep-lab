"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { readProgress, readReview, writeProgress, writeReview } from "../data/navigation";
import { Icon } from "./SiteChrome";

export default function KnowledgeCheck({sectionId,quiz,previous,next}){
  const router=useRouter();
  const [open,setOpen]=useState(false);
  const [selected,setSelected]=useState(null);
  const [solved,setSolved]=useState(false);
  const [needsReview,setNeedsReview]=useState(false);
  const dialogRef=useRef(null);
  const firstOptionRef=useRef(null);

  useEffect(()=>{
    setSolved(readProgress().includes(sectionId));
    setNeedsReview(readReview().includes(sectionId));
  },[sectionId]);

  useEffect(()=>{
    if(!open)return;
    const previousFocus=document.activeElement;
    document.body.classList.add("modal-open");
    firstOptionRef.current?.focus();
    const onKey=event=>{
      if(event.key==="Escape"){setOpen(false);return}
      if(event.key!=="Tab")return;
      const focusable=[...dialogRef.current.querySelectorAll("button,[href],[tabindex]:not([tabindex='-1'])")].filter(item=>!item.disabled);
      if(!focusable.length)return;
      const first=focusable[0],last=focusable.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    };
    window.addEventListener("keydown",onKey);
    return()=>{document.body.classList.remove("modal-open");window.removeEventListener("keydown",onKey);previousFocus?.focus?.()};
  },[open]);

  function openOrContinue(){
    if(solved){router.push(next.href);return}
    setOpen(true);
  }

  function choose(index){
    setSelected(index);
    const correct=index===quiz.answer;
    if(correct){
      const progress=readProgress();
      if(!progress.includes(sectionId))writeProgress([...progress,sectionId]);
      writeReview(readReview().filter(id=>id!==sectionId));
      setSolved(true);
      setNeedsReview(false);
    }else{
      const review=readReview();
      if(!review.includes(sectionId))writeReview([...review,sectionId]);
      setNeedsReview(true);
    }
  }

  function returnToMaterial(){
    setOpen(false);
    requestAnimationFrame(()=>document.getElementById("konsep-inti")?.focus());
  }

  const answered=selected!==null;
  const correct=selected===quiz.answer;
  const status=solved?"✓ Subbab selesai":needsReview?"! Perlu diulang":"○ Belum selesai";
  return <>
    <nav className="lesson-navigation" aria-label={`Navigasi subbab ${sectionId}`}>
      {previous?<Link className="previous" href={previous.href}><Icon name="back" size={16}/><span><small>Sebelumnya</small><b>{previous.label}</b></span></Link>:<span/>}
      <div className={`lesson-status ${solved?"done":needsReview?"review":""}`} aria-live="polite">{status}</div>
      <button className="next" onClick={openOrContinue}><span><small>Berikutnya</small><b>{next.label}</b></span><Icon name="arrow" size={16}/></button>
    </nav>

    {open&&<div className="checkpoint-overlay" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}><section className="checkpoint-dialog" role="dialog" aria-modal="true" aria-labelledby={`checkpoint-title-${sectionId}`} ref={dialogRef}>
      <button className="checkpoint-close" onClick={()=>setOpen(false)} aria-label="Tutup checkpoint">×</button>
      <div className="checkpoint-heading"><span>CHECKPOINT {sectionId}</span><h2 id={`checkpoint-title-${sectionId}`}>Cek pemahaman sebelum lanjut</h2><p>Satu soal utama untuk memastikan konsep inti sudah dipahami.</p></div>
      <h3>{quiz.question}</h3>
      <div className="checkpoint-options">{quiz.options.map((option,index)=>{
        const state=answered&&index===selected?(correct?"correct":"incorrect"):"";
        return <button ref={index===0?firstOptionRef:null} className={state} onClick={()=>choose(index)} key={option} aria-pressed={selected===index}><span>{String.fromCharCode(65+index)}</span>{option}</button>;
      })}</div>
      {answered&&<div className={`checkpoint-feedback ${correct?"correct":"incorrect"}`} role="status"><strong>{correct?"Benar — subbab selesai.":"Belum tepat — tandai untuk diulang."}</strong><p>{quiz.explanation}</p></div>}
      <div className="checkpoint-actions"><button className="text-action" onClick={returnToMaterial}>Kembali ke materi terkait</button>{answered&&!correct&&<button className="button soft" onClick={()=>{setSelected(null);firstOptionRef.current?.focus()}}>Coba lagi</button>}{correct&&<button className="button primary" onClick={()=>router.push(next.href)}>Lanjut ke {next.label}</button>}</div>
    </section></div>}
  </>;
}

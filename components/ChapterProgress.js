"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { learningChapters, readProgress, writeProgress } from "../data/navigation";
import { Icon } from "./SiteChrome";

function useProgress(){
  const [progress,setProgress]=useState([]);
  useEffect(()=>{
    setProgress(readProgress());
    const update=event=>setProgress(event.detail||readProgress());
    const storage=()=>setProgress(readProgress());
    window.addEventListener("techplus-progress",update);
    window.addEventListener("storage",storage);
    return()=>{window.removeEventListener("techplus-progress",update);window.removeEventListener("storage",storage)};
  },[]);
  return progress;
}

export function ChapterSidebarTracker({chapterId,sections}){
  const progress=useProgress();
  const [current,setCurrent]=useState(sections[0]?.id);
  useEffect(()=>{
    const updateHash=()=>{const id=window.location.hash.replace("#bagian-","");if(sections.some(s=>s.id===id))setCurrent(id)};
    updateHash();
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!visible)return;
      const id=visible.target.id.replace("bagian-","");
      setCurrent(id);
      localStorage.setItem("techplus-last-section",id);
    },{rootMargin:"-12% 0px -68% 0px",threshold:[0,.2,.6]});
    sections.forEach(section=>{const el=document.getElementById(`bagian-${section.id}`);if(el)observer.observe(el)});
    window.addEventListener("hashchange",updateHash);
    return()=>{observer.disconnect();window.removeEventListener("hashchange",updateHash)};
  },[sections]);
  return <div className="side-sections">{sections.map(section=>{
    const done=progress.includes(section.id);
    const active=current===section.id;
    return <a className={`${done?"done":""} ${active?"current":""}`} href={`#bagian-${section.id}`} key={section.id} aria-current={active?"location":undefined}><span className="section-state" aria-hidden="true">{done?<Icon name="check" size={12}/>:active?"●":"○"}</span><span className="section-code">{section.id}</span><b>{section.navTitle}</b></a>;
  })}</div>;
}

export function SubsectionProgress({chapterId,index,total}){
  const progress=useProgress();
  const chapter=learningChapters.find(item=>item.id===chapterId);
  const completed=chapter.sections.filter(([id])=>progress.includes(id)).length;
  const percent=Math.round(completed/total*100);
  return <div className="reading-progress"><div><strong>PROGRES BAB {chapterId}</strong><span>Posisi {index+1} dari {total} · {completed} subbab selesai</span></div><em>{percent}%</em><i aria-label={`${percent}% selesai`}><b style={{width:`${percent}%`}}/></i></div>;
}

export function SubsectionNavigation({chapterId,sectionId,previous,next}){
  const progress=useProgress();
  const done=progress.includes(sectionId);
  function toggle(){
    const updated=done?progress.filter(id=>id!==sectionId):[...new Set([...progress,sectionId])];
    writeProgress(updated);
  }
  const navLink=(target,direction)=>target?(target.external?<Link className={direction} href={target.href}>{direction==="previous"&&<Icon name="back" size={16}/>}<span><small>{direction==="previous"?"SEBELUMNYA":"LANJUT"}</small><b>{target.label}</b></span>{direction==="next"&&<Icon name="arrow" size={16}/>}</Link>:<a className={direction} href={target.href}>{direction==="previous"&&<Icon name="back" size={16}/>}<span><small>{direction==="previous"?"SEBELUMNYA":"LANJUT"}</small><b>{target.label}</b></span>{direction==="next"&&<Icon name="arrow" size={16}/>}</a>):<span/>;
  return <nav className="subsection-navigation" aria-label={`Navigasi subbab ${sectionId}`}>{navLink(previous,"previous")}<button className={done?"done":""} onClick={toggle} aria-pressed={done}><span><Icon name="check" size={15}/></span>{done?"Sudah selesai":"Tandai selesai"}</button>{navLink(next,"next")}</nav>;
}

export function ChapterProgressSummary({chapterId}){
  const progress=useProgress();
  const chapter=learningChapters.find(item=>item.id===chapterId);
  const completed=chapter.sections.filter(([id])=>progress.includes(id)).length;
  const done=completed===chapter.sections.length;
  return <div className={`chapter-progress-summary ${done?"done":""}`}><span><Icon name="check" size={18}/></span><div><strong>{done?"Bab ini sudah selesai":`${completed} dari ${chapter.sections.length} subbab selesai`}</strong><p>{done?"Kamu dapat melanjutkan ke bab berikutnya atau mengulang bagian tertentu.":"Selesaikan subbab satu per satu agar progres tercatat dengan jelas."}</p></div></div>;
}

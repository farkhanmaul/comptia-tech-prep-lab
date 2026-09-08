"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { learningChapters, readProgress } from "../data/navigation";
import { Icon } from "./SiteChrome";

function useProgress(){
  const [progress,setProgress]=useState([]);
  useEffect(()=>{
    const update=event=>setProgress(event?.detail||readProgress());
    update();
    window.addEventListener("techplus-progress",update);
    window.addEventListener("storage",update);
    return()=>{window.removeEventListener("techplus-progress",update);window.removeEventListener("storage",update)};
  },[]);
  return progress;
}

export function LessonSidebarTracker({chapterId,currentId,sections}){
  const progress=useProgress();
  return <div className="lesson-side-list">{sections.map(section=>{
    const done=progress.includes(section.id);
    const active=currentId===section.id;
    const [,sectionNumber]=section.id.split(".");
    return <Link className={`${done?"done":""} ${active?"current":""}`} href={`/materi/${chapterId}/${sectionNumber}`} key={section.id} aria-current={active?"page":undefined}><span className="section-state" aria-hidden="true">{done?<Icon name="check" size={12}/>:section.id}</span><b>{section.navTitle}</b></Link>;
  })}</div>;
}

export function LessonProgress({chapterId,total,sectionId}){
  const progress=useProgress();
  useEffect(()=>{localStorage.setItem("techplus-last-section",sectionId)},[sectionId]);
  const chapter=learningChapters.find(item=>item.id===chapterId);
  const completed=chapter.sections.filter(([id])=>progress.includes(id)).length;
  const percent=Math.round(completed/total*100);
  return <div className="lesson-progress"><div><span>Progres Bab {chapterId}</span><strong>{completed} dari {total} selesai</strong></div><em>{percent}%</em><i aria-label={`${percent}% selesai`}><b style={{width:`${percent}%`}}/></i></div>;
}

export function LessonNavigation({sectionId,previous,next}){
  const progress=useProgress();
  const done=progress.includes(sectionId);
  function openCheck(){document.getElementById(`quiz-${sectionId}`)?.scrollIntoView({behavior:"smooth",block:"center"})}
  const item=(target,direction)=>target?<Link className={direction} href={target.href}>{direction==="previous"&&<Icon name="back" size={16}/>}<span><small>{direction==="previous"?"Sebelumnya":"Berikutnya"}</small><b>{target.label}</b></span>{direction==="next"&&<Icon name="arrow" size={16}/>}</Link>:<span/>;
  return <nav className="lesson-navigation" aria-label={`Navigasi subbab ${sectionId}`}>{item(previous,"previous")}<button className={done?"done":""} onClick={openCheck}><Icon name="check" size={15}/>{done?"Sudah dipahami":"Selesaikan latihan"}</button>{item(next,"next")}</nav>;
}

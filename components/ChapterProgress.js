"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { learningChapters, readProgress, readReview } from "../data/navigation";
import { Icon } from "./SiteChrome";

function useStoredList(reader,eventName){
  const [items,setItems]=useState([]);
  useEffect(()=>{
    const update=event=>setItems(event?.detail||reader());
    update();
    window.addEventListener(eventName,update);
    window.addEventListener("storage",update);
    return()=>{window.removeEventListener(eventName,update);window.removeEventListener("storage",update)};
  },[reader,eventName]);
  return items;
}

export function LessonSidebarTracker({chapterId,currentId,sections,onNavigate}){
  const progress=useStoredList(readProgress,"techplus-progress");
  const review=useStoredList(readReview,"techplus-review");
  return <div className="lesson-side-list">{sections.map(section=>{
    const done=progress.includes(section.id);
    const needsReview=!done&&review.includes(section.id);
    const active=currentId===section.id;
    const [,sectionNumber]=section.id.split(".");
    const symbol=done?<Icon name="check" size={12}/>:needsReview?"!":active?"●":"○";
    const status=done?"Selesai":needsReview?"Perlu diulang":active?"Sedang dipelajari":"Belum dimulai";
    return <Link onClick={onNavigate} className={`${done?"done":""} ${needsReview?"review":""} ${active?"current":""}`} href={`/materi/${chapterId}/${sectionNumber}`} key={section.id} aria-current={active?"page":undefined} aria-label={`${section.id} ${section.navTitle}, ${status}`}><span className="section-state" aria-hidden="true">{symbol}</span><span><b>{section.id} {section.navTitle}</b><small>{status}</small></span></Link>;
  })}</div>;
}

export function LessonProgress({chapterId,total,sectionId,index}){
  const progress=useStoredList(readProgress,"techplus-progress");
  useEffect(()=>{localStorage.setItem("techplus-last-section",sectionId)},[sectionId]);
  const chapter=learningChapters.find(item=>item.id===chapterId);
  const completed=chapter.sections.filter(([id])=>progress.includes(id)).length;
  const percent=Math.round(completed/total*100);
  return <div className="lesson-progress"><div className="position-block"><span>Posisi materi</span><strong>Subbab {index+1} dari {total}</strong></div><div className="completion-block"><span>Progres penyelesaian</span><strong>{completed} dari {total} subbab selesai</strong></div><em>{percent}%</em><i aria-label={`Progres penyelesaian Bab ${chapterId}: ${completed} dari ${total} subbab atau ${percent}%`}><b style={{width:`${percent}%`}}/></i></div>;
}

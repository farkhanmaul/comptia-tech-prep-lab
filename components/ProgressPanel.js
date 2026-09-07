"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "./SiteChrome";
import { allSectionIds, learningChapters, readProgress } from "../data/navigation";

export default function ProgressPanel({chapters}){
  const [completed,setCompleted]=useState([]);
  useEffect(()=>{
    const update=event=>setCompleted(event?.detail||readProgress());
    update();
    window.addEventListener("techplus-progress",update);
    window.addEventListener("storage",update);
    return()=>{window.removeEventListener("techplus-progress",update);window.removeEventListener("storage",update)};
  },[]);
  const progress=useMemo(()=>Math.round(completed.length/allSectionIds.length*100),[completed.length]);
  return <div className="hero-card"><div className="hero-card-head"><span>PROGRES BELAJAR</span><span>{completed.length}/{allSectionIds.length} SUBBAB</span></div><div className="progress-number"><strong>{progress}%</strong><span>materi selesai</span></div><div className="progress-track"><span style={{width:`${progress}%`}}/></div><div className="chapter-mini-list">{chapters.map(ch=>{const item=learningChapters.find(c=>c.id===ch.id);const ids=item.sections.map(([id])=>id);const done=ids.every(id=>completed.includes(id));const next=ids.find(id=>!completed.includes(id))||ids[0];return <Link href={`/materi/bab-${ch.id}#bagian-${next}`} key={ch.id} className={done?"done":""}><span>0{ch.id}</span><b>{ch.shortTitle}</b><i><Icon name="check" size={13}/></i></Link>})}</div><p><Icon name="light" size={17}/> Progres tersimpan otomatis pada browser yang kamu gunakan.</p></div>;
}

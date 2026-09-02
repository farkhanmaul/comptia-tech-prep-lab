"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "./SiteChrome";

export default function ProgressPanel({chapters}){
  const [completed,setCompleted]=useState([]);
  useEffect(()=>{try{setCompleted(JSON.parse(localStorage.getItem("techplus-id-progress")||"[]"))}catch{}},[]);
  const progress=useMemo(()=>Math.round(completed.length/chapters.length*100),[completed,chapters.length]);
  return <div className="hero-card"><div className="hero-card-head"><span>PROGRES BELAJAR</span><span>{completed.length}/6 BAB</span></div><div className="progress-number"><strong>{progress}%</strong><span>materi selesai</span></div><div className="progress-track"><span style={{width:`${progress}%`}}/></div><div className="chapter-mini-list">{chapters.map(ch=><Link href={`/materi/bab-${ch.id}`} key={ch.id} className={completed.includes(ch.id)?"done":""}><span>0{ch.id}</span><b>{ch.shortTitle}</b><i><Icon name="check" size={13}/></i></Link>)}</div><p><Icon name="light" size={17}/> Progres tersimpan otomatis pada browser yang kamu gunakan.</p></div>;
}

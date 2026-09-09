"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LessonSidebarTracker } from "./ChapterProgress";
import { Icon } from "./SiteChrome";

function routeFor(id){const [chapter,section]=id.split(".");return `/materi/${chapter}/${section}`}

export default function LessonSidebar({chapters,chapterId,currentId,sections}){
  const [collapsed,setCollapsed]=useState(false);
  const [open,setOpen]=useState(false);
  const closeRef=useRef(null);

  useEffect(()=>{
    if(!open)return;
    const previous=document.activeElement;
    document.body.classList.add("drawer-open");
    closeRef.current?.focus();
    const onKey=event=>{
      if(event.key==="Escape"){setOpen(false);return}
      if(event.key!=="Tab")return;
      const panel=document.getElementById("lesson-outline");
      const focusable=[...panel.querySelectorAll("button,[href],[tabindex]:not([tabindex='-1'])")].filter(item=>!item.disabled);
      if(!focusable.length)return;
      const first=focusable[0],last=focusable.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    };
    window.addEventListener("keydown",onKey);
    return()=>{document.body.classList.remove("drawer-open");window.removeEventListener("keydown",onKey);previous?.focus?.()};
  },[open]);

  const close=()=>setOpen(false);
  return <>
    <button className="mobile-outline-trigger" onClick={()=>setOpen(true)} aria-expanded={open} aria-controls="lesson-outline"><span>Daftar materi</span><b>{currentId}</b></button>
    {open&&<button className="drawer-backdrop" onClick={close} aria-label="Tutup daftar materi"/>}
    <aside id="lesson-outline" className={`lesson-sidebar ${collapsed?"collapsed":""} ${open?"open":""}`} aria-label="Daftar materi">
      <div className="sidebar-tools"><Link className="back-home" href="/materi" onClick={close}><Icon name="back" size={16}/><span>Semua materi</span></Link><button ref={closeRef} className="drawer-close" onClick={close} aria-label="Tutup daftar materi">×</button><button className="collapse-sidebar" onClick={()=>setCollapsed(value=>!value)} aria-expanded={!collapsed} aria-label={collapsed?"Perluas sidebar":"Ciutkan sidebar"}>{collapsed?"›":"‹"}</button></div>
      <nav className="chapter-switcher" aria-label="Pilih bab">{chapters.map(item=><Link className={item.id===chapterId?"active":""} href={routeFor(item.sections[0].id)} key={item.id} onClick={close}><span>0{item.id}</span><b>{item.shortTitle}</b></Link>)}</nav>
      <div className="active-chapter-label">Bab {chapterId} · {sections.length} subbab</div>
      <LessonSidebarTracker chapterId={chapterId} currentId={currentId} sections={sections} onNavigate={close}/>
      <div className="status-legend"><span>○ Belum dimulai</span><span>● Sedang dipelajari</span><span>✓ Selesai</span><span>! Perlu diulang</span></div>
    </aside>
  </>;
}

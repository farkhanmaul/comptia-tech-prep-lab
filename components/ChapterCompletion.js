"use client";

import { useEffect, useState } from "react";
import { Icon } from "./SiteChrome";

export default function ChapterCompletion({chapterId}){
  const [isDone,setIsDone]=useState(false);
  useEffect(()=>{try{setIsDone(JSON.parse(localStorage.getItem("techplus-id-progress")||"[]").includes(chapterId))}catch{}},[chapterId]);
  function toggle(){
    let completed=[];
    try{completed=JSON.parse(localStorage.getItem("techplus-id-progress")||"[]")}catch{}
    const next=completed.includes(chapterId)?completed.filter(x=>x!==chapterId):[...completed,chapterId];
    localStorage.setItem("techplus-id-progress",JSON.stringify(next));
    setIsDone(next.includes(chapterId));
  }
  return <button className={`complete-button ${isDone?"is-complete":""}`} onClick={toggle}><span className="complete-icon"><Icon name="check" size={17}/></span><span><b>{isDone?"Bab sudah dipahami":"Tandai bab sudah dipahami"}</b><small>{isDone?"Klik kembali untuk membatalkan":"Progres tersimpan pada browser ini"}</small></span></button>;
}

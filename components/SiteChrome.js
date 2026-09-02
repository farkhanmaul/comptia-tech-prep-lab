"use client";

import { useState } from "react";
import Link from "next/link";

export function Icon({ name, size = 20 }) {
  const paths = {
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    back: <><path d="M19 12H5"/><path d="m10 7-5 5 5 5"/></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    light: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M21 12h-2M12 21v-2M3 12h2"/></>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function SiteHeader() {
  const [open,setOpen]=useState(false);
  return <header className="topbar"><div className="shell nav-inner">
    <Link className="brand" href="/"><span className="brand-mark">T+</span><span><b>PREP LAB</b><small>PANDUAN FC0-U71</small></span></Link>
    <nav aria-label="Navigasi utama"><Link href="/materi">Materi</Link><Link href="/strategi-belajar">Strategi belajar</Link><Link href="/evaluasi">Evaluasi</Link><Link href="/glosarium">Glosarium</Link></nav>
    <Link className="nav-cta" href="/materi/bab-1">Mulai Bab 1 <Icon name="arrow" size={16}/></Link>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?"Tutup menu":"Buka menu"} aria-expanded={open}><Icon name="menu"/></button>
  </div>{open&&<nav className="mobile-nav" aria-label="Navigasi mobile"><Link onClick={()=>setOpen(false)} href="/materi">Materi</Link><Link onClick={()=>setOpen(false)} href="/strategi-belajar">Strategi belajar</Link><Link onClick={()=>setOpen(false)} href="/evaluasi">Evaluasi</Link><Link onClick={()=>setOpen(false)} href="/glosarium">Glosarium</Link></nav>}</header>;
}

export function SiteFooter(){return <footer><div className="shell footer-inner"><div><span className="brand"><span className="brand-mark">T+</span><span><b>PREP LAB</b><small>PANDUAN FC0-U71</small></span></span><p>Bangun fondasi. Pahami sistem. Hadapi ujian dengan tenang.</p></div><p className="disclaimer">Situs pendamping belajar independen. CompTIA dan Tech+ adalah trademark milik CompTIA, Inc. Periksa kembali detail ujian terbaru pada situs resmi CompTIA sebelum melakukan pendaftaran.</p></div></footer>}

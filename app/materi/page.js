import Link from "next/link";
import { chapters } from "../../data/materials";
import { Icon, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata={title:"Materi CompTIA Tech+ | Prep Lab"};

export default function MateriPage(){return <main><SiteHeader/><section className="page-hero"><div className="shell"><div className="breadcrumb"><Link href="/">Beranda</Link><span>/</span><b>Materi</b></div><span className="section-label">PETA MATERI</span><h1>Materi lengkap per bab.</h1><p>Pilih domain yang ingin dipelajari. Setiap subbab memiliki halaman dan URL tersendiri agar sesi belajar tetap fokus.</p></div></section><section className="chapter-catalog shell page-catalog"><div className="chapter-card-grid">{chapters.map(ch=><Link className="chapter-card" href={`/materi/${ch.id}/1`} key={ch.id}><div className="card-top"><span>0{ch.id}</span><b>{ch.weight}%</b></div><div className="card-body"><small>{ch.sections.length} SUBBAB</small><h3>{ch.title}</h3><p>{ch.description}</p></div><div className="card-action"><span>Buka bab</span><Icon name="arrow" size={18}/></div></Link>)}</div></section><SiteFooter/></main>}

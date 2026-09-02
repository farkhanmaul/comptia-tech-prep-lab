import Link from "next/link";
import { glossary } from "../../data/materials";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata={title:"Glosarium IT | CompTIA Tech+ Prep Lab"};

export default function GlossaryPage(){return <main><SiteHeader/><section className="page-hero"><div className="shell"><div className="breadcrumb"><Link href="/">Beranda</Link><span>/</span><b>Glosarium</b></div><span className="section-label">GLOSARIUM INTI</span><h1>Istilah IT yang perlu langsung dikenali.</h1><p>Terminologi menggunakan global standard IT, dengan penjelasan berbahasa Indonesia agar fungsi dan konteks setiap istilah mudah dipahami.</p></div></section><section className="inner-content shell"><div className="glossary-grid standalone-glossary">{glossary.map(g=><div key={g.term}><strong>{g.term}</strong><p>{g.meaning}</p></div>)}</div></section><SiteFooter/></main>}

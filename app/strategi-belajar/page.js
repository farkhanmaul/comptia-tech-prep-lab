import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata={title:"Strategi Belajar | CompTIA Tech+ Prep Lab"};

const steps=[
  ["01","Baca satu subbab","Pelajari konsep selama 20–25 menit dan cari hubungan antaristilah."],
  ["02","Tutup catatan","Jelaskan kembali menggunakan bahasamu sendiri atau gambar alur."],
  ["03","Coba langsung","Cek IP address, kelola permission, atau buat tabel database sederhana."],
  ["04","Perbaiki celah","Catat bagian yang salah, pelajari ulang, lalu uji lagi setelah jeda."]
];

export default function StrategyPage(){return <main><SiteHeader/><section className="page-hero"><div className="shell"><div className="breadcrumb"><Link href="/">Beranda</Link><span>/</span><b>Strategi belajar</b></div><span className="section-label">STRATEGI BELAJAR</span><h1>Bangun recall, bukan sekadar membaca.</h1><p>Gunakan satu siklus yang sama untuk setiap subbab. Ritme yang konsisten membantu menemukan konsep yang belum benar-benar dipahami.</p></div></section><section className="inner-content shell"><div className="study-loop page-loop">{steps.map(([n,title,copy])=><div key={n}><span>{n}</span><strong>{title}</strong><p>{copy}</p></div>)}</div><div className="study-note"><span className="section-label">RITME YANG DISARANKAN</span><h2>Satu sesi, satu hasil yang jelas.</h2><p>Mulai dengan satu subbab, lakukan active recall tanpa melihat catatan, lalu praktikkan konsepnya. Tandai bab selesai hanya setelah kamu mampu menjelaskan fungsi, hubungan, dan contoh penerapannya.</p><Link className="button primary" href="/materi/1/1">Mulai Bab 1</Link></div></section><SiteFooter/></main>}

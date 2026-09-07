export const learningChapters = [
  {id:1,title:"Konsep IT",sections:[["1.1","Dasar computing"],["1.2","Sistem bilangan"],["1.3","Satuan IT"],["1.4","Troubleshooting"]]},
  {id:2,title:"Infrastruktur",sections:[["2.1","Jenis perangkat"],["2.2","Komponen internal"],["2.3","Jenis storage"],["2.4","Peripheral"],["2.5","Interface I/O"],["2.6","Virtualization dan cloud"],["2.7","Layanan internet"],["2.8","Dasar networking"],["2.9","Wireless network"]]},
  {id:3,title:"Aplikasi dan software",sections:[["3.1","Komponen OS"],["3.2","Fungsi OS"],["3.3","Jenis software"],["3.4","Konfigurasi browser"],["3.5","Penggunaan AI"]]},
  {id:4,title:"Software development",sections:[["4.1","Kategori bahasa"],["4.2","Data type"],["4.3","Konsep programming"],["4.4","Logic program"]]},
  {id:5,title:"Data dan database",sections:[["5.1","Nilai data"],["5.2","Tujuan database"],["5.3","Struktur database"],["5.4","Backup data"]]},
  {id:6,title:"Security",sections:[["6.1","Konsep security"],["6.2","Keamanan perangkat"],["6.3","Password"],["6.4","Encryption"],["6.5","Keamanan Wi-Fi"]]}
];

export const allSectionIds = learningChapters.flatMap(chapter=>chapter.sections.map(([id])=>id));

export function readProgress(){
  try{
    const saved=JSON.parse(localStorage.getItem("techplus-progress-v2")||"[]");
    if(Array.isArray(saved)&&saved.length) return saved;
    const old=JSON.parse(localStorage.getItem("techplus-id-progress")||"[]");
    if(Array.isArray(old)&&old.length){
      const migrated=learningChapters.filter(ch=>old.includes(ch.id)).flatMap(ch=>ch.sections.map(([id])=>id));
      localStorage.setItem("techplus-progress-v2",JSON.stringify(migrated));
      return migrated;
    }
  }catch{}
  return [];
}

export function writeProgress(progress){
  localStorage.setItem("techplus-progress-v2",JSON.stringify(progress));
  window.dispatchEvent(new CustomEvent("techplus-progress",{detail:progress}));
}

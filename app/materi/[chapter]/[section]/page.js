import ChapterPage from "../../../../components/ChapterPage";
import { chapters } from "../../../../data/materials";

export function generateStaticParams(){
  return chapters.flatMap(chapter=>chapter.sections.map(section=>({chapter:String(chapter.id),section:section.id.split(".")[1]})));
}

export default async function Page({params}){
  const route=await params;
  return <ChapterPage chapterId={Number(route.chapter)} sectionId={`${route.chapter}.${route.section}`}/>;
}

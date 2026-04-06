import Accordin_info_course from "@/components/accordin_info_course"
import Video_components from "@/components/video_components"
import Convirtions_components from "@/components/convirtions_components"
export default function Home(){
  return(
    <main>
        <Convirtions_components />
        <Accordin_info_course />
        <Video_components />
    </main>
  )
}
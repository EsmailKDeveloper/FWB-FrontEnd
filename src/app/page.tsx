import Accordin_info_course from "@/components/accordin_info_course"
import Video_components from "@/components/video_components"
import Convirtions_components from "@/components/convirtions_components"
import Hero_commponents from "@/components/hero_commponents"
import Course_commponents from "@/components/course_commponents"


export default function Home(){
  return(
    <main>
        <Hero_commponents />
        <Course_commponents />
        <Convirtions_components />
        <Accordin_info_course />
        <Video_components />
    </main>
  )
}
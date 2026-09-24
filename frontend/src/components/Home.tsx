import HomeBg from "./home/HomeBg";
import HomeHeader from "./home/HomeHeader";
import HomeFeatures from "./home/HomeFeatures";
import RecentProjects from "./home/RecentProjects";
import HomeHero from "./home/HomeHero";
import HomeFooter from "./home/HomeFooter";
import { useRef } from "react";

export default function Home() {
const sectionRef = useRef(null);
function ScrollTo() {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start'      
    });
  };

    return (
        <div className="min-h-screen overflow-hidden bg-[#08090d] text-white">
            <HomeBg />
            <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
                <HomeHeader />
                <HomeHero ScrollTo={ScrollTo} />
                <HomeFeatures />
                <RecentProjects sectionRef={sectionRef}/>
                <HomeFooter />
            </div>
        </div>
    );
}



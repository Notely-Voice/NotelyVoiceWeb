import HomeHeroDesign from "../layouts/HomeHeroDesign"
import SectionIntro from "../layouts/SectionIntro"

const HomeHero = () => {
  return (
    <div className="pt-3.5 flex justify-center">
      <div className="wrapper bg-[var(--blueBg)] pt-25.5 pb-[90px] pl-20 pr-12 rounded-[40px] flex gap-6">
        <SectionIntro headingStyle="max-w-[700px]" textStyle="max-w-[609px]"  />
        <HomeHeroDesign />
      </div>
    </div>
  )
}

export default HomeHero;
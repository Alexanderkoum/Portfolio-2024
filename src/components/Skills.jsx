import React from 'react'
import Css3 from '../assets/Logo/css3.svg'
import Figma from '../assets/Logo/figma.svg'
import Framer from '../assets/Logo/framer.svg'
import Github from '../assets/Logo/github.svg'
import Html from '../assets/Logo/html-5.svg'
import Hubspot from '../assets/Logo/hubspot.svg'
import Java from '../assets/Logo/java-4.svg'
import ReactL from '../assets/Logo/react.svg'
import Webflow from '../assets/Logo/webflow.svg'
import Wordpress from '../assets/Logo/wordpress.svg'
import Yoast from '../assets/Logo/yoast.svg'
import SkillCard from './SkillCard'


export default function Skills() {
    return(
        <>
            <div className='grid grid-cols-6 gap-0 grid-rows-2 rounded-xl overflow-hidden border border-slate-50/10 md:m-4 bg-white md:bg-slate-600/10'>
                <SkillCard image={Css3} title="" />
                <SkillCard image={Figma} title="" />
                <SkillCard image={Framer} title="" />
                <SkillCard image={Github} title="" />
                <SkillCard image={Html} title="" />
                <SkillCard image={Hubspot} title="" />
                <SkillCard image={Java} title="" />
                <SkillCard image={ReactL} title="" />
                <SkillCard image={Webflow} title="" />
                <SkillCard image={Wordpress} title="" />
                <SkillCard image={Yoast} title="" />
            </div>
        </>
    )
}
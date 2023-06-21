import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from '../common/componets/title/Title'
import iconJS from "../assets/image/skills/js-svgrepo-com.svg";
import iconCSS from "../assets/image/skills/css-3-svgrepo-com.svg";
import iconHTML from "../assets/image/skills/html-5-svgrepo-com.svg";
import iconReact from "../assets/image/skills/react-svgrepo-com.svg";
import iconRedux from "../assets/image/skills/redux-svgrepo-com.svg";
import iconNext from "../assets/image/skills/next-dot-js-svgrepo-com.svg";
import iconTypescript from "../assets/image/skills/typescript-official-svgrepo-com.svg";

type SkillType = {
    id: number
    title: string
    style:React.CSSProperties
   }

export const Skills = () => {
    const Fade = require("react-reveal/Fade")


    const skills:SkillType[]=[
        {id:0,title:'HTML',style: {backgroundImage: `url(${iconHTML})`}},
        {id:1,title:'CSS (SaaS)',style: {backgroundImage: `url(${iconCSS})`}},
        {id:2,title:'JS',style: {backgroundImage: `url(${iconJS})`}},
        {id:3,title:'React',style: {backgroundImage: `url(${iconReact})`}},
        {id:4,title:'Next.js',style: {backgroundImage: `url(${iconNext})`}},
        {id:5,title:'Typescript',style: {backgroundImage: `url(${iconTypescript})`}},
        {id:6,title:'Redux',style: {backgroundImage: `url(${iconRedux})`}},

    ]

    return (
        <div id={"skills"} className={s.skillsBlock}>
            <Fade bottom>
            <div className={s.container}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    {skills.map(s=>{
                        return <Skill key={s.id} title={s.title} styleSkill={s.style}/>
                    })}
                </div>
            </div>
            </Fade>
        </div>
    );
};


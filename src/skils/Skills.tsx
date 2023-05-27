import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../common/style/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from '../common/componets/title/Title'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'CSS (SaaS)'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'Next.js'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'Type Script'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};


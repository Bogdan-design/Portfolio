import React from 'react';
import s from '../projects/Projects.module.css'
import sContainer from "../common/style/Container.module.css";
import {Project} from "./project/Project";
import {Title} from '../common/componets/title/Title'
import todoImage from '../assets/image/todolist.png'
import socialNetworkImage from '../assets/image/social.network.jpg'


export const Projects = () => {
    const socialNetworkStyle = {
        backgroundImage: `url(${socialNetworkImage})`,
    }
    const todolistStyle = {
        backgroundImage: `url(${todoImage})`,
    }

    return (
        <div className={s.projectsBocks}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={socialNetworkStyle} title={'Social Network'} description={'brief description brief description'}/>
                    <Project style={todolistStyle} title={'Todo list'} description={'brief description'}/>
                </div>
            </div>
        </div>
    );
};


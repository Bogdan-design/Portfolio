import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from 'common/componets/title/Title'
import todoImage from '../assets/image/todolist.png'
import socialNetworkImage from '../assets/image/social.network.jpg'

type ProjectsType = {
    id: number
    url: string
    style: React.CSSProperties
    title: string
    description: string
}

export const Projects = () => {

    const projects: ProjectsType[] = [
        {
            id: 0,
            url: 'https://bogdan-design.github.io/lifebook',
            style: {backgroundImage: `url(${socialNetworkImage})`},
            title: 'Lifebook',
            description: 'Behold my magnum opus – a creation inspired by the legendary Facebook, but with my own unique touch! This project showcases my exceptional skills as a developer and my dedication to crafting an exceptional social networking experience. Connect with me to explore this innovative platform, a testament to my prowess as a top-notch developer.'

        },

        {
            id: 1,
            url: 'https://todo-list-sigma-five-94.vercel.app/login',
            style: {backgroundImage: `url(${todoImage})`},
            title: 'Todo list',
            description: 'brief description'
        }
    ]

    return (
        <div id={'projects'} className={s.projectsBocks}>
            <div className={s.container}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    {projects.map(p => {
                        return <Project key={p.id} style={p.style} title={p.title} description={p.description}
                                        url={p.url}/>
                    })}
                </div>
            </div>
        </div>
    );
};


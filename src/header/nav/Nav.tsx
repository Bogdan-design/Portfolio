import React from 'react';
import s from './Nav.module.scss'
import {Link} from 'react-scroll'


export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link activeClass={s.active}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  delay={0}>
                Home
            </Link>
            <Link activeClass={s.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  delay={0}>
                Skills
            </Link>
            <Link activeClass={s.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  delay={0}>
                Projects
            </Link>
            <Link activeClass={s.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  delay={0}>
                Contacts
            </Link>
        </div>
    );
};


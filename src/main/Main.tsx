import React from 'react';
import s from '../main/Main.module.scss'
import Typewriter from 'typewriter-effect';
import {Tilt} from 'react-tilt'


export const Main = () => {
    const Fade = require("react-reveal/Fade")

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 5,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <div id={"home"} className={s.mainBlock}>
            <Fade>
                <div className={s.container}>
                    <div className={s.greeting}>
                        <span>Hi There</span>
                        <span>I am Bogdan<span>Bochkovskyi</span></span>

                        <Typewriter
                            options={{
                                strings: 'Frontend Developer',
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className={s.photo}>
                        <Tilt options={defaultOptions} >
                            <div className={s.img}></div>
                        </Tilt>

                    </div>
                </div>
            </Fade>
        </div>
    );
};


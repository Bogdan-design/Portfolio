import React from 'react';
import s from '../main/Main.module.scss'
import Typewriter from 'typewriter-effect';


export const Main = () => {

    return (
        <div className={s.mainBlock}>
                <div className={s.container}>
                    <div className={s.greeting}>
                        <span>Hi There</span>
                        <span>I am Bogdan<span>Bochkovskyi</span></span>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: ['Frontend', 'Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </div>
                    <div className={s.photo}>
                        <div className={s.img}></div>
                    </div>
                </div>
        </div>
    );
};


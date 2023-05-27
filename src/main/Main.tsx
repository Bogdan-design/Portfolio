import React from 'react';
import s from '../main/Main.module.scss'
import sContainer from '../common/style/Container.module.scss'
import {Title} from "../common/componets/title/Title";
import photo from '../assets/image/photo.png';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const Main = () => {
    const mainPhoto = {
        backgroundImage: `url(${photo})`,
    }
    return (
        <div className={s.mainBlock}>

                <Box className={sContainer.container}>
                    <div className={s.greeting}>
                        <span>Hi There</span>
                        <Title text={'I am Bogdan Bochkovskyi'}/>
                        <p>Frontend Developer</p>
                    </div>
                    <Paper className={s.img} style={mainPhoto}></Paper>
                </Box>
        </div>
    );
};


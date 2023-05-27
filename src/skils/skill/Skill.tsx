import React from 'react';
import s from './Skill.module.css'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

type PropsType = {
    title: string
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <Box>
            <Paper elevation={3} className={s.skill}>
                <div className={s.icon}></div>
                <h3>{props.title}</h3>
                <span className={s.description}>
                {props.description}
                </span>
            </Paper>
        </Box>
    );
};


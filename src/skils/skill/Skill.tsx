import React, {FC} from 'react';
import s from './Skill.module.scss'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Title} from "../../common/componets/title/Title";

type Props = {
    title: string
    styleSkill: React.CSSProperties
}

export const Skill: FC<Props> = ({title,styleSkill}) => {
    return (
        <Box>
            <Paper elevation={3} className={s.skill}>
                <div style={styleSkill} className={s.icon}></div>
                <Title text={title} />
            </Paper>
        </Box>
    );
};


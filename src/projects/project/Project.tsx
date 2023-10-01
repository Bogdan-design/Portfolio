import React, {FC} from 'react';
import s from './Project.module.scss'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Button} from 'common/componets/button/Button';

type Props = {
    style:React.CSSProperties
    title: string
    description: string
    url:string

}

export const Project: FC<Props> = ({title, description,style,url}) => {
    return (
        <Box>
            <Paper elevation={3} className={s.project}>
                <div className={s.img} style={style}>
                    <Button name={'show'} url={url} />
                </div>
                <div className={s.projectInfo}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.description}>{description}</span>
                </div>
            </Paper>
        </Box>
    );
};


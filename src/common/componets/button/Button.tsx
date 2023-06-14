import React, {FC} from 'react';

import s from './Button.module.scss'

type Props = {
    name: string
    url?:string
}

export const Button: FC<Props> = ({name,url}) => {

    return (
            <a href={url} className={s.button}>{name}</a>
    );
};


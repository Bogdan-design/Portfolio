import React, {FC} from 'react';

import s from './Button.module.scss'

type Props = {
    name: string
}

export const Button: FC<Props> = ({name}) => {

    return (
            <a href="" className={s.button}>{name}</a>
    );
};


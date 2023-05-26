import React, {FC} from 'react';
import sTitle from '../title/Title.module.css'

type Props = {
    text:string
}

export const Title: FC<Props> = ({text}) => {
    return (
        <div className={sTitle.title}>
            <h2>{text}</h2>
        </div>
    );
};


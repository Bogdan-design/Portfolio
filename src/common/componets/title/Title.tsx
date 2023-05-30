import React, {FC} from 'react';
import sTitle from './Title.module.scss'

type Props = {
    text:string
    style?:React.CSSProperties
}

export const Title: FC<Props> = ({text, style}) => {
    return (
        <div className={sTitle.title}>
            <h2 style={style}>{text}</h2>
        </div>
    );
};


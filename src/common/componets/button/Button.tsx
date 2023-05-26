import React, {FC} from 'react';
import Stack from '@mui/material/Stack';
import ButtonMui from '@mui/material/Button';
import s from '../button/Button.module.css'

type Props = {
    name: string
}

export const Button: FC<Props> = ({name}) => {

    return (
        <Stack>
            <ButtonMui className={s.button} variant="contained" color="info">
                {name}
            </ButtonMui>
        </Stack>
    );
};

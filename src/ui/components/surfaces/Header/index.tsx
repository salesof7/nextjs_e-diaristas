import React from 'react';
import { HeaderAppBar, HeaderLogo } from './style'
import { Toolbar, Container } from '@mui/material'

export function Header() {
    return (
        <HeaderAppBar position={'sticky'}>
            <Toolbar component={ Container }>
                <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
            </Toolbar>
        </HeaderAppBar>
    )
}
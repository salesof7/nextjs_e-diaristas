import React from 'react';
import { SafeEnvironmentContainer, ContainerStyled } from './style'
import { Container } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';

export function SafeEnvironment() {
    return (
        <SafeEnvironmentContainer>
            <ContainerStyled>
                Ambiente Seguro
                <LockIcon sx={{ fontSize: 12, ml: 1 }}/>
            </ContainerStyled>
        </SafeEnvironmentContainer>
    );
}
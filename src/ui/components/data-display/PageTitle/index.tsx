import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './style';

interface PageTitleProps {
    title: string;
    subtitle?: string;
}

export function PageTitle(props: PageTitleProps) {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            <PageSubtitleStyled>
                {props.subtitle}
            </PageSubtitleStyled>
        </PageTitleContainer>
    );
}
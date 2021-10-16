import { styled, Container } from '@mui/material';

export const SafeEnvironmentContainer = styled('div')`
    color: ${({ theme }) => theme.palette.text.secondary};
    background-color: ${({ theme }) => theme.palette.background.default};
    text-align: right;
    padding: ${({ theme }) => theme.spacing(2)} 0;
    font-size: 12px;
`
export const ContainerStyled = styled(Container)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
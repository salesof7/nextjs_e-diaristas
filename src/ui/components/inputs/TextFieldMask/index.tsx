import React from 'react';
import InputMask from 'react-input-mask';
import TextField from 'ui/components/inputs/TextField';
import { OutlinedTextFieldProps } from '@mui/material';

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
    mask: string;
    value: string;
}

export function TextFieldMask({mask, value, onChange, ...props}: TextFieldMaskProps) {
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            {() => {
                return <TextField {...props} />;
            }}
        </InputMask>
    )
}
import React from 'react';
import { TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'email' | 'password' | 'number' | 'phone' | 'money';
    fullWidth?: boolean;
}

function formatPhone(value: string) {
    const numeric = value.replace(/\D/g, '');
    if (numeric.length <= 10) {
        // (99) 9999-9999
        return numeric
            .replace(/^(\d{2})(\d)/g, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .slice(0, 14);
    } else {
        // (99) 99999-9999
        return numeric
            .replace(/^(\d{2})(\d)/g, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0, 15);
    }
}

export default function InputField({
    label,
    value,
    onChange,
    type = 'text',
    fullWidth = true,
    ...rest
}: InputFieldProps) {

    if (type === 'phone') {
        const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const formatted = formatPhone(e.target.value);
            // Cria um evento fake para manter compatibilidade
            const fakeEvent = {
                ...e,
                target: {
                    ...e.target,
                    value: formatted,
                },
            };
            onChange(fakeEvent);
        };

        return (
            <TextField
                label={label}
                value={value}
                onChange={handlePhoneChange}
                fullWidth={fullWidth}
                {...rest}
                inputProps={{ maxLength: 15 }}
            />
        );
    }

    if (type === 'money') {
        return (
            <NumericFormat
                value={value}
                onValueChange={(values) => {
                    const { value } = values;
                    const fakeEvent = {
                        target: { value },
                    } as React.ChangeEvent<HTMLInputElement>;
                    onChange(fakeEvent);
                }}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                decimalScale={2}
                fixedDecimalScale
                customInput={TextField}
                label={label}
                fullWidth={fullWidth}
                {...rest}
            />
        );
    }

    return (
        <TextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
            {...rest}
        />
    );
}

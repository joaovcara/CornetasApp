import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface AlertProps {
    type?: 'success' | 'error' | 'warning' | 'info';
    message: string;
}

export default function AlertBasic({type = 'success', message}: AlertProps  ) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={type}>
                {message}
            </Alert>
        </Stack>
    );
}
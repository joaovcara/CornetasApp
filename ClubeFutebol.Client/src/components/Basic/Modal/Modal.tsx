import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Divider,
    SxProps,
    Theme,
    DialogProps
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type ModalSize = 'small' | 'medium' | 'large';

interface ModalBasicProps {
    open: boolean;
    title: string;
    onClose: () => void;
    onSave?: () => void;
    children: React.ReactNode;
    showCancelButton?: boolean;
    saveButtonText?: string;
    cancelButtonText?: string;
    customActions?: React.ReactNode;
    size?: ModalSize;
}

const sizeMap: Record<ModalSize, SxProps<Theme>> = {
    small: { width: 400 },
    medium: { width: 800 },
    large: { width: 1200 },
};

export default function ModalBasic({
    open,
    title,
    onClose,
    onSave,
    children,
    showCancelButton = true,
    saveButtonText = 'Salvar',
    cancelButtonText = 'Cancelar',
    size = 'medium',
}: ModalBasicProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth={false}
            slotProps={{
                paper: {
                    sx: sizeMap[size],
                },
            }}
        >
            <DialogTitle>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    {title}
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <Divider />

            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2}>
                    {children}
                </Box>
            </DialogContent>

            <Divider />

            <DialogActions>
                {showCancelButton && (
                    <Button onClick={onClose}>{cancelButtonText}</Button>
                )}
                {onSave && (
                    <Button onClick={onSave} variant="contained">
                        {saveButtonText}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

import React from 'react';
import {
    Modal,
    Box,
    Typography,
    IconButton,
    Button,
    Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface TypeModalProps {
    small: 200,
    medium: 400,
    large: 860
}

interface BaseModalProps {
    open: boolean;
    title: string;
    onClose: () => void;
    onAction?: () => void;
    children: React.ReactNode;
    actionText?: string;
    showFooter?: boolean;
    type: keyof TypeModalProps;
}

export default function BaseModal({
    open,
    title,
    onClose,
    onAction,
    children,
    actionText = 'Confirmar',
    showFooter = true,
    type
}: BaseModalProps) {
    return (
        <Modal open={open} onClose={onClose}>
            <Box width={type}>
                {/* Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6">{title}</Typography>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider />

                {/* Container */}
                <Box mt={2} mb={2}>
                    {children}
                </Box>

                {/* Footer */}
                {showFooter && (
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" onClick={onAction}>
                            {actionText}
                        </Button>
                    </Box>
                )}
            </Box>
        </Modal>
    );
}

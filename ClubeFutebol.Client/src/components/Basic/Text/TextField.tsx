import { TextField } from "@mui/material";

interface TextFieldProps {
    label: string;
    fullWidth?: boolean;
}
export default function TextFieldBasico({label, fullWidth}: TextFieldProps  ) {
    return (
        <TextField
            label={label}
            variant='outlined'
            fullWidth={fullWidth}
            margin="normal"
        />
    );
}
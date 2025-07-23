import { Button } from "@mui/material";

interface Membro {
    variant?: "text" | "outlined" | "contained";
    title: string;
    action: () => void;
}

export default function ButtonBasic({ variant = "contained", title, action }: Membro) {
    return (
        <Button
            variant={variant}
            color="primary"
            onClick={action}
        >
            {title}
        </Button>
    );
}

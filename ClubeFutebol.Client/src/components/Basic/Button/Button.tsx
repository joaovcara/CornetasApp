import { Button } from "@mui/material";

interface Membro {
    title: string;
    action: () => void;
}

export default function ButtonBasic({ title, action }: Membro) {
    return (
        <Button
            variant='contained'
            color="primary"
            onClick={action}
        >
            {title}
        </Button>
    );
}

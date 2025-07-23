import { DataGrid } from "@mui/x-data-grid";

interface TableProps {
    rows: any[];
    columns: any[];
}

export default function Table({ rows, columns }: TableProps) {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 }
                }
            }}
            pagination
            rowSelection={false}
            pageSizeOptions={[]}
            localeText={{
                paginationDisplayedRows: ({ from, to, count }) =>
                    `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`,
            }}
        />
    );
}
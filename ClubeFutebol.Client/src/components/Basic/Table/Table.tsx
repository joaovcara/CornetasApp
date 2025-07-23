import { DataGrid } from "@mui/x-data-grid";

interface TableBasicProps {
    rows: any[];
    columns: any[];
}

export default function TableBasic({ rows, columns }: TableBasicProps) {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pagination
            rowSelection={false}
            pageSizeOptions={[5, 10, 20]}
            localeText={{
                noRowsLabel: 'Nenhum registro encontrado',
                paginationRowsPerPage: 'Registros por página',
                paginationDisplayedRows: ({ from, to, count }) =>
                    `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`,            
            }}
        />
    );
}
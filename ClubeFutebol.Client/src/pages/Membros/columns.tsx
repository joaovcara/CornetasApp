// membros.columns.ts
import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface Membro {
  id: number;
  nome: string;
  email: string;
}

export const getColumns = (
  handleEditar: (membro: Membro) => void,
  handleExcluir: (id: number) => void
): GridColDef[] => [
  { field: 'id', headerName: 'ID', width: 90, disableColumnMenu: true },
  { field: 'nome', headerName: 'Nome', flex: 1, disableColumnMenu: true },
  { field: 'email', headerName: 'Email', flex: 1, disableColumnMenu: true },
  {
    field: 'acoes',
    headerName: '',
    width: 100,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <>
        <IconButton
          size="small"
          onClick={() => handleEditar(params.row)}
          aria-label="editar"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => handleExcluir(params.row.id)}
          aria-label="excluir"
        >
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

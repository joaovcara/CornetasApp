import { useEffect, useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, Box, IconButton
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import api from '../../services/api';
import PageLayout from '../../components/Layout/Page/PageLayout';
import styles from './Membros.styles';

interface Membro {
  id: number;
  nome: string;
  email: string;
}

export default function Membros() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Membro>({ id: 0, nome: '', email: '' });

  const loadMembros = async () => {
    const response = await api.get('/membros');
    setMembros(response.data);
  };

  const handleSalvar = async () => {
    if (form.id === 0) {
      await api.post('/membros', form);
    } else {
      await api.put(`/membros/${form.id}`, form);
    }
    setOpen(false);
    setForm({ id: 0, nome: '', email: '' });
    loadMembros();
  };

  const handleExcluir = async (id: number) => {
    if (confirm('Deseja realmente excluir este membro?')) {
      await api.delete(`/membros/${id}`);
      loadMembros();
    }
  };

  const handleEditar = (membro: Membro) => {
    setForm(membro);
    setOpen(true);
  };

  useEffect(() => {
    loadMembros();
  }, []);

  const columns: GridColDef[] = [
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

  return (
    <PageLayout title="Membros">
      <Box sx={styles.containerActions}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Novo Membro
        </Button>
      </Box>
      <DataGrid
        rows={membros}
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

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{form.id === 0 ? 'Novo Membro' : 'Editar Membro'}</DialogTitle>
        <DialogContent sx={styles.dialogContent}>
          <TextField
            label="Nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleSalvar} variant="contained">Salvar</Button>
        </DialogActions>
      </Dialog>
    </PageLayout>
  );
}

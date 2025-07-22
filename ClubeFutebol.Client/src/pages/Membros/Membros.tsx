import { useEffect, useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import api from '../../services/api';
import PageLayout from '../../components/Layouts/Layout/Page/PageLayout';
import styles from './Membros.styles';
import GroupIcon from '@mui/icons-material/Group';

import { getColumns } from './columns';

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

  const columns = getColumns(handleEditar, handleExcluir);

  return (
    <PageLayout title="Membros" onAddClick={() => setOpen(true)} icon={<GroupIcon />}>
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

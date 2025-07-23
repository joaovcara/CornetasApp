import { useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import api from '../../services/api';
import PageLayout from '../../components/Layouts/Layout/Page/PageLayout';
import GroupIcon from '@mui/icons-material/Group';
import { getColumns } from './columns';
import ModalBasic from '../../components/Basic/Modal/Modal';
import TableBasic from '../../components/Basic/Table/Table';

interface Membro {
  id: number;
  nome: string;
  email: string;
}

export default function Membros() {
  const [membros, setMembros] = useState<Membro[]>([]);

  // Estados para modal de cadastro/edição
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Membro>({ id: 0, nome: '', email: '' });

  // Estados para modal de confirmação de exclusão
  const [openExcluir, setOpenExcluir] = useState(false);
  const [membroParaExcluir, setMembroParaExcluir] = useState<Membro | null>(null);

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

  // Atualizado: abrir modal de confirmação
  const handleExcluir = (membro: Membro) => {
    setMembroParaExcluir(membro);
    setOpenExcluir(true);
  };

  // Confirma exclusão depois do modal
  const confirmarExclusao = async () => {
    if (membroParaExcluir) {
      await api.delete(`/membros/${membroParaExcluir.id}`);
      setOpenExcluir(false);
      setMembroParaExcluir(null);
      loadMembros();
    }
  };

  const handleEditar = (membro: Membro) => {
    setForm(membro);
    setOpen(true);
  };

  const handleAdd = () => {
    setForm({ id: 0, nome: '', email: '' });
    setOpen(true);
  };

  useEffect(() => {
    loadMembros();
  }, []);

  // Passar membro inteiro para o handleExcluir
  const columns = getColumns(handleEditar, handleExcluir);

  return (
    <PageLayout title="Membros" onAddClick={handleAdd} icon={<GroupIcon />}>
      <TableBasic
        rows={membros}
        columns={columns}
      />

      {/* Modal cadastro/edição */}
      <ModalBasic
        open={open}
        title={form.id === 0 ? 'Novo Membro' : 'Editar Membro'}
        onClose={() => setOpen(false)}
        onSave={handleSalvar}
        showCancelButton={false}
        size="medium"
      >
        <TextField
          label="Nome"
          type="text"
          fullWidth
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </ModalBasic>

      {/* Modal confirmação exclusão */}
      <ModalBasic
        open={openExcluir}
        title="Confirmar exclusão"
        onClose={() => setOpenExcluir(false)}
        onSave={confirmarExclusao}
        saveButtonText="Excluir"
        cancelButtonText="Cancelar"
        size="small"
      >
        <Box>
          <Typography> Tem certeza que deseja excluir o membro{' '}
            <strong>{membroParaExcluir?.nome}</strong>?
          </Typography>
        </Box>
      </ModalBasic>
    </PageLayout>
  );
}

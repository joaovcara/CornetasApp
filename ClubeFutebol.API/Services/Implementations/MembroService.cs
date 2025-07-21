using ClubeFutebol.API.Models;
using ClubeFutebol.API.Repositories.Interfaces;
using ClubeFutebol.API.Services.Interfaces;

namespace ClubeFutebol.API.Services.Implementations;

public class MembroService : IMembroService
{
    private readonly IMembroRepository _repo;

    public MembroService(IMembroRepository repo)
    {
        _repo = repo;
    }

    public async Task<IEnumerable<Membro>> ListarTodosAsync()
        => await _repo.GetAllAsync();

    public async Task<Membro?> BuscarPorIdAsync(int id)
        => await _repo.GetByIdAsync(id);

    public async Task<Membro> CriarAsync(Membro membro)
    {
        await _repo.AddAsync(membro);
        await _repo.SaveChangesAsync();
        return membro;
    }

    public async Task<Membro?> AtualizarAsync(int id, Membro membro)
    {
        var existente = await _repo.GetByIdAsync(id);
        if (existente == null) return null;

        existente.Nome = membro.Nome;
        existente.Telefone = membro.Telefone;
        existente.Email = membro.Email;
        existente.Ativo = membro.Ativo;

        _repo.Update(existente);
        await _repo.SaveChangesAsync();
        return existente;
    }

    public async Task<bool> RemoverAsync(int id)
    {
        var membro = await _repo.GetByIdAsync(id);
        if (membro == null) return false;

        _repo.Delete(membro);
        await _repo.SaveChangesAsync();
        return true;
    }
}

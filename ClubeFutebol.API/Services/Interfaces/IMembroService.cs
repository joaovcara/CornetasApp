using ClubeFutebol.API.Models;

namespace ClubeFutebol.API.Services.Interfaces;

public interface IMembroService
{
    Task<IEnumerable<Membro>> ListarTodosAsync();
    Task<Membro?> BuscarPorIdAsync(int id);
    Task<Membro> CriarAsync(Membro membro);
    Task<Membro?> AtualizarAsync(int id, Membro membro);
    Task<bool> RemoverAsync(int id);
}

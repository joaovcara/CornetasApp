using ClubeFutebol.API.Models;

namespace ClubeFutebol.API.Repositories.Interfaces;

public interface IMembroRepository : IRepositoryBase<Membro>
{
    Task<IEnumerable<Membro>> GetAtivosAsync();
}

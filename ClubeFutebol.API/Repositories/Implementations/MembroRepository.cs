using ClubeFutebol.API.Data;
using ClubeFutebol.API.Models;
using ClubeFutebol.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ClubeFutebol.API.Repositories.Implementations;

public class MembroRepository : RepositoryBase<Membro>, IMembroRepository
{
    private new readonly AppDbContext _context;

    public MembroRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Membro>> GetAtivosAsync()
    {
        return await _context.Membros.Where(m => m.Ativo).ToListAsync();
    }
}

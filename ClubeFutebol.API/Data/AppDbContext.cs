using Microsoft.EntityFrameworkCore;
using ClubeFutebol.API.Models;

namespace ClubeFutebol.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Membro> Membros => Set<Membro>();
    public DbSet<Mensalidade> Mensalidades => Set<Mensalidade>();
    public DbSet<Usuario> Usuarios => Set<Usuario>();

}

namespace ClubeFutebol.API.Models;

public class Membro
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string? Telefone { get; set; }
    public string? Email { get; set; }
    public DateTime DataEntrada { get; set; }
    public bool Ativo { get; set; } = true;
}

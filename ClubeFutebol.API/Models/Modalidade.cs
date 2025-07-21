namespace ClubeFutebol.API.Models;

public class Mensalidade
{
    public int Id { get; set; }
    public int IdMembro { get; set; }
    public Membro Membro { get; set; } = null!;    
    public DateTime MesReferente { get; set; }
    public decimal Valor { get; set; }
    public bool Pago { get; set; } = false;
    public DateTime? DataPagamento { get; set; }
}

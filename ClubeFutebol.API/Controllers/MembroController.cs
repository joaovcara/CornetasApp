using ClubeFutebol.API.Models;
using ClubeFutebol.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ClubeFutebol.API.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class MembrosController : ControllerBase
{
    private readonly IMembroService _membroService;

    public MembrosController(IMembroService membroService)
    {
        _membroService = membroService;
    }

    // GET: api/membros
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Membro>>> GetAll()
    {
        var membros = await _membroService.ListarTodosAsync();
        return Ok(membros);
    }

    // GET: api/membros/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Membro>> GetById(int id)
    {
        var membro = await _membroService.BuscarPorIdAsync(id);
        if (membro == null)
            return NotFound();

        return Ok(membro);
    }

    // POST: api/membros
    [HttpPost]
    public async Task<ActionResult<Membro>> Create(Membro membro)
    {
        var criado = await _membroService.CriarAsync(membro);
        return CreatedAtAction(nameof(GetById), new { id = criado.Id }, criado);
    }

    // PUT: api/membros/5
    [HttpPut("{id}")]
    public async Task<ActionResult<Membro>> Update(int id, Membro membro)
    {
        var atualizado = await _membroService.AtualizarAsync(id, membro);
        if (atualizado == null)
            return NotFound();

        return Ok(atualizado);
    }

    // DELETE: api/membros/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var sucesso = await _membroService.RemoverAsync(id);
        if (!sucesso)
            return NotFound();

        return NoContent();
    }
}

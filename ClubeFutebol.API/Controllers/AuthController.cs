using ClubeFutebol.API.DTOs;
using ClubeFutebol.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ClubeFutebol.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var result = await _authService.AutenticarAsync(request);
        if (result == null)
            return Unauthorized("Credenciais inválidas.");

        return Ok(result);
    }
}

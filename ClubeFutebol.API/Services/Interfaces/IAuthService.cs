using ClubeFutebol.API.DTOs;

namespace ClubeFutebol.API.Services.Interfaces;

public interface IAuthService
{
    Task<LoginResponse?> AutenticarAsync(LoginRequest request);
}

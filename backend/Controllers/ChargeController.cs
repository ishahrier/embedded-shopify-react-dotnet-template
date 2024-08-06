using backend.Config;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using ShopifySharp;

namespace backend.Controllers;
[Route("api/charge")]
[ApiController]
[Authorize]
public  class ChargeController : ControllerBase
{
    private readonly SessionService _sessionService;
    private readonly IOptions<Settings> _settings;

    public ChargeController(SessionService sessionService, IOptions<Settings> settings )
    {
        _sessionService = sessionService;
        _settings = settings;
    }
    
    [HttpGet]
    [Route("GetCharge")]
    public async Task<IActionResult> GetCharge()
    {
        var accessToken = (Session?)HttpContext.Items[GlobalVariables.TokenContextKey];
        var shopUrl = (string?)HttpContext.Items[GlobalVariables.ShopUrlContextKey];
        var shop = (string?)HttpContext.Items[GlobalVariables.Shop];
        var recCharge = new RecurringCharge
        {
            Name = "planB",
            Price = 10.0m,
            ReturnUrl = "https://sturgeon-brief-allegedly.ngrok-free.app/api/charge/accepted?planName=planB&shop="+shop,
            TrialDays = 5,
            Test = true
        };

        var service = new RecurringChargeService(shopUrl, accessToken.Token);
        return Ok(await service.CreateAsync(recCharge));
        
    }

    [HttpGet]
    [Route("Accepted")]
    [AllowAnonymous]
    public async Task<IActionResult> Accepted([FromQuery] string planName,[FromQuery] string shop,[FromQuery] long charge_id)
    {
        var session =  await _sessionService.GetSession(SessionService.GetFormattedSessionIdName(shop));
        var accessToken = session.Token;
        var shopUrl = shop;
        var service = new RecurringChargeService(shopUrl, accessToken);
        var charge = await  service.GetAsync(charge_id);
        if (charge.Status == "active")
        {
            var redirectUrl =  $"https://admin.shopify.com/store/{session.Shop}/apps/dot-net-test-app";
            return new RedirectResult("https://admin.shopify.com/store/exico-test-store/apps/5c69d4664f81a66c6d76cb39bd353cf6");
        }
        return Ok();
    }
}
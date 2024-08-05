using backend.Config;
using backend.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopifySharp;

namespace backend.Controllers;
[Route("api/charge")]
[ApiController]
[Authorize]
public  class ChargeController : ControllerBase
{
    
    
    [HttpGet]
    [Route("GetCharge")]
    public async Task<IActionResult> GetCharge()
    {
        var accessToken = (Session?)HttpContext.Items[GlobalVariables.TokenContextKey];
        var shopUrl = (string?)HttpContext.Items[GlobalVariables.ShopUrlContextKey];
        var recCharge = new RecurringCharge
        {
            Name = "planB",
            Price = 10.0m,
            ReturnUrl = "https://sturgeon-brief-allegedly.ngrok-free.app/api/charge/accepted?planName=planB&token="+await HttpContext.GetTokenAsync("access_token"),
            TrialDays = 5,
            Test = true
        };

        var service = new RecurringChargeService(shopUrl, accessToken.Token);
        return Ok(await service.CreateAsync(recCharge));
        
    }

    [HttpGet]
    [Route("Accepted")]
    public async Task<IActionResult> Accepted(string planName,long charge_id,string token)
    {
        var accessToken = (Session?)HttpContext.Items[GlobalVariables.TokenContextKey];
        var shopUrl = (string?)HttpContext.Items[GlobalVariables.ShopUrlContextKey];
        var service = new RecurringChargeService(shopUrl, accessToken.Token);
        var charge = await  service.GetAsync(charge_id);
        
        return Ok();
    }
}
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Route("api/[controller]")]
public class SubscriptionController : Controller
{
    // GET
    public IActionResult Index( )
    {
        return View();
    }
}
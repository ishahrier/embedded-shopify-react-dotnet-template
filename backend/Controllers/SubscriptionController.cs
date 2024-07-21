using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

public class SubscriptionController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}
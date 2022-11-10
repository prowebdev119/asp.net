using Microsoft.AspNetCore.Mvc;

namespace TPL.Server.Controllers.Landing
{
    public class TeamController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

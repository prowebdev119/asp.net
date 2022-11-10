using Microsoft.AspNetCore.Mvc;

namespace TPL.Server.Controllers.Landing
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}

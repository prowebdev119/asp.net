using Microsoft.AspNetCore.Mvc;

namespace TPL.Server.Controllers.Landing
{
    public class PortfolioController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}

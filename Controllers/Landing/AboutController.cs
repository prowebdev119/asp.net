using Microsoft.AspNetCore.Mvc;

namespace TPL.Server.Controllers.Landing
{
    public class AboutController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}

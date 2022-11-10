using Microsoft.AspNetCore.Mvc;

namespace TPL.Server.Controllers.Landing
{
    public class ServicesController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
using Microsoft.AspNetCore.Mvc;

namespace TPL.Server.Controllers.Landing
{
    public class BaseController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
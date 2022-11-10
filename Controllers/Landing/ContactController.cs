//using Common.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace TPL.Server.Controllers.Landing
{
    public class ContactController : Controller
    {
        public IConfiguration config;
        public ContactController(IConfiguration iConfig)
        {
            config = iConfig;

        }
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> ContactMe(IFormCollection form)
        {
            //await Utilities.SendEmail(config.GetValue<string>("Email:SMTP:Server"), config.GetValue<string>("Email:SMTP:Port"), config.GetValue<string>("Email:SMTP:UName"), config.GetValue<string>("Email:SMTP:Password"), config.GetValue<string>("Email:ContactEmail"), form["email"], "New Request", form["message"] + "<br /><br />" + form["name"] + "from org -" + form["org"]);
        

            return Content("Thank you for taking interest! Someone will be in contact with you with 24 hours.");
        }
    }
}

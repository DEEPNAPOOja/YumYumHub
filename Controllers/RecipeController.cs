using Microsoft.AspNetCore.Mvc;
using YumYumHub.Models;


namespace YumYumHub.Controllers
{
    public class RecipeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GetRecipeCard([FromBody] List<Recipe> Recipes)
        {
            return PartialView("", Recipes);
        }
    }
}

﻿using Microsoft.AspNetCore.Mvc;
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
        public IActionResult GetRecipeCard([FromBody] List<Recipe> recipes)
        {
            return PartialView("_RecipeCard", recipes);
        }

        public IActionResult search()
        {
            return View();
        }
    }
}

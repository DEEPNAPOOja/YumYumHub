// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let apiURL = "https://forkify-api.herokuapp.com/api/v2/recipes";
let apikey = "5116e63a-f592-4f40-97cf-367d695e6750";
async function GetRecipes(recipeName,id,isAllShow) {
    let resp = await fetch('${apiURL}?search=${recipeName}&key=${apikey}');
    let result = await resp.json();
    console.log(result);
    let showRecipes = isAllShow ? result.data.recipes : result.data.recipes.slice(0, 5);
    showRecipes(showRecipes, id);
}

function showRecipes(recipes, id) {
    $.ajax({
        contentType: "application/json; charset=utf=8",
        dataType: 'html',
        type: 'POST',
        url: '/Recipe/GetRecipeCard',
        data: JSON.stringify(recipes),
        success: function (htmlResult) {
            $("#" + id).html(htmlResult);
        }

    });
}
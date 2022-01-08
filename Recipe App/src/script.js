let menu = document.getElementById('menu');
let searchbtn = document.getElementById('search');

searchbtn.addEventListener('click', () => {
    let searchBar = searchbtn.parentElement.querySelector('input');
    // console.log(searchBar);
    searchBar.classList.add('active');
    setTimeout(() => {
        searchBar.classList.remove('active');
    }, 5000);
});

menu.addEventListener('click', () => {
    let buttons = menu.parentElement.querySelector('.buttons');
    // console.log(buttons);
    buttons.classList.add('active');
    setTimeout(() => {
        buttons.classList.remove('active');
    }, 5000);

});

function newRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            console.log(data.meals[0]);
            recipe = data.meals[0];
            console.log(recipe.strInstructions);

        })
}
newRecipe();
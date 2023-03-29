// Ramen Rater Solution
const ramenMenu = document.querySelector("#ramen-menu")
const ramenImage = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const ramenRestaurant = document.querySelector(".restaurant")
const ramenRating = document.querySelector("#rating-display")
const ramenComment = document.querySelector("#comment-display")
const newRamen = document.querySelector("#new-ramen")
let globalRamen;
//Challenge 1
document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})
//Challenge 3
newRamen.addEventListener("submit", (e) => {
    //e.preventDefault();
    addNewRamen(e)

})
//fetch the ramen data
function fetchData(){
    fetch("http://localhost:3000/ramens")
    .then((res)=> res.json())
    .then((data) => {
        data.forEach((ramen) => {
            displayImage(ramen)
        })
        showDetails(data[0])
    })

}
//Challenge 2
function displayImage(ramen){
    console.log(ramen)
    let img = document.createElement("img")
    img.src = ramen.image
    img.id = `id${ramen.id}`
    img.addEventListener('click', ()=> {
        showDetails(ramen)
        globalRamen = ramen.id
    })

    ramenMenu.appendChild(img)
}
function showDetails(ramen){
    ramenImage.src = ramen.image
    ramenName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant
    ramenRating.textContent = ramen.rating
    ramenComment.textContent = ramen.comment
}
function addNewRamen(event){
    event.preventDefault();
    let newObject = {
        name: event.target["new-name"].value,
        restaurant: event.target["new-restaurant"].value,
        rating: event.target["new-rating"].value,
        comment: event.target["new-comment"].value,
        image: event.target["new-image"].value
    }
    displayImage(newObject)
}
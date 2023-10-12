const imgBox = document.getElementById("imgBox")
const catImg = document.getElementById("catImg")
const buttonOne = document.getElementById("buttonOne")
const buttonTwo = document.getElementById("buttonTwo")
const buttonThree = document.getElementById("buttonThree")


function(random_cat_image()) {
    catImg = 'https://randombig.cat/roar.json'

fetch(catImg)
   .then(res => res.json())
   .then(data => display_image(data.message))

   .catch(error => {
    console.error('Error fetching cat image:')
   })

function display_image(image_url) {
    document.getElementById('catImg').src = image_url;
}

}

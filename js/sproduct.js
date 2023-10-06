

const mainImg = document.getElementById('MainImg');
const subImg = document.getElementById('sub-img');
function getQueryParam(name) {
   const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get(name);
}

const imageName = getQueryParam('image');
try {
   mainImg.src = imageName;
   subImg.src = imageName;

} catch (err) {
   alert(err);
}


//

const btnToCard = document.querySelector('.normal');
btnToCard.addEventListener('click', function () {
   window.location.href = "shop.html";
})




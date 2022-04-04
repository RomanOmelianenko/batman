// Метод forEach для Node элементов в Internet Explorer не работает, поэтому эти элементы нужно перевести в массив
const raitingStars = () => {
  const ratingItemsList = document.querySelectorAll('.main__rating-star');
  const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
  const totalRating = document.querySelector(".main__raitig-span");

  ratingItemsArray.forEach(item => {
    item.addEventListener('click', (e) => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;
      // item.parentNode.dataset.totalValue = item.dataset.itemValue;
     
      const rating = item.getAttribute('data-item-value');
      
      totalRating.innerText = rating;
    })
  })
}

raitingStars();
const stars = document.querySelectorAll(".main__rating-star img");
const oneStar = document.querySelector(".main__raitig-span");
// console.log(stars);

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    let starArr = [];
    // star.classList.contains('main__star-active') ?
    //   star.classList.remove('main__star-active') :
    //   star.classList.add('main__star-active');

    const contain = star.classList.contains('main__star-active')
    if (contain) {
      star.classList.remove("main__star-active");
      oneStar.innerText = 0;
    } else {
      star.classList.add("main__star-active");
      oneStar.innerText = index + 1;
    }

    // console.log(star);

    // if (star) {
    //   starArr.push(star);
    //   console.log(starArr);
    // }
  });
});

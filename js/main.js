// swiper

let swiperLink = document.querySelectorAll(".swiper__link");

const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination-buttons',
    bulletClass: 'swiper__link',
    bulletActiveClass: 'swiper__link-active',
    clickable: true,
    renderBullet: function (index) {
      return `<span class="swiper__link subtitle">${swiperLink[index].innerHTML}</span>`;
    },
  },
});



// check value in input

const form = document.querySelector("#form");
let orderSelectSity = document.querySelector(".order__select-sity");
let moreSity = document.querySelector(".order__more-sity");
let inputs = document.querySelectorAll(".validate-input");

const addOption = (e) => {
  e.preventDefault();
  let options = document.querySelectorAll("option");

  options.forEach(option => {
    console.log(moreSity.value, option.value)
    if (moreSity.value !== option.value && moreSity.value !== "") {
      let newOption = document.createElement("option");

      newOption.innerHTML = moreSity.value;
      newOption.setAttribute("value", moreSity.value);
      orderSelectSity.insertBefore(newOption, orderSelectSity.lastChild);

      moreSity.value = "";
    }
  });

  inputs.forEach(input => {
    if (input.value === "") {
      input.classList.add("order__input-blank");
    }
  });

  inputs.forEach(input => {
    input.onclick = function () {
      input.classList.remove("order__input-blank");
    }
  });
}

form.addEventListener("submit", addOption);



// timer

let count = [05, 37, 25];

let everySecond = setInterval(function () {
  for (let i = 0; i < 1; i++) {
    count[2] = count[2] - 1;

    if (count[2] == 0) {
      count[2] = 59;
      count[1] = count[1] - 1;
    }

    if (count[1] == 0) {
      count[1] = 59;
      count[0] = count[0] - 1;
    }
  }

  if (String(count[0]).length < 2) {
    count[0] = "0" + count[0];
  }

  if (String(count[1]).length < 2) {
    count[1] = "0" + count[1];
  }

  if (String(count[2]).length < 2) {
    count[2] = "0" + count[2];
  }

  let countText = count[0] + ":" + count[1] + ":" + count[2];
  document.getElementById("order__timer").innerHTML = countText;
}, 1000);



// read more text

let readMoreButton = document.querySelectorAll(".reviews__read-more");

parent.onclick = function(event) {
  let target = event.target;

  for (let i = 0; i < readMoreButton.length; i++) {
    if (target === readMoreButton[i]) {
      let thisBlock = event.target.closest(".reviews__block");

      if (target.classList.contains('active')) {
        target.innerHTML = "Читать полностью";
        target.classList.remove('active');

        thisBlock.classList.remove("reviews__block-active");
      }

      else {
        target.innerHTML = "Свернуть";
        target.classList.add('active');

        thisBlock.classList.add("reviews__block-active");
      }
    }    
  }
};
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

let inputs = document.querySelectorAll('input[type="text"]');
let moreSity = document.querySelector(".order__more-sity");
let orderSelectSity = document.querySelector(".order__select-sity");
let options = document.querySelectorAll("option");
let check = false;

function checkInputs() {
  inputs.forEach(input => {
    if (input.value.length == 0) {
      input.classList.add("order__input-blank");
    }
  });

  options.forEach(option => {
    if (moreSity.value == option.value) {
      // console.log("123")
      check = false;
    }
    else {
      check = true;
    }
  });

  if (check == true) {
    let newOption = document.createElement("option");
    newOption.innerHTML = moreSity.value;
    orderSelectSity.insertBefore(newOption, orderSelectSity.lastChild);
    moreSity.value = "";
    console.log(options)
    // options.push(moreSity.value);
    // let newOption = new Option(moreSity.value, moreSity.value);
    // orderSelectSity.append(newOption);
  }
}

inputs.forEach(input => {
  input.onclick = function () {
    input.classList.remove("order__input-blank");
  }
});



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
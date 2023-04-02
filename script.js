var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

const allbuttons = document.getElementById("buttons");
const sliders = document.querySelectorAll(".slider");
// const buttons = document.querySelectorAll("button");
const buttons = allbuttons.querySelectorAll("button");

// set the first slide as active by default
sliders[0].classList.add("active");
buttons[0].classList.add("active");

// add click event listener to each button
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // remove active class from all slides and buttons
    sliders.forEach((slider) => slider.classList.remove("active"));
    buttons.forEach((button) => button.classList.remove("active"));

    // add active class to the selected slide and button
    sliders[index].classList.add("active");
    button.classList.add("active");
  });
});

document.querySelectorAll('.grid-wrapper img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-image').style.display = "block";
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = "none";
}

const position = document.documentElement;
position.addEventListener("mousemove", e => {
  position.style.setProperty('--x', e.clientX + 'px');
})

const form = document.querySelector(".form");

const firstName = document.getElementById("first");
const secondName = document.getElementById("second");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const emailText = document.querySelector(".label-text--email");
const phoneText = document.querySelector(".label-text--phone");

const buttonSubmit = document.querySelector(".form__button");

const popupError = document.querySelector(".popup--failure");
const buttonError = document.querySelector(".popup__button--failure");
const popupSuccess = document.querySelector(".popup--success");
const buttonSuccess = document.querySelector(".popup__button--success");

function errorRemove() {
  firstName.classList.remove("label-text__input--error");
  secondName.classList.remove("label-text__input--error");
  phone.classList.remove("label-text__input--error");
  phoneText.classList.remove("label-text--error");
  email.classList.remove("label-text__input--error");
  emailText.classList.remove("label-text--error");
}

buttonSubmit.addEventListener("click", function(evt) {
  evt.preventDefault();
  errorRemove();

  if (!firstName.value) {
    firstName.classList.add("label-text__input--error");
  }
  if (!secondName.value) {
    secondName.classList.add("label-text__input--error");
  }
  if (!phone.value) {
    phone.classList.add("label-text__input--error");
    phoneText.classList.add("label-text--error");
  }
  if (!email.value || !email.checkValidity()) {
    email.classList.add("label-text__input--error");
    emailText.classList.add("label-text--error");
  }
  if (!firstName.value || !secondName.value || !phone.value || !email.value || !email.checkValidity()) {
    popupError.classList.add("popup--show");
    window.scroll(0, 400);
  } else {
    popupSuccess.classList.add("popup--show");
  }
});

buttonError.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.remove("popup--show");
});

buttonSuccess.addEventListener("click", function(evt) {
  evt.preventDefault;
  form.submit();
  popupSuccess.classList.remove("popup--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupError.classList.contains("popup--show")) {
      popupError.classList.remove("popup--show");
    }
    if (popupSuccess.classList.contains("popup--show")) {
      popupSuccess.classList.remove("popup--show");
      form.submit();
    }
  }
});

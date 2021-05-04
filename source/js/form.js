var form = document.querySelector(".form");

if (form) {
  var firstName = document.getElementById("first");
  var secondName = document.getElementById("second");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");

  var emailText = form.querySelector(".label-text--email");
  var phoneText = form.querySelector(".label-text--phone");

  var buttonSubmit = form.querySelector(".form__button");

  var popupError = document.querySelector(".popup--failure");
  var buttonError = document.querySelector(".popup__button--failure");
  var popupSuccess = document.querySelector(".popup--success");
  var buttonSuccess = document.querySelector(".popup__button--success");

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
}

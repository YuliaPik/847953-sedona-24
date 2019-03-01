var link = document.querySelector(".button-open-form");
var popup = document.querySelector(".search-hotels-form");
var datein = popup.querySelector("[name=date-in]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-hide");
  datein.focus();
});

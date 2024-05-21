function Submit(event) {
  event.preventDefault();
  let SearchInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#city");
  city.innerHTML = SearchInput.value;
}

let SearchForm = document.querySelector("#search-form");
SearchForm.addEventListener("submit", Submit);

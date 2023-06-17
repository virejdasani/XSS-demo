const search = window.location.search;
const params = new URLSearchParams(search);
const term = params.get("search");

if (term) {
  console.log(term);

  document.getElementById("search_term").innerHTML =
    "No results found for: " + term;
}

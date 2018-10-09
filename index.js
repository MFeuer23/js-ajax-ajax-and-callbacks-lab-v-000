$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https://api.github.com/${input}/repos`
  $.get(url)
}
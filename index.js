$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https://api.github.com/users/${input}/repos`
  $.get(url).done(function(data) {
    $("results")
  }).fail(displayError())
}

function displayError() {
  "I'm sorry, there's been an error. Please try again."
}
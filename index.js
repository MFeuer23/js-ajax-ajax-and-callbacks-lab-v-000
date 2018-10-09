$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https://api.github.com/users/${input}/repos`
  $.get(url).done(function(data) {
    const repos = JSON.parse(data);
    const src = document.getElementById('repository-template').innerHTML;
    const template = Handlebars.compile(src);
    const repoList = template(repos);
    document.getElementById('repositories').innerHTML = repoList;
  }).fail(displayError())
}

function displayError() {
  "I'm sorry, there's been an error. Please try again."
}
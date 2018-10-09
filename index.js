$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https://api.github.com/users/${input}/repos`
  $(document).ready(function (){

    $.get(url).done(function(data) {
      `<ul>${data
    .map(r => '<li>' + r.name + '</li>')
    .join('')}</ul>`;
    }).fail(displayError())
  });
  $(".results").html(repoList);
}


function displayError() {
  "I'm sorry, there's been an error. Please try again."
}
$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https://api.github.com/users/${input}/repos`
  $(document).ready(function (){

    $.get(url).done(function(data) {
      console.log(data);
    const repoList = `<ul>${data
    .map(r => '<li>' + r.name + '</li>')
    .join('')}</ul>`;
    console.log(repoList);
      $(".results").html(repoList);
    }).fail(displayError())
  });

}


function displayError() {
  "I'm sorry, there's been an error. Please try again."
}
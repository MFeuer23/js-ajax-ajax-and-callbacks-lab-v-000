$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https://api.github.com/users/${input}/repos`
  $(document).ready(function (){

    $.get(url).done(function(data) {
      if(data==="undefined"){displayError()}
    const repoList = `<ul>${data
    .map(r => '<li>' + r.name + '</li>')
    .join('')}</ul>`;
    document.getElementById("results").innerHTML = repoList;
    }).fail(displayError())
  });

}


function displayError() {
  document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again.";
}
$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https:api.github.com/search/repositories?q=${input}`

  $(document).ready(function (){

    $.get(url, function(data) {
      console.log(data.items);

    const repoList = `<ul>${data.items
    .map(r => '<li>' + r.name + ', ' + r.html_url + '</li>')
    .join('')}</ul>`;
    document.getElementById("results").innerHTML = repoList;
    }).fail(displayError())
  });

}


function displayError() {
  document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again.";
}
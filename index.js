$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https:api.github.com/search/repositories?q=${input}`

  $(document).ready(function (){

    $.get(url).done(function(data) {
      console.log(data.items);

    const repoList = `<ul>${data.items
    .map(r => '<li>' + r.name + ', ' + r.html_url + '</li>' + `<a href="#" data-repo="${r.name}" data-user="${r.owner.login}" onclick="showCommits(this)">Show Commits</a>`)
    .join('')}</ul>`;
    document.getElementById("results").innerHTML = repoList;
    }).fail(displayError())
  });

}


function displayError() {
  document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again.";
}

function showCommits(el) {
  const repo = el.dataset.repo;
  const user = el.dataset.user;
  const url = `https://api.github.com/repos/${user}/${repo}/commits`
  $.get(url).done(function(data){
    const commitList = `<ul>${data
    .map(r => '<li>' + r.name + ', ' + r.html_url + '</li>' + `<a href="#" data-repo="${r.name}" data-user="${r.owner.login}" onclick="showCommits(this)">Show Commits</a>`)
    .join('')}</ul>`;
    document.getElementById("details").innerHTML = commitList;
  })
 
}
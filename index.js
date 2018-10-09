$(document).ready(function (){
});

function searchRepositories() {
  const input = document.getElementById("searchTerms").value
  const url = `https://api.github.com/users/${input}/repos`
  $(document).ready(function (){

    $.get(url).done(function(data) {
      console.log(JSON.stringify(data));
      $(".results").append(JSON.stringify(data))
    }).fail(displayError())
  });
}


function displayError() {
  "I'm sorry, there's been an error. Please try again."
}
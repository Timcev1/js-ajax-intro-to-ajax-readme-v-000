function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  let repoList = "<ul>"
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`
 document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

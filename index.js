function showRepositories(event, data){
  conosle.log(this.responseText)
}
function getRepositories() {
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

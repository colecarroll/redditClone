
// var vote = document.getElementsByClassName('vote')[0]
// var voteCount = document.getElementsByTagName('input')[1].attributes[2]
// console.log(voteCount)


// vote.addEventListener('click', function(e) {
// event.preventDefault()
// console.log(event)
// voteCount.textContent=1 + Number(document.getElementsByTagName('input')[1].attributes[2].textContent)
// })


var links = document.getElementsByClassName('links')[0]

links.addEventListener('click', function(e) {
  event.preventDefault()
  var voteCount = event.target.parentElement.previousElementSibling
  voteCount.value=1 + Number(event.target.parentElement.previousElementSibling.value)
})
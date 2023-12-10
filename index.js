function find() {
	fetch('http://jservice.io/api/random?count=1')
		.then(resp => resp.json())
		.then(data => display(data))
}

function display(data) {
  // $('.container h1').text(data[0].question)
  document.querySelector('.container h1').innerHTML  = data[0].question
	$('.container h2').text(data[0].answer)
}

$('.show').click(() => {
	$('.container h2').css('visibility', 'visible')
})

$('.reload button').click(() => {
	find()
	$('.container h2').css('visibility', 'hidden')
})

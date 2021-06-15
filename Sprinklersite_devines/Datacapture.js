
const form = document.getElementById('dataform');

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pnumbner = document.getElementById('pnumber');
const email = document.getElementById('mail');
const address = document.getElementById('anumber');
const subject = document.getElementById('subject');

form.addEventListener('submit', (e) => {
	let messages = []
	
	if (messages.length = 0) {
		e.preventDefault();
		alert('More details required to submit');
	}
	
	
	if (messages.length > 0) {
		e.preventDefault();
		getData(e);
	}
	
	
});


function getData(e){
	Array.from(document.querySelectorAll('#registrationForm input').reduce((acc, input) => 
	({ ...acc, [input.id]: input.value }), {});
	
	alert("Thank you for submitting");
}
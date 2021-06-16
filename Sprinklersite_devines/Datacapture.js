
const form = document.getElementById('dataform');

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pnumbner = document.getElementById('pnumber');
const email = document.getElementById('mail');
const address = document.getElementById('anumber');
const subject = document.getElementById('subject');

form.addEventListener('submit', (e) => {
	let messages = []
	e.preventDefault();
	
	if (messages.length = 0) {
		alert('More details required to submit');
		print("hi");
	}
	
	if (messages.length > 0) {
		getData(e);
	}
	
	
});


function getData(e){
	alert("Thank you for submitting");
	print(e);
}
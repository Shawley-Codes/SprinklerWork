const dataform = document.getElementById('dataform');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pnumbner = document.getElementById('pnumber');
const email = document.getElementById('mail');
const address = document.getElementById('anumber');
const subject = document.getElementById('subject');


//const exportUsersToExcel = require('./exportService');

const workSheetColumnName = [
    "First Name",
	"Last Name",
	"Phone Number",
	"Email",
	"Address",
    "Subject"
]

const workSheetName = 'Users';
const filePath = './Output/customer-information.xlsx';
var customerdata = [];

document.getElementById("submit").onclick = function (){
	alert("Export");
	//dataform.
	//need to get either office add ins or json
}
//const exportUsersToExcel(users, workSheetColumnName, workSheetName, filePath);
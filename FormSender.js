var form = document.forms.user;
var personName = form.elements["name"];
var personPhone = form.elements["phone"];

form.submit.addEventListener("click", sendRequest);

function sendRequest(event){
     
    event.preventDefault();

var request = new XMLHttpRequest();
function reqReadyStateChange() {
    if (request.readyState == 4 && request.status == 200)
        document.getElementById("output").innerHTML=request.responseText;
}
var body = "Name=" + personName.value + "&Phone="+ personPhone.value;
request.open("POST", "http://localhost:51331/api/values");
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.onreadystatechange = reqReadyStateChange;
request.send(body);
}
var form = document.forms.user;
var personName = form.elements["name"];
var personPhone = form.elements["phone"];
var bar =  document.getElementById("loading");
var button = document.getElementById("form-button");

form.submit.addEventListener("click", sendRequest);

function sendRequest(event){
     
    event.preventDefault();

var xhr = new XMLHttpRequest();
function reqReadyStateChange() {
    if (xhr.readyState == 4 && xhr.status == 200)
        document.getElementById("output").innerHTML=xhr.responseText;
}
var body = "Name=" + personName.value + "&Phone="+ personPhone.value + "&ChatID=232076268";
xhr.open("POST", "http://telegramsender.somee.com/api/values");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = reqReadyStateChange;
xhr.onloadstart = function () {
  button.style="display:none";
  bar.style="display:block"
  };
  xhr.onloadend = function () {
  bar.style="display:none"
  button.style="display:inline; background-color:#33ff33";
  button.value="Отправлено!"
  };
xhr.send(body);

}


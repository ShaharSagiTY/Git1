alert("Hello!");
document.querySelector("#PageTitle").innerHTML = "This is a New Title";
document.querySelector("#HelloTest").innerHTML = "Hello new world";
const testVar = window.parent.document.getElementById("test123");
console.log(testVar.innerHTML);
alert(testVar.innerHTML);

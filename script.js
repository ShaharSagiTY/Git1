alert("Hello!");
document.querySelector("#PageTitle").innerHTML = "This is a New Title";
document.querySelector("#HelloTest").innerHTML = "Hello new world";
const testVar = window.parent.document.getElementById("test123").innerHTML;
console.log(testVar);
alert(testVar);
document.querySelector("#Secondary").innerHTML = testVar;

// document.writeln("hello world");
console.log("Hello world");

function toggleText(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

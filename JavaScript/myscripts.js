function contactShow(){
var x = document.getElementById("invs1");
var y = document.getElementById("contactButton");
  if (x.style.display === "none") {
    x.style.display = "block";
	y.innerHTML = "Hide Contact Info";
  } else {
    x.style.display = "none";
	y.innerHTML = "Show Contact Info";
  }
}
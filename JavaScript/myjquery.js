 $(document).ready(function(){
  setInterval(swapImages,3000);
  // hides contact information
  $("#invis1").hide();
   // controls the display of contact information using the contact button
  $("#contactButton").click(function(){
	var x = $("#contactButton").text();
	if(x == "Show Contact Info"){
      $("#invis1").fadeIn();
	  $("#contactButton").text("Hide Contact Info");
	}
	else{
	  $("#invis1").fadeOut();
	  $("#contactButton").text("Show Contact Info");
	}
  });
  function swapImages(){
	  $("#ourCoffee").hide();
	  document.getElementById("ourCoffee").src = "Images/About_item/coffee2.jpg";
	  $("#ourCoffee").fadeIn(2000);
  }
});
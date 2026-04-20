 $(document).ready(function(){
  setInterval(swapImages,4000);
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
  // cycles through the images on the About Page
  function swapImages(){
	  let x = $("#ourCoffee").attr("src");
      $("#ourCoffee").hide();
	  $("#ourStore").hide();
	  if (x == "Images/About_item/coffee1.jpg"){
		   $("#ourCoffee").attr("src","Images/About_item/coffee2.jpg");
		   $("#ourStore").attr("src","Images/About_item/store2.jpg");
		   x = $("#ourCoffee").attr("src");
		   $("#ourCoffee").fadeIn(500);
		   $("#ourStore").fadeIn(500);
		   
	  }
	  else if (x == "Images/About_item/coffee2.jpg"){
		   $("#ourCoffee").attr("src","Images/About_item/coffee3.jpg");
		   $("#ourStore").attr("src","Images/About_item/store3.jpg");
		   x = $("#ourCoffee").attr("src");
		   $("#ourCoffee").fadeIn(500);
		   $("#ourStore").fadeIn(500);
	  }
	  else if (x == "Images/About_item/coffee3.jpg"){
		   $("#ourCoffee").attr("src","Images/About_item/coffee1.jpg");
		   $("#ourStore").attr("src","Images/About_item/store1.jpg");
		   x = $("#ourCoffee").attr("src");
		   $("#ourCoffee").fadeIn(500);
		   $("#ourStore").fadeIn(500);
	  }
	    
  }
  
  
  
 
});
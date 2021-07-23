var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

$(function() {  
            $( "#datepick" ).datepicker();  
         }); 

         $(function() {  
            $( "#datepick2" ).datepicker();  
         });

   $(window).on("scroll", function() {
  var currentPos = $(window).scrollTop();

  $('.nav ul li a').each(function() {
    var sectionLink = $(this);
    // capture the height of the navbar
    var navHeight = $('#navbar').outerHeight() + 1;
    var section = $(sectionLink.attr('href'));

    // subtract the navbar height from the top of the section
    if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
      $('.nav li').removeClass('active');
      sectionLink.parent().addClass('active');
    } else {
      sectionLink.parent().removeClass('active');
    }
  });        
});

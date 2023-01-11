/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("myDropdown");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//     }
//   }


$(document).ready(function() {
    $('.dropdown1').mouseenter(function() {
        $("#myDropdown1").slideDown("show");
        })
    
    $('.dropdown1').mouseout(function() {
        $("#myDropdown1").slideUp("show");
        })

    $('.dropdown2').mouseenter(function() {
        $("#myDropdown2").slideDown("show");
        })
        
    $('.dropdown2').mouseout(function() {
        $("#myDropdown2").slideUp("show");
        })


})
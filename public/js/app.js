$(document).ready(function(){

  // Modal Escape Key Listener
  $(document).keyup(function(e){
      if(e.which == 27){
          // Close my modal window
          $('.portfolio-modal').modal('hide');
      }
  });

  // Close the menu if the student logo is clicked
  $('.navbar-brand').on('click', function(){
    $('.navbar-toggle:visible').click();
  });

});
// Modal Escape Key Listener
$(document).ready(function(){

  $(document).keyup(function(e){
      if(e.which == 27){
          // Close my modal window
          $('.portfolio-modal').modal('hide');
      }
  });

});
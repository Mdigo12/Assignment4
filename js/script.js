$(document).ready(function(){
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        // modal.find('.modal-title').text('New message to ' + recipient)
        // modal.find('.modal-body input').val(recipient)
      });
    //   $(".bar1").hover(function(){
    //     var div = $("div");
    //     div.animate({height: '300px', opacity: '0.4'}, "slow");
    //     div.animate({width: '300px', opacity: '0.8'}, "slow");
    //     div.animate({height: '100px', opacity: '0.4'}, "slow");
    //     div.animate({width: '100px', opacity: '0.8'}, "slow");
    //   });
   $("button#menuIcon").hover(function(){
    //    $(this).css("background-color", "#cccccc");
 
    // alert("Welcome");
      

   });
   $('.carousel').carousel(
   $(".carousel-inner .carousel-item").on('slid.bs.carousel', function () {
     $('h2').addClass('animated bounceInDown');
    
    

    // do something…
  })
  );
  $('.pages a').click(function(){
    console.log(this)
    $('.headerMain').load('/products.html');
    $(this)("nav").append($(".mainHeader"))
    alert("welcome to our products")

  });
  $('.products nav').append()


});
 $(document).ready(function() {
    $(".nav").children("a").click(function() {
      $(".active").removeClass("active");
      $(".add-shadow").removeClass("add-shadow");
      $(this).addClass("active");
      $(this).addClass('add-shadow');

    });

    function scrollToDiv(id) {
      $('html,body').animate({ scrollTop: $(id).offset().top }, 800)
    }

    $("#introduction").click(function() {
      scrollToDiv("#introductionContent");
    });


    $("#introductionInformation").click(function() {
      scrollToDiv("#informationContent");
    })
    $("#discuss").click(function() {
      scrollToDiv("#discussContent");
    })


    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

    var $window = $(window),
      $btn = $('.introduction-btn-style');
      
      function justifyContentEnd(){
        if ($window.width() > 768) {
        $btn.addClass('d-flex');
        $btn.addClass('justify-content-end');
      }
      };
justifyContentEnd()



    $(window).on('resize', function() {
      if ($window.width() > 768) {
        $btn.addClass('d-flex');
        $btn.addClass('justify-content-end');
      }
      else {
        $btn.removeClass('d-flex');
        $btn.removeClass('justify-content-end');
      }
    });




  });
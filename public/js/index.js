 $(document).ready(function() {
    $(".nav-item").children("a").click(function() {
      $(".active").removeClass("active");
      $(this).addClass("active");
    });




  });
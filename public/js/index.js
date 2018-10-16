 $(document).ready(function() {
     
     $('fa-search').click(function(){
$('.search-container,.search-input').toggleClass('active');
$('.search-input').focus();


})

// let password=$("#password").val()
// let confirmPassword=$('#confirmPassword').val();
// console.log(password)
// console.log(confirmPassword)
// if(password!==confirmPassword){
    
//   $('#formJoin').submit(function(event){
//       event.preventDefault();
//       console.log('您輸入的密碼不一致')
//       return false
//   })

// }



         $(".nav-item").children("a").click(function() {
             $(".active").removeClass("active");
             $(this).addClass("active");
         });





    //      $('.div-hidden').slice(0, 3).show();
    //  $(window).scroll(function() {
    //      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
    //          $('.div-hidden:hidden').slice(0, 3).slideDown().addClass('animated fadeIn');

    //      }
    //  })

// let content = $('.content');
// console.log(content);

// $('#popular').on('click',function(){
   
// })
  let content = $('.content');
  
  $('.content').click(function(){
        $('.content').show();
  })

      $(".set-ajax").on('click',function(e){
    
          $('.content').hide();
          
        event.preventDefault(); 
/*取消預設行為不然會轉跳*/
          var href = $(this).prop("href"); 
          
           $(".ajax-content").empty('');
/*這裡的this是被點到的物件*/
         $.ajax({
              type:"GET",
              dataType: 'html',
          url: href,
          success:function(result){
              $(".ajax-content").html(result);
          }
         })
        
      });


 });
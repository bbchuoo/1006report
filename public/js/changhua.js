 $(document).ready(function() {
     
     
     



     function centralDress() {
         this.addressJSON = {
             '請選擇區域 ': 0,
             '彰化市': 0,
             '員林市': 0,
             '和美鎮': 0,
             '鹿港鎮': 0,
             '北斗鎮': 0,
             '溪湖鎮': 0,
             '田中鎮': 0,
             '二林鎮': 0,
             '線西鄉': 0,
             '伸港鄉': 0,
             '福興鄉': 0,
             '秀水鄉': 0,
             '花壇鄉': 0,
             '芬園鄉': 0,
             '大村鄉': 0,
             '埔鹽鄉': 0,
             '埔心鄉': 0,
             '永靖鄉': 0,
             '社頭鄉': 0,
             '二水鄉': 0,
             '田尾鄉': 0,
             '埤頭鄉': 0,
             '芳苑鄉': 0,
             '大城鄉': 0,
             '竹塘鄉': 0,
             '溪州鄉': 0,
         }
         this.getCityArray = function() {
             return Object.keys(this.addressJSON);
         }
     }

     var dress = new centralDress();

     function fillCityList() {

        
         
         $('#areasInputText').html('');
        //   console.log(dress.getCityArray()); //array26 中區 東區....
         let areasList = dress.getCityArray();

         for (var city in areasList) {
            //  console.log(city) //0..1..2..3..4..5
             var sOption = '<option value="' + areasList[city] + '">' +
                 areasList[city] + '</option>';
             $("#areasInputText").append(sOption);

         }
         
         
     }
     fillCityList();
	$("#areasInputText").trigger("change");
	
	


$('#areasInputText').change(function(){
 
 
 
      let $this = $(this);
    let areaName = ($this.val());
      $('#areasInputText :selected(option)').value;

      if(areaName==='彰化市'){

      ajaxSearch('https://graduationreport-bbchuoo.c9users.io/changhua/changhuaCity');
      }
      
    console.log(areaName)
      
})


      			function ajaxSearch(url){
      			           $.ajax({
                    type:"GET",
                url: url,
                success:function(result){
                    $("#content").html("");
                    $("#content").html(result);
                }
              })	}




     

  
       let $element = $("#content");

let lastHeight = $("#content").css('height');
let footer = $('.footer').position().top;

    
function checkForChanges()
{
          console.log(lastHeight)
    if ($element.css('height') != lastHeight)
    {
        $('.footer').css('top', 0 + 'px'); 
         clearInterval(interval);
    }

}
let interval = setInterval(checkForChanges, 1000);



 });
 
 
 
 
 
 
 
 
 
 
 

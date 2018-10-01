 $(document).ready(function() {

     function centralDress() {
         this.addressJSON = {
             '中區': '中區',
             '東區': '東區',
             '南區': '南區',
             '西區': 0,
             '北區': '北區',
             '西屯區': 0,
             '南屯區': 0,
             '北屯區': 0,
             '大里區': 0,
             '霧峰區': 0,
             '后里區': 0,
             '石崗區': 0,
             '東勢區': 0,
             '和平區': 0,
             '新社區': 0,
             '潭子區': 0,
             '大雅區': 0,
             '神岡區': 0,
             '大肚區': 0,
             '龍井區': 0,
             '沙鹿區': 0,
             '梧棲區': 0,
             '清水區': 0,
             '大甲區': 0,
             '外埔區': 0,
             '大安區': 0,
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



$('#areasInputText').change(function(){
    let $this = $(this);
    let areaName = ($this.val());

      if(areaName==='北區'){

      ajaxSearch('https://graduationreport-bbchuoo.c9users.io/taichung/northDistrict');
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


 });
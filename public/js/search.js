 $(document).ready(function(){
     

    
    function centralDress (){
  this.addressJSON =
    {
    "台中市":{
      '中區':'中區',
      '東區':0,
      '南區':0,
      '西區':0,
      '北區':'北區',
      '西屯區':0,
      '南屯區':0,
      '北屯區':0,
      '大里區':0,
      '霧峰區':0,
      '后里區':0,
      '石崗區':0,
      '東勢區':0,
      '和平區':0,
      '新社區':0,
      '潭子區':0,
      '大雅區':0,
      '神岡區':0,
      '大肚區':0,
      '龍井區':0,
      '沙鹿區':0,
      '梧棲區':0,
      '清水區':0,
      '大甲區':0,
      '外埔區':0,
      '大安區':0,
    },
    '彰化縣':{
      '彰化市':0,
      '員林市':1,
      '和美鎮':1,
      '鹿港鎮':1,
      '北斗鎮':1,
      '溪湖鎮':1,
      '田中鎮':1,
      '二林鎮':1,
      '線西鄉':1,
      '伸港鄉':1,
      '福興鄉':1,
      '秀水鄉':1,
      '花壇鄉':1,
      '芬園鄉':1,
      '大村鄉':1,
      '埔鹽鄉':1,
      '永靖鄉':1,
      '社頭鄉':1,
      '二水鄉':1,
      '田尾鄉':1,
      '埤頭鄉':1,
      '芳苑鄉':1,
      '大城鄉':1,
      '竹塘鄉':1,
      '溪州鄉':1,

    },
  }
 	this.getCityArray = function () {
		return Object.keys(this.addressJSON);
	}
	
	this.getAreaArray = function (cityName) {
		return Object.keys(this.addressJSON[cityName]);
	}
	
		this.searchAreaArray = function (cityName, areaName) {
		return this.addressJSON[cityName][areaName];
	}
}

var dress = new centralDress();


function fillCityList (){
  $('#countiesInputText').html('');
  let cityList =  dress.getCityArray();
  
  for(var city in cityList){
    // console.log('for in:::::::'+city);
        // console.log(cityList[city]);
    var sOption = '<option value="' + cityList[city] + '">'
						+ cityList[city] + '</option>';
    $("#countiesInputText").append(sOption);
  } 	
}
fillCityList();

/*縣市被改變之後*/

 $("#countiesInputText").change(function(){
   
   			$("#areasInputText option").remove();
   
   let scityName = $("#countiesInputText option:selected").val();
  // console.log(scityName)

			var areaList = dress.getAreaArray(scityName);
  // console.log(areaList)
			$("#AreasInputText option").remove();
   
   for(var area in areaList){
    // console.log('area='+area);
     var o = $("<option />",
						{ value: areaList[area], text: areaList[area]});
				o.appendTo("#areasInputText");
   }
 });

		$("#countiesInputText").trigger("change");
  
    
  $('.btn-search').click(function(){
   

   let cityName = $("#countiesInputText option:selected").val();
      let areaName = $("#areasInputText option:selected").val();
      let selectTypesOf = $("#selectTypesOf option:selected").val();
			var areaList = dress.searchAreaArray(cityName, areaName);
			
			function ajaxSearch(url){
			           $.ajax({
               type:"GET",
          url: url,
          success:function(result){
              $("#content").html("");
              $("#content").html(result);
          }
         })
			}
   
if(areaList==='中區'||selectTypesOf==='餐廳'){
           
ajaxSearch('https://graduationreport-bbchuoo.c9users.io/search/test');
}
 });

    
    
  });
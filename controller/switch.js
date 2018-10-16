module.exports = function (request, response, controllerName) {
    this.request  = request;
    this.response = response;
    this.viewPath = 'html/' ;
    

		
		var mysql = require("mysql")
	       var connection = mysql.createConnection({
           host: "localhost",
           user: "root",
           password: "",
           database: "post"
        });
        
        connection.connect(function (err) {
            if (err) {
                console.log("cannot connect");
            }
        })
    
	this.miaoli = function () {
	
      var this_response =this.response;
		var this_viewPath = 'html/';
		    var this_request =this.request
		
        connection.query('select * from postTable where county="miaoli" ','',
        function(err,rows){
        	this_response.render(this_viewPath+'miaoli.html',{
        		rows,
        		searchValue:this_request.body.searchValue 
        		
        	})
        } )

	}
	

	
	

}

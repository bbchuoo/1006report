module.exports = function (request, response, controllerName) {
    this.request  = request;
    this.response = response;
    this.viewPath = 'html/' ;
    
	this.northDistrict = function () {
		console.log(this.viewPath)
	    this.response.render(this.viewPath + "northDistrict.html", 
	        { userName: request.session.userName }
	    );
	}
	
		this.test = function () {
		console.log(this.viewPath)
	    this.response.render(this.viewPath + "test.html", 
	        { userName: request.session.userName }
	    );
	}
	


}

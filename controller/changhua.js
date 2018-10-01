module.exports = function (request, response, controllerName) {
    this.request  = request;
    this.response = response;
    this.viewPath = 'changhua/' ;
    
	this.changhuaCity = function () {
		console.log(this.viewPath)
	    this.response.render(this.viewPath + "changhuaCity.html", 
	        { userName: request.session.userName }
	    );
	}
	


}

module.exports = function (request, response, controllerName) {
    this.request  = request;
    this.response = response;
    this.viewPath = 'html/' ;
    
	this.index = function () {
		console.log(this.viewPath)
	    this.response.render(this.viewPath + "index.html", 
	        { userName: request.session.userName }
	    );
	}
	
	this.member = function(){
	this.response.render(this.viewPath + "member.html", 
	        { userName: request.session.userName }
	    );
	}
	
		this.sign = function(){
	this.response.render(this.viewPath + "sign.html", 
	        { userName: request.session.userName }
	    );
	}
	
			this.page = function(){
	this.response.render(this.viewPath + "page.html", 
	        { userName: request.session.userName }
	    );
	}
	
				this.search = function(){
	this.response.render(this.viewPath + "search.html", 
	        { userName: request.session.userName }
	    );
	}
	
					this.taichung = function(){
	this.response.render(this.viewPath + "taichung.html", 
	        { userName: request.session.userName }
	    );
	}
						this.changhua = function(){
	this.response.render(this.viewPath + "changhua.html", 
	        { userName: request.session.userName }
	    );
	}

	

}

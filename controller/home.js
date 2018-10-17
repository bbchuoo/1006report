module.exports = function(request, response, controllerName) {
    this.request = request;
    this.response = response;
    this.viewPath = 'html/';

var errorMessage ='';
    var mysql = require("mysql")
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "post"
    });

    connection.connect(function(err) {
        if (err) {
            console.log("cannot connect");
        }
    })




    this.post_search = function() {

        var this_response = this.response;
        var this_request = this.request
        var this_viewPath = 'html/';

        // let a = this_request.body.search;
        // console.log(a)

        connection.query('select * from postTable', '',
            function(err, rows) {
                this_response.render(this_viewPath + 'search.html', {

                    rows,
                    searchValue: this_request.body.searchValue,
                    //註冊
                    userName: '',
                    password: '',
                    email: '',
                    confirmPassword: '',
                    //登入
                    loginEmail: '',
                    loginPassword: '',
                    errorMessage: '',

                })
            })
    }

    this.index = function() {


        var this_response = this.response;
        var this_viewPath = 'html/';
        var this_request = this.request

        connection.query('select postTable.*, postMember.* from postTable left join postMember on postTable.postID = postMember.memberID; ', '',
            function(err, rows) {
                this_response.render(this_viewPath + 'index.html', {
                    request:this_request,
                    errorMessage: '',
                    rows,
                    searchValue: '',
                    //註冊
                    userName: '',
                    password: '',
                    email: '',
                    confirmPassword: '',
                    //登入
                    loginEmail: this_request.body.loginEmail,
                    loginPassword: this_request.loginPassword
                })

            })

    }


    this.page = function() {
        var this_response = this.response;
        var this_viewPath = 'html/';
        var this_request = this.request

// connection.query('select * from comment', '',
//             function(err, rows) {
//                 // this_response.send(JSON.stringify(rows));
//                 this_response.render(this_viewPath + 'page.html', {
//                     commentName: '',
//                     commentScore: '',
//                     comment: '',
//                     commentDate: '',
//                     rows,
//                     searchValue: this_request.body.searchValue,
//                     //註冊
//                     userName: '',
//                     password: '',
//                     email: '',
//                     confirmPassword: '',
//                     //登入
//                     loginEmail: '',
//                     loginPassword: ''
//                 })
//             })
        connection.query('select * from comment', '',
            function(err, rows) {
                // this_response.send(JSON.stringify(rows));
                this_response.render(this_viewPath + 'page.html', {
                    commentName: '',
                    commentScore: '',
                    comment: '',
                    commentDate: '',
                    rows,
                    searchValue: this_request.body.searchValue,
                    //註冊
                    userName: '',
                    password: '',
                    email: '',
                    confirmPassword: '',
                    //登入
                    loginEmail: '',
                    loginPassword: ''
                })
            })

    }

    this.post_page = function() {
        var this_response = this.response;
        var this_viewPath = 'html/';
        var this_request = this.request
        let sql = 'INSERT INTO comment set ?'
        let post = {
            commentName: this_request.body.commentName,
            commentScore: this_request.body.commentScore,
            comment: this_request.body.comment,
            commentDate: Date()
        }
        connection.query(sql, post,
            function(err, rows) {
this_response.redirect('/home/page');
            })

    }

    this.success = function() {
        this.response.render(this.viewPath + "success.html", {
            searchValue: this.request.body.searchValue
        });
    }


    this.post_login = function() {



        var this_response = this.response;
        var this_viewPath = 'html/';
        var this_request = this.request;

        connection.query('select postTable.*, postMember.* from postTable left join postMember on postTable.postID = postMember.memberID; ', '',
            function(err, rows) {
                for(var i in rows){
       
                    if(JSON.stringify(rows[i].memberEmail)==JSON.stringify(this_request.body.loginEmail)){
                        this_request.session.userName = this_request.body.loginEmail;
                        return this_response.redirect('/home/index');
                    }
                    else{
                      console.log("您輸入的資料錯誤")
            
                    }
                }

              

            }
            
            )

    }


    this.post_join = function() {



        var this_response = this.response;
        var this_viewPath = 'html/';
        var this_request = this.request
        let sql = 'INSERT INTO postMember set ?'
        let post = {
            memberName: this_request.body.userName,
            memberEmail: this_request.body.email,
            memberPassword: this_request.body.password
        }

        connection.query(sql, post,
            function(err, rows) {});
        connection.query('select postTable.*, postMember.* from postTable left join postMember on postTable.postID = postMember.memberID; ', '',
            function(err, rows) {

                this_response.render(this_viewPath + 'index.html', {
                    commentName: '',
                    commentScore: '',
                    comment: '',
                    commentDate: '',
                    rows,
                    searchValue: this_request.body.searchValue,
                    //註冊
                    userName: '',
                    password: '',
                    email: '',
                    confirmPassword: '',
                    //登入
                    loginEmail: '',
                    loginPassword: ''
                })
            }
        )
    }

}

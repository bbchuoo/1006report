var express = require("express");
var app = express();

var cors = require('cors');
app.use(cors());

//輸入
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );


//輸出

app.set('view engine','ejs');
app.engine('html',require("ejs").renderFile);
app.set('views',__dirname+'/view');

app.use(express.static('public'));

var session = require("express-session");
app.use(session({
   secret:'secretKey',
   resave:false,
   saveUninitialized:true
    
}));

// 一切就緒，開始接受用戶端連線
app.listen(process.env.PORT);
console.log(__dirname);

// 路由設定:
// 格式:  /controllerName/actionName
/*主目錄 / 是 home/index*/
app.get("/", function (request, response) {
    doControllerAction("home", "index", request, response);
});


app.get("/:controllerName/:actionName", function (request, response) {
    var controllerName = request.params.controllerName;
    var actionName = request.params.actionName;
    doControllerAction(controllerName, actionName, request, response);
});


// 呼叫 controller.action() 以處理 Client 端送來的請求
function doControllerAction(controllerName, actionName, request, response) {
    var moduleName = "./controller/" + controllerName + ".js";
    var controllerClass = require(moduleName);
    var controller = new controllerClass(request, response, controllerName);
    controller[actionName]();    
}

webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_component__ = __webpack_require__("../../../../../src/app/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tasks_add_task_add_task_component__ = __webpack_require__("../../../../../src/app/tasks/add-task/add-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__httpTask_service__ = __webpack_require__("../../../../../src/app/httpTask.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__httpClasses_service__ = __webpack_require__("../../../../../src/app/httpClasses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tasks_task_element_task_element_component__ = __webpack_require__("../../../../../src/app/tasks/task-element/task-element.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_component__["a" /* TasksComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_10__settings_settings_component__["a" /* SettingsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tasks_add_task_add_task_component__["a" /* AddTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_10__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tasks_task_element_task_element_component__["a" /* TaskElementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__httpTask_service__["a" /* HttpTaskService */], __WEBPACK_IMPORTED_MODULE_9__httpClasses_service__["a" /* HttpClassService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/httpClasses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpClassService = (function () {
    function HttpClassService(http) {
        this.http = http;
        this.classes = [];
    }
    HttpClassService.prototype.getClass = function () {
        console.log("getting tasks..");
        return this.http.get('http://localhost:5000/class').map(function (response) { var data = response.json(); return data; });
    };
    HttpClassService.prototype.postClass = function (classes) {
        this.classes.push({
            className: classes.className,
            color: classes.color,
            secColor: classes.secColor
        });
        return this.http.post('http://localhost:5000/class', classes);
    };
    HttpClassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HttpClassService);
    return HttpClassService;
}());



/***/ }),

/***/ "../../../../../src/app/httpTask.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpTaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpTaskService = (function () {
    function HttpTaskService(http) {
        this.http = http;
        this.tasks = [];
    }
    HttpTaskService.prototype.getTasks = function () {
        console.log("getting tasks..");
        return this.http.get('http://localhost:5000/tasks').map(function (response) {
            var data = response.json();
            return data;
        });
        /*
            return this.http.get('http://localhost:5000/tasks')
            .subscribe(
              (response:Response)=>{
                this.tasks=response.json();
                console.log(this.tasks);
              }
            );
            */
    };
    HttpTaskService.prototype.postTask = function (task) {
        //var num=Math.floor(Math.random() * 99999)+"task";
        this.tasks.push({
            taskid: task.taskid,
            class: task.class,
            text: task.text,
            endtime: task.endtime
        });
        return this.http.post('http://localhost:5000/tasks', task);
    };
    HttpTaskService.prototype.deleteTask = function (id) {
        return this.http.delete('http://localhost:5000/tasks/' + id).map(function (success) { return success.status; });
    };
    HttpTaskService.prototype.getVarTasks = function () {
        //console.log(this.tasks);
        return this.tasks;
    };
    HttpTaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HttpTaskService);
    return HttpTaskService;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#custom-bootstrap-menu.navbar-default .navbar-brand {\r\n    color: rgba(255, 255, 255, 1);\r\n}\r\n#custom-bootstrap-menu.navbar-default {\r\n    font-size: 14px;\r\n    background-color: rgba(63, 81, 181, 1);\r\n    border-width: 1px;\r\n    border-radius: 0px;\r\n}\r\n#custom-bootstrap-menu.navbar-default .navbar-nav>li>a {\r\n    color: rgba(255, 255, 255, 1);\r\n    background-color: rgba(63, 81, 181, 1);\r\n}\r\n#custom-bootstrap-menu.navbar-default .navbar-nav>li>a:hover,\r\n#custom-bootstrap-menu.navbar-default .navbar-nav>li>a:focus {\r\n    color: rgba(255, 255, 255, 1);\r\n    background-color: #3949AB;\r\n}\r\n#custom-bootstrap-menu.navbar-default .navbar-nav>.active>a,\r\n#custom-bootstrap-menu.navbar-default .navbar-nav>.active>a:hover,\r\n#custom-bootstrap-menu.navbar-default .navbar-nav>.active>a:focus {\r\n    color: rgba(173, 173, 173, 1);\r\n    background-color: rgba(63, 81, 181, 1);\r\n}\r\n#custom-bootstrap-menu.navbar-default .navbar-toggle {\r\n    border-color: #3d3d3d;\r\n}\r\n#custom-bootstrap-menu.navbar-default .navbar-toggle:hover,\r\n#custom-bootstrap-menu.navbar-default .navbar-toggle:focus {\r\n    background-color: #3d3d3d;\r\n}\r\n#custom-bootstrap-menu.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #3d3d3d;\r\n}\r\n#custom-bootstrap-menu.navbar-default .navbar-toggle:hover .icon-bar,\r\n#custom-bootstrap-menu.navbar-default .navbar-toggle:focus .icon-bar {\r\n    background-color: #3F51B5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"custom-bootstrap-menu\" class=\"navbar navbar-default \" role=\"navigation\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\"><a class=\"navbar-brand\" routerLink=\"/\">MyTimeClass</a>\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-menubuilder\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse navbar-menubuilder\">\r\n            <ul class=\"nav navbar-nav navbar-left\">\r\n                <li><a  routerLink=\"/\">Tasks</a>\r\n                </li>\r\n                <li><a routerLink=\"/settings\">Settings</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-circle{\r\n\tborder-radius: 50%;\r\n\twidth: 18px;\r\n\theight: 18px;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.class-container{\r\n\tborder: 2px solid  #f0f3f4 ;\r\n\tborder-radius: 5px;\r\n\tmargin: 12px;\r\n\tpadding: 4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h2>Classes</h2>\n<div class=\"class-container\" *ngFor=\"let class of classes\">\n\n\t\t\n\t\t\t<h4 style=\"display: inline-block;\"[style.color]=class.color>{{class.className}}</h4>\n\t\t\t<span class=\"color-circle\" [style.backgroundColor]=\"class.color\"></span>\n\t\t\t<span class=\"color-circle\" [style.backgroundColor]=\"class.secColor\"></span>\n\n\t\t\n\t\n  \n  \n   \n</div>\n\n<input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"className\">\n<input  type=\"color\" name=\"\" value=\"\" class=\"btn btn-primary\" [(ngModel)]=\"color\">\n<input  type=\"color\" name=\"\" value=\"\" class=\"btn btn-primary\" [(ngModel)]=\"secColor\">\n<button class=\"btn btn-primary\" type=\"button\" name=\"button\" (click)=\"saveClass()\">Add Class</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClasses_service__ = __webpack_require__("../../../../../src/app/httpClasses.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(classService) {
        this.classService = classService;
        this.className = "";
        this.color = "";
        this.secColor = "";
        this.class = { className: "Test", color: "0000", secColor: "Secondary" };
        this.classes = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classService.getClass()
            .subscribe(function (response) { console.log(response); _this.classes = response; }, function (error) { return console.log(error); });
    };
    SettingsComponent.prototype.saveClass = function () {
        this.class = { className: this.className, color: this.color, secColor: this.secColor };
        this.classService.postClass(this.class)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClasses_service__["a" /* HttpClassService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/add-task/add-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-feature{\r\n  border-radius: 100%;\r\n  background-color: #3F51B5;\r\n  color: white;\r\n  border: none;\r\n  font-size: 48px;\r\n  padding: 20px;\r\n  margin: 4px 4px;\r\n  height: 100px;\r\n  width: 100px;\r\n  line-height: 28px;\r\n  position:fixed;\r\n  bottom:0;\r\n  right:0;\r\n  box-shadow: 10px 0px  rgba(0,0,0,0.6);\r\n\t-moz-box-shadow: 10px 0px  rgba(0,0,0,0.6);\r\n\t-webkit-box-shadow: 0px 5px 5px rgba(0,0,0,0.6);\r\n\t-o-box-shadow: 10px 0px  rgba(0,0,0,0.6);\r\n  margin: 10px 10px;\r\n  z-index: 2;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/add-task/add-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-feature-container\" >\r\n<button class=\"home-feature\" type=\"button\" name=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">+</button>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Task</h4>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"class1\">\r\n            <option selected=\"selected\"> </option>\r\n            <option *ngFor=\"let class of classes\">{{class.className}}</option>\r\n          </select>\r\n        </div>\r\n        <input [(ngModel)]=\"text\" type=\"text\" class=\"form-control\" name=\"\" value=\"\">\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveTask()\">Save Task</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tasks/add-task/add-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpTask_service__ = __webpack_require__("../../../../../src/app/httpTask.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpClasses_service__ = __webpack_require__("../../../../../src/app/httpClasses.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTaskComponent = (function () {
    function AddTaskComponent(taskService, classService) {
        this.taskService = taskService;
        this.classService = classService;
        this.endtime = "99/99/99";
        this.task = { taskid: "0", class: "test", text: "test", endtime: "0/0/0" };
        this.classes = [];
        this.class1 = "default";
        this.taskid = Math.floor(Math.random() * 9999) + "id";
        this.updateEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classService.getClass()
            .subscribe(function (response) { console.log(response); _this.classes = response; }, function (error) { return console.log(error); });
    };
    AddTaskComponent.prototype.saveTask = function () {
        var _this = this;
        this.taskid = Math.floor(Math.random() * 9999) + "id";
        this.task = { taskid: this.taskid, class: this.class1, text: this.text, endtime: this.endtime };
        this.taskService.postTask(this.task)
            .subscribe(function (res) { console.log(_this.task.taskid); _this.updateEvent.emit(); }, function (err) { return console.log(err); });
        //this.updateEvent.emit();
        //console.log("emmitiendo.");
    };
    AddTaskComponent.prototype.updateTaks = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddTaskComponent.prototype, "updateEvent", void 0);
    AddTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-task',
            template: __webpack_require__("../../../../../src/app/tasks/add-task/add-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpTask_service__["a" /* HttpTaskService */], __WEBPACK_IMPORTED_MODULE_2__httpClasses_service__["a" /* HttpClassService */]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task-element/task-element.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-container *{\r\n  margin: 0;\r\n  padding: 12px;\r\n  color: white;\r\n  word-wrap: break-word;\r\n}\r\n.task-container {\r\n  margin: 12px;\r\n  padding: 12px;\r\n}\r\n\r\n.task-header{\r\n  text-align: center;\r\n  background-color: #F44336;\r\n}\r\n.task-body {\r\n  background-color: #E57373;\r\n  padding: 48px;\r\n}\r\n\r\n.close-container{\r\n\tposition: absolute;\r\n\tpadding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-element/task-element.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 col-xs-12\">\n<div class=\"task-container\">\n    <button type=\"button\" class=\"close close-container\" aria-label=\"Close\" (click)=\"onDeleteTasks(task._id)\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"task-header\" [style.backgroundColor]=\"sColor\">\n      <h3>{{task.class}}</h3>\n    </div>\n    <div class=\"task-body\" [style.backgroundColor]=\"sColor2\">\n      <h3>{{task.text}}</h3>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tasks/task-element/task-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpTask_service__ = __webpack_require__("../../../../../src/app/httpTask.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpClasses_service__ = __webpack_require__("../../../../../src/app/httpClasses.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskElementComponent = (function () {
    function TaskElementComponent(taskService, classService) {
        this.taskService = taskService;
        this.classService = classService;
        this.updateEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.classes = [];
    }
    TaskElementComponent.prototype.ngOnInit = function () {
        this.setColor();
    };
    TaskElementComponent.prototype.onDeleteTasks = function () {
        var _this = this;
        this.taskService.deleteTask(this.task.taskid)
            .subscribe(function (response) { console.log(_this.task.taskid); _this.updateEvent.emit(); }, function (error) { console.log(error); });
    };
    TaskElementComponent.prototype.setColor = function () {
        var _this = this;
        this.classService.getClass()
            .subscribe(function (response) {
            _this.classes = response;
            for (var i = 0; i < _this.classes.length; i++) {
                if (_this.task.class == _this.classes[i].className) {
                    _this.sColor = _this.classes[i].color;
                    _this.sColor2 = _this.classes[i].secColor;
                }
            }
        }, function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TaskElementComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskElementComponent.prototype, "updateEvent", void 0);
    TaskElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-element',
            template: __webpack_require__("../../../../../src/app/tasks/task-element/task-element.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task-element/task-element.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpTask_service__["a" /* HttpTaskService */], __WEBPACK_IMPORTED_MODULE_2__httpClasses_service__["a" /* HttpClassService */]])
    ], TaskElementComponent);
    return TaskElementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<app-add-task (updateEvent)=\"onUpdateTasks($event)\" (deleteEvent)=\"onDeleteTasks($event)\"></app-add-task>\n\n<div class=\"\">\n  <app-task-element (updateEvent)=\"onUpdateTasks($event)\" *ngFor=\"let task of tasks\" [task]=\"task\"></app-task-element>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpTask_service__ = __webpack_require__("../../../../../src/app/httpTask.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpClasses_service__ = __webpack_require__("../../../../../src/app/httpClasses.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = (function () {
    function TasksComponent(taskService, classService) {
        this.taskService = taskService;
        this.classService = classService;
        this.tasks = [];
        this.classes = [];
        this.taskid = "0";
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onUpdateTasks();
        this.classService.getClass()
            .subscribe(function (response) { console.log(response); _this.classes = response; }, function (error) { return console.log(error); });
    };
    TasksComponent.prototype.onUpdateTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (response) { console.log(response); _this.tasks = response; }, function (error) { return console.log(error); });
        console.log("Updating.....");
        //this.taskService.getTasks();
        /*
          this.taskService.getTasks()
          .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
          );
          */
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpTask_service__["a" /* HttpTaskService */], __WEBPACK_IMPORTED_MODULE_2__httpClasses_service__["a" /* HttpClassService */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
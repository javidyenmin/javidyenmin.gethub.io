(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {font-family: Arial;}\r\n\r\n/* Style the tab */\r\n\r\n.tab {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n/* Style the buttons inside the tab */\r\n\r\n.tab button {\r\n    background-color: inherit;\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 14px 16px;\r\n    transition: 0.3s;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n\r\n.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n\r\n.tab button.active {\r\n    background-color: #ccc;\r\n}\r\n\r\n/* Style the tab content */\r\n\r\n.tabcontent {\r\n    display: none;\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n<div>\n  <h1>Hotkeys</h1>\n  <ul>\n    <li>g g => alert \"g g\"</li>\n    <li>alt+d => alert \"alt+d\"</li>\n    <li>ctrl+d => alert \"ctrl+d\"</li>\n    <li>? => alert \"?\"</li>\n    <li>alt+y => redirect to yenmin.com</li>\n    <li>alt+g => redirect to google.co.in</li>\n  </ul>\n</div>\n<button (click)=\"btn_click()\">Test Click<br>alt+ctrl+s</button>\n<div class=\"tab\">\n  <button class=\"tablinks\" (click)=\"openCity($event, 'London')\" id=\"tab1\">London</button>\n  <button class=\"tablinks\" (click)=\"openCity($event, 'Paris')\" id=\"tab2\">Paris</button>\n  <button class=\"tablinks\" (click)=\"openCity($event, 'Tokyo')\" id=\"tab3\">Tokyo</button>\n</div>\n\n<div id=\"London\" class=\"tabcontent\">\n  <h3>London</h3>\n  <p>London is the capital city of England.</p>\n</div>\n\n<div id=\"Paris\" class=\"tabcontent\">\n  <h3>Paris</h3>\n  <p>Paris is the capital of France.</p> \n</div>\n\n<div id=\"Tokyo\" class=\"tabcontent\">\n  <h3>Tokyo</h3>\n  <p>Tokyo is the capital of Japan.</p>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_hotkeysService) {
        var _this = this;
        this._hotkeysService = _hotkeysService;
        this.title = 'Hotkeys';
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('meta+shift+g', function (event) {
            console.log('Typed hotkey');
            return false; // Prevent bubbling
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"](['meta+shift+g', 'alt+shift+s'], function (event, combo) {
            console.log('Combo: ' + combo); // 'Combo: meta+shift+g' or 'Combo: alt+shift+s'
            var e = event;
            e.returnValue = false; // Prevent bubbling
            return e;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('g g', function (event) {
            alert('g g');
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('?', function (event) {
            alert('?');
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('alt+d', function (event) {
            alert('alt+d');
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('ctrl+d', function (event) {
            alert('ctrl+d');
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('alt+y', function (event) {
            window.location.href = 'http://www.yenmin.com/';
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('alt+ctrl+s', function (event) {
            _this.btn_click();
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('alt+g', function (event) {
            window.location.href = 'https://www.google.co.in/';
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('f5', function (event) {
            alert('Page refresh');
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('shift+1', function (event) {
            document.getElementById('tab1').click();
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('shift+2', function (event) {
            document.getElementById('tab2').click();
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('shift+3', function (event) {
            document.getElementById('tab3').click();
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('f12', function (event) {
            alert('Dont Inspect');
            return false;
        }));
    }
    AppComponent.prototype.btn_click = function () {
        console.log();
        alert('Test Click');
    };
    AppComponent.prototype.openCity = function (evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName('tabcontent');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }
        tablinks = document.getElementsByClassName('tablinks');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }
        document.getElementById(cityName).style.display = 'block';
        evt.currentTarget.className += ' active';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3__["HotkeyModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Project\Angular\hotkeys\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
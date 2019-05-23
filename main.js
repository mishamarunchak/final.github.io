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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"leftBlock\">\r\n    <br>\r\n    <p>Наші роботи:</p>\r\n    <div class=\"img\">\r\n      <img src=\"../../assets/pictures/4.jpg\">\r\n      <img src=\"../../assets/pictures/5.jpg\">\r\n      <img src=\"../../assets/pictures/6.jpg\">\r\n      <img src=\"../../assets/pictures/7.jpg\">\r\n      <img src=\"../../assets/pictures/8.jpg\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"rightBlock\">\r\n    <br>\r\n    <p>Відгуки:</p>\r\n    <ul>\r\n      <li *ngFor=\"let item of feedbacks\">\r\n        {{ item.name }}\r\n        <br>\r\n        {{ item.message }}\r\n      </li>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 90%;\n  height: 500px;\n  margin: 10px auto;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between; }\n\n.img {\n  width: 600px;\n  height: 600px;\n  overflow: auto; }\n\n.leftBlock {\n  width: 750px;\n  height: 500px; }\n\n.rightBlock {\n  width: 300px;\n  height: 500px;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXE15XFxBbmd1bGFyXFxGaW5hbFxcZmluYWwvc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFJakI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcbi5pbWcge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubGVmdEJsb2Nre1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICBcclxufVxyXG4ucmlnaHRCbG9ja3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Object.defineProperty(AboutComponent.prototype, "feedbacks", {
        get: function () {
            return this.itemsService.listItems;
        },
        enumerable: true,
        configurable: true
    });
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");






var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<section>\r\n<router-outlet></router-outlet>\r\n</section>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'final';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, YourAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourAppModule", function() { return YourAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var YourAppModule = /** @class */ (function () {
    function YourAppModule() {
    }
    return YourAppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n\r\n<div class=\"main\">\r\n  <div class=\"leftBlock\">\r\n\r\n    <div class=\"block\">\r\n\r\n      <a>Зворотній зв'язок</a>\r\n      <br>\r\n      <br>\r\n      <form [formGroup]=\"messageForm\" (ngSubmit)=\"onSubmit()\">\r\n        <h5 *ngIf=\"success\">Дякуємо за Ваш відгук</h5>\r\n        <label>\r\n          Ім'я:\r\n          <input type=\"text\" formControlName=\"name\">\r\n          <div *ngIf=\"submitted && messageForm.controls.name.errors\" class=\"error\">\r\n            <div *ngIf=\"messageForm.controls.name.errors.required\"> Будь-ласка заповніть форму</div>\r\n          </div>\r\n        </label>\r\n\r\n\r\n        <label>\r\n          Як нас знайти:\r\n          <textarea formControlName=\"message\"></textarea>\r\n          <div *ngIf=\"submitted && messageForm.controls.message.errors\" class=\"error\">\r\n            <div *ngIf=\"messageForm.controls.message.errors.required\"> Будь-ласка заповніть форму</div>\r\n          </div>\r\n        </label>\r\n\r\n\r\n        <input type=\"submit\" value=\"Відправити\" class=\"cta\">\r\n      </form>\r\n\r\n      <!-- <div *ngIf=\"submitted\" class=\"results\">\r\n        <strong>Ім'я:</strong>\r\n        <span>{{ messageForm.controls.name.value}}</span>\r\n\r\n        <strong>Відгук:</strong>\r\n        <span>{{ messageForm.controls.message.value}}</span>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"rightBlock\">\r\n    <p>Карта:</p>\r\n\r\n    <iframe\r\n      src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d330676.0454022833!2d24.08899888046238!3d49.64663757217161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1557858090048!5m2!1sen!2sua\"\r\n      width=\"500\" height=\"450\" frameborder=\"1\" style=\"border:0\" allowfullscreen></iframe>\r\n    <br>\r\n    <br>\r\n    <p class=\"text\">\r\n      COPYRIGHT@\r\n      Адреса:\r\n      Україна, м.Львів\r\n      вул. С.Бандери 88 (098)76 678 77</p>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-link {\n  color: yellowgreen; }\n\n.block {\n  width: 700px;\n  margin-left: 20px; }\n\n.main {\n  width: 90%;\n  height: 500px;\n  margin: 10px auto;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between; }\n\n.leftBlock {\n  width: 500px;\n  height: 500px; }\n\n.rightBlock {\n  width: 500px;\n  height: 500px; }\n\nlabel {\n  display: block; }\n\nlabel input, label textarea {\n    display: block;\n    width: 40%;\n    margin-bottom: 20px;\n    padding: 1em; }\n\nlabel .error {\n    margin-top: -20px;\n    color: red;\n    padding: 0.5em;\n    display: inline-block;\n    font-size: .9em;\n    margin-bottom: 20px; }\n\n.cta {\n  width: 90px;\n  height: 40px;\n  background: green;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  border-radius: 4px;\n  padding: 1em;\n  cursor: pointer;\n  font-size: 11px; }\n\n.results {\n  margin-top: 40px; }\n\n.results strong {\n    display: block; }\n\n.results span {\n    margin-bottom: 20px;\n    display: block; }\n\nh1 {\n  font-size: 20px; }\n\n.contactData {\n  width: 800px;\n  margin-top: -80px;\n  text-align: center;\n  font-size: 12px; }\n\n.text {\n  font-size: 11px;\n  text-align: center;\n  margin-top: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcTXlcXEFuZ3VsYXJcXEZpbmFsXFxmaW5hbC9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLDhCQUE4QixFQUFBOztBQUlsQztFQUNJLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFJakI7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBSVEsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWSxFQUFBOztBQVBwQjtJQVdRLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUdRLGNBQWMsRUFBQTs7QUFIdEI7SUFNUSxtQkFBbUI7SUFDbkIsY0FBYyxFQUFBOztBQUd0QjtFQUVJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBRUksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtbGlua3tcclxuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubWFpbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcblxyXG4ubGVmdEJsb2Nre1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuLnJpZ2h0QmxvY2t7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdGEge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgc3Ryb25nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuaDEge1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0RGF0YSB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4udGV4dHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, itemsService) {
        this.formBuilder = formBuilder;
        this.itemsService = itemsService;
        this.submitted = false;
        this.success = false;
        this.messageForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.messageForm.invalid) {
            return;
        }
        this.success = true;
        if (this.success = true) {
            console.log(this.messageForm.value);
            this.itemsService.listItems.push({
                name: this.messageForm.value.name,
                message: this.messageForm.value.message,
            });
            this.messageForm.reset();
        }
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"leftContainer\">\r\n    <ul>\r\n      <!-- <ng-container> -->\r\n      <li *ngFor=\"let item of menuItems\" (mouseenter)=\"show(item.description)\" (mouseleave)=\"hide()\">\r\n        {{ item.name }}\r\n      </li>\r\n      <!-- </ng-container> -->\r\n    </ul>\r\n    <div [ngClass]=\"{'description': isPreviewShow }\">\r\n      {{ description }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"rightContainer\">\r\n    <ngb-carousel *ngIf=\"images\">\r\n      <ng-template ngbSlide>\r\n        <img src=\"../../assets/pictures/1.jpg\" alt=\"Random first slide\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Полірування кузова</h3>\r\n          <p>JAGUAR XR</p>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"../../assets/pictures/2.jpg\" alt=\"Random second slide\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Поклейка плівки</h3>\r\n          <p>BMW 5</p>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"../../assets/pictures/3.jpg\" alt=\"Random third slide\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Фарбування кузова</h3>\r\n          <p>BMW 5</p>\r\n        </div>\r\n      </ng-template>\r\n      <hr>\r\n    </ngb-carousel>\r\n    <br>\r\n    <br>\r\n    <div class=\"contactData\">\r\n      <a>\r\n        COPYRIGHT@\r\n        Адреса:\r\n        Україна, м.Львів\r\n        вул. С.Бандери 88 (098)76 678 77</a></div>\r\n\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 1200px;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  margin: 20px auto;\n  padding: 1.3em; }\n  .main .rightContainer {\n    width: 800px;\n    height: 500px;\n    border-radius: 5px;\n    margin-left: -5px;\n    margin-top: 10px;\n    background-size: cover;\n    border-radius: 25px;\n    box-shadow: 10px 10px 18px -5px #080808; }\n  .main .rightContainer .contactData {\n      width: 800px;\n      margin-top: 80px;\n      text-align: center;\n      font-size: 12px; }\n  .main .leftContainer {\n    width: 320px;\n    height: 680px; }\n  .main .leftContainer ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  .main .leftContainer ul li {\n        width: 300px;\n        height: 40px;\n        background-color: grey;\n        margin: 10px;\n        border-radius: 5px;\n        padding: 0.5em;\n        color: aliceblue;\n        text-decoration: none;\n        font-size: 15px;\n        box-shadow: 10px 9px 7px -6px rgba(0, 0, 0, 0.75); }\n  .main .leftContainer ul li:hover {\n          background-color: #2cb11bb8;\n          color: black; }\n  .main .leftContainer .description {\n      width: 300px;\n      height: 300px;\n      background-color: grey;\n      color: aliceblue;\n      text-decoration: none;\n      font-size: 15px;\n      box-shadow: 10px 9px 7px -6px rgba(0, 0, 0, 0.75);\n      border-radius: 5px;\n      margin-left: 10px;\n      padding: 0.5em;\n      transition: 200ms; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcTXlcXEFuZ3VsYXJcXEZpbmFsXFxmaW5hbC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsY0FBYyxFQUFBO0VBTmxCO0lBVUksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVDQUE2QyxFQUFBO0VBakJqRDtNQXFCUSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixlQUFlLEVBQUE7RUF4QnZCO0lBNkJJLFlBQVk7SUFDWixhQUFhLEVBQUE7RUE5QmpCO01Ba0NRLHFCQUFxQjtNQUNyQixTQUFTO01BQUUsVUFBVSxFQUFBO0VBbkM3QjtRQXNDUSxZQUFZO1FBQ1osWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixpREFBOEMsRUFBQTtFQS9DdEQ7VUFrRFksMkJBQTJCO1VBQzNCLFlBQVksRUFBQTtFQW5EeEI7TUF3RFksWUFBWTtNQUNaLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsaURBQThDO01BQzlDLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsY0FBYztNQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMS4zZW07XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIFxyXG4gICAgLnJpZ2h0Q29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxOHB4IC01cHggcmdiYSg4LDgsOCwxKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcblxyXG4gICAgLmNvbnRhY3REYXRhIHtcclxuICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0Q29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogNjgwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCA5cHggN3B4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjYjExYmI4O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCA5cHggN3B4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-list */ "./src/app/mock-list.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        this.lists = _mock_list__WEBPACK_IMPORTED_MODULE_2__["MenuItems"];
        this.menuItems = _mock_list__WEBPACK_IMPORTED_MODULE_2__["MenuItems"];
        this.isPreviewShow = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.show = function (desc) {
        this.description = desc;
        this.isPreviewShow = true;
    };
    HomeComponent.prototype.hide = function () {
        this.description = null;
        this.isPreviewShow = false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/items.service.ts":
/*!**********************************!*\
  !*** ./src/app/items.service.ts ***!
  \**********************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemsService = /** @class */ (function () {
    function ItemsService() {
        this.listItems = [];
    }
    ItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/mock-list.ts":
/*!******************************!*\
  !*** ./src/app/mock-list.ts ***!
  \******************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
var MenuItems = [
    { id: 1, name: 'Рихтування елементів та кузова', description: 'Кузовний ремонт авто – досить складний технологічний процес, довіряти який потрібно тільки висококваліфікованим фахівцям, які використовують спеціальні інструменти і мають спеціальні знання та навички. Як правило ремонт кузова авто буває декількох видів, які умовно можна поділити на прості і складні. Найбільш витратним є складний кузовний ремонт, ціни на який завжди значні через великої кількості етапів робіт та витратних матеріалів' },
    { id: 2, name: 'Зварювання та заміна елементів кузова', description: 'Особливість зварювальних робіт, що проводяться з автомобілем, також полягає в тому, що важливі не тільки міцність і якість, але і естетична сторона. Ніхто з водіїв не хоче, щоб грубий шов від зварювання псував зовнішність його автомобіля, тому необхідний і тонкий підхід.' },
    { id: 3, name: 'Фарбування часткове та повне', description: 'В залежно від поширеності зони ушкодження, всі типи робіт можна класифікувати як точкове, локальне та повне фарбування' },
    { id: 4, name: 'Полірування кузова', description: 'Технологічно виділяють два види полірування: відновну (абразивну) і захисну. Відновлювальне полірування кузова автомобіля призначене для відновлення властивостей лакофарбового покриття, усунення наявних недоліків і дефектів у вигляді неглибоких подряпин, потертостей і плям. Якщо дефекти незначні, застосовують мяке відновлювальне полірування.' },
    { id: 5, name: 'Полірування оптики', description: 'Полірування фар дозволяє відновити зовнішній вигляд та оптичні властивості пластикових розсіювачів. Полірування фар виконується за допомогою професійного інструменту та із застосуванням спеціальних абразивних матеріалів та полірувальних паст.' },
    { id: 6, name: 'Видалення вмятин без фарбування', description: 'Суть технології полягає у тому, що за допомогою ручного інструменту (спеціальних важілів різної форми, а також клейової системи), використовуючи при потребі технологічні отвори у кузові автомобіля, майстер витискає метал зсередини повертаючи йому початкову форму. При цьому лакофарбове покриття кузова автомобіля, якщо воно не постраждало при пошкодженні зберігається цілісним.' },
    { id: 7, name: 'Поклейка антигравійної плівки', description: 'Антигравійний захист дає вам те, що не здатний повернути жоден ремонт та фарбування - зберігає ідеальний, первинний стан заводського покриття. Поверхня автомобіля залишається новою, навіть після декількох років їзди в складних дорожніх умовах.' },
];


/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container\">\r\n    <a routerLink=\"/\" > <img src=\"../../assets/pictures/logo.png\" class=\"logo\"></a>\r\n    <nav>\r\n      <ul>\r\n        <li><a routerLink=\"/\" [class.active-link]=\"currentPage === 'home'\">Головна</a></li>\r\n        <li><a routerLink=\"/about\" [class.active-link]=\"currentPage === 'about'\">Наші роботи</a></li>\r\n        <li><a routerLink=\"/contact\" [class.active-link]=\"currentPage === 'contact'\">Контакти</a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 70px;\n  background: gray; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: 15px;\n          list-style-type: none;\n          text-decoration: none;\n          color: aliceblue;\n          font-weight: 600; }\n  header nav ul li a:hover {\n            color: #43ef2db8; }\n  .active-link {\n  color: #43ef2db8 !important; }\n  .logo {\n  height: 90px;\n  width: 270px;\n  margin: 0 auto;\n  margin-top: -20px;\n  background-size: cover; }\n  footer {\n  height: 70px;\n  background: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxNeVxcQW5ndWxhclxcRmluYWxcXGZpbmFsL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUZwQjtJQU9JLG1CQUFtQixFQUFBO0VBUHZCO01BVVEscUJBQXFCO01BQ3JCLFNBQVM7TUFBRSxVQUFVLEVBQUE7RUFYN0I7UUFlWSxXQUFXLEVBQUE7RUFmdkI7VUFrQm9CLGNBQWM7VUFDZCx5QkFBeUI7VUFDekIsZUFBZTtVQUNmLHFCQUFxQjtVQUNyQixxQkFBcUI7VUFDckIsZ0JBQWdCO1VBQ2hCLGdCQUFnQixFQUFBO0VBeEJwQztZQTJCcUIsZ0JBQWUsRUFBQTtFQVNwQztFQUNJLDJCQUEyQixFQUFBO0VBRS9CO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBO0VBSzFCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG5cclxuICAgIFxyXG5cclxuICAgIG5hdiB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzQzZWYyZGI4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYWN0aXZlLWxpbmsge1xyXG4gICAgY29sb3I6ICM0M2VmMmRiOCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvIHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTt9Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavComponent = /** @class */ (function () {
    function NavComponent(router) {
        this.router = router;
        this.appTitle = 'Автомалярна майстерня';
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () { return _this.checkLink(); });
    };
    NavComponent.prototype.checkLink = function () {
        if (this.router.url.includes('home'))
            this.currentPage = 'home';
        else if (this.router.url.includes('contact'))
            this.currentPage = 'contact';
        else if (this.router.url.includes('about'))
            this.currentPage = 'about';
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
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

module.exports = __webpack_require__(/*! C:\My\Angular\Final\final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
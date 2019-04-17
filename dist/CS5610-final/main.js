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
/* harmony import */ var _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/movie/movie-list/movie-list.component */ "./src/app/views/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/user-list/user-list.component */ "./src/app/views/user/user-list/user-list.component.ts");
/* harmony import */ var _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/movie/movie-detail/movie-detail.component */ "./src/app/views/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/movie/favorite-movie/favorite-movie.component */ "./src/app/views/movie/favorite-movie/favorite-movie.component.ts");
/* harmony import */ var _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/user/follower-list/follower-list.component */ "./src/app/views/user/follower-list/follower-list.component.ts");
/* harmony import */ var _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/user/following-list/following-list.component */ "./src/app/views/user/following-list/following-list.component.ts");













var routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'movie', component: _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'topMovies', component: _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"] },
    { path: 'movie/:movieId', component: _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailComponent"] },
    { path: 'user-list', component: _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"] },
    { path: 'favorite-movie', component: _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_10__["FavoriteMovieComponent"] },
    { path: 'follower-list', component: _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_11__["FollowerListComponent"] },
    { path: 'following-list', component: _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_12__["FollowingListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'CS5610-final';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_review_review_new_review_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/review/review-new/review-new.component */ "./src/app/views/review/review-new/review-new.component.ts");
/* harmony import */ var _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/movie/movie-list/movie-list.component */ "./src/app/views/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/movie/movie-detail/movie-detail.component */ "./src/app/views/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/user/user-list/user-list.component */ "./src/app/views/user/user-list/user-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/pagination.client.service */ "./src/app/service/pagination.client.service.ts");
/* harmony import */ var _views_review_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/review/review-list/review-list.component */ "./src/app/views/review/review-list/review-list.component.ts");
/* harmony import */ var _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/movie/favorite-movie/favorite-movie.component */ "./src/app/views/movie/favorite-movie/favorite-movie.component.ts");
/* harmony import */ var _views_user_other_user_other_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/user/other-user/other-user.component */ "./src/app/views/user/other-user/other-user.component.ts");
/* harmony import */ var _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/user/follower-list/follower-list.component */ "./src/app/views/user/follower-list/follower-list.component.ts");
/* harmony import */ var _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/user/following-list/following-list.component */ "./src/app/views/user/following-list/following-list.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _views_review_review_new_review_new_component__WEBPACK_IMPORTED_MODULE_10__["ReviewNewComponent"],
                _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_11__["MovieListComponent"],
                _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_12__["MovieDetailComponent"],
                _views_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_18__["UserListComponent"],
                _views_review_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_22__["ReviewListComponent"],
                _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_23__["FavoriteMovieComponent"],
                _views_user_other_user_other_user_component__WEBPACK_IMPORTED_MODULE_24__["OtherUserComponent"],
                _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_25__["FollowerListComponent"],
                _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_26__["FollowingListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            ],
            providers: [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_13__["MovieService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_17__["SharedService"], _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_21__["PaginationService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/service/movie.client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/movie.client.service.ts ***!
  \*************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
        this.moviedbUrl = 'https://api.themoviedb.org/3';
    }
    MovieService.prototype.findNowPlayingMovies = function (page) {
        var url = this.moviedbUrl + ("/movie/now_playing?page=" + page + "&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    MovieService.prototype.findMovieDetailsById = function (movieId) {
        var url = this.moviedbUrl + ("/movie/" + movieId + "?api_key=" + this.apiKey + "&language=en-US");
        return this.http.get(url);
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/service/pagination.client.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/pagination.client.service.ts ***!
  \******************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationService = /** @class */ (function () {
    function PaginationService() {
    }
    PaginationService.prototype.getPager = function (currentPage) {
        var totalPages = 30;
        var pageSize = 10;
        var startPage;
        var endPage;
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        }
        else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        }
        else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
        console.log('startpage:' + startPage);
        console.log('current:' + currentPage);
        console.log('end:' + endPage);
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            currentPage: currentPage,
            totalPages: totalPages,
            pageSize: pageSize,
            startPage: startPage,
            endPage: endPage,
            pages: pages
        };
    };
    PaginationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/service/shared.client.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/shared.client.service.ts ***!
  \**************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = null;
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/service/user.client.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/user.client.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
        this.moviedbUrl = 'https://api.themoviedb.org/3';
    }
    UserService.prototype.findNowPlayingMovies = function (page) {
        var url = this.moviedbUrl + ("/movie/now_playing?page=" + page + "&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    UserService.prototype.findImageByMovieId = function (movieId) {
        var url = this.moviedbUrl + ("/movie/" + movieId + "/images?api_key=" + this.apiKey + "&language=en-US");
        return this.http.get(url);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"fixed-top\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Movie Review</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <span class=\"navbar-text navbar-profile\">\n      <a class=\"nav-link\" routerLink=\"/\">Home</a>\n    </span>\n    <span class=\"navbar-text navbar-profile\">\n      <a class=\"nav-link\" routerLink=\"/movie\">Movies</a>\n    </span>\n    <span class=\"navbar-text navbar-profile\">\n      <a class=\"nav-link\" routerLink=\"{{topMovies}}\">Top Movies</a>\n    </span>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search for a movie\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n    <div>\n      <div class=\"collapse navbar-collapse float-right\">\n      <span class=\"navbar-text navbar-profile\">\n        <a class=\"nav-link\" routerLink=\"{{status}}\">{{loginOrProfile}}</a>\n      </span>\n        <span class=\"navbar-text navbar-profile\">\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n      </span>\n        <span class=\"navbar-text navbar-profile\">\n        <a class=\"nav-link\" *ngIf=\"loggedIn\" routerLink=\"{{logoutPath}}\">{{logout}}</a>\n      </span>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sharedService) {
        this.sharedService = sharedService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.sharedService.user === null) {
            this.status = '/login';
            this.loginOrProfile = 'Login';
            this.topReviews = '/login';
            this.loggedIn = false;
        }
        else {
            this.status = '/profile';
            this.loginOrProfile = 'Profile';
            this.topReviews = '/topReviews';
            this.loggedIn = true;
            this.logoutPath = '';
            this.logout = 'Log Out';
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.navbar-profile {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\n.home-background {\n  background-image: url('cinema.jpg');\n  background-repeat: no-repeat;\n  height: 550px;\n  position: relative;\n  background-size: 100% 100%;\n  text-align:center;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  margin-top: 30px;\n}\n\n/*.card-img-top {*/\n\n/*height: 30%;*/\n\n/*}*/\n\n/*li.movie-list-group-item {*/\n\n/*float: left;*/\n\n/*margin-left: 20px;*/\n\n/*width: 20%;*/\n\n/*height: 600px;*/\n\n/*}*/\n\n/*.card-title {*/\n\n/*height: 60px;*/\n\n/*overflow: hidden;*/\n\n/*}*/\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQTBEO0VBQzFELDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0Esa0JBQWtCOztBQUNoQixlQUFlOztBQUNqQixJQUFJOztBQUNKLDZCQUE2Qjs7QUFDM0IsZUFBZTs7QUFDZixxQkFBcUI7O0FBQ3JCLGNBQWM7O0FBQ2QsaUJBQWlCOztBQUNuQixJQUFJOztBQUVKLGdCQUFnQjs7QUFDZCxnQkFBZ0I7O0FBQ2hCLG9CQUFvQjs7QUFDdEIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItcHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZWRpYS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhvbWUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2luZW1hLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xufVxuXG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIHdpZHRoOiA1NiU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5cbi8qLmNhcmQtaW1nLXRvcCB7Ki9cbiAgLypoZWlnaHQ6IDMwJTsqL1xuLyp9Ki9cbi8qbGkubW92aWUtbGlzdC1ncm91cC1pdGVtIHsqL1xuICAvKmZsb2F0OiBsZWZ0OyovXG4gIC8qbWFyZ2luLWxlZnQ6IDIwcHg7Ki9cbiAgLyp3aWR0aDogMjAlOyovXG4gIC8qaGVpZ2h0OiA2MDBweDsqL1xuLyp9Ki9cblxuLyouY2FyZC10aXRsZSB7Ki9cbiAgLypoZWlnaHQ6IDYwcHg7Ki9cbiAgLypvdmVyZmxvdzogaGlkZGVuOyovXG4vKn0qL1xuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <div class=\"home-background\">\n    <h1>Welcome to Movie Reivew!</h1>\n    <h2>It's movie time!</h2>\n  </div>\n  <div class=\"container\">\n    <h3>Now Playing Movies</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let movie of movies\">\n        <div class=\"card media-item\">\n          <img  class=\"card-img-top\" [src]=\"getImageUrlForAMovie(movie.poster_path)\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{movie.title}}</h5>\n          </div>\n          <div class=\"card-footer\">\n            <p>{{movie.release_date}}</p>\n            <a routerLink=\"/movie/{{movie.id}}\" class=\"card-link\">More info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"container\">\n        <div class=\"text-center\">\n          <!-- pager -->\n          <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n              <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n            </li>\n            <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n              <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n<footer>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/pagination.client.service */ "./src/app/service/pagination.client.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, paginationService) {
        this.movieService = movieService;
        this.paginationService = paginationService;
        this.pager = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.setPage(1);
        this.status = '/login';
        this.loginOrProfile = 'login';
        this.topViewers = '/login';
    };
    HomeComponent.prototype.findNowPlayingMoviesByPages = function (page) {
        var _this = this;
        return this.movieService.findNowPlayingMovies(page).subscribe(function (data) {
            _this.movies = data.results;
        });
    };
    HomeComponent.prototype.getImageUrlForAMovie = function (url) {
        return 'https://image.tmdb.org/t/p/original' + url;
    };
    HomeComponent.prototype.setPage = function (page) {
        this.pager = this.paginationService.getPager(page);
        this.findNowPlayingMoviesByPages(page);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/movie/favorite-movie/favorite-movie.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/movie/favorite-movie/favorite-movie.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vdmllL2Zhdm9yaXRlLW1vdmllL2Zhdm9yaXRlLW1vdmllLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/movie/favorite-movie/favorite-movie.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/movie/favorite-movie/favorite-movie.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  favorite-movie works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/movie/favorite-movie/favorite-movie.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/movie/favorite-movie/favorite-movie.component.ts ***!
  \************************************************************************/
/*! exports provided: FavoriteMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteMovieComponent", function() { return FavoriteMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoriteMovieComponent = /** @class */ (function () {
    function FavoriteMovieComponent() {
    }
    FavoriteMovieComponent.prototype.ngOnInit = function () {
    };
    FavoriteMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite-movie',
            template: __webpack_require__(/*! ./favorite-movie.component.html */ "./src/app/views/movie/favorite-movie/favorite-movie.component.html"),
            styles: [__webpack_require__(/*! ./favorite-movie.component.css */ "./src/app/views/movie/favorite-movie/favorite-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavoriteMovieComponent);
    return FavoriteMovieComponent;
}());



/***/ }),

/***/ "./src/app/views/movie/movie-detail/movie-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/movie/movie-detail/movie-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  margin-top: 70px;\n}\n\n\n.detail-background {\n  background-color: #0c286e;\n  background-repeat: no-repeat;\n  height: 600px;\n  position: relative;\n  background-size: 100% 100%;\n  text-align:center;\n}\n\n\n.container {\n  padding-top: 30px;\n}\n\n\n.poster {\n  width: 240px;\n  height: 500px;\n}\n\n\n.movie-title {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  color: white;\n  text-align: left;\n}\n\n\n.movie-poster {\n  margin-left: 100px;\n}\n\n\n.movie-description {\n  margin-left: 0px;\n}\n\n\n.description-content {\n  color: white;\n  text-align: left;\n  font-size: 18px;\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpREFBaUQ7QUFDbkQiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tb3ZpZS9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuXG4uZGV0YWlsLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyODZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4ucG9zdGVyIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW92aWUtdGl0bGUge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tb3ZpZS1wb3N0ZXIge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG4ubW92aWUtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZGVzY3JpcHRpb24tY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/movie/movie-detail/movie-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/movie/movie-detail/movie-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <div class=\"detail-background\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <img class=\"poster movie-poster\" [src]=\"getImageUrlForAMovie(movie.poster_path)\" alt=\"movie poster\">\n        </div>\n        <div class=\"col-6 movie-description\">\n          <div class=\"movie-title\">\n            {{movie.original_title}}\n          </div>\n          <div class=\"icon\">\n\n          </div>\n          <div class=\"description-content\">\n            {{movie.release_date}}\n          </div>\n          <div class=\"description-content\">\n            {{movie.overview}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n<footer></footer>\n"

/***/ }),

/***/ "./src/app/views/movie/movie-detail/movie-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/movie/movie-detail/movie-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.movieId = params.movieId;
            _this.movieService.findMovieDetailsById(_this.movieId).subscribe(function (movie) {
                _this.movie = movie;
            });
        });
    };
    MovieDetailComponent.prototype.getImageUrlForAMovie = function (url) {
        return 'https://image.tmdb.org/t/p/original' + url;
    };
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/views/movie/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/views/movie/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/movie/movie-list/movie-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/movie/movie-list/movie-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vdmllL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/movie/movie-list/movie-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/movie/movie-list/movie-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n</header>\n<main></main>\n<footer></footer>\n"

/***/ }),

/***/ "./src/app/views/movie/movie-list/movie-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/movie/movie-list/movie-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent() {
    }
    MovieListComponent.prototype.ngOnInit = function () {
    };
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/views/movie/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/views/movie/movie-list/movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/views/review/review-list/review-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/review/review-list/review-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jldmlldy9yZXZpZXctbGlzdC9yZXZpZXctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/review/review-list/review-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/review/review-list/review-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  review-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/review/review-list/review-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/review/review-list/review-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewListComponent = /** @class */ (function () {
    function ReviewListComponent() {
    }
    ReviewListComponent.prototype.ngOnInit = function () {
    };
    ReviewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(/*! ./review-list.component.html */ "./src/app/views/review/review-list/review-list.component.html"),
            styles: [__webpack_require__(/*! ./review-list.component.css */ "./src/app/views/review/review-list/review-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewListComponent);
    return ReviewListComponent;
}());



/***/ }),

/***/ "./src/app/views/review/review-new/review-new.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/review/review-new/review-new.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jldmlldy9yZXZpZXctbmV3L3Jldmlldy1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/review/review-new/review-new.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/review/review-new/review-new.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  review-new works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/review/review-new/review-new.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/review/review-new/review-new.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReviewNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewNewComponent", function() { return ReviewNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewNewComponent = /** @class */ (function () {
    function ReviewNewComponent() {
    }
    ReviewNewComponent.prototype.ngOnInit = function () {
    };
    ReviewNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-new',
            template: __webpack_require__(/*! ./review-new.component.html */ "./src/app/views/review/review-new/review-new.component.html"),
            styles: [__webpack_require__(/*! ./review-new.component.css */ "./src/app/views/review/review-new/review-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewNewComponent);
    return ReviewNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/follower-list/follower-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/user/follower-list/follower-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvZm9sbG93ZXItbGlzdC9mb2xsb3dlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/follower-list/follower-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/user/follower-list/follower-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  follower-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/user/follower-list/follower-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/user/follower-list/follower-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: FollowerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowerListComponent", function() { return FollowerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FollowerListComponent = /** @class */ (function () {
    function FollowerListComponent() {
    }
    FollowerListComponent.prototype.ngOnInit = function () {
    };
    FollowerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-follower-list',
            template: __webpack_require__(/*! ./follower-list.component.html */ "./src/app/views/user/follower-list/follower-list.component.html"),
            styles: [__webpack_require__(/*! ./follower-list.component.css */ "./src/app/views/user/follower-list/follower-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FollowerListComponent);
    return FollowerListComponent;
}());



/***/ }),

/***/ "./src/app/views/user/following-list/following-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/user/following-list/following-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvZm9sbG93aW5nLWxpc3QvZm9sbG93aW5nLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/following-list/following-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/user/following-list/following-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  following-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/user/following-list/following-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/user/following-list/following-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: FollowingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingListComponent", function() { return FollowingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FollowingListComponent = /** @class */ (function () {
    function FollowingListComponent() {
    }
    FollowingListComponent.prototype.ngOnInit = function () {
    };
    FollowingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-following-list',
            template: __webpack_require__(/*! ./following-list.component.html */ "./src/app/views/user/following-list/following-list.component.html"),
            styles: [__webpack_require__(/*! ./following-list.component.css */ "./src/app/views/user/following-list/following-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FollowingListComponent);
    return FollowingListComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQXVFO0VBQ3ZFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7O0VBRVYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDoxMDAlO1xuXG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <h1>Login to start your journey</h1>\n    <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" ngModel required #username=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n            Please Enter Username!\n        </span>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" ngModel required #password=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n            Please Enter Password!\n        </span>\n      <div class=\"form-group\">\n        <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Login</button>\n      </div>\n      <div class=\"form-group\">\n        <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\"> <span><i class=\"fab fa-facebook-square\"></i></span> Facebook </a>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/register\" class=\"btn btn-block btn-success\">Register</a>\n      </div>\n    </form>\n  </div>\n</main>\n</body>\n</html>\n\n\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");





// import {User} from '../../../models/user.model.client';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        // this.userService.login(this.username, this.password).subscribe(
        //   (user: any) => {
        //     if (user === null || user.message === 'User not found or Wrong password!') {
        //       this.errorFlag = true;
        //       this.errorMsg = 'User does not exist or Wrong Password';
        //     } else {
        //       this.router.navigate(['/profile/']);
        //     }
        //   }
        // );
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login page!' + this.username);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/other-user/other-user.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/user/other-user/other-user.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.user-info {\n  margin-top: 20px;\n  width: 80%;\n  margin-left: 10%;\n}\n\n.user-main {\n  margin-top: 40px;\n  /*z-index: 200;*/\n}\n\n.edit-form {\n  margin-top: 40px;\n}\n\n.card-title {\n  text-align: center;\n}\n\n.user-follow {\n  text-align: right;\n  position: relative;\n  left: 20%;\n}\n\n.update {\n  color: white !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9vdGhlci11c2VyL290aGVyLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUF1RTtFQUN2RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9vdGhlci11c2VyL290aGVyLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4udXNlci1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnVzZXItbWFpbiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIC8qei1pbmRleDogMjAwOyovXG59XG5cbi5lZGl0LWZvcm0ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItZm9sbG93IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjAlO1xufVxuXG4udXBkYXRlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/other-user/other-user.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/user/other-user/other-user.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"container\">\n      <div class=\"row colrow user-info\">\n        <div class=\"col-sm-4 d-none d-sm-block user-main\">\n          <div class=\"media d-done d-sm-block\">\n            <div class=\"card\">\n              <img  class=\"card-img-top\" [src]=\"getUserImg()\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{user.username}}</span></h5>\n              </div>\n              <div class=\"card-footer\">\n                <p><a routerLink=\"/user-list\" class=\"card-link\">Followers</a><span class=\"user-follow\">{{user.follower.length}}</span></p>\n                <p><a routerLink=\"/user-list\" class=\"card-link\">Following</a><span class=\"user-follow\">{{user.following.length}}</span></p>\n                <p><a routerLink=\"/review-list\" class=\"card-link\">Review History </a></p>\n                <p><a routerLink=\"/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 right-form edit-form\">\n          <h2>Edit Your Profile</h2>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" id=\"username\" placeholder=\"{{user.username}}\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" id=\"password\" placeholder=\"{{user.password}}\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"image-URL\">URL</label>\n            <input type=\"text\" class=\"form-control\" id=\"image-URL\" [(ngModel)]=\"user.img\" placeholder=\"{{user.img}}\">\n          </div>\n          <div class=\"form-group large-input-bottom-margin\">\n            <label for=\"FormControlSelect\"><small><b>Select account type</b></small></label>\n            <select class = \"form-control\" (change)=\"filterChanged($event.target.value)\" id=\"FormControlSelect\">\n              <option *ngFor=\"let type of filterTypes\" [value]=\"type.value\">{{type.display}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <a (click)=\"updateUser()\" class=\"update btn btn-block btn-primary\">Update Your Info</a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/views/user/other-user/other-user.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/user/other-user/other-user.component.ts ***!
  \***************************************************************/
/*! exports provided: OtherUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherUserComponent", function() { return OtherUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OtherUserComponent = /** @class */ (function () {
    function OtherUserComponent() {
        this.filterTypes = [
            { value: 'Admin', display: 'Admin' },
            { value: 'Unpaid', display: 'User' },
            { value: 'Paid', display: 'Vip' }
        ];
    }
    OtherUserComponent.prototype.ngOnInit = function () {
        this.user = new Object();
        this.user.username = 'test';
        this.user.password = 'password';
        this.user.follower = [];
        this.user.following = [];
        // this.user.reviews = [];
        // this.user.favorite = [];
        this.user.img = '../../../../assets/images/default-heads.jpg';
    };
    OtherUserComponent.prototype.getUserImg = function () {
        if (this.user.img == '') {
            return '../../../../assets/images/default-heads.jpg';
        }
        else {
            return this.user.img;
        }
    };
    OtherUserComponent.prototype.updateUser = function () {
        // this.userService.updateUser(this.user.uid, this.user).subscribe(
        //   (user: any) => {
        //     this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
        //     this.router.navigate(['/profile/']);
        //   }
        // );
        // alert('Update successfully!');
    };
    OtherUserComponent.prototype.filterChanged = function (selectedValue) {
        this.selectedValue = selectedValue;
    };
    OtherUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-user',
            template: __webpack_require__(/*! ./other-user.component.html */ "./src/app/views/user/other-user/other-user.component.html"),
            styles: [__webpack_require__(/*! ./other-user.component.css */ "./src/app/views/user/other-user/other-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OtherUserComponent);
    return OtherUserComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.user-info {\n  margin-top: 20px;\n  width: 80%;\n  margin-left: 10%;\n}\n\n.user-main {\n  margin-top: 40px;\n  /*z-index: 200;*/\n}\n\n.edit-form {\n  margin-top: 40px;\n}\n\n.card-title {\n  text-align: center;\n}\n\n.user-follow {\n  text-align: right;\n  position: relative;\n  left: 20%;\n}\n\n.update {\n  color: white !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUF1RTtFQUN2RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4udXNlci1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnVzZXItbWFpbiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIC8qei1pbmRleDogMjAwOyovXG59XG5cbi5lZGl0LWZvcm0ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItZm9sbG93IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjAlO1xufVxuXG4udXBkYXRlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"container\">\n      <div class=\"row colrow user-info\">\n        <div class=\"col-sm-4 d-none d-sm-block user-main\">\n          <div class=\"media d-done d-sm-block\">\n            <div class=\"card\">\n              <img  class=\"card-img-top\" [src]=\"getUserImg()\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{user.username}}</span></h5>\n              </div>\n              <div class=\"card-footer\">\n                <p *ngIf=\"isAdmin\"><a routerLink=\"/user-list\" class=\"card-link\">Manage User</a></p>\n                <p><a routerLink=\"/follower-list\" class=\"card-link\">Followers</a><span class=\"user-follow\">{{user.follower.length}}</span></p>\n                <p><a routerLink=\"/following-list\" class=\"card-link\">Following</a><span class=\"user-follow\">{{user.following.length}}</span></p>\n                <p><a routerLink=\"/review-list\" class=\"card-link\">Review History </a></p>\n                <p><a routerLink=\"/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 right-form edit-form\">\n          <h2>Edit Your Profile</h2>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" id=\"username\" placeholder=\"{{user.username}}\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" id=\"password\" placeholder=\"{{user.password}}\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"image-URL\">URL</label>\n            <input type=\"text\" class=\"form-control\" id=\"image-URL\" [(ngModel)]=\"user.img\" placeholder=\"{{user.img}}\">\n          </div>\n          <div class=\"form-group large-input-bottom-margin\">\n            <label for=\"FormControlSelect\"><small><b>Select account type</b></small></label>\n            <select class = \"form-control\" (change)=\"filterChanged($event.target.value)\" id=\"FormControlSelect\">\n              <option *ngFor=\"let type of filterTypes\" [value]=\"type.value\">{{type.display}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <a (click)=\"updateUser()\" class=\"update btn btn-block btn-primary\">Update Your Info</a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.filterTypes = [
            { value: 'Admin', display: 'Admin' },
            { value: 'Unpaid', display: 'User' },
            { value: 'Paid', display: 'Vip' }
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = new Object();
        this.user.username = 'test';
        this.user.password = 'password';
        this.user.follower = [];
        this.user.following = [];
        // this.user.reviews = [];
        // this.user.favorite = [];
        this.user.img = '../../../../assets/images/default-heads.jpg';
        this.user.type = 'Admin';
        this.isAdmin = this.selectedValue === 'Admin';
    };
    ProfileComponent.prototype.getUserImg = function () {
        if (this.user.img == '') {
            return '../../../../assets/images/default-heads.jpg';
        }
        else {
            return this.user.img;
        }
    };
    ProfileComponent.prototype.updateUser = function () {
        // this.userService.updateUser(this.user.uid, this.user).subscribe(
        //   (user: any) => {
        //     this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
        //     this.router.navigate(['/profile/']);
        //   }
        // );
        // alert('Update successfully!');
    };
    ProfileComponent.prototype.filterChanged = function (selectedValue) {
        this.selectedValue = selectedValue;
        this.isAdmin = this.selectedValue === 'Admin';
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQXVFO0VBQ3ZFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIHdpZHRoOjEwMCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n    </div>\n    <h1>Register for a community membership</h1>\n    <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" ngModel required #username=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please Enter Username!\n    </span>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" ngModel required #password=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please Enter Password!\n    </span>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"v_password\" class=\"form-control\" placeholder=\"verify password\" ngModel required #v_password=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!v_password.valid && v_password.touched\">\n      Please verify your password!\n    </span>\n      <div class=\"form-group large-input-bottom-margin\">\n        <label for=\"FormControlSelect\"><small><b>Select account type</b></small></label>\n        <select class = \"form-control\" (change)=\"filterChanged($event.target.value)\" id=\"FormControlSelect\">\n          <option *ngFor=\"let type of filterTypes\" [value]=\"type.value\">{{type.display}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Register</button>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/login\" class=\"btn btn-block btn-success\">Cancel</a>\n      </div>\n    </form>\n  </div>\n</main>\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = '';
        this.filterTypes = [
            { value: 'Admin', display: 'Admin' },
            { value: 'Unpaid', display: 'User' },
            { value: 'Paid', display: 'Vip' }
        ];
        this.errorFlag = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    RegisterComponent.prototype.filterChanged = function (selectedValue) {
        this.selectedValue = selectedValue;
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        if (this.v_password === this.password) {
            // const user: User = new User(Math.random() + '', this.username, this.password, this.firstName, this.lastName, this.email);
            //   this.userService.register(user).subscribe(
            //     (data: any) => {
            //       if (data.message === 'User is already exist!') {
            //         this.errorFlag = true;
            //         this.errorMsg = 'User is already exist! Please use a new username!';
            //       } else {
            //         // this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            //         this.router.navigate(['/profile']);
            //       }
            //     }
            //   );
            // } else {
            //   this.errorFlag = true;
            //   this.errorMsg = 'Password needs to be verified!';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/user/user-list/user-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/user/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/user/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/user/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/user/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/views/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/views/user/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
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
    production: false,
    baseUrl: 'http://localhost:3200'
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

module.exports = __webpack_require__(/*! /Users/yuewang/Documents/CS5610-Final/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
/* harmony import */ var _views_review_review_new_review_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/review/review-new/review-new.component */ "./src/app/views/review/review-new/review-new.component.ts");
/* harmony import */ var _views_user_other_user_other_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/user/other-user/other-user.component */ "./src/app/views/user/other-user/other-user.component.ts");
/* harmony import */ var _views_review_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/review/review-list/review-list.component */ "./src/app/views/review/review-list/review-list.component.ts");
/* harmony import */ var _service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/authguard-user.client.service */ "./src/app/service/authguard-user.client.service.ts");
/* harmony import */ var _service_authguard_admin_client_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/authguard-admin.client.service */ "./src/app/service/authguard-admin.client.service.ts");
/* harmony import */ var _views_movie_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/movie/movie-search/movie-search.component */ "./src/app/views/movie/movie-search/movie-search.component.ts");



















var routes = [
    // guest
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'movie', component: _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"] },
    { path: 'movie/:dbId', component: _views_movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailComponent"] },
    { path: 'topMovies', component: _views_movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"] },
    { path: 'search/movie/:keyword', component: _views_movie_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_18__["MovieSearchComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'users/:username', component: _views_user_other_user_other_user_component__WEBPACK_IMPORTED_MODULE_14__["OtherUserComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/favorite-movie', component: _views_movie_favorite_movie_favorite_movie_component__WEBPACK_IMPORTED_MODULE_10__["FavoriteMovieComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/follower-list', component: _views_user_follower_list_follower_list_component__WEBPACK_IMPORTED_MODULE_11__["FollowerListComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/following-list', component: _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_12__["FollowingListComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/review-list', component: _views_review_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_15__["ReviewListComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'movie/:dbId/review-new', component: _views_review_review_new_review_new_component__WEBPACK_IMPORTED_MODULE_13__["ReviewNewComponent"], canActivate: [_service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardUser"]] },
    { path: 'user/user-list', component: _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], canActivate: [_service_authguard_admin_client_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardAdmin"]] }
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
/* harmony import */ var _service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/authguard-user.client.service */ "./src/app/service/authguard-user.client.service.ts");
/* harmony import */ var _service_authguard_admin_client_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/authguard-admin.client.service */ "./src/app/service/authguard-admin.client.service.ts");
/* harmony import */ var _views_movie_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/movie/movie-search/movie-search.component */ "./src/app/views/movie/movie-search/movie-search.component.ts");
/* harmony import */ var _service_review_client_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/review.client.service */ "./src/app/service/review.client.service.ts");































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
                _views_user_following_list_following_list_component__WEBPACK_IMPORTED_MODULE_26__["FollowingListComponent"],
                _views_movie_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_29__["MovieSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            ],
            providers: [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_13__["MovieService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_17__["SharedService"], _service_pagination_client_service__WEBPACK_IMPORTED_MODULE_21__["PaginationService"], _service_authguard_user_client_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuardUser"], _service_authguard_admin_client_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardAdmin"], _service_review_client_service__WEBPACK_IMPORTED_MODULE_30__["ReviewService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/user.client.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.client.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(uid, username, password, img, type) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.img = img;
        this.type = type;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/service/authguard-admin.client.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/authguard-admin.client.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardAdmin", function() { return AuthGuardAdmin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.client.service */ "./src/app/service/user.client.service.ts");



var AuthGuardAdmin = /** @class */ (function () {
    function AuthGuardAdmin(userService) {
        this.userService = userService;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.userService.loggedInAsAdmin();
    };
    AuthGuardAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
}());



/***/ }),

/***/ "./src/app/service/authguard-user.client.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/authguard-user.client.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthGuardUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardUser", function() { return AuthGuardUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.client.service */ "./src/app/service/user.client.service.ts");



var AuthGuardUser = /** @class */ (function () {
    function AuthGuardUser(userService) {
        this.userService = userService;
    }
    AuthGuardUser.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuardUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuardUser);
    return AuthGuardUser;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
        this.moviedbUrl = 'https://api.themoviedb.org/3';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // tmdb
    MovieService.prototype.findNowPlayingMovies = function (page) {
        var url = this.moviedbUrl + ("/movie/now_playing?page=" + page + "&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    MovieService.prototype.findMovieDetailsById = function (movieId) {
        var url = this.moviedbUrl + ("/movie/" + movieId + "?api_key=" + this.apiKey + "&language=en-US");
        return this.http.get(url);
    };
    MovieService.prototype.findTrailsById = function (movieId) {
        var url = this.moviedbUrl + ("/movie/" + movieId + "?api_key=" + this.apiKey + "&language=en-US");
        return this.http.get(url);
    };
    MovieService.prototype.searchMovies = function (keyword) {
        var url = this.moviedbUrl + ("/search/movie?query=" + keyword + "&page=1&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    // own db
    MovieService.prototype.findMovieByDbId = function (dbId) {
        var url = this.baseUrl + '/api/movie/' + dbId;
        return this.http.get(url);
    };
    MovieService.prototype.createMovie = function (movie) {
        var url = this.baseUrl + '/api/movie';
        return this.http.post(url, movie);
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

/***/ "./src/app/service/review.client.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/review.client.service.ts ***!
  \**************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ReviewService = /** @class */ (function () {
    function ReviewService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    ReviewService.prototype.createReview = function (dbId, review) {
        var url = this.baseUrl + '/api/' + dbId + '/review';
        return this.http.post(url, review);
    };
    ReviewService.prototype.deleteReview = function (reviewId) {
        var url = this.baseUrl + '/api/review/' + reviewId;
        return this.http.delete(url);
    };
    ReviewService.prototype.updateReview = function (review) {
        var url = this.baseUrl = '/api/review/' + review._id;
        return this.http.put(url, '');
    };
    ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ReviewService);
    return ReviewService;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UserService = /** @class */ (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
        this.moviedbUrl = 'https://api.themoviedb.org/3';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.options = {
            headers: this.headers,
            withCredentials: true
        };
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUserName,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByUserName = function (username) {
        return this.http.get(this.baseUrl + '/api/user?' + 'username=' + username);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?' + 'username=' + username + '&' + 'password=' + password);
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = { username: username, password: password };
        return this.http.post(this.baseUrl + '/api/login', body, this.options);
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options);
    };
    UserService.prototype.findNowPlayingMovies = function (page) {
        var url = this.moviedbUrl + ("/movie/now_playing?page=" + page + "&language=en-US&api_key=" + this.apiKey);
        return this.http.get(url);
    };
    UserService.prototype.findImageByMovieId = function (movieId) {
        var url = this.moviedbUrl + ("/movie/" + movieId + "/images?api_key=" + this.apiKey + "&language=en-US");
        return this.http.get(url);
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            if (user !== '0') {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    UserService.prototype.loggedInAsAdmin = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            if (user !== '0' && user.type === 'Admin') {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['']);
                return false;
            }
        }));
    };
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/register', user, this.options);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "<header class=\"fixed-top\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Movie Review</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <span class=\"navbar-text navbar-profile\">\n      <a class=\"nav-link\" routerLink=\"/\">Home</a>\n    </span>\n    <span class=\"navbar-text navbar-profile\">\n      <a class=\"nav-link\" routerLink=\"/movie\">Movies</a>\n    </span>\n    <span class=\"navbar-text navbar-profile\">\n      <a class=\"nav-link\" routerLink=\"/topMovies\">Top Movies</a>\n    </span>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <div class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search for a movie\" aria-label=\"Search\" [(ngModel)]=\"keyword\" name=\"keyword\">\n        <button (click)=\"navigateToSearch()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </div>\n    </div>\n    <div>\n      <div class=\"collapse navbar-collapse float-right\">\n      <span class=\"navbar-text navbar-profile\">\n        <a class=\"nav-link\" routerLink=\"{{status}}\">{{loginOrProfile}}</a>\n      </span>\n        <span class=\"navbar-text navbar-profile\">\n        <a class=\"nav-link\" (click)=\"logout()\" *ngIf=\"loggedIn\">{{logoutMsg}}</a>\n      </span>\n      </div>\n    </div>\n  </nav>\n</header>\n"

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
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
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
            this.logoutMsg = 'Log Out';
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.sharedService.user = null;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.navigateToSearch = function () {
        if (this.keyword && this.keyword !== '') {
            this.router.navigate(['/search/movie/' + this.keyword]);
        }
        else {
            this.router.navigate(['/topMovies']);
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
        this.movieService.findNowPlayingMovies(page).subscribe(function (data) {
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

module.exports = ".container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nbody {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n  margin-bottom: 30px;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  margin-top: 30px;\n  padding-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvZmF2b3JpdGUtbW92aWUvZmF2b3JpdGUtbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVOztFQUVWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW92aWUvZmF2b3JpdGUtbW92aWUvZmF2b3JpdGUtbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDoxMDAlO1xuXG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLm1lZGlhLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIHdpZHRoOiA1NiU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/movie/favorite-movie/favorite-movie.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/movie/favorite-movie/favorite-movie.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>Favorite List</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let movie of movies\">\n        <div class=\"card media-item\">\n          <img  class=\"card-img-top\" [src]=\"movie.poster_path\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{movie.title}}</h5>\n          </div>\n          <div class=\"card-footer\">\n            <p>{{movie.release_date}}</p>\n            <a routerLink=\"/movie/{{movie.id}}\" class=\"card-link\">More info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n\n\n\n"

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
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");





var FavoriteMovieComponent = /** @class */ (function () {
    function FavoriteMovieComponent(movieService, userService, sharedService) {
        this.movieService = movieService;
        this.userService = userService;
        this.sharedService = sharedService;
    }
    FavoriteMovieComponent.prototype.ngOnInit = function () {
        this.movies = this.sharedService.user.favorite;
    };
    FavoriteMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite-movie',
            template: __webpack_require__(/*! ./favorite-movie.component.html */ "./src/app/views/movie/favorite-movie/favorite-movie.component.html"),
            styles: [__webpack_require__(/*! ./favorite-movie.component.css */ "./src/app/views/movie/favorite-movie/favorite-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _service_user_client_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
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

module.exports = "html, body {\n  margin-top: -10px;\n  background-image: linear-gradient(160deg, #2884ff 20%, #7cfff2 80%);\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  padding-top: 50px;\n}\n\n.poster {\n  height: 500px;\n}\n\n.movie-title {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  color: white;\n  text-align: left;\n}\n\n.movie-poster {\n  margin-left: 100px;\n  overflow: hidden;\n}\n\n.movie-description {\n  margin-left: -100px;\n  overflow: hidden;\n}\n\n.description-content {\n  margin-top: 20px;\n  color: white;\n  text-align: left;\n  font-size: 18px;\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.col-sm {\n  width: 250px;\n}\n\n.col-md {\n  width: 500px;\n}\n\n.icon-item {\n  margin-left: 20px;\n}\n\n.icon-item:hover {\n  cursor: pointer;\n  color: darkgrey;\n}\n\n.description-title {\n  margin-top: 40px;\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n}\n\n.icon-text {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-inner {\n  margin-left: 4rem;\n}\n\n/*review*/\n\n.carousel-control.left,.carousel-control.right  {background:none;width:25px;}\n\n.carousel-control.left {left:-25px;}\n\n.carousel-control.right {right:-25px;}\n\n.broun-block {\n  background: url(\"http://myinstantcms.ru/images/bg-broun1.jpg\") repeat scroll center top rgba(0, 0, 0, 0);\n  padding-bottom: 34px;\n}\n\n.block-text {\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 3px 0 #2c2222;\n  color: #626262;\n  font-size: 14px;\n  margin-top: 27px;\n  padding: 15px 18px;\n}\n\n.block-text a {\n  color: #7d4702;\n  font-size: 25px;\n  font-weight: bold;\n  line-height: 21px;\n  text-decoration: none;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n.mark {\n  padding: 12px 0;background:none;\n}\n\n.block-text p {\n  color: #585858;\n  font-family: Georgia;\n  font-style: italic;\n  line-height: 20px;\n}\n\n.sprite {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAeUCAYAAAAU3UTMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1MzJERUNDRjBEMTExRTM4N0ZFOUUyNENEOTZCNjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY1MzJERUNERjBEMTExRTM4N0ZFOUUyNENEOTZCNjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjUzMkRFQ0FGMEQxMTFFMzg3RkU5RTI0Q0Q5NkI2NUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjUzMkRFQ0JGMEQxMTFFMzg3RkU5RTI0Q0Q5NkI2NUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4/ZdnrAAAydElEQVR42uydCbgUxbn3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');\n}\n\n.sprite-i-triangle {\n  background-position: 0 -1298px;\n  height: 44px;\n  width: 50px;\n}\n\n.block-text ins {\n  bottom: -44px;\n  left: 50%;\n  margin-left: -60px;\n}\n\n.block {\n  display: block;\n}\n\n.zmin {\n  z-index: 1;\n}\n\n.ab {\n  position: absolute;\n}\n\n.person-text {\n  padding: 10px 0 0;\n  text-align: center;\n  z-index: 2;\n}\n\n.person-text a {\n  color: #ffcc00;\n  display: block;\n  font-size: 14px;\n  margin-top: 3px;\n  text-decoration: underline;\n}\n\n.person-text i {\n  color: #fff;\n  font-family: Georgia;\n  font-size: 13px;\n}\n\n.rel {\n  position: relative;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1FQUFtRTtFQUNuRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxTQUFTOztBQUNULGlEQUFpRCxlQUFlLENBQUMsVUFBVSxDQUFDOztBQUM1RSx3QkFBd0IsVUFBVSxDQUFDOztBQUNuQyx5QkFBeUIsV0FBVyxDQUFDOztBQUNyQztFQUNFLHdHQUF3RztFQUN4RyxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHlDQUF5QztBQUMzQzs7QUFDQTtFQUNFLGVBQWUsQ0FBQyxlQUFlO0FBQ2pDOztBQUNBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsK2lrQkFBK2lrQjtBQUNqamtCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tb3ZpZS9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICMyODg0ZmYgMjAlLCAjN2NmZmYyIDgwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuXG4ucG9zdGVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vdmllLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubW92aWUtcG9zdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vdmllLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbC1zbSB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmNvbC1tZCB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuLmljb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uaWNvbi1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZGFya2dyZXk7XG59XG5cbi5kZXNjcmlwdGlvbi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmljb24tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xufVxuXG4vKnJldmlldyovXG4uY2Fyb3VzZWwtY29udHJvbC5sZWZ0LC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0ICB7YmFja2dyb3VuZDpub25lO3dpZHRoOjI1cHg7fVxuLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7bGVmdDotMjVweDt9XG4uY2Fyb3VzZWwtY29udHJvbC5yaWdodCB7cmlnaHQ6LTI1cHg7fVxuLmJyb3VuLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cDovL215aW5zdGFudGNtcy5ydS9pbWFnZXMvYmctYnJvdW4xLmpwZ1wiKSByZXBlYXQgc2Nyb2xsIGNlbnRlciB0b3AgcmdiYSgwLCAwLCAwLCAwKTtcbiAgcGFkZGluZy1ib3R0b206IDM0cHg7XG59XG4uYmxvY2stdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMCAjMmMyMjIyO1xuICBjb2xvcjogIzYyNjI2MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBwYWRkaW5nOiAxNXB4IDE4cHg7XG59XG4uYmxvY2stdGV4dCBhIHtcbiAgY29sb3I6ICM3ZDQ3MDI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLm1hcmsge1xuICBwYWRkaW5nOiAxMnB4IDA7YmFja2dyb3VuZDpub25lO1xufVxuLmJsb2NrLXRleHQgcCB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LWZhbWlseTogR2VvcmdpYTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5zcHJpdGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFlVUNBWUFBQUFVM1VUTUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUJwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVNQzFqTURZd0lEWXhMakV6TkRjM055d2dNakF4TUM4d01pOHhNaTB4Tnpvek1qb3dNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTlNCWGFXNWtiM2R6SWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pZMU16SkVSVU5EUmpCRU1URXhSVE00TjBaRk9VVXlORU5FT1RaQ05qVkNJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPalkxTXpKRVJVTkVSakJFTVRFeFJUTTROMFpGT1VVeU5FTkVPVFpDTmpWQ0lqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOalV6TWtSRlEwRkdNRVF4TVRGRk16ZzNSa1U1UlRJMFEwUTVOa0kyTlVJaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk5qVXpNa1JGUTBKR01FUXhNVEZGTXpnM1JrVTVSVEkwUTBRNU5rSTJOVUlpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo0L1pkbnJBQUF5ZEVsRVFWUjQydXlkQ2JnVXhibjMzNTR6NTdEdm9oQndJYUpCVVFTT1FZbGVRVVRGdUtCZUU3MmFhekJCL2ZRR1FSSVZvNGxMTk9DK3hPaG5vbGZNcDBhdlhrRkZJUnEydUlBTGNrQkJWRkJRRUdUZjRTd3o5YjN2ZFBXWm5qbmRzM2JQZEIvLy8rZDVwN3VycTd2cjExVnZWWFhQVkkyaFdPU21iWXVKbGh4bHJ2ZGRSTlNobjJ0VWd5WExUS2Z6VTVHTWUxZi9pYWlXVEpQMUFNc2RwSFk5VWNPM3lXMVpsN0NBeW1oU3RPSjgreis3aG1pdFN3NTBIME4wNkYxOEMxb0VxbWcxQlZsMEZ0SG1WNGoydVlCby82dUlvbDExam13Zyt2cEJvbzNQRW5VK2s2amZWRDQ2RWhnUXVYQlMzenlqMUN3T1duSzVVdkdZYWlJSmszMFNSK0xhWkR0ZldTdzFSOTdyVGJSbkJkR3g3QTh0OW5YM25mbjdFYlhrL2NkOEc4QmFhOWNYYkF6UjZUeDNDSkhza3ppNzE1dkhCSzdXMnJuWVhIWTRJZnRSVmh6cm1FQ0I3UDdNWExiY1AvdFJWaHpybUVDQjFLM1RSYWRMOXFPc09OWXhnUUpwMktGWDJ1VndXTHUwWTRJRUV0dHFMaXRhWnovS2ltTWRFd0JGazBYcnMyU3gyZk1OVWYwMmJ1WDNFTzFkcnYyQ3ErWklLNkxLRHJhaUZSd2ZNZHVSM2F1NERUbUlHd0dkUi9FYzhsSGlTTXN4NkN1aTF2c0hvSXRTdTFIUndsNWNBK255emplZE9sM05lN2d2MWVaUUxrWnRkREhheGUwRzU0RGl2dGlXK3pqWDlCbmE5aUU2NmkyT3ZrK1pRZDd2cDJnSHR3YzlKaEFkZUhWcVk3anBkYmJaNW5xWEU5bE9TVzNoVnpIUW1ra0pHR1BRc3JLQ1JLbU9JU3Fsa2ZzaEx6c2w5OVJ2SjFwOGFuSmJFbnc4KzAxbGUzTmI0c294R3lUdXNnRDR5SmFGaWo0WndFNnRYYi9UUlZ5N2NnSjdYa3IwTmhlcm1GVlRzUjNIeFd2MVg0bDJ2TS9GNjJtdWZxVVNZRHRzSVJtZEJnU2tHNysxaHJ2dk16aVI4em1CcTRrT2Zvd2h1UGdzMDduUzV4OE13OFZ1eFdnRzdzbXd4M0ozbm90YXg0SEJlQjd4NGJFQUlBQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDa0JDQXFBVTBscGVIczQwenFodC9CSnRNMkFLU0lUMVBzQzNsL2RjR0ZVUitpbnc2MjJWczB6alJyZElndXZGaWpvN1Rpd0lzQWJtSXJZWnRHTnZyblBpMkdxS0hocERjbXNWMmNaQkJESjNvemdMQlZzMDJqMjAwMjR0c1AyQ2J3WGF1VTdFTHBMUHJuSmpPZHJ4dHYwQ01aSWk2VU5WYU9tZFdzUW1VL01iNit3eXhNd3kxVmlRdFIxN1NFQ0twclo3bjhDb0tnU0lhb29QMmtlTzFqL1JsKzVSdGhNQ2wxMmFCQk5FUTRodUQyZDVpTzRXTDAxSmVEcFcyUThOTUN6cU01TWpUR21LV2hrajRCQy9YYVJpcmF2NWIwRUdrS0QzT2RrWjZGY3ZiNHZBbnNiM010aTdJSU9nMEFnUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBdnBzZ0VWc0NockM5eExaYW02d1BvVENKRTN5RGN0ZUVmSE9rSEdibFJFTUdFTmwzZkJoQTNsVFpOU2ZvSURJbnR2eXZRSWNzNmR0bUdFYkhVRGg3RmxVRTNjOEY1S01jNGkwSVE0M1ZQSnhkWDN4QzZLdGZod1p4cmJhQ0dzU3kxVnJvYXdFRUlBQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRTDdiSUtxRzVHZC80OG1jcVZ3a3Z5eTkxK2hQYzBNRHdoQTM4T0kybHpqWE04eWt3SVBvbkpoSjVvK1ViMmQ3Uk8rN2drMEFZMnhER2VhdElJTklicnpKcHRnZWRkajNxTjQzSjU4Y0tjOXY0MnZJK20xOEo3N3JXOU5BNVBmd1cwaCtHOStmUXYzYitKaGVodXEzOFhjNDdML2JWb01GV2s3Ty9tZTk3Ny9DNU94VzlTdS9mNThZNnVyWG9VRWNwSVBlQzEyRGlMNFdRQUFDRUlBQUJDQUFBUWhBQUFJUWdBQUVJQUFCQ0VBQUFoQ0FBQVFnQUFFSVFBQUNFSUFBQkNBQUFRaEFBQUlRZ0FEa3V3ZWlzbDA1WGsrMCtBeHp2ZDgwb2tobHlXOU9Mc28rSi9hM0x4QnRlZDIwOVZNb3FNcWNJNUliODZ1SWF2VjJDN1pqNjdMbFNnQnpaTzB6SmtTSG9VUWRoNXZyRWhhcUhJbHpxdWUzTkJOLzFDd3piTkV3blN0NytSYTBDRlNPUkxQbVJwdURpVHFmYUliSitxNFY1cjRlbHpoVEdFYUFjaVMybTNPakRSRzdBL1Y5bWFobGJ6Tjg3M0tpSldjUlZVbXU3Q0txYU8wRUVpQWZrVHN1RUZ5eXFPUHhSQXNQTjAzV0phd3VlTDRTY2N5TlZaZWE2d2RNTm4wbFR0cHF6VENSeEpHNGdRVlo4NlI1eDZXRzdmYVRwa2RJV0pYT0ZZa2JTQkM1dzE5ZGFhN3ZmNytqRHlUQ2V0NXZya3ZjZ09SS0tzanF4NG5xeVJ4SjB2MWk5Nk5rbjhTcDE4Y0VDcVJoSjkvaHE4ejE3OTNJeGFlVGptRnJMNngxMmRmakZwMHJWNW5IQmdaa0RkL1pCdDJjOWZ5dlpBeEp0RlRCWWhhY3FNZGxadHdHZld3Z1FPcTNjeTAwVGp2ekdLNWl1NlhHMnJISU5Mc2tqc1JOMUdEanpIT1VVNGsvNXZqaURxVm1rV2s3VjZUK2FVZnQ1dVErV2JkTDRscjd2cnhicWJLTnBoUVFTZHhjblpqRkZ6ai9BOG5YZnpYTlNYS01IRHZYQkMwZnlQSS9KTy9xbG9VcWI4a3gxdkVySnBZTnhGQnZrVW8wYmw2SUcwcmorSEk5ajNRYzdkM1p2RHdYQkVFUUJFRVFCRUVRQkVFUUJFRVFCRUVRQkVFUUJFRVFCRUVRQkVFNXlQWDNoL2RjZSsyMkhNL1IvdGQzM21tVUd5U2FLWUhmbWV6a1hGTmlRVWhMcExuYzFFaVdPLzZ0WGhxaEJoRS9rYUxEenF5Q0RoTE5Vc1pqbGk4RW9XYktsaU9aeGt0VTJCMDc2Q0RSNXVMc3JUUHN0NFliVTlDTFZyWjJJczYyVzY5WGhMa2RNVGduV3VzY2lZVzIrZzFUY1dvMkxYczBVeitxMlhSUklBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lDaGRSZjltMGFzWjFvdjkyeElqQ0JCZUFCbEJnaWc1aU44VDloY0NFMGdRTzFDMmExblFlWUdvbXNUb2hUZ2RwUUwxVTFxQmllWUIwWVlYZTJRMWFGV3Y1SnFSQTRDUnlMbWpWRHpJN1VoRkZnaFRBU3RLZVRtN1dzZ2YvY1B6cTNLam5MV1NyMFVyakJCTmNpUzBFRno5R3MwQklpVkh3Z2hpNzhxRWV2eUkrcENhQjBnVFp3K3JmeVMwa0IxOVlITUFzZGRhelFJazdCQUpmV2hFbW91elZ4aVRKazNLR3V1NjY2NHJheXJ2dU9PT3JHa29Qa2NXQkdNVXJCTklLN2FKYksrekhSOFdtS2dEeERTMllYcTdBOXN4V2M5U3JRSUZJb21lempiWUZ2WkdHQ0RzSUoxMVVhcTI3WHVBN2Nhd1ZGdmlJL0lIb1hQU0lHNW5HeGVtK2xkeTVGRzJJMjFoMTdMZEZiYUdSSEprR3pVRFJYUU9MTFdGM2NsMlN4aEIxckVObGRiQUZ2NTd0bnRDQlhMZGlSTmt1WUh0SkxaNXRuM2p3NVF6a1R0bU4vYTF4RmRPWVp0bDIzOXltSW9XNlZ3UnliOWhuOEUyU1RlRzE0ZXArazNYbmpBQnBEeXpONHVuUklBRUZTVHNNQUFKTkVpWVlack5OMWJ1M3lHR0RDYjcxOU1oQWNyNlhpdnhYbFcrVUpsWG5sYytqZGN2TmtkU2N1Y2R2VEs0ZEw5RnliVmtOSStYMkFBQkNFQVNYeTI0NmJyaEUxbzBseTk2UXZXTmxYekZJZStuNVN1UFZtbjdLc0kwMTYrOFp4dEU1cHNkV1o2aDN5L2sxcklIU1Bhdk9PVDdtNWxrZmhVaVAwNVVZUUtScnpqdXRXMFAxakR5bFlnUk5tZi9OWmxmZVZpU3IwTG12TE5vNUw1aHJMVWtaNjYxYlI4NWY5TXhEemFMNmpkQ2Fsc1lRZVRGK3AyMjdhVjlPM3p5MjdCTnRTNVY4SGpidG53VmN0ckpBNS9hRmcxWlR0Z2g1Q3VRMDBpK1JWRGhhdG50WDNISVZ4K25rUDdhOEk3WmsrSmhBcmxXTjRxVGRLdStFOTE0Z0FBRUlBQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ2tQeEJwamNKazIrRDVBZk04cWI3VmhxaDNnb0RpRGNEWVFJR1V0aEFtSUNCWUNCTWtISUVBMkdDQm9LQk1FRURFWVYvSUl4dFBkUURZZEpiZG1zZ2pOVkZ1UjJkUm9BQUJDQUFBUWhBQUFJUWdBQUVJQUFwRm1TR0hyQTFva3pBTTNJYno5WnNaZ1ZzTHVOSENPTkh5aUQzOFNNaEE4azBmb1NheGZnUnRtN05ZdndJMjZQTnBmcHRIdU5ISkllYXhmZ1J0ZzJSa09WRSt2Z1IrUVpoUTlocUxkZnhJMkVEeVRKK1pIcU9wd2w0N3hjUFZnQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBQUFLUTBJUDRldmFyWHFyZ3p4UEpuUGJxQkxZK2JGMzEzdmIwNE1nZFhseEdNaVBxWWFMNzZRUWZ5amFFN1lnc1I4aTBpZi8wNnZMUkFoTGNYZDladWNNL1pUczhRK3lOYk8reXZjMVdUNmx6MngxZk9wQ3JYdXJMbitmcmhNc3dvTTRaWXRkb0cyVUxpM1B4T2NOMnZyWDgrWlRla3B0d3M3YytjdFZMdmNnY2FmbHZaQTRmUFRURE1hdlpldHEyR3ppeGxiYkVqaUJ6NGtwTFgvSCtBMjM3RjVNMUMrR0RJdzJ2Zk1UZ0UwdWlQODBoL3JGODRYZGRFaXVxNHYzMWV2L1IvUG0rYlo4TUl4TFlGaWxIZUFwaVh0aXFnMmNtaXRLREl6ZHhXRlNYYTdzcWVWK0RQa1p5OEoyMC9ZK3pEV2M3TUlmcnIrTnpkZmNMaEJJSmVYRGtURnRSU0c5b3h1c3E5RWVKWEVxL3k4NWF3dlk4MnpLU3NiVVBqdnpXeTFyZUR2SXhmL2ExN1R0WjF6aVMyRjlRNnZTZ21iUkFKM1l1MjJ4TzhQSlNOSWIyZHVSL0tIVXF3Mnl6eW42ZFNLZzVjbGtTdkRJWUxmdFZMMGtWKzJ5T3gwelJ4VW1jdDBKYk5PSHN5VEE1cjlJVzBWWmgzVUM5YkVreTdjR0RJLy9pWGRGeTlvVlNhQ1dEOVBJQ0pOUElVT2tIdFdWN0pDMzhWRjByZFdKYmxMWlBmT2tBdGtQWVlyYndXcmI5ZGZ0am54aDVkeWxhOW5acy8yQTd6aFoyQjkvQjEzVU9TcU4ybEczZnozbmZoM3JmYmJhaUpPck4rMWJyZlMra3RQd2VLZHRZWFR2RU41eVlDYmJ0eGJiMTEzbmYzM1JDWlNMa0cyejdyck5CL0V4WDJUNTI0OHZqSThzWThqQy9mYVFVMnVtSGo4Z2NJNldiamRtamZsWlRIM2x3NVBZd1ArbzJtMG1Rb3FYS2VyOHJsR2c1TG9xaUJSK0JqNkJvQVFRK2dxSlZJcERYd3dwaU5JZmNTSDJMQWhDQUFBUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUJTemtUWlpSaEcrRUF5alJ2T0JCUW9rRndHUDd2QjVBMVM2RWpyYk1Vam4vTTZuU3NqaU5mRHc3TVZqV0xPNVFqaTkvaDJ0enRhekhtYWdKUnFrTDdUSGZVTXBOUXpEYVFucEpoemxIVkVqMXhjTGZLdXBpdGJqalJxTVNlaFgvSFhOc29LNGFFcU1KMElRQUFDRUlBQUJDRGVnc2pFUnpMeGk4eDBJNFB5Kyt0d21ZWkhaaHVRUDc2ZVFlWU1IVDUxM2dxM1ZtemoyZGFyM0xWZUg5T3F5R3VuV0RFSG44VzJTaFd1VmZvY1pRV1pxTHpUeEhLQlBLdTgxN09sQnJsTithZmJpZ0hKcDlZNmgrMUZuMnZSYzhtY0NjZTM2bGVtMC9tQ3JZZlBJR3ZZdnM5V2wrK0J1VDZ6ankwQkJPbHJqUFdySGFuSXM1MHcxYkJicWM5K3FkVDdmSW90YzFTZTdVeVZIejV5T3R1MHZPNU9iQS9SaDYySk51bnRqbXpINXRXRGtBbjRYdlc2YUkzSUM2SmhHOUVITmdqUlBsZmtXMUJHK09FajFUbWZyWDR6MGZ0OCs3Zll3bnI5bEtqM3cvbW1xOXFQV21zOUphZnRkRmZ0T3M2Sjd1WmtWcFo2WDFFSWhHZ0QyNzVlZzlUcTZqZXpGaHBFOWlueUR2c2QwWUczRmxwN1NmWGJ3dXVpbFp1aTFWUk9lVnUwM3UrZU9qL1RJYjhpT3ZoUEpTbGF1ZVJJYmxNVXR1aEdOR2k5T1NlVXBjOGZJdnJzd2tKQWNwOFc4WDBqWjVDYW5FOWF4Um4zdzYzbTdIU1d2dmc3MFlveCtZTFU1SHRBTGlDdjV1Y3JuQ1hWWEhWMXNZVnRmQ2pmZE9WK1RaVjdGNldxK0M3S1ROKzdLTGxHbktCS3B3bCtQbytVc2hzdmN6enU4YXNiTHczVW1CSTBCMk1LZ1Nqa2RaQ2ZqN3BGdllRb0JDYVlMeDhLekpuZ3ZRNHFvcGlkVitRTHV0VnM1M3YyZ3E1Z2tIa2NmKzBOblZUdE43Y3FGZCtRWnp0eGpkZXZUQXYvTGNwOHc2cVcvNU50RnczYXRaNGlyVSsydmNTMnVzTUxTdkVTdTdnZjFaZ3c4dnBHNXM3K0gzNHVyNk15cWZoZkI1a3c3Uks1Y3F5S0J3YWtJSmg1K2pTRC9mdlNTSDVBay9Hbmdwa2F5a0I4RTVYalQ2SUNEWkxQcis2TWJOMlhvQUc0cGRQSUpWS1FJUUlKVWdoRXppQ2xnaWtVSWk4UUwyQ0tTYWluSUlYQytBbFFNRWkrTUtXQUtCZ2tHMHlwRXU4SlNOQUVFSUFBQkNBQUFRaEFBQUlRZ0FBRUlBQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQlNQNGdhZ1l0Skptd1NIN2RaOGV5ZnUyWGExaDZ1TFhQS2N5S3E2akdPSTBHZUFFU0lXdldKY04yRWVWd2NlV3diU1hVY0RrdVBmSHBOOEpvblBHcGFEWCtQN3N4b3JURmpFdUNJZzkvRjkxcy9wODltbDRrMUhUcXg0dDVuRDlMT0pjR0ZYM25wOU5BUHRjQ3ZzWlUzanlQZlNKbTl4K3ZmcTRlU2J0b0N6NzVrMlNPbVQyRnMvOGV0dDhWV0hRNjh2bW04ZmxrZEx2TWMzSTJyMS9sNkR1ZWdLZ1U1L3VKZHY2ZmNmamx2Qnl2b1pMWC9pZFZxRGRvUEM4LzRHVXRMOTlOYkwrUkdPbG1UK1FPUGw5clhwdk90cFRYLzhwaHYyZkF6bzQxWE5FZ3FiWFZKZno1RG9kdFlQc2pyLytCYlFyZjJkbUozWkpZUlRONTlSNHloK2ZKOEwxQkhQY2V0dGNGVXVmR2M3eVFLVGgrckcvRXZXejNremxuemNtdVZYUFJSU3Q1UXFuVFgyRWJ6bGJQRjVPTFA4YjdCK3I5a2tOREVvY001MUNEdnJKVnhjUDBmdEVIdk8rM0hIWThyOS9PU3lsYU1pM0pLaDNtUTQ2b2xQcTlIYS9MeFE3anJaVWE5SFRldmwzSHVDSXRFWDE1ZlJKYm5jN1pLM1JWZmhldmY4bGhQK1hORDNXbElyNnltc08rNTQrUHBKYnJCcjVRS3pJbkJXbXJjMlV6aHgybFk2UU16T2RjMmNsMlBjYzVoVTFnZXVpaUpWT0JkRTBVSzVVNGo1eGJjcVNWemhuUEZVbkpZb08rNGMrajJkN1VpVDZZd3lTaDFwd2dhK3creFQ1VHhYNXhEWWROMC82eVJpZjZlUTZyNWVXRHZQd1poOGg1dDVITUhxQm9pVDhncVRraTdhM1VYSXYwQmYrYjdXVk96TDlyMEdmU25IUXhiOTlwdSt2UDZQQUhlZjJFeEUxUmRDa3ZKN0dKbjhrSTBuOTRYYXljcWwrWnNXZ2ZOcWw2eitYdFByei9EaTd6MXR4emtxQUZPamZreUIvWWZHWUJMeE8reEkzZS8vTGlLekxuazN1Vnd5ZnJtbTV1b25IMHJXaXB4djZXNU1JZmRkVTVnTU9sVlg3STdoTmtEakMrTmRFMm1CQkxFOXNHL1lqMzc5RStJam05bDIwazJ5L1ludVQ5QjdLTjQyc29QMm90YWMxVm9nT1gzSzVnZTQ1dFRoRWR3bTYyOWFQNFhPdllmdHJrdW1JZWpXZVBwaWRDOTRYTzV3UzBML3p1cE15eTlaRVVRVDd2Tmo4N2pZYVZHeVh2eGsvWHBXQ0U4dVM2MGNhcWRBWjNRMUtmM2xJZm1OTFgzYm9ZdVlRcjczMGthcnZRMENZWFZYazl0bVpmOTFFUlc5VkxLZXNxeXlOcmVzS010REFqdy9HK2RWR3kzVVVqemRJQmxNT3p2VW83VmpuY0tNUGJvblUva2NOTEFPZUxESFZNU0ZPZm11T2EyTlNiVk9OWnJaVjNUV05rZURXa3c3bXFMZGxnNXNKZlBxUURxTFFpVmFaWGZ0R0M4OUQ5WmQzV2NvQVlMa1ZvRkMrZVNDbm5ia3VuV2t3NTFuNER1TWpWK0ZXMG9pNTQwcytheW9ub21MR3hVdzQxbVhPanVsVS9jWlkyUjByOUFob2dBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBQUFJUWdBQUVJQUVEaVZvRFVweCtCcDR5NXR6cFo3SnUyL1p3dDNOUDkvYTMyOUdjVHBQK1ErWDBZUm1aQnN5VXFDd1l0anZqbkNpVklTRnVvM3ZjdHROQlJaNE5UZEtKY2hwajFRanBCcGNOUXE5bktWcWVLSkp5ZDNMSmZyZUpLREtCdXAzYjgySGdybFdLYmVrMHlrZGxLVzRsL0N2RlNFNU9ucng3azExekp1OTYxMnRudDBhRnFpeTFsYTVHT2I1TUJuTWZ5VEFsSTBmSEpvZGF6dHAvcWpmT2JsaHRoV3M3WW5kYVc0WEErODdteFgyODd5QW42SlF4d0puTzdSRklKS2NpNEhBcGhwcksxb3RYYnlGckZFK20yc3gzSDhsMHdSd1N3M2Y3Wm83VGkrTk96bm4wS0hsZkdVU3lPbDRPRitTYzJjcEFsM0E4bWZ4aVRwUGFxd1F5MHYzQXNmWFY0YmtPeStOemppSVpvNVd0c2ZTMFpjL1UrdVk1VVJHMzFoMzVMRGZ4NnJpMEhITnUyVDBlR1pxM283dEFqRXRBMkFlWTVkSlg4d3pFeUtIV3l0QmJaUUJwVDU3ZzFZTWNheXlqTkExaU5HdGZ5NlVGWjRDREVnQXlmTHlNMVc2VDNtK1RoeWpsREpUd0EwcTA3S015anJpMmJhZjBvbjBDYmN3UjE2NjJrYko5TXkvR2NsakhKcDFESTJOYjQzczNQcHF4SERjTnY4bXhLQnI1K1pVL1JVdmxXR3NaV1J4VjVWbDBmSmxmaTdJNGU2YUhLYmZuOTJ5OUFvKzdLSVo5Y2hjM0I4L28wSmtlZ3luRDB5TjUyNDJQWkh4c3paUm90MmQ1SThzZE4xemV4SGpWc2p0MkkyYWtWWnZaaXFETEc1VFN2WHpJcCtmcmRNY3pUWjlnbE1iWjhlNFhJQUFCQ0VBQUFoQ0FBQVFnQUFFSVFBQUNFSUFBQkNBQUFRaEFBQUlRZ0FBRUlBQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ2tMeDF6N1hYTnFiaTEzZmVhWlFUSkdwUFRDYWxKelRYNDBxbFNCNTNQK0lBSWYrZFdGZG9ibmlwYUw1Rmd5SFcyallyK0xob0VISWtXcUJQMUxOVkJpRW5DaWxhOWovMkRSUkV6aUFNSWY4QldsVnNEVlZXRUliNGhCY3QyZUpCaGNnS29uMml2L2FsRFFMQllTMURCYUlodG5MaWEzVk9kTlBMdmFITEVWWmJCdG9VMU9LVUZjUld6VVlab2d1RlFORmN1aVBwZ0tHc3RjS2lhRkE3Z2QvWkhERzhlaDRBQ0VBQUFoQ0FBQVFnQUFFSVFBQUNFSUFBQkNBQUFRaEFBQUlRZ0FBRUlBQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQW1oL0lFTFlSYk1QWUtzZ2NvaUdxSVhNZzJTeTJHV3h6ZlNjUmtEeXRGZHQ0dHZVcWQ2M1h4N1FxNEhvNVdiNEhuTVcyU2hXdVZmb2NaUVdacUx6VHhIS0JQS3U4MTdPbEJybE4rYWZidkFMSlZtdWR3L2Fpei9YTnVXeFQvS3grWmR6aEYydzlmQVpady9aOXRycGlUcEpwL01qWUVrQ1F2c1pZdjlxUmlyemFpUzF6bEhxZkQvdnNsMG8xN0M3RVYrUmFWWDc0eU9sczAzSytHL01ONjE5RGlXU00zTURkM002M3l2ZWVuc0gycXRkRmEwUmVaOW5uaXVUNkpyWVBXaE0xYk1zM0xTUDg4Skhxdk03UysyRjIxLzlJYm05aGU3OGpVZjNtZk01UzdVZXR0WjZ0YTk1blczNGwyeVBKN1hac1I2OGxhdEV0bDZNM3NPM3JOVWd0MllaOTU2VlZ2eWY2NUEvSjdmM1lCdVRVdzVicXQ0VWYxYTgzaWxaVEtlUnQwVm94aHVqemg1TGJiZGwrV0pxaTVUYm53L0s4UVQ2N2tQc0JmMDl1ZHhEMzVmdFJsZk5wbHZ0UmE5WGtuUk4yaUU2U0UxdnpnY2ovbWptQzVOY3diYlFWSjJrUXEzZHdYbmZJTnkydkZ1VWtMazErVmRpNktKbDJUbENsMHdRL24wZEsyWTAvaEcyUFg5MTRhYURHbEtBSkdGTXNSSzZ2Zy94ODFKMklsdy9mOWRkQmxwMVg1QXU2MVd6bkIrRk5vL1hLOUpvQ1hwbGU0K2NyVTY5ZllsdGQzUVdsZm9tTnJ4VUFBcEFzSUFYM0NONU9kRytNaEZQL1NJVVhKTDJiQTVBZ2dRUUJ4dE1KdjhvSjQvbk1aZWt3aG1HVUJCanovUUlFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBQUFJUWdBQUVJQUFCQ0VBQUFoQ0FBQVFnQUFFSVFBQmlubmdHRGVYRno5bGtlWkJ0bDR4WW44UDJFdHRVWTBUakNIYnJ1STY4T0p0dHBENjJvMjMzU24zc2szemNIRjlCZEVLbTZFUmtrMEJjelltYXJJOGR4WXY3MGhMdkpnRTV4N29Sbm9Kb2lJVnBPWkNMSnV2bHFEeVBrMUdnSndxTTF5QUMwYi9FN2xIRElBTzhBb25vWXRHL0RIN2VYMS9iR3hEdG5PV1NaOWMyK0s2VTk3ZmdweXJEcXh3cFZKTXBRQ29ZaEIzMWtpREJGRFhuUTVCZ0lyclZMUmZNU2k5QnBoWmRZeFFPTTlWTGtBYzhxZjVNbUh6djhBT2VnWEFDVm5wUnpya2FmeUxQTHM1a2ZXMVBuZjBXb3RUZWJBRVErYlRTVy9VMXZhMjE5SjI1cFVRUWlSdm5aVzQwZVI3aFJFM1J6eFM1K0lSUklJUTh5NXpqNjRPVjdzN1B6ckVUT2JtWTduc3BuaEQ3YTVpTzVLMjJhb2lha2oyeit3RGpDRkdTbHc4ZXdyaENsT3d0aWdjd0dTRksranBJdzB3cDRIbCtwWDdKVUZPVzEwRXVNUG5VWm82MWs5OGdPWFhqZFlKT3pMRXJNemxYQ044YXhCeHpaeHlaNzdDY0pPKzY3cy9yZk9WOFplcmdOem41UStCQWJIN3poTjY4cE5DaWhKZllBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBQUFJUWdKUUVSRTEzR2E4b1oxQU9aMU8yZmZZbG1TTWR2QWFKNUlWc3VFQVl0dlYwcUhRNG54VE52UXlZaVRKT0srSUhuZFA5UTRtVTNKdFV1WE1rL2M0YWFiNmd5MzdqWFUvem5ZUmZHUDZCUklxNmt5b3R3ZVRpUnlWUXRLZ2lZb2RRVFd1a1VxcDRIekh5dVBQS3Z4ekt1OVp5ckhxZC9DZXQvUWlPajZUN2lYSnBJd3gvNzd5blBwS3BMY25vSTM0M2lHcEdZaERsRk1jN20rWUxUYXBYdzZWTFlnNkdtVk9xR3N5YWhXT0tZL2ZDN1c2NkZhblVzTmtNZlhhcGNrUjg1RDZydURRV0dlVndVYU9wanpRZWt3eVgwVHduY3Noa3ZYMVRxWElreW9uSVBqVFBjSUZwNmg5WDY5VTVuQnVTMC8xTDUrdzZjWWxwUmRMTGZLYkd6M0RvcW1US3dSSVVyZFNMcUl6bHZtbGJFcEJIdEdoNmxacHlseW56TTRWVjFUcE9FdVBXbGhoKzVVaTJJbUhrMkRqbVVteDhiTm1UUHBLZUUwNHd5cUZOY1V0Y3lYM0U3V0pHanVINUZoZmZpcGFSOUpIR2pwM1RjN3JSdENnMUhxUHk2T242K29TWVMwdXVDcmpMcW5RK0VyRXVLT1c5U2UzajhEaHJYMDhjNC82YXFFYTNOVGZybW0yY0R2ZGxNTExoV04wcWwrY09sZUY1Uk9VY1Y2WVN1ZG5yOTFyUjlKZG1LWGZZY09taUdDNXRqOHJ3N3NzYzQvNWt2cU9yOCtsclVhNE5ZTWJ5cjRwNzUxVjgwYkw2V0prQWpBelBLWlQyeWlmZmR4aWVGYTFDYTZaMGZ5anpYN1JIN0M4SFhJdUdjbGkzdHlPQjZUVG1Va3RsYTluTG5DUEo2UTFWRGcyYmtia0NLTVRaOFVVUFFBQUNFSUFBQkNBQUFRaEFBQUlRZ0FBRUlBQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSU1VbzZ0V0ovTmJ3NGNQZkpmTkgwR05tenB4WkoyRW5uWFJTRlM4ZVpqc3lTdUhSbDJ5WHNYVmpnQXQwMkl0c0k5aWVDeFBJeFd3eHRndlpwdXV3SVd6UGtQejlWRmlLbG1FWVVwUXFkRkc2VEFmL2hlMUtMbXF4VUlGWVlxQjdlRkhCQU9NYTk0Y0ZKQ3NvUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBQUFJUWdBQUVJUGtvY3QxMTExMjllL2Z1OVpTY1dqV3NSbWNPR0REZ1p4czJiUGhJaFZqeWk4Y3pFMWtUaVVRWExWcjB5eU9PT09MMFVCWXR0bit4N1luSDR3MUhIbm5rb3krOTlOSURzVmlzTG13ZzhqdmFXcmJWYkozWVdqLzc3TE5mTWtqTjRNR0RxeXNySzF1SHB0Wkt5NTNEMlhySnhuSEhIZGVKYytlNkxsMjZIQjQyRUV2N3N4MHB1U1YrczJUSmtzdjc5T2x6YWhoQlJQSXZNVDlrYXlrYjA2Wk5PL1cwMDA2N1hNQ0M3Q05PMnN1MlJ2dE5xMmVlZVdaRlZWWFZSOGNjYzB4MU5CcHRGZFphclordW9zOGNObXpZcUMxYnRud2ExSFlrRngzSWRvU0FjYzVVc2Q5YzBidDM3NVBDNENOTzZzeDJORnNMMlpneFk4YnBwNXh5eXFXR1lVU0M3Q05PMnFQOXBvdFVBazg5OWRUbnJWcTErbmpRb0VGSFYxUlV0QXlqM3doOGY4dHZUai85OUYrdzM2d0lpNDg0U1JyT3ZsSTh4VytXTFZzMnBsZXZYa1BDNENOTzZxTDlSa2FmMGV6WnM4OGRNbVRJeGVYd200b2lqeGUvK1ladEg2a0Vubnp5eVU4NmRlcTByTHE2V3Z5bVJWajlacURsTitlY2M4NW85cHVWWWZFUkp4M01kcGdVMmM2ZE83ZGN1SERoMkFNT09PQzRNUGlJazdxeVZiTlZ5c2JjdVhQUE8rR0VFeTRPdW84NGFiZmRieVpQbnJ5MGE5ZXVuL0xqOUNEMm04b3crazFVMTJnSnY3bnd3Z3N2Mjc1OSsrcXcrSWlUZW11L0lmR2J4WXNYLzZaSGp4NkR3dnJhYVY4eUJ3Y25jbWYrL1BsLzl6cEhLa29Fc290dHJhNElxaDU3N0xHUGV2YnN1YUpmdjM2RHZIcFlxeWhocnRUcmx4enQyTnErOHNvcmE5YXRXemYveEJOUEhNZzluSFpoTFdvL3NJb1p0elBucjEyN2RrR3hSYXVjTU4zWVRoTVk3cHVOL09DREQ1NFBLd2pwWWpiTXloM3VxMDFxYUdpb0RiS3p1NmxPKzAxN3RqWlRwMDc5ZXVQR2plOE9IVHEwbXYybWJSaDl4dEJ0VFNKbit2VHBjK0g2OWVzWGhhbG9wYXM3MjQ4dHY2bXBxWmtTVmhEU3hld2tLM2VlZSs2NXUzUHhtNG9BZ2xndjFlVnRaK3NYWG5oaDFkNjllejg4N3JqakJsWldWcllKcTkvMHRYSW0yNWRSWVFEcVlma05kMmZPK2Vpamo2YUZGVVRVZ1cyNGxUdGNUZDhmaThYcWcrNGptZnpHL21YVXdyQjlHV1dYdkdZNndzb1pyZ0F1M3J4NTh5ZWxlckR5US9KbGxIeExFTEcrakFvckNGSGFsMUZoQmhHMTBEQ2R3ZzVpOXhzSWdpQUlnaUFJZ2lBSWdpQUlnaUFJZ2lBSWdpQUlnaUFJZ2lBSWdpQUlnZ0l1UTgyZ2hhU29mK052c21Va2huMmQ5TGJLc0tTMFl6THRUNzFHalRHQ0JuZ0JFa2xBcEtDbHJkc1Q0eGFQSEc2Q2ZkdnR4bERhdFl0UTFEb3AzNW1TL3J4Y1RTZFBSK0dVZDdvYzVUVklNL2lwZjZTUXU4TEY0a1d1SkRvRUM2U3czRGlIYjhBU2hobFdlSDNwYlVtSUZGeE9qY1N3dXBtY094UFpxc3J2STBhQmQ3Tng0azJhd052dmNPNzhvS0R6ZU9yc3FvQTdtVm8wWkVLWER6aG5MaXR2clZWb2pxU3VWL0I2UlRrZ3pBWlJGWkRGcWttTFg4TjJBVGVxbjVhaldCWFhJQ1p6WkJKL0hwTVhoQSs1RWkzQzJkZnc4bUlHbUZWVUZWem02bmNLVzkraUlKVFhPVkpBRmpQQXVkNDhSSlMvWlE5b1g2c2NNSVlmUlV2T09ZTm1aNFJTTHUySGtlR0J5aW11YisxSThzUkRIZTlTcGpDbmZVNXd5aVh4aHBjZ1JnRW5WeTdQOTBhR0crQUc3YW1QS0ljcVVia2swSzBhTlZ4ZVFwREQwcGNjSWJvLzhSTEFjTGw0YXFLR3VyNTBTTDM3YzVyRWMvYVhHaS9yanR6YnNCazZPWmxlOGNpTGpOTktYdy9tMzlmSy9vcW5UTzFJc2QyTHBrQmJ5d0ZpdUJTaFVaeXdKeHdUbXExV01seHJwZ0ZjNUdyOEFuR2JrVzhPMjFST1ZNZU1FRWFXR3N1ZVM0cFdFZ1JCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkIwSGRYbnYzMk1OTy9sQm1HRVE2UWZQNXF6UzhvbzVRUWZrSVo1UUR3QThnb040UlhVRWFRSUlvQk03SWwxSDZpY3Y5L1lpWW9Jd2dKOUFMS0NDT0VFMVN6QUdrMk9RSVFnQUFFSUFBQmlEOGdLdzFGWHhaNHhsNXNCNVgrSDVTZFFiNWtrRjRGSnFhWVk0dFFjckRZRjBaeU9OZEJ4VHo3bHFkb0pjY2h4dG1HOFowVWl6dkVYRzQ4emRZMjZ4bmo1UUdKMG1jNkp3N0trcGc0WGNpZmd6bitSWFNvbXBlKys2SisvUVJ5L0RIOURIcDNjYjhHSGZ3ZTJ3eTJlNTlldkhpbnZ6N3lDUmVHUHB3THl3eHpLYkt2VzVJd1V6RzJXOWx1NXpneERUR0VGMDlvVjNmMEhMWkxHR2F1ZnlCTEdPUndUdlJTdzF5SzdPdVdsaHJwcGY4dHpxV0xMN3J3U0psKzdVVUp1R3lQUVVOMlZoRHQwb2UyVVRTM2JZeiswcXJ4MEhNWlpvby9QaEt6M1dkeVdMZUgyVzBQSFU5ZlVFMmtJdjZNN1A3YmRvYjROcHFFRU8weXcyU2YxdDg0OXpyN0F4SjM4SXU0aXhOYnRvWHRHNkxwYzZsbFBCWnBPWVp6b21KejFQVWlzay9pc0JKK1ZINlFPcmExYk5zU0lmT2VuMzM0Y2xrNWRsdjJ1WTlzY1U3M3A5WmF4WjhEY2loYU85aTJKb0JpQ1Vkbmg2OXRxTmlkMk5lZ2k4NzJCYzVYYVYrZGpPTmVJWGlRSXkreUkyZkxrWTJTWUs1OTRqU1V6bFkzc1ptZWtyOHEvTW1SYzNYdEpEQ0RNalpxejdGZHp2RzNwVldyL1NtcXpEc3VkOTcxU28wMTEzSi91eWlTK0JkMEZmczloNWpucWdzY1FsOFZrQS9heCtqb3ZkR01GNUk0dG1OODdLS2N4emxqMlZjNUgvOEEyODc3V2pOL3B3eDlFOTZYaU1OeDlURWw2djArYStUYzlmdjZjNklKeng5SmpRMmkxRTU3dFdPMzVBYXhRMHFEK0JOdUVGOEk3SU1WTjNJbjgrTFJMRjJVS3hsaVJ1Q2ZFSFduOFJxMkVXeUQwanFOZC9uZmFjUXpPMEFBQWhDQUFBUWdBQUVJUUFBQ0VJQUFCQ0FBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBQUFJUWdBQUVJQUFCQ0VBQUFoQ0FBQVFnQUhGV0pGQ3BxVEdNeE1SNEJVdzZHUW5ZamExc1BrV3J4cWcwQmxCOXZ1a0twbzl3RWFQKytTVXNFa2pQVmMyaGFIM24yNUh0TTgyVmRxbEQ2dFdPQWljS1M1eW5IUE5yUlZTeVhPN1NpVy9EaWVId2xNUzAyWmRvejBhaXVHMXFoelluT2VUbUYwWlpzamphNXFCR0VKWFIyVm9UdGZvZVVXdzkwZDQ2YngzVm01YWQ3L0N1TDhpYUY4alFSZzcyTk1kdVc5R05jNkk5dVU4SVZyYUp3dUtrSWpxeEVkczhRcEY0a3dTYUU0VVJYVVR0YVY2YnF0VGQ1dzRjbUpqZ2FPRGgrOUtIU3djMm1TanN4UTgvOUhuT2g2V2thbGVTMGVJZ2N5bUI5blZMRXFaWGt4T0ZIV1pPRk1ZUU9VMFV4akErVGhUMk1TZDZGWU1jYUM0VGliYXRONEljU0k0VGhaMzc4d0dORTRXdDd2Y1p2VDlzRjlFaE9zYm5SRCtjMVlaNkxqNjBNZU1ZWm9vL0lJdEkxWE9pS3c4MGw0bWVtMjI5c1RlWERzSU92M00xYlI5MTIxRlY4WGlrNVpRekZ4TDkyT1VxcnhHZDg0cE1HWldZcWVaQWh0bnNpN01ua21ndDA5ZnRZYmFKd3VxL0lYcjVYOVJTSUQ0YitIRUt4TW1qajBoWW8zaGZJbzdmRTRWVjl0UU9iblcrYk92Mk1HdWlzTmkyUk5pOGw5L3NsNWlaYWNudytxd1hzc1h4WjZLdytDcE54RENHYlQ0NkkzMnlzQjFtVHNRVnhRdzlVVmhkVEU4VXRuOHlKK3l5dHQ5NGpIT2pXMk93THhPRlJZMjRic1lrRjc2WHJINk50T3BYYlRSckg0YTRPT0hvcG1TaXNDcXFKL3NFVjluNjJmNU1GR1pZWFpHdmJjN2NRMnFCSm5ITmljS3NHZWlTMVdwL1dtZmU1OFNkVDg4SlM5ODBydmswVVZqY29ZTWhZZDJieEhXZEtPeUltWlgwOGVqTWZpSnhiTWY0QU5LUXJJb2IxMWJsM0dPU1NiL0dIckxnaUxZZjc4L1Y3Nm5VTkNjU0FkeTBMRGpDcW41OW1panM2ZUs2Zmg5d1FmbmoxRVFiWVRhSXc5TWF4SCttTklnLzRUYkVwNG5DbmlyaTZJdVUxYy9LYWFJd2h2QnRvakJQbnRrNWdWeDRxSi91ZzcxbjIvV2VEdXZuSndTZTJRRUNFSUFBQkNBQUFRaEFBQUlRZ0FBRUlBQUJDRUFBQWhBSWdpQUlnaUFJZ2lBSWdpQUlnaUFJZ2lBSSttNUx1V24zR3FVK0dhUFVQSTR5aTh5bGJPOVo2M3BJOEVDMmY2clUyN3hyMWNOSzFXMHp3MlFwMis5dytNNFZJUUNKMVNrMWYxK2x0cnpuZk51M3ZNUDcyNW54QWcyeTRUV2xQaDZ0TXVyam41dnhBZ1RTZFB6STVuOFJkVDByODFGZC85Mk1GeUExQmFuN21xaXFSK2FqWkgvOTJxQ0RyT0dQWFZuSzR3NGRMOGpWNzV1a3Nrb2NmUzRGM0VmYURDZmEva25tbzdaL1JOVCtsSURueUtaWlp1TVhqN25reGw2ekxaRjRnVzhRRjErZzFQcHB6aUFDc09UeWtMVHNXeGFhTGJ2Y2Zic2FkcG1Ob2JUOG9RQVJmZjFYcFQ0WW5FejBsZ1ZLdlh1d1Vxc25CN0t2WlRSSlFHdzMwZGEzaUNxNXJZaHZKbHA1RzlHMjE0azZzSE1mZENOWEQ1MjVEZUdxdCtQeFJCV3RVMDlXeUF4Zm5vSkk0amR5WXRjK1FyVGxkWE5QdTM1RTFRdUp2dFZEYTJYQ2pXN25FeTBZUUxSanNSbldpZUc2WDA2MHo0Z0VWSGxCNm5jb1dzUUoyajZ2NmQ0K3ovRGQzMHEwNGtxaVEvN0tpVzFEdE96Q3B2SGFWeE1kTlllTXluWmxBNG5RNmtlZElVUXJPTkdWSGMzMXlzN210bU83c29Eb3E0ZW92RDdDTFRuVloya3laYUMrVEhBUXl4Q1A5eHREcUl3NTB2Mld6REdzR1FoaVdjN1U0eFlxZjYyMWN6blhURzl6RVhtWGFMZHRGUGZlQmVZVUlvMjlYcmFXMWNudDFvUFlQNDdoR3UwNG9yYTl5K3JzRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCQVZkQnY2OUsvMkZxRUg2bVpSUUQwT1JrWlFReXZJSW9ONHpoSllTbkNjdnpoaGhCQXlnVXlnZzZSSzR3UnRBQmNvVXh3Z0tSRFNaMElHNHdSdGdnM0dDTU1FSTBiNUF3ejhCc2h3bjlWTklXREVDQ0JnT1F3TUVBSlBBZ1ovMXlFSDlld1NaL1ZXNzlCK2lubFBndlZucUVYbjU4YWJCQnpyaEUvdUQ2TWJiek04U1hzVy95ZDdMWDByUW5Zc0VDV1VBdDZjYi9iTUhyYzBqK3RUZzN5Wi84anFUWC9oWVltQWdwaWxJczloaGJmemJLMFU1bnV5VklPUktoMjg3OEVTZnF2TVpFbmptYzZKWmZFM1hwbUV5NHJFdVk3RXZDWEVQRGZuSkFUbGRaNFArcmxRaHRyeHhGOFFacXRPb2ppWTRkU0hUbmpRelF3YlM3ZjIrR0RUaUNiSEdyU01VdXkra3ExZjVYallZNjRXeVo0Q1Q1NyttZDJoUGQ5d2V1ci9obXIvMldVU05FKzNVbFdyR1NhTnp2aUxidnREMVN4dDZpZjczOGI4RW9XdlYxM2FpaG5ocHR3eWFpcTM1TDlOVWFvdTc3bVJCZmZtV0diZDVDS1hIcjY3c0Z4VWVpVkxlWFB5dlQ4WWdxYmY4Y1gxVnBoc1VhVXVQVjExWUV4dG4zMU5aK2xWSWo3ZE9aNk9HN3pOeFkvaVhSRjF5a2VuUW4rak9IZGJaVkFBeTFzNjd1eStDQXhHcGZwYm85N0x6MXBsM3pLelBobjM1T2RObFlvdEZYRVgyK2d1aUFIa1RYajB2R3E5MURkYkc2TjRKVC9jYmpmOW5DaWFJNktmZDhwOStlVC9UYVB4bmlhcUpOVzB3YlBkWU1lL01kTTA1dEhXMnUyN3VUajUwY3FDN0twa1A2UDhvVi9XV2RLOWtYS2lvekhxQWFHS0loNFN2anVueGU4MEN3UUE0K1NvYmNUMk03dVlyYnJuYlJDclBhdGFZV1VuSDJpVGh0NS9hajNtd1JKbmRac2VpU1FIWWFOL1U2VW1BbXNuRTVJcmZhU0JxUlc3dDgrZEZkZ2UvR2IrcDFlRzllakpMY1laTVp3MlN5QkpsTVMvN3gvdkV1ejMzeUxRMEsza05NNFE5VzcrbitVMENnOEtnTEVJQUFKR1FnaVlhN09idzJiZEtYQ2lsVWFMNW5MeGdrQVRNdjBlZVNtY0oySjdvcXg2cFlLRUVTTU8rUVBQTmVRT1pieHVrMFdHME5KWWdONkV4ZWRHQjdtbUZVYUVFMFRFZjlrTElsYURDRi9ZTHVuWVR2eElNRVU5U3J6SExWYkJsL3doRmtvSngrcjRXK0ZrQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBQUFJUWdBQUVJQUFCQ0VBQUFoQ0FBQVFnQUFFSVFBQUNFSUFBNUxzSllxMkVmcUlYZ0FBRUlCa1Y4UlZpVWVtbTBZejRlblpGelFURS8vTW5MK1N6YjVSczRBeTZLQUFCU0RhUW1SNmNaVmo1YjBhRW1vbWNRR1JrMjNpMk45bTJhbnRUaDNVSVM5RWFRZWFzWnoxYzRzdmNENlBKblA4aGtFVkxSckg5aVdUQVpITENpaHZaZW1xN1VZZjEwSEgrUk80emRaUU5SQkwwQk51dmJPRTNzYjNGOXFLMnQzU1lwVi9wWXlxQ1ZMUWVKbk1XUUx2MlpWdE15WG0zMXJIMVkxdWZGdThSdGl1RFhtdkZ5dEZuS2daa0ROc3phZUcvMUU2OVRwdXNqMHFMOC8vMHNZRUJrYnQ5c1M0bWxtVEd2OFBaQm1pVDlkdlNpdFFsUWNxcFpsUDlPblZST3VpaWRSNGxKNkNzWVh1QjdYRzJiVUhzb2pTYnZoYTY4UUFCQ0VBQVVoNFErV2hXa3lBMW02OFY3QXJsMzNnQUJDQUFBVWo1RW1YNzZqSG5mLzBMRW9qVFpFY2xBNUdMZXdIdU5tTlRTVUNzaXhjTGttbmFxZENBWkpzN3F5aVFYRTlRTEVndUU0QVZEWkx0Sk9tSktBU21aQ0JPSnlyV0tmT0I4QlFrSCtWYjJ3RUVJQUFCU0RoQTh2azdab0Q0RFpQdm4yT1hEU1RUeFF2NXkvT3lndVRUdFFrOFNNbjlEaUFBQVFoQUFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDa0ZDQTNIajduZkpQNEQxdXUrSGF1V0VEU1IrK0orTU9uMmFndGhReXBZQndUc2dJVU1tTkc4SUcwc1JIT0Rka3hOdXk5bTA3cklwR0lsMTA4SGEyUjhYR2o3bDBWK0I5NUs3Ny8rK3h2SGh0YjMxOTIvcUcyaFh0V3JXVkFaTU5aSTVGL0EzYmZtem5YelB1Ly94dllIMWs0dDBQald0b2FKakg5bmh0M1o2MjhYaThVMjFkN2FPOC9SaGJDMDU4RDE2T1pYdUI0LzUzSUgza2xvbDNUNmlyMzNzZjIwblgvK1pYMTFSR0lxT2pockZmZlgzdDl6bnNZTGFKSE9kSjN2ZG5YdS9GZGhGdlB4OG9rQnR2bmZqeit2cjZpV3dEYnJyK043TWtrTmR2NWp1ZnlGWlo4cmJZeFJ4M0g0NnprdGYzWVR1RHQvOFVHSkQ2K3JwZWJKelF1ayt0UUY1dkxXRjcyZUtHUWJVTkFwS0lVNVdvM1g1Ly9RNWUzOERXSjFDMTF0anJibmlXRjJlejlYN2dqdHRYOC9iZHZQNXIyZGU2WmF2RXlPTGF2WHZlNUgwbjhENFpqTCtRcllLMyt3YXUxcnB5L0xWUDhlSWl0Z3NldnZmTzUzajdBVjYvMURDTWlvNmRPc2M1OWYwMmJ0NGsxZkZyYkN2WUJuTzhoa0JXdjZPdnZGcG1HbmlJN1dPMkNXeDdKVTducnAzUHJDRGpvZzBiTnUzRDIvYys5dkI5dndsOHAzSFVaVmUyNW9VVXJmK3c3VGU2OWVpcHVFb2VlK2N0Tno0WjZ0NHZ0L2duODBMbWgrakxYWm02b0hjYVhjV0pmNE1YVXJPTkQySmY2LzhMTUFCRHB1ZTV3d1JuMmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcbn1cbi5zcHJpdGUtaS10cmlhbmdsZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEyOThweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogNTBweDtcbn1cbi5ibG9jay10ZXh0IGlucyB7XG4gIGJvdHRvbTogLTQ0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xufVxuXG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnptaW4ge1xuICB6LWluZGV4OiAxO1xufVxuLmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucGVyc29uLXRleHQge1xuICBwYWRkaW5nOiAxMHB4IDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyO1xufVxuLnBlcnNvbi10ZXh0IGEge1xuICBjb2xvcjogI2ZmY2MwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5wZXJzb24tdGV4dCBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/movie/movie-detail/movie-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/movie/movie-detail/movie-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<app-header></app-header>\n<body>\n<main>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <img *ngIf=\"movie.poster_path\" class=\"poster movie-poster\" [src]=\"getImageUrlForAMovie(movie.poster_path)\" alt=\"movie poster\">\n        </div>\n        <div class=\"col-md movie-description\">\n          <div class=\"movie-title\">\n            {{movie.original_title}}\n          </div>\n          <div class=\"description-content\">\n            {{movie.release_date}}\n          </div>\n          <div class=\"icon description-content\">\n            <span *ngIf=\"!movieInMongo ||!movieInMongo.rate\">\n              Waiting for review\n            </span>\n            <span *ngIf=\"averageRate\">\n              User Score: {{averageRate}}/100\n            </span>\n            <a *ngIf=\"loggedIn && movieInMongo\" (click)=\"addToFavorite()\" class=\" far fa-heart icon-item\"></a>\n           <!-- <a *ngIf=\"loggedIn\" class=\"far fa-star icon-item\"></a>\n            <a *ngIf=\"loggedIn\" class=\"fas fa-list icon-item\"></a>-->\n            <a *ngIf=\"loggedIn && movieInMongo\" (click)=\"navigateToReview()\" class=\"fas fa-pen icon-item\"></a>\n            <!--<a href=\"#\" class=\"fas fa-play icon-item\"><span class=\"icon-text\"> Play Traileir</span></a>-->\n          </div>\n          <div class=\"description-title\">\n            Overview\n          </div>\n          <div class=\"description-content\">\n            {{movie.overview}}\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  <div class=\"container\">\n        <div class=\"row\">\n          <h2>Carousel Reviews</h2>\n        </div>\n      </div>\n      <div class=\"carousel-reviews broun-block\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div id=\"carousel-reviews\" class=\"carousel slide\" data-ride=\"carousel\">\n\n              <div class=\"carousel-inner\">\n                <div class=\"item active\">\n                  <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">Hercules</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star-empty\"></span>  </span></div>\n                      <p>Never before has there been a good film portrayal of ancient Greece's favourite myth. So why would Hollywood start now? This latest attempt at bringing the son of Zeus to the big screen is brought to us by X-Men: The last Stand director Brett Ratner. If the name of the director wasn't enough to dissuade ...</p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img src=\"data:image/png;base64,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\"/>\n                      <a title=\"\" href=\"#\">Anna</a>\n                      <i>from Glasgow, Scotland</i>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 col-sm-6 hidden-xs\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">The Purge: Anarchy</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star-empty\"></span>  </span></div>\n                      <p>The 2013 movie \"The Purge\" left a bad taste in all of our mouths as nothing more than a pseudo-slasher with a hamfisted plot, poor pacing, and a desperate attempt at \"horror.\" Upon seeing the first trailer for \"The Purge: Anarchy,\" my first and most immediate thought was \"we really don't need another one of these.\"  </p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img src=\"data:image/png;base64,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\"/>\n                      <a title=\"\" href=\"#\">Ella Mentree</a>\n                      <i>United States</i>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 col-sm-6 hidden-sm hidden-xs\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">Planes: Fire & Rescue</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star\"></span>  </span></div>\n                      <p>What a funny and entertaining film! I did not know what to expect, this is the fourth film in this vehicle's universe with the two Cars movies and then the first Planes movie. I was wondering if maybe Disney pushed it a little bit. However, Planes: Fire and Rescue is an entertaining film that is a fantastic sequel in this magical franchise. </p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img src=\"data:image/png;base64,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\"/>\n                      <a title=\"\" href=\"#\">Rannynm</a>\n                      <i>Indonesia</i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">Hercules</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star-empty\"></span>  </span></div>\n                      <p>Never before has there been a good film portrayal of ancient Greece's favourite myth. So why would Hollywood start now? This latest attempt at bringing the son of Zeus to the big screen is brought to us by X-Men: The last Stand director Brett Ratner. If the name of the director wasn't enough to dissuade ...</p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img alt=\"\" src=\"http://myinstantcms.ru/images/img13.png\">\n                      <a title=\"\" href=\"#\">Anna</a>\n                      <i>from Glasgow, Scotland</i>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 col-sm-6 hidden-xs\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">The Purge: Anarchy</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star-empty\"></span>  </span></div>\n                      <p>The 2013 movie \"The Purge\" left a bad taste in all of our mouths as nothing more than a pseudo-slasher with a hamfisted plot, poor pacing, and a desperate attempt at \"horror.\" Upon seeing the first trailer for \"The Purge: Anarchy,\" my first and most immediate thought was \"we really don't need another one of these.\"  </p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img alt=\"\" src=\"http://myinstantcms.ru/images/img14.png\">\n                      <a title=\"\" href=\"#\">Ella Mentree</a>\n                      <i>United States</i>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 col-sm-6 hidden-sm hidden-xs\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">Planes: Fire & Rescue</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star\"></span>  </span></div>\n                      <p>What a funny and entertaining film! I did not know what to expect, this is the fourth film in this vehicle's universe with the two Cars movies and then the first Planes movie. I was wondering if maybe Disney pushed it a little bit. However, Planes: Fire and Rescue is an entertaining film that is a fantastic sequel in this magical franchise. </p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img alt=\"\" src=\"http://myinstantcms.ru/images/img15.png\">\n                      <a title=\"\" href=\"#\">Rannynm</a>\n                      <i>Indonesia</i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"col-md-4 col-sm-6\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">Hercules</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star-empty\"></span>  </span></div>\n                      <p>Never before has there been a good film portrayal of ancient Greece's favourite myth. So why would Hollywood start now? This latest attempt at bringing the son of Zeus to the big screen is brought to us by X-Men: The last Stand director Brett Ratner. If the name of the director wasn't enough to dissuade ...</p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img alt=\"\" src=\"http://myinstantcms.ru/images/img13.png\">\n                      <a title=\"\" href=\"#\">Anna</a>\n                      <i>from Glasgow, Scotland</i>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 col-sm-6 hidden-xs\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">The Purge: Anarchy</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star-empty\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star-empty\"></span>  </span></div>\n                      <p>The 2013 movie \"The Purge\" left a bad taste in all of our mouths as nothing more than a pseudo-slasher with a hamfisted plot, poor pacing, and a desperate attempt at \"horror.\" Upon seeing the first trailer for \"The Purge: Anarchy,\" my first and most immediate thought was \"we really don't need another one of these.\"  </p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img alt=\"\" src=\"http://myinstantcms.ru/images/img14.png\">\n                      <a title=\"\" href=\"#\">Ella Mentree</a>\n                      <i>United States</i>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 col-sm-6 hidden-sm hidden-xs\">\n                    <div class=\"block-text rel zmin\">\n                      <a title=\"\" href=\"#\">Planes: Fire & Rescue</a>\n                      <div class=\"mark\">My rating: <span class=\"rating-input\"><span data-value=\"0\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"1\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"2\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"3\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"4\" class=\"glyphicon glyphicon-star\"></span><span data-value=\"5\" class=\"glyphicon glyphicon-star\"></span>  </span></div>\n                      <p>What a funny and entertaining film! I did not know what to expect, this is the fourth film in this vehicle's universe with the two Cars movies and then the first Planes movie. I was wondering if maybe Disney pushed it a little bit. However, Planes: Fire and Rescue is an entertaining film that is a fantastic sequel in this magical franchise. </p>\n                      <ins class=\"ab zmin sprite sprite-i-triangle block\"></ins>\n                    </div>\n                    <div class=\"person-text rel\">\n                      <img alt=\"\" src=\"http://myinstantcms.ru/images/img15.png\">\n                      <a title=\"\" href=\"#\">Rannynm</a>\n                      <i>Indonesia</i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <a class=\"left carousel-control\" href=\"#carousel-reviews\" role=\"button\" data-slide=\"prev\">\n                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n              </a>\n              <a class=\"right carousel-control\" href=\"#carousel-reviews\" role=\"button\" data-slide=\"next\">\n                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n</main>\n</body>\n"

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
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");





var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(movieService, activatedRoute, sharedService, router) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.loggedIn = true;
        this.movie = '';
        this.trails = '';
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.sharedService.user !== null) {
            this.loggedIn = true;
        }
        this.activatedRoute.params.subscribe(function (params) {
            _this.dbId = params.dbId;
            _this.movieService.findMovieByDbId(_this.dbId).subscribe(function (movie) {
                _this.movieInMongo = movie;
                if (_this.movieInMongo === null) {
                    _this.addToDatabase(movie);
                }
                else if (_this.movieInMongo.totalScore && _this.movieInMongo.totalRates) {
                    _this.averageRate = _this.movieInMongo.totalScore / _this.movieInMongo.totalRates;
                }
            });
            _this.movieService.findMovieDetailsById(_this.dbId).subscribe(function (movie) {
                _this.movie = movie;
                if (_this.movieInMongo === null || _this.movieInMongo === undefined) {
                    _this.addToDatabase(_this.movie);
                }
            });
        });
    };
    MovieDetailComponent.prototype.getImageUrlForAMovie = function (url) {
        if (url) {
            return 'https://image.tmdb.org/t/p/original' + url;
        }
    };
    MovieDetailComponent.prototype.addToFavorite = function () {
        // add this.movieInMongo as favorite;
    };
    MovieDetailComponent.prototype.addToDatabase = function (movie) {
        var _this = this;
        var newMovie = {
            title: this.movie.original_title,
            rate: undefined,
            db_id: this.dbId,
            reviews: [],
            release_date: this.movie.release_date,
            overview: this.movie.overview,
            poster_path: this.movie.poster_path
        };
        this.movieService.createMovie(newMovie).subscribe(function (data) {
            _this.movieInMongo = data;
        });
    };
    MovieDetailComponent.prototype.navigateToReview = function () {
        this.router.navigate(['/movie/:dbID/review-new']);
    };
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/views/movie/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/views/movie/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBdUU7RUFDdkUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7O0VBRWhCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTs7RUFFVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tb3ZpZS9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcblxuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgd2lkdGg6MTAwJTtcblxuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/movie/movie-list/movie-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/movie/movie-list/movie-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>Search Result</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let movie of movies\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"getMoviePoster()\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{movie.title}}</span></h5>\n          </div>\n          <div class=\"card-footer\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n"

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
    MovieListComponent.prototype.getMoviePoster = function () {
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

/***/ "./src/app/views/movie/movie-search/movie-search.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/movie/movie-search/movie-search.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.navbar-profile {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  margin-top: 30px;\n  padding-top: 20px;\n;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtc2VhcmNoL21vdmllLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW92aWUvbW92aWUtc2VhcmNoL21vdmllLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItcHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZWRpYS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG5oMSB7XG4gIHBhZGRpbmctdG9wOiAxODBweDtcbiAgbWFyZ2luLWxlZnQ6IDIyJTtcbiAgd2lkdGg6IDU2JTtcbn1cblxuaDIge1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG47XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/movie/movie-search/movie-search.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/movie/movie-search/movie-search.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>Search Results</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let movie of movies\">\n        <div class=\"card media-item\">\n          <img  class=\"card-img-top\" [src]=\"getImageUrlForAMovie(movie.poster_path)\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{movie.title}}</h5>\n          </div>\n          <div class=\"card-footer\">\n            <p>{{movie.release_date}}</p>\n            <a routerLink=\"/movie/{{movie.id}}\" class=\"card-link\">More info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n<footer>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/movie/movie-search/movie-search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/movie/movie-search/movie-search.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSearchComponent", function() { return MovieSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/movie.client.service */ "./src/app/service/movie.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieSearchComponent = /** @class */ (function () {
    function MovieSearchComponent(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
    }
    MovieSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.keyword = params.keyword;
            _this.movieService.searchMovies(_this.keyword).subscribe(function (data) {
                _this.movies = data.results;
            });
        });
    };
    MovieSearchComponent.prototype.getImageUrlForAMovie = function (url) {
        return 'https://image.tmdb.org/t/p/original' + url;
    };
    MovieSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-search',
            template: __webpack_require__(/*! ./movie-search.component.html */ "./src/app/views/movie/movie-search/movie-search.component.html"),
            styles: [__webpack_require__(/*! ./movie-search.component.css */ "./src/app/views/movie/movie-search/movie-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_movie_client_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());



/***/ }),

/***/ "./src/app/views/review/review-list/review-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/review/review-list/review-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmV2aWV3L3Jldmlldy1saXN0L3Jldmlldy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBdUU7RUFDdkUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7O0VBRWhCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTs7RUFFVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXZpZXcvcmV2aWV3LWxpc3QvcmV2aWV3LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcblxuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgd2lkdGg6MTAwJTtcblxuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/review/review-list/review-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/review/review-list/review-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>All Reviews</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let review of reviews\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"getMovieImg()\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{review.title}}</span></h5>\n            <h5 class=\"card-title\"><button (click) = \"likeReview()\"class=\"btn btn-block btn-primary\">{{like}}</button></h5>\n          </div>\n          <div class=\"card-footer\">\n            <p>This is written by <a routerLink=\"{{reviewerLink}}\" class=\"card-link\">{{getReviewer()}}</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n"

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
        this.reviewerLink = '';
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        this.like = 'Like';
    };
    ReviewListComponent.prototype.likeReview = function () {
        if (this.like === 'Like') {
            this.like = 'Unlike';
        }
        else if (this.like === 'Unlike') {
            this.like = 'Like';
        }
    };
    ReviewListComponent.prototype.getMovieImg = function () {
    };
    ReviewListComponent.prototype.getReviewer = function () {
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

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmV2aWV3L3Jldmlldy1uZXcvcmV2aWV3LW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQXVFO0VBQ3ZFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7O0VBRVYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmV2aWV3L3Jldmlldy1uZXcvcmV2aWV3LW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDoxMDAlO1xuXG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/review/review-new/review-new.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/review/review-new/review-new.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h1>Write your review</h1>\n    <form (ngSubmit)=\"submit()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"title\" ngModel required #title=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!title.valid && title.touched\">\n      Please Enter Review Title!\n      </span>\n      <div class=\"form-group\">\n        <textarea type=\"text\" class=\"form-control\" rows=\"5\" placeholder=\"description\" ngModel required #description=\"ngModel\"></textarea>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n        Please Enter your description!\n      </span>\n      <div class=\"form-group\">\n        <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Submit</button>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/movie/{{movieDBId}}\" class=\"btn btn-block btn-success\">Cancel</a>\n      </div>\n\n    </form>\n\n  </div>\n</main>\n</body>\n</html>\n"

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
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/review.client.service */ "./src/app/service/review.client.service.ts");






var ReviewNewComponent = /** @class */ (function () {
    function ReviewNewComponent(sharedService, activatedRoute, reviewService, router) {
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.reviewService = reviewService;
        this.router = router;
        this.userId = this.sharedService.user._id;
    }
    ReviewNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.movieDBId = params.dbId;
        });
    };
    ReviewNewComponent.prototype.submit = function () {
        var _this = this;
        this.title = this.reviewForm.value.title;
        this.description = this.reviewForm.value.description;
        var review = {
            title: this.title,
            description: this.description,
            reviewer: this.userId,
            likes: 0,
        };
        this.reviewService.createReview(this.movieDBId, review).subscribe(function (data) {
            _this.router.navigate(['/movie/' + _this.movieDBId]);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ReviewNewComponent.prototype, "reviewForm", void 0);
    ReviewNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-new',
            template: __webpack_require__(/*! ./review-new.component.html */ "./src/app/views/review/review-new/review-new.component.html"),
            styles: [__webpack_require__(/*! ./review-new.component.css */ "./src/app/views/review/review-new/review-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_shared_client_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_review_client_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9mb2xsb3dlci1saXN0L2ZvbGxvd2VyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUF1RTtFQUN2RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVOztFQUVWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvZm9sbG93ZXItbGlzdC9mb2xsb3dlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIHdpZHRoOjEwMCU7XG5cbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/user/follower-list/follower-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/user/follower-list/follower-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>All Your Followers</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let user of users\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"user.img\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{user.username}}</span></h5>\n            <h5 class=\"card-title\"><button (click) = \"followUser()\"class=\"btn btn-block btn-danger\">{{follow}}</button></h5>\n          </div>\n          <div class=\"card-footer\">\n            <p><a routerLink=\"/user/follower-list\" class=\"card-link\">Followers</a></p>\n            <p><a routerLink=\"/user/following-list\" class=\"card-link\">Following</a></p>\n            <p><a routerLink=\"/user/review-list\" class=\"card-link\">Review History</a></p>\n            <p><a routerLink=\"/user/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n"

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
    FollowerListComponent.prototype.followUser = function () {
        if (this.follow === 'Follow') {
            this.follow = 'Unfollow';
        }
        else if (this.follow === 'Unfollow') {
            this.follow = 'Follow';
        }
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

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.container {\n  margin-top: 70px;\n\n  padding-top: 100px;\n  padding-bottom: 100px;\n  width:100%;\n\n  text-align:center;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9mb2xsb3dpbmctbGlzdC9mb2xsb3dpbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQXVFO0VBQ3ZFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7O0VBRVYsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9mb2xsb3dpbmctbGlzdC9mb2xsb3dpbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB3aWR0aDoxMDAlO1xuXG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/following-list/following-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/user/following-list/following-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <h3>All Users You're Following</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let user of users\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"user.img\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{user.username}}</span></h5>\n            <h5 class=\"card-title\"><button (click) = \"followUser()\"class=\"btn btn-block btn-danger\">{{follow}}</button></h5>\n          </div>\n          <div class=\"card-footer\">\n            <p><a routerLink=\"/user/follower-list\" class=\"card-link\">Followers</a></p>\n            <p><a routerLink=\"/user/following-list\" class=\"card-link\">Following</a></p>\n            <p><a routerLink=\"/user/review-list\" class=\"card-link\">Review History</a></p>\n            <p><a routerLink=\"/user/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n"

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
    FollowingListComponent.prototype.followUser = function () {
        if (this.follow === 'Follow') {
            this.follow = 'Unfollow';
        }
        else if (this.follow === 'Unfollow') {
            this.follow = 'Follow';
        }
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password).subscribe(function (user) {
            if (user === null || user.message === 'User not found or Wrong password!') {
                _this.errorFlag = true;
                _this.errorMsg = 'User does not exist or Wrong Password';
            }
            else {
                _this.router.navigate(['/profile/']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
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

module.exports = "body {\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: 100% 100%;\n}\n\n.user-info {\n  margin-top: 20px;\n  width: 80%;\n  margin-left: 10%;\n}\n\n.user-main {\n  margin-top: 40px;\n  /*z-index: 200;*/\n}\n\n.edit-form {\n  margin-top: 40px;\n}\n\n.card-title {\n  text-align: center;\n}\n\n.user-follow {\n  text-align: right;\n  position: relative;\n  left: 20%;\n}\n\n.update {\n  color: white !important;\n}\n\nh1 {\n  margin-bottom: 30px;\n  color: darkmagenta;\n}\n\nh3 {\n  margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9vdGhlci11c2VyL290aGVyLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUF1RTtFQUN2RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvb3RoZXItdXNlci9vdGhlci11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi51c2VyLW1haW4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICAvKnotaW5kZXg6IDIwMDsqL1xufVxuXG4uZWRpdC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLWZvbGxvdyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIwJTtcbn1cblxuLnVwZGF0ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiBkYXJrbWFnZW50YTtcbn1cblxuaDMge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/other-user/other-user.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/user/other-user/other-user.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"container\">\n      <div class=\"row colrow user-info\">\n        <div class=\"col-sm-4 d-none d-sm-block user-main\">\n          <div class=\"media d-done d-sm-block\">\n            <div class=\"card\">\n              <img  class=\"card-img-top\" [src]=\"getUserImg()\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{user.username}}</span></h5>\n                <h5 class=\"card-title\"><button (click) = \"followUser()\"class=\"btn btn-block btn-primary\">{{follow}}</button></h5>\n              </div>\n              <div class=\"card-footer\">\n                <p><a routerLink=\"/user/follower-list\" class=\"card-link\">Followers</a></p>\n                <p><a routerLink=\"/user/following-list\" class=\"card-link\">Following</a></p>\n                <p><a routerLink=\"/user/review-list\" class=\"card-link\">Review History</a></p>\n                <p><a routerLink=\"/user/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 right-form edit-form\">\n          <h1>About {{user.username}}</h1>\n          <h3>{{user.username}} has <span class=\"badge badge-secondary\">{{user.follower.length}}</span> followers</h3>\n          <h3>{{user.username}} has written <span class=\"badge badge-secondary\">{{user.reviews.length}}</span> reviews</h3>\n          <h3>There are <span class=\"badge badge-secondary\">{{user.favorite.length}}</span> movies in his favorite list</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n\n"

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
        this.errorMsg = '';
    }
    OtherUserComponent.prototype.ngOnInit = function () {
        this.user = new Object();
        this.user.username = 'test';
        this.user.password = 'password';
        this.user.follower = [];
        this.user.following = [];
        this.user.reviews = [];
        this.user.favorite = [];
        this.user.img = '../../../../assets/images/default-heads.jpg';
        this.follow = 'Follow';
    };
    OtherUserComponent.prototype.getUserImg = function () {
        if (this.user.img === '') {
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
    OtherUserComponent.prototype.followUser = function () {
        if (this.follow === 'Follow') {
            this.follow = 'Unfollow';
        }
        else if (this.follow === 'Unfollow') {
            this.follow = 'Follow';
        }
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

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"container\">\n      <div class=\"row colrow user-info\">\n        <div class=\"col-sm-4 d-none d-sm-block user-main\">\n          <div class=\"media d-done d-sm-block\">\n            <div class=\"card\">\n              <img  class=\"card-img-top\" [src]=\"getUserImg()\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{user.username}}</span></h5>\n              </div>\n              <div class=\"card-footer\">\n                <p *ngIf=\"isAdmin\"><a routerLink=\"/user/user-list\" class=\"card-link\">Manage User</a></p>\n                <p><a routerLink=\"/user/follower-list\" class=\"card-link\">Followers</a>\n                  <!--<span class=\"user-follow\">{{user.follower.length}}</span>-->\n                </p>\n                <p><a routerLink=\"/user/following-list\" class=\"card-link\">Following</a>\n                  <!--<span class=\"user-follow\">{{user.following.length}}</span>-->\n                </p>\n                <p><a routerLink=\"/user/review-list\" class=\"card-link\">Review History</a></p>\n                <p><a routerLink=\"/user/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 right-form edit-form\">\n          <h2>Edit Your Profile</h2>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" id=\"username\" placeholder=\"{{user.username}}\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" id=\"password\" placeholder=\"{{user.password}}\"/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"image-URL\">URL</label>\n            <input type=\"text\" class=\"form-control\" id=\"image-URL\" [(ngModel)]=\"user.img\" placeholder=\"{{user.img}}\">\n          </div>\n          <div class=\"form-group large-input-bottom-margin\">\n            <label for=\"FormControlSelect\"><small><b>Select account type</b></small></label>\n            <select class = \"form-control\" (change)=\"filterChanged($event.target.value)\" id=\"FormControlSelect\">\n              <option *ngFor=\"let type of filterTypes\" [value]=\"type.value\">{{type.display}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <a (click)=\"updateUser()\" class=\"update btn btn-block btn-primary\">Update Your Info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n</body>\n</html>\n\n"

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
/* harmony import */ var _service_user_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.client.service */ "./src/app/service/user.client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/shared.client.service */ "./src/app/service/shared.client.service.ts");
/* harmony import */ var _models_user_client_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.client.model */ "./src/app/models/user.client.model.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, router, sharedService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_client_model__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '', '', '');
        this.errorMsg = '';
        this.filterTypes = [
            { value: 'Admin', display: 'Admin' },
            { value: 'Unpaid', display: 'User' },
            { value: 'Paid', display: 'Vip' }
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_client_model__WEBPACK_IMPORTED_MODULE_5__["User"](user._id, user.username, user.password, user.img, user.type);
                if (_this.user.type === 'Admin') {
                    _this.isAdmin = true;
                }
                else {
                    _this.isAdmin = false;
                }
            });
        });
    };
    ProfileComponent.prototype.getUserImg = function () {
        if (this.user.img === '') {
            return '../../../../assets/images/default-heads.jpg';
        }
        else {
            return this.user.img;
        }
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.user.type = this.selectedValue;
        this.userService.updateUser(this.user.uid, this.user).subscribe(function (user) {
            _this.user = new _models_user_client_model__WEBPACK_IMPORTED_MODULE_5__["User"](user._id, user.username, user.password, user.img, user.type);
            _this.router.navigate(['/profile/']);
        });
        alert('Update successfully!');
    };
    ProfileComponent.prototype.filterChanged = function (selectedValue) {
        this.selectedValue = selectedValue;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_client_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_shared_client_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
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

module.exports = "<html>\n<body>\n<app-header></app-header>\n<main>\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n    </div>\n    <h1>Register for a community membership</h1>\n    <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" ngModel required #username=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please Enter Username!\n    </span>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" ngModel required #password=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please Enter Password!\n      </span>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"v_password\" class=\"form-control\" placeholder=\"verify password\" ngModel required #v_password=\"ngModel\"/>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!v_password.valid && v_password.touched\">\n        Please verify your password!\n      </span>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"img\" placeholder=\"image for your profile photo\" ngModel required #img=\"ngModel\">\n      </div>\n      <div class=\"form-group large-input-bottom-margin\">\n        <label for=\"FormControlSelect\"><small><b>Select account type</b></small></label>\n        <select class = \"form-control\" (change)=\"filterChanged($event.target.value)\" id=\"FormControlSelect\">\n          <option *ngFor=\"let type of filterTypes\" [value]=\"type.value\">{{type.display}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Register</button>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/login\" class=\"btn btn-block btn-success\">Cancel</a>\n      </div>\n    </form>\n  </div>\n</main>\n</body>\n</html>\n\n"

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
        this.selectedValue = 'Unpaid';
    };
    RegisterComponent.prototype.filterChanged = function (selectedValue) {
        this.selectedValue = selectedValue;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        this.img = this.registerForm.value.img;
        if (this.v_password === this.password) {
            this.user = new Object();
            this.user.username = this.username;
            this.user.password = this.password;
            this.user.img = this.img;
            this.user.type = this.selectedValue;
            this.userService.register(this.user).subscribe(function (data) {
                if (data.message === 'User is already exist!') {
                    _this.errorFlag = true;
                    _this.errorMsg = 'User is already exist! Please use a new username!';
                }
                else {
                    // this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
                    _this.router.navigate(['/profile/']);
                }
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Password needs to be verified!';
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

module.exports = "body {\n  font-family: 'Source Sans Pro', Arial, sans-serif;\n}\n\n.navbar-profile {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.media-item {\n  margin-top: 20px;\n}\n\n.home-background {\n  background-image: url('cinema.jpg');\n  background-repeat: no-repeat;\n  height: 550px;\n  position: relative;\n  background-size: 100% 100%;\n  text-align:center;\n}\n\nh1 {\n  padding-top: 180px;\n  margin-left: 22%;\n  width: 56%;\n}\n\nh2 {\n  margin-left: 22%;\n  width: 56%;\n}\n\n.container {\n  margin-top: 30px;\n}\n\n/*.card-img-top {*/\n\n/*height: 30%;*/\n\n/*}*/\n\n/*li.movie-list-group-item {*/\n\n/*float: left;*/\n\n/*margin-left: 20px;*/\n\n/*width: 20%;*/\n\n/*height: 600px;*/\n\n/*}*/\n\n/*.card-title {*/\n\n/*height: 60px;*/\n\n/*overflow: hidden;*/\n\n/*}*/\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQTZEO0VBQzdELDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0Esa0JBQWtCOztBQUNsQixlQUFlOztBQUNmLElBQUk7O0FBQ0osNkJBQTZCOztBQUM3QixlQUFlOztBQUNmLHFCQUFxQjs7QUFDckIsY0FBYzs7QUFDZCxpQkFBaUI7O0FBQ2pCLElBQUk7O0FBRUosZ0JBQWdCOztBQUNoQixnQkFBZ0I7O0FBQ2hCLG9CQUFvQjs7QUFDcEIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItcHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZWRpYS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhvbWUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2luZW1hLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICB3aWR0aDogNTYlO1xufVxuXG5oMiB7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIHdpZHRoOiA1NiU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5cbi8qLmNhcmQtaW1nLXRvcCB7Ki9cbi8qaGVpZ2h0OiAzMCU7Ki9cbi8qfSovXG4vKmxpLm1vdmllLWxpc3QtZ3JvdXAtaXRlbSB7Ki9cbi8qZmxvYXQ6IGxlZnQ7Ki9cbi8qbWFyZ2luLWxlZnQ6IDIwcHg7Ki9cbi8qd2lkdGg6IDIwJTsqL1xuLypoZWlnaHQ6IDYwMHB4OyovXG4vKn0qL1xuXG4vKi5jYXJkLXRpdGxlIHsqL1xuLypoZWlnaHQ6IDYwcHg7Ki9cbi8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuLyp9Ki9cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/user/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <div class=\"home-background\">\n    <h1>Welcome to User Management!</h1>\n    <h2>Be careful!</h2>\n  </div>\n  <div class=\"container\">\n    <h3>All Users</h3>\n    <div class=\"card-columns\">\n      <div class=\"media movie-list-group-item d-done d-sm-block\" *ngFor=\"let user of users\">\n        <div class=\"card\">\n          <img  class=\"card-img-top\" [src]=\"user.img\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><span class=\"badge badge-secondary\">{{user.username}}</span></h5>\n            <h5 class=\"card-title\"><button (click) = \"deleteUser()\"class=\"btn btn-block btn-danger\">Delete</button></h5>\n          </div>\n          <div class=\"card-footer\">\n            <p><a routerLink=\"/user/follower-list\" class=\"card-link\">Followers</a></p>\n            <p><a routerLink=\"/user/following-list\" class=\"card-link\">Following</a></p>\n            <p><a routerLink=\"/user/review-list\" class=\"card-link\">Review History</a></p>\n            <p><a routerLink=\"/user/favorite-movie\" class=\"card-link\">Favorite Movies</a></p>\n          </div>\n      </div>\n    </div>\n  </div>\n  </div>\n</main>\n"

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
    UserListComponent.prototype.deleteUser = function () {
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
    baseUrl: 'http://localhost:4200'
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

module.exports = __webpack_require__(/*! /home/hzy/MyWork/CS5610-final/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
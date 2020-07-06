(this["webpackJsonpnew-tierney-test"] = this["webpackJsonpnew-tierney-test"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Work */ "./src/pages/Work.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/About */ "./src/pages/About.js");
/* harmony import */ var _pages_Latest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Latest */ "./src/pages/Latest.js");
/* harmony import */ var _pages_Careers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Careers */ "./src/pages/Careers.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Contact */ "./src/pages/Contact.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/App.js";









function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    exact: true,
    path: "/",
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    exact: true,
    path: "/work",
    component: _pages_Work__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    exact: true,
    path: "/about",
    component: _pages_About__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    exact: true,
    path: "/latest",
    component: _pages_Latest__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    exact: true,
    path: "/careers",
    component: _pages_Careers__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    exact: true,
    path: "/contact",
    component: _pages_Contact__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Homepage-Elements/FeaturedArticle/HP-FeaturedArticle.js":
/*!********************************************************************************!*\
  !*** ./src/components/Homepage-Elements/FeaturedArticle/HP-FeaturedArticle.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeaturedArticle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/components/Homepage-Elements/FeaturedArticle/HP-FeaturedArticle.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  cardContainer: {
    boxShadow: "none"
  },
  cardImg: {
    width: "100%",
    height: "400px",
    left: "155px",
    position: "relative",
    zIndex: 1,
    margin: "0 auto",
    borderRadius: "7px",
    objectFit: "cover",
    border: "none",
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      width: "800px",
      left: "100px"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      width: "700px !important",
      left: "100px !important"
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      width: "700px",
      left: "0px"
    }
  },
  cardArticle: {
    width: "750px",
    position: "relative",
    top: "-60px",
    left: "-180px",
    backgroundColor: "#F6F5F3",
    padding: "20px",
    zIndex: 2,
    margin: "0 auto",
    textAlign: "left",
    borderRadius: "10px",
    border: "none",
    boxShadow: "none",
    fontFamily: 'Montserrat, sans-serif',
    ['@media (min-width: 1130px) and (max-width: 1190px)']: {
      width: "600px"
    },
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      width: "600px"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      width: "600px",
      left: "-100px"
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      width: "510px",
      left: "0px"
    }
  },
  subtitle: {
    color: "#DB2416",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: 30,
    paddingTop: "5px"
  },
  actionDiv: {// textAlign: "center", 
  },
  seeAllButton: {
    position: "relative",
    width: "175px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    borderRadius: "50px",
    color: "#004268",
    borderColor: "#004268",
    zIndex: 3,
    top: "-105px",
    '&:hover': {
      backgroundColor: "#004268",
      color: "white" // border: "none"

    }
  }
});
function FeaturedArticle() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.cardImg,
    image: "https://hellotierney.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-09-at-1.36.01-PM.png",
    title: "featured article title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardArticle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }, "Culture"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, "Tierney Diversity Initiatives"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, "At Tierney, we stand in solidarity with our Black community \u2013 our people, our clients, our partners, and our neighbors. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 153
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 158
    }
  }), "Our intentional commitment to recognize and reject the persistence of racism in our world has given us the foundation to have an open and meaningful dialogue during what has been an incredibly difficult time for our employees, for the markets we do business in, and for our country. But language alone cannot resolve the failures we have made as a society against fighting systemic racism. We must do better. \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/latest",
    style: {
      color: "#004268",
      textDecoration: "underline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 26
    }
  }, "Read More")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.actionDiv,
    className: "d-flex justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.seeAllButton,
    variant: "outline",
    href: "/latest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, "See All")));
}

/***/ }),

/***/ "./src/components/Homepage-Elements/Footer/HpFooter.js":
/*!*************************************************************!*\
  !*** ./src/components/Homepage-Elements/Footer/HpFooter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/YouTube */ "./node_modules/@material-ui/icons/YouTube.js");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIos */ "./node_modules/@material-ui/icons/ArrowForwardIos.js");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_mdi_slash_forward__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-mdi/slash-forward */ "./node_modules/@iconify/icons-mdi/slash-forward.js");
/* harmony import */ var _iconify_icons_mdi_slash_forward__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_slash_forward__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/components/Homepage-Elements/Footer/HpFooter.js";








 // import { InputAdornment } from "@material-ui/core";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    '& label.Mui-focused': {
      color: "#004268"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#004268"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#004268",
        backgroundColor: "#E0DDD5",
        width: "200px"
      },
      '&:hover fieldset': {
        borderColor: "#004268"
      },
      '&.Mui-focused fieldset': {
        borderColor: "#004268",
        backgroundColor: "#E0DDD5"
      }
    }
  },
  top: {
    backgroundColor: "#DFE0E1",
    height: "100px",
    // marginTop: "200px",
    // textAlign: "center",
    padding: "20px",
    ['@media (min-width: 1130px) and (max-width: 1190px)']: {
      height: "150px"
    },
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      height: "150px"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      height: "175px"
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      height: "200px"
    }
  },
  topText: {
    display: "inline-block",
    margin: "0 auto",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: "25px",
    paddingTop: "10px"
  },
  break: {
    display: "none",
    ['@media (min-width: 1130px) and (max-width: 1190px)']: {
      display: "inline"
    },
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      display: "inline"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      display: "inline"
    }
  },
  topButtons: {
    display: "inline-block",
    marginTop: "10px",
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      display: "initial",
      margin: "0 auto"
    }
  },
  btnSpan: {
    fontFamily: 'Montserrat, sans-serif',
    // fontWeight: 700,
    fontSize: 30,
    paddingRight: "10px",
    margin: "0 auto"
  },
  leftButton: {
    marginRight: "10px",
    marginLeft: "120px",
    borderRadius: "50px",
    color: "#004268",
    // borderColor: "#004268",
    width: "175px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: "#004268",
      color: "white",
      border: "none"
    },
    ['@media (min-width: 1130px) and (max-width: 1190px)']: {
      marginLeft: "0px"
    },
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      marginLeft: "0px"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      marginLeft: "0px"
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      marginLeft: "0px"
    }
  },
  rightButton: {
    borderRadius: "50px",
    color: "#004268",
    borderColor: "#004268",
    marginLeft: "12px",
    width: "175px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: "#004268",
      color: "white",
      border: "none"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      display: "initial",
      margin: "0 auto"
    }
  },
  inputField: {
    backgroundColor: "#E0DDD5",
    width: "260px",
    height: "40px",
    borderRadius: "50px",
    border: "none",
    textAlign: "center",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: 15,
    outline: "none !important",
    outlineOffset: "none !important" // "&:focus": {
    //     backgroundColor: "white"
    // }

  },
  // submitEmailBtn: {
  //     width: "200px",
  //     height: "40px",
  //     borderRadius: "50px",
  //     color: "#004268",
  //     borderColor: "#004268",
  //     backgroundColor: "white",
  //     fontFamily: 'Montserrat, sans-serif',
  //     fontWeight: 700,
  //     fontSize: 15,
  //     marginTop: "10px",
  //     outline: "none !important",
  //     outlineOffset: "none !important",
  //     '&:hover': {
  //         backgroundColor: "#004268",
  //         color: "white",
  //         border: "none"
  //     },
  // },
  addresses: {
    fontFamily: 'Montserrat, sans-serif !important',
    fontSize: 17
  },
  inputContainer: {
    position: "relative"
  },
  inputBtn: {
    position: "absolute",
    right: "8px",
    top: "8px",
    bottom: "8px",
    zIndex: 9,
    border: "none",
    backgroundColor: "#E0DDD5",
    borderRadius: "50%"
  }
}));
function FooterComponent(props) {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.top,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.topText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 29
    }
  }, "Lorem ipsum Contact us or Careers?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.topButtons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.leftButton,
    variant: "light",
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 33
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    icon: _iconify_icons_mdi_slash_forward__WEBPACK_IMPORTED_MODULE_10___default.a,
    height: "20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 33
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    icon: _iconify_icons_mdi_slash_forward__WEBPACK_IMPORTED_MODULE_10___default.a,
    height: "20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 74
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.rightButton,
    variant: "outline-info",
    href: "/careers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 33
    }
  }, "Careers")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.bottom,
    style: {
      backgroundColor: "#F1F1F1",
      height: "400px",
      marginLeft: "auto",
      marginRight: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    style: {
      paddingTop: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 col-md-12 col-sm-12",
    style: {
      marginBottom: "50px",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    style: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 29
    }
  }, "Sign up & stay Connected."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.inputContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: classes.inputField,
    "aria-label": "Email",
    onChange: props.handleInputChange,
    value: props.userEmail,
    name: "userEmail",
    placeholder: "Enter Email Here",
    id: "userEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.handleEmailSubmit,
    className: classes.inputBtn,
    type: "submit",
    id: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 45
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: "150px",
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.addresses,
    style: {
      color: "#004153",
      textDecoration: "underline",
      fontWeight: 700
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 33
    }
  }, "Philadelphia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.addresses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 33
    }
  }, "1700 Market St. 29th Floor ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 93
    }
  }), " Philadelphia, PA 19103 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 123
    }
  }), "(215) 790-4100")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: "45px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.addresses,
    style: {
      color: "#004153",
      textDecoration: "underline",
      fontWeight: 700
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 33
    }
  }, "New York City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.addresses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 33
    }
  }, "100 West 33rd St. 5th Floor ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 94
    }
  }), " New York, NY 10001 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 120
    }
  }), "(646) 736-1690")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: "45px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.addresses,
    style: {
      color: "#004153",
      textDecoration: "underline",
      fontWeight: 700
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 33
    }
  }, "Harrisburg"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.addresses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }, "212 Locust St. Suite 400 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 91
    }
  }), "Harrisburg, PA 17101 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 118
    }
  }), " (717) 231-5330"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    style: {
      marginTop: "100px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    style: {
      color: "#004153",
      fontWeight: 700
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 29
    }
  }, "Follow Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline-block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      color: "#004268",
      fontSize: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 36
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline-block",
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      color: "#004268",
      fontSize: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 36
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline-block",
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#004268",
      fontSize: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 36
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline-block",
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: "#004268",
      fontSize: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 36
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline-block",
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      color: "#004268",
      fontSize: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 36
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline-block",
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 33
    }
  }, "an IPG Agency"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-2",
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline-block",
      marginRight: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 93
    }
  }), "Copyright 2020 Tierney | Privacy & Terms "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://hellotierney.com/wp-content/uploads/2018/04/Layer-1.gif",
    width: "100",
    className: "d-inline-block align-top",
    alt: "Tierney logo",
    style: {
      display: "inline-block",
      marginLeft: "10px",
      marginTop: "-5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 33
    }
  })))))));
}

/***/ }),

/***/ "./src/components/Homepage-Elements/MissionStatement/HP-Mission.js":
/*!*************************************************************************!*\
  !*** ./src/components/Homepage-Elements/MissionStatement/HP-Mission.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mission; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/components/Homepage-Elements/MissionStatement/HP-Mission.js";






 //Pull statement from API

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  missionContainer: {
    marginTop: "200px",
    marginBottom: "200px",
    textAlign: "center",
    justifyContent: "center",
    width: "50%",
    margin: "0 auto"
  },
  cardContainer: {
    boxShadow: "none"
  },
  missionTitle: {
    textAlign: "center !important",
    margin: "0 auto",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    fontSize: 35
  },
  actionButton: {
    textAlign: "center !important",
    margin: "0 auto",
    width: "175px",
    borderRadius: "50px",
    color: "#004268",
    borderColor: "#004268",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    '&:hover': {
      backgroundColor: "#004268",
      color: "white" // border: "none"

    }
  }
});
function Mission() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    className: classes.missionContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.missionTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, "Lorem Ipsum mission."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.actionButton,
    variant: "outline-info",
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "Learn More")))));
}

/***/ }),

/***/ "./src/components/Homepage-Elements/WorkSection/HP-WorkSection.js":
/*!************************************************************************!*\
  !*** ./src/components/Homepage-Elements/WorkSection/HP-WorkSection.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/components/Homepage-Elements/WorkSection/HP-WorkSection.js";







const useStyles = theme => ({
  cardContainer: {
    width: "284px",
    height: "auto",
    margin: "10px",
    border: "none",
    borderRadius: "7px",
    display: "inline-block",
    position: "relative",
    backgroundColor: "#004268",
    '&:hover :nth-child(2)': {
      opacity: 1,
      backgroundColor: "#004268",
      transition: "all .1s ease-in"
    }
  },
  cardImg: {
    width: "284px",
    height: "284px",
    objectFit: "cover",
    borderRadius: "7px"
  },
  textOverlay: {
    position: "absolute",
    textAlign: "left",
    color: "white",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    fontSize: "30px",
    top: '0px',
    left: '0px',
    opacity: 0,
    width: "284px",
    height: "284px",
    paddingTop: "20px",
    paddingLeft: "20px"
  }
});

class HpWorkSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.cardContainer,
      onClick: this.props.onMouseOver,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.cardImg,
      image: this.props.client_image,
      alt: this.props.client,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.textOverlay,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, this.props.client));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(useStyles)(HpWorkSection));

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavbarComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIos */ "./node_modules/@material-ui/icons/ArrowForwardIos.js");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/components/Navbar.js";













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  list: {
    marginTop: 40,
    width: 800,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    paddingLeft: 40,
    fontSize: 60,
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      width: 500
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      width: 400,
      fontSize: 60
    },
    ['@media (min-width: 200px) and (max-width: 576px)']: {
      width: 200,
      fontSize: 40
    }
  },
  listItem: {
    '&:hover': {
      paddingLeft: "70px",
      backgroundColor: "white",
      color: "#DB2416",
      // color: "#DB2416"
      showArrow: {
        visibility: "visible",
        color: "#DB2416"
      }
    }
  },
  fullList: {
    width: '100%'
  },
  menu: {
    fontFamily: 'Montserrat, sans-serif !important',
    border: "none",
    fontWeight: 700,
    fontSize: 20,
    textTransform: "none",
    '&:hover': {
      backgroundColor: "white",
      color: "#DB2416"
    }
  }
});
function NavbarComp() {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const classes = useStyles();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state,
      [anchor]: open
    });
  };

  const list = anchor => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom'
    }),
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.listItem,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    style: {
      textDecoration: "none",
      color: "inherit"
    },
    to: {
      pathname: "/"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Home ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.showArrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.listItem,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    style: {
      textDecoration: "none",
      color: "inherit"
    },
    to: {
      pathname: "/work"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "Work ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.showArrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.listItem,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    style: {
      textDecoration: "none",
      color: "inherit"
    },
    to: {
      pathname: "/about"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "About ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.showArrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 30
    }
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.listItem,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    style: {
      textDecoration: "none",
      color: "inherit"
    },
    to: {
      pathname: "/latest"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, "Latest ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.showArrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 31
    }
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.listItem,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    style: {
      textDecoration: "none",
      color: "inherit"
    },
    to: {
      pathname: "/careers"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, "Careers ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.showArrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 32
    }
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.listItem,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    style: {
      textDecoration: "none",
      color: "inherit"
    },
    to: {
      pathname: "/contact"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, "Contact ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.showArrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 32
    }
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      float: "right",
      marginTop: "20%",
      marginRight: "10%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://hellotierney.com/wp-content/uploads/2018/04/Layer-1.gif",
    width: "150" // height="100"
    ,
    className: "d-inline-block align-top",
    alt: "Tierney logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }))));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    style: {
      marginLeft: "-25px",
      marginTop: 30,
      display: "inline-block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Brand, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://hellotierney.com/wp-content/uploads/2018/04/Layer-1.gif",
    width: "150" // height="100"
    ,
    className: "d-inline-block align-top",
    alt: "Tierney logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    activeKey: "/",
    style: {
      marginTop: 60,
      display: "inline-block",
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, ['right'].map(anchor => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: anchor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.menu,
    onClick: toggleDrawer(anchor, true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, "Menu", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      color: "#DB2416",
      marginLeft: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 99
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    anchor: anchor,
    open: state[anchor],
    onClose: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, list(anchor))))));
}

/***/ }),

/***/ "./src/components/Workpage-Elements/Articles/WP-Articles.js":
/*!******************************************************************!*\
  !*** ./src/components/Workpage-Elements/Articles/WP-Articles.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeaturedArticle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/components/Workpage-Elements/Articles/WP-Articles.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  cardContainer: {
    boxShadow: "none"
  },
  cardImg: {
    width: "100%",
    height: "400px",
    left: "155px",
    position: "relative",
    zIndex: 1,
    margin: "0 auto",
    borderRadius: "7px",
    objectFit: "cover",
    border: "none",
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      width: "800px",
      left: "100px"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      width: "700px !important",
      left: "100px !important"
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      width: "700px",
      left: "0px"
    }
  },
  cardImgLeft: {
    width: "100%",
    height: "400px",
    left: "-155px",
    position: "relative",
    zIndex: 1,
    margin: "0 auto",
    borderRadius: "7px",
    objectFit: "cover",
    border: "none",
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      width: "800px",
      left: "100px"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      width: "700px !important",
      left: "100px !important"
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      width: "700px",
      left: "0px"
    }
  },
  cardArticle: {
    width: "750px",
    position: "relative",
    top: "-60px",
    left: "-180px",
    backgroundColor: "#F6F5F3",
    padding: "20px",
    zIndex: 2,
    margin: "0 auto",
    textAlign: "left",
    borderRadius: "10px",
    border: "none",
    boxShadow: "none",
    fontFamily: 'Montserrat, sans-serif',
    ['@media (min-width: 1130px) and (max-width: 1190px)']: {
      width: "600px"
    },
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      width: "600px"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      width: "600px",
      left: "-100px"
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      width: "510px",
      left: "0px"
    }
  },
  cardArticleRight: {
    width: "750px",
    position: "relative",
    top: "-60px",
    left: "180px",
    backgroundColor: "#F6F5F3",
    padding: "20px",
    zIndex: 2,
    margin: "0 auto",
    textAlign: "left",
    borderRadius: "10px",
    border: "none",
    boxShadow: "none",
    fontFamily: 'Montserrat, sans-serif',
    ['@media (min-width: 1130px) and (max-width: 1190px)']: {
      width: "600px"
    },
    ['@media (min-width: 992px) and (max-width: 1130px)']: {
      width: "600px"
    },
    ['@media (min-width: 768px) and (max-width: 992px)']: {
      width: "600px",
      left: "100px"
    },
    ['@media (min-width: 576px) and (max-width: 768px)']: {
      width: "510px",
      left: "0px"
    }
  },
  subtitle: {
    color: "#DB2416",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: 30,
    paddingTop: "5px"
  },
  actionDiv: {// textAlign: "center", 
  },
  seeAllButton: {
    position: "relative",
    width: "175px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    borderRadius: "50px",
    color: "#004268",
    borderColor: "#004268",
    zIndex: 3,
    top: "-105px",
    '&:hover': {
      backgroundColor: "#004268",
      color: "white" // border: "none"

    }
  }
});
function FeaturedArticle() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.cardImg,
    image: "https://hellotierney.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-09-at-1.36.01-PM.png",
    title: "featured article title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardArticle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, "Brand Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 29
    }
  }, "Short Messaging Statement About the Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \x03sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/latest",
    style: {
      color: "#004268",
      textDecoration: "underline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 26
    }
  }, "Read More")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.actionDiv,
    className: "d-flex justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.seeAllButton,
    variant: "outline",
    href: "/latest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, "See All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.cardImgLeft,
    image: "https://hellotierney.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-09-at-1.36.01-PM.png",
    title: "featured article title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardArticleRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 29
    }
  }, "Brand Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 29
    }
  }, "Short Messaging Statement About the Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \x03sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/latest",
    style: {
      color: "#004268",
      textDecoration: "underline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 26
    }
  }, "Read More")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.actionDiv,
    className: "d-flex justify-content-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.seeAllButton,
    variant: "outline",
    href: "/latest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, "See All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.cardImg,
    image: "https://hellotierney.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-09-at-1.36.01-PM.png",
    title: "featured article title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardArticle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 29
    }
  }, "Brand Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 29
    }
  }, "Short Messaging Statement About the Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \x03sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/latest",
    style: {
      color: "#004268",
      textDecoration: "underline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 26
    }
  }, "Read More")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.actionDiv,
    className: "d-flex justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.seeAllButton,
    variant: "outline",
    href: "/latest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }, "See All")));
}

/***/ }),

/***/ "./src/components/Workpage-Elements/HeaderStatement/WP-Head-Statement.js":
/*!*******************************************************************************!*\
  !*** ./src/components/Workpage-Elements/HeaderStatement/WP-Head-Statement.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mission; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/components/Workpage-Elements/HeaderStatement/WP-Head-Statement.js";






 //Pull statement from API

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  missionContainer: {
    marginTop: "100px",
    marginBottom: "100px",
    textAlign: "center",
    justifyContent: "center",
    width: "50%",
    margin: "0 auto"
  },
  cardContainer: {
    boxShadow: "none"
  },
  missionTitle: {
    textAlign: "center !important",
    margin: "0 auto",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    fontSize: 35
  },
  actionButton: {
    textAlign: "center !important",
    margin: "0 auto",
    width: "175px",
    borderRadius: "50px",
    color: "#004268",
    borderColor: "#004268",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    '&:hover': {
      backgroundColor: "#004268",
      color: "white" // border: "none"

    }
  }
});
function Mission() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    className: classes.missionContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.missionTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, "Lorem Ipsum intro about our work."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.actionButton,
    variant: "outline-info",
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "Learn More")))));
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 17
  }
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Homepage-Elements/Footer/HpFooter.js */ "./src/components/Homepage-Elements/Footer/HpFooter.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/pages/About.js";




class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "About Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/pages/Careers.js":
/*!******************************!*\
  !*** ./src/pages/Careers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Homepage-Elements/Footer/HpFooter.js */ "./src/components/Homepage-Elements/Footer/HpFooter.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/pages/Careers.js";




class Careers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "Careers Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Careers);

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Homepage-Elements/Footer/HpFooter.js */ "./src/components/Homepage-Elements/Footer/HpFooter.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/pages/Contact.js";




class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "Contact Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Homepage_Elements_WorkSection_HP_WorkSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Homepage-Elements/WorkSection/HP-WorkSection.js */ "./src/components/Homepage-Elements/WorkSection/HP-WorkSection.js");
/* harmony import */ var _components_Homepage_Elements_MissionStatement_HP_Mission_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Homepage-Elements/MissionStatement/HP-Mission.js */ "./src/components/Homepage-Elements/MissionStatement/HP-Mission.js");
/* harmony import */ var _components_Homepage_Elements_FeaturedArticle_HP_FeaturedArticle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Homepage-Elements/FeaturedArticle/HP-FeaturedArticle.js */ "./src/components/Homepage-Elements/FeaturedArticle/HP-FeaturedArticle.js");
/* harmony import */ var _components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Homepage-Elements/Footer/HpFooter.js */ "./src/components/Homepage-Elements/Footer/HpFooter.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/pages/Home.js";












const useStyles = theme => ({
  workButton: {
    alignContent: "right",
    // marginRight: "-1300px", 
    marginTop: "20px",
    borderRadius: "50px",
    color: "#004268",
    borderColor: "#004268",
    width: "175px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    marginRight: "1%",
    '&:hover': {
      backgroundColor: "#004268",
      color: "white" // border: "none"

    }
  }
});

class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.onMouseOver = () => this.setState({
      shadow: 3
    });

    this.handleInputChange = event => {
      event.preventDefault();
      const {
        name,
        value
      } = event.target;
      this.setState({
        [name]: value
      });
      console.log({
        [name]: value
      });
    };

    this.handleEmailSubmit = event => {
      event.preventDefault();
      const {
        userEmail
      } = this.state;
      this.setState({
        userEmail: userEmail,
        show: true
      });
      console.log("User Email: " + this.state.userEmail); //Post to MailChimp
    };

    this.state = {
      data: [],
      loaded: false,
      userEmail: "",
      show: false
    };
    this.loadIcon = this.loadIcon.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.testfunction = this.testfunction.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: [{
        id: 1,
        image: "https://hellotierney.com/wp-content/uploads/2020/07/section-navigation.jpg",
        title: "Xfinity Hangouts"
      }, {
        id: 2,
        image: "https://hellotierney.com/wp-content/uploads/2019/05/Champion_Hero_Image_1904x1120.jpg",
        title: "Champion"
      }, {
        id: 3,
        image: "https://hellotierney.com/wp-content/uploads/2019/05/IBX_Hero_Image_1904x1120.jpg",
        title: "Independence Blue Cross"
      }, {
        id: 4,
        image: "https://hellotierney.com/wp-content/uploads/2017/05/grid-image.jpg",
        title: "Fine Wine and Good Spirits"
      }],
      loaded: true
    });
  } // componentDidMount() {
  //     // axios.get("https://hellotierney.com/wp-json/acf/v3/work")
  //     //     .then((response) => response.data)
  //     //     .then(dataSet => {
  //     //         this.setState({
  //     //             data: dataSet,
  //     //             loaded: true
  //     //         })
  //     //     })
  //     {this.loadIcon()}
  // }


  loadIcon() {
    if (this.state.loaded) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "    ", this.state.data.map(item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_WorkSection_HP_WorkSection_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          client: item.title,
          client_image: item.image,
          id: item.id,
          key: item.id,
          onMouseOver: this.onMouseOver,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }
        });
      }));
    }
  }

  testfunction() {
    console.log("Working!");
  } //     if (this.state.loaded) {
  //         return (
  //             <>
  //                 {/* <div className="HpWorkSection" style={{ display: "flex", justifyContent: "center" }}> */}
  //                 {this.state.data.map(item => {
  //                     if (item.acf.featured_post[0] === "featured") {
  //                         return (
  //                             <HpWorkSection
  //                                 // client={item.acf.case_study_hero_client}
  //                                 // client_image={item.acf.case_study_hero_image}
  //                                 // id={item.index}
  //                                 // key={item.index}
  //                                 client={title}
  //                                 client_image={image}
  //                                 id={item.id}
  //                                 key={item.id}
  //                             />
  //                         )
  //                     }
  //                 })}
  //                 {/* </div> */}
  //             </>
  //         )
  //     }
  //     else {
  //         return (
  //             <>
  //                 <img src="https://i.imgur.com/5DrQIHe.gif" />
  //                 {/* Using this GIF as a placeholder */}
  //                 {/* Image Source: https://imgur.com/gallery/kKc4E */}
  //                 {/* All Credit to 'iactuallychangedmyusername' on August 27, 2014 */}
  //             </>
  //         )
  //     }
  // }


  showModalFunction() {
    if (this.state.show) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        show: this.state.show,
        onClick: () => this.closeModalFunction(),
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
        id: "contained-modal-title-vcenter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://hellotierney.com/wp-content/uploads/2018/04/Layer-1.gif",
        width: "100",
        className: "d-inline-block align-top",
        alt: "Tierney logo",
        style: {
          display: "inline-block",
          marginLeft: "10px",
          marginTop: "-5px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 29
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
        style: {
          textAlign: "center"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }
      }, "Welcome to Tierney! "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }
      }, "You will recieve a confirmation email at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontWeight: 700
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 70
        }
      }, this.state.userEmail), " shortly.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          borderRadius: "50px",
          backgroundColor: "#004268",
          color: "white",
          borderColor: "#004268",
          width: "175px",
          paddingTop: "10px",
          paddingBottom: "10px",
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          '&:hover': {
            // backgroundColor: "#004268",
            // color: "white",
            border: "none"
          }
        },
        onClick: () => this.closeModalFunction(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 25
        }
      }, "Close")));
    }
  }

  closeModalFunction() {
    this.setState({
      show: false,
      userEmail: ""
    });
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: "10%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        flex: 1,
        maxWidth: "800px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginLeft: "37%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: 40,
        paddingTop: "40%",
        letterSpacing: "1px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 33
      }
    }, "Hello, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 43
      }
    }), " we're Tierney."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        width: "70%",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 33
      }
    }, " Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        flex: 1,
        maxWidth: "800px",
        marginRight: "5%",
        marginLeft: "-5px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 25
      }
    }, this.loadIcon()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 d-flex justify-content-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }, this.state.loaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: classes.workButton,
      variant: "outline-info",
      href: "/work",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 50
      }
    }, "See All") : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_MissionStatement_HP_Mission_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_FeaturedArticle_HP_FeaturedArticle_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userEmail: this.state.userEmail,
      handleInputChange: this.handleInputChange,
      handleEmailSubmit: this.handleEmailSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 17
      }
    }), this.showModalFunction());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(useStyles)(Home));

/***/ }),

/***/ "./src/pages/Latest.js":
/*!*****************************!*\
  !*** ./src/pages/Latest.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Homepage-Elements/Footer/HpFooter.js */ "./src/components/Homepage-Elements/Footer/HpFooter.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/pages/Latest.js";




class Latest extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "Latest Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Latest);

/***/ }),

/***/ "./src/pages/Work.js":
/*!***************************!*\
  !*** ./src/pages/Work.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Homepage-Elements/Footer/HpFooter.js */ "./src/components/Homepage-Elements/Footer/HpFooter.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Workpage_Elements_HeaderStatement_WP_Head_Statement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Workpage-Elements/HeaderStatement/WP-Head-Statement */ "./src/components/Workpage-Elements/HeaderStatement/WP-Head-Statement.js");
/* harmony import */ var _components_Workpage_Elements_Articles_WP_Articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Workpage-Elements/Articles/WP-Articles */ "./src/components/Workpage-Elements/Articles/WP-Articles.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/pages/Work.js";





 // import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';



const useStyles = theme => ({
  headerDiv: {
    backgroundColor: "#004268",
    height: "200px",
    color: "white",
    alignItems: "center"
  }
});

class Work extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      workData: []
    };
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://hellotierney.com/wp-json/acf/v3/work").then(response => response.data).then(dataSet => {
      console.log(dataSet);
    });
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-fluid",
      className: classes.headerDiv,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: "30px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 45
      }
    }, "Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 45
      }
    }, "Our Work")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Workpage_Elements_HeaderStatement_WP_Head_Statement__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Workpage_Elements_Articles_WP_Articles__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-fluid",
      style: {
        backgroundColor: "#F6F5F3"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        justifyContent: "center",
        display: "flex",
        height: "75px",
        alignItems: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/latest",
      style: {
        color: "#004268",
        textDecoration: "underline"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 33
      }
    }, "Read More"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Workpage_Elements_HeaderStatement_WP_Head_Statement__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage_Elements_Footer_HpFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(useStyles)(Work));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/wp-content/themes/new-tierney-test/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map
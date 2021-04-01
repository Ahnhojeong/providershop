/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("$(function () {\n  //header event\n  var $header = $('.headChange');\n  $(window).scroll(function () {\n    if ($(this).scrollTop() > $(window).height()) {\n      $header.addClass('sticky');\n    } else {\n      $header.removeClass('sticky');\n    }\n  }); //menu\n\n  $('.burger').on('click', function (e) {\n    e.preventDefault();\n    $('.menuwrap, .burger').toggleClass('active');\n  }); //index page - item scroll event\n\n  var first = 0,\n      last = 0,\n      loop,\n      state;\n  var winHei, scrPos, imgPos;\n  $(window).on('scroll', function () {\n    first = $(this).scrollTop(); //스크롤 up down 상태 파악\n\n    if (first > last) {\n      //console.log('down');\n      state = 'down';\n    } else {\n      //console.log('up');\n      state = 'up';\n    }\n\n    last = first;\n    clearTimeout(loop);\n    loop = setTimeout(scrFun(state));\n  }); //스크롤 up down 할일\n\n  function scrFun(updown) {\n    if (updown == 'down') {\n      winHei = $(window).height();\n      scrPos = $(this).scrollTop();\n      $('.stamp, .sushi-img, .ramen, .journal-text, .sushi').each(function (i) {\n        imgPos = $('.stamp, .sushi-img, .ramen, .journal-text, .sushi').eq(i).offset().top;\n\n        if (imgPos - winHei < scrPos) {\n          $('.stamp, .sushi-img, .ramen, .journal-text, .sushi').eq(i).addClass('scroll');\n        }\n      });\n    } else {\n      $('.stamp').removeClass('scroll');\n      $('.sushi-img').removeClass('scroll');\n      $('.ramen').removeClass('scroll');\n      $('.journal-text').removeClass('scroll');\n      $('.sushi').removeClass('scroll');\n    }\n  } //drag event - slick\n\n\n  $('.gallery-wrap-container').slick({\n    dots: false,\n    infinite: false,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 3,\n        infinite: true,\n        dots: true\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 2\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  });\n  $('.w-gallery div').slick({\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: false,\n    variableWidth: true\n  });\n  $('.insta-slide').slick({\n    dots: false,\n    infinite: false,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 3,\n        infinite: true,\n        dots: true\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 2\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack://providershop-master/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;
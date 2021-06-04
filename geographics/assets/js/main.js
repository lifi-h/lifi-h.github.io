$(document).ready(function () {
    console.log("Hello world");
  
    (function ($) {
      $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data("toggleclicked", 0);
        this.click(function () {
          var data = $(this).data();
          var tc = data.toggleclicked;
          $.proxy(funcs[tc], this)();
          data.toggleclicked = (tc + 1) % 2;
        });
        return this;
      };
    })(jQuery);
  
    $(".thumbnail").clickToggle(
      function () {
        $(this).addClass("enlarge");
      },
      function () {
        $(this).removeClass("enlarge");
      }
    );
  });


  $(document).ready(function () {
    console.log("Hello world");
  
    $(".row").click(function () {
      $(this).find(".content").slideToggle("fast");
    });
  });
  
  $(document).ready(function () {
    console.log("Hello world");
  
    $(".row").click(function () {
      $(this).find(".content-book").slideToggle("fast");
    });
  });
  
  $(document).ready(function () {
    console.log("Hello world");
  
    $(".row").click(function () {
      $(this).find(".link1").slideToggle("fast");
    });
  });
  
$(".menu-toggle").click(function(e){1<e.which||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),$(this).parent().find(".menu").hasClass("expanded-mobile-menu")?$(this).removeClass("expanded-menu-toggle").parent().removeClass("nav-expanded").find(".menu").removeClass("expanded-mobile-menu"):$(this).addClass("expanded-menu-toggle").parent().addClass("nav-expanded").find(".menu").addClass("expanded-mobile-menu"))});
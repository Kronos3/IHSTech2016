$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 200) {
                    $("#back").css('background-color', '#585858');
                    $("#nav > ul > li > a").css('color', '#FFF');
                }
                else {
                    $("#back").css('background-color', 'rgba(255,255,255,0)');
                    $("#nav > ul > li > a").css('color', '#000');
                    $("#nav > ul > li.active > a").css('color', '#FFF');
                }
            });
        });


$(document).ready(function(){

    $('#jstree1').jstree({
        'core' : {
            'check_callback' : true
        },
        'plugins' : [ 'types', 'dnd' ],
        'types' : {
            'default' : {
                'icon' : 'fa fa-folder'
            },
            'html' : {
                'icon' : 'fa fa-file-code-o'
            },
            'svg' : {
                'icon' : 'fa fa-file-picture-o'
            },
            'css' : {
                'icon' : 'fa fa-file-code-o'
            },
            'img' : {
                'icon' : 'fa fa-file-image-o'
            },
            'js' : {
                'icon' : 'fa fa-file-text-o'
            }

        }
    }).bind("select_node.jstree", function (e, data) {
        var href = data.node.a_attr.href;
        document.location.href = href;
    });


        // making img to background
    $(".image-box").each(function () {
        "use strict";
        var $this = $(this);
        var thissrc = $(this).attr("src");
        $this.wrap(
            '<div class="imgtobg-o" style="background-image:url(' + thissrc + ')"></div>'
        );
        $this.hide();
    });

        // pool slider
        $(".owl-carousel").owlCarousel({
            items:1,
            navigation : true, // Show next and prev buttons
            autoplay:true,
            autoplayTimeout:9000,
            singleItem:true,
            loop: true,
            animateOut: 'zoomOutRight',
            nav: true,
            dots: false,
            navText: ['<span class="fa fa-chevron-left fa-1x"></span>','<span class="fa fa-chevron-right fa-1x"></span>'],
            responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
            }
        });

    

    

    
});



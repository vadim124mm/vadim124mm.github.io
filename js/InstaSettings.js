
var feed = new Instafeed({
        get: "user",
        userId: "5950189448",
        accessToken: "5950189448.1677ed0.ae2f442e38304197b5029c7399621a54",
        template: '<div><a href="{{link}}"><img src="{{image}}" /></a></div>',
        resolution: 'standard_resolution',
        after: function () {
            $('#instafeed').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: true, 
                responsive: [
                  {
                    breakpoint: 875,
                    settings: {
                      centerMode: true,
                       slidesToShow: 3, 
                       slidesToScroll: 3,
                    }
                  },
        
                  {
                    breakpoint: 760,
                    settings: {
                      dots: false, 
                      centerMode: true,
                      slidesToShow: 2, 
                      slidesToScroll: 2,
                    }
                    },
                    {
                      breakpoint: 640,
                      settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                      }
                  
                   
                    } 
                  ]
            });
        }
    });
    feed.run();

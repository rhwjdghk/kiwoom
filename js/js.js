$(function(){

    // header 마우스 올렸을 때 배경 내려옴
    $(".header_nav,.header_bg").on({

        mouseover:function(){
            $(".gnb .m").css({color:'#000', fontWeight:'600'}),
            $(".header_nav").stop(true).animate({flexBasis:'70%'}),
            $(".language").find("a").css({color:'#000'}),
            $(".btn").css({color:'#000'})

            $(".header_bg").stop(true).slideDown(100);
            $(" .header_sub").stop(true).show();

        },
        mouseout:function(){
            $(".gnb .m").css({color:'#fff',fontWeight:'400'}),
            $(".header_nav").stop(true).animate({flexBasis:'58%'}),
            $(".language").find("a").css({color:'#fff'}),
            $(".btn").css({color:'#fff'})

            $(".header_bg").stop(true).slideUp();
            $(" .header_sub").stop(true).hide();
        }
    });

    $(".gnb .m").on({
        mouseover:function(){
            $(this).find("span").css({width:'100%'})
        },
        mouseout:function(){
            $(this).find("span").css({width:'0'})
        }
    })

    //.language 클릭했을 때
    $(".language").on('click', function(){

        $(this).toggleClass("eng");

        if($(this).hasClass("eng")){
            $(this).find("a").filter(":nth-child(2)").css({opacity:"1"})
        }
        else {
            $(this).find("a").filter(":nth-child(2)").css({opacity:"0"})
        }
    
    });

    // .ham 클릭했을 때
    let mql = window.matchMedia("screen and (max-width:500px")

    $(".ham").on('click', function(){

        $(this).toggleClass("inviham")

        if (mql.matches) {
            if($(this).hasClass("inviham")) {
            $(this).find("span").css({backgroundColor:'#000'}),
            $("#mobilnav").stop(true).animate({right:'-1px'}),
            $(".rotate").filter(":first-child").css({transform:'rotate(45deg) translateY(5px)'}),
            $(".rotate").filter(":last-child").css({transform:'rotate(135deg) translateY(5px)'}),
            $(".none").css({display:'none'})

        }else {
            $(this).find("span").css({backgroundColor:'#fff'}),
            $("#mobilnav").stop(true).animate({right:'-550px'}),
            $(".rotate").filter(":first-child").css({transform:'rotate(0) translateY(0)'}),
            $(".rotate").filter(":last-child").css({transform:'rotate(0) translateY(0)'}),
            $(".none").css({display:'block'})
        }
        }else {
            if($(this).hasClass("inviham")) {
                $(this).find("span").css({backgroundColor:'#000'}),
                $("#mobilnav").stop(true).animate({right:'-1px'}),
                $(".rotate").filter(":first-child").css({transform:'rotate(45deg) translateY(6px)'}),
                $(".rotate").filter(":last-child").css({transform:'rotate(135deg) translateY(6px)'}),
                $(".none").css({display:'none'})
    
            }else {
                $(this).find("span").css({backgroundColor:'#fff'}),
                $("#mobilnav").stop(true).animate({right:'-550px'}),
                $(".rotate").filter(":first-child").css({transform:'rotate(0) translateY(0)'}),
                $(".rotate").filter(":last-child").css({transform:'rotate(0) translateY(0)'}),
                $(".none").css({display:'block'})
            }
        }
    });

    // .mnav_main>li 클리 했을 때
    let mnavlia = $(".mnav_main>li").filter(":first-child")
    let mnavlib = $(".mnav_main>li").filter(":nth-child(2)")
    let mnavlic = $(".mnav_main>li").filter(":nth-child(3)")
    let mnavlid = $(".mnav_main>li").filter(":nth-child(4)")
    let mnavlie = $(".mnav_main>li").filter(":nth-child(5)")
    let mnavlif = $(".mnav_main>li").filter(":last-child")

    mnavlia.on('click', function(){
        mnavlia.find(".mnav_sub").slideDown();
        mnavlib.find(".mnav_sub").slideUp();
        mnavlic.find(".mnav_sub").slideUp();
        mnavlid.find(".mnav_sub").slideUp();
        mnavlie.find(".mnav_sub").slideUp();
        mnavlif.find(".mnav_sub").slideUp();

        $(this).addClass("mnavative");

        if($(this).hasClass("mnavative")) {
            mnavlib.removeClass("mnavative");
            mnavlic.removeClass("mnavative");
            mnavlid.removeClass("mnavative");
            mnavlie.removeClass("mnavative");
            mnavlif.removeClass("mnavative");

            $(this).find("span").css({transform:'translateY(-3px) rotate(135deg)'}),
            mnavlib.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlic.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlid.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlie.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlif.find("span").css({transform:'translateY(1px) rotate(-45deg)'})
        }
    })
    mnavlib.on('click', function(){
        mnavlib.find(".mnav_sub").slideDown();
        mnavlia.find(".mnav_sub").slideUp();
        mnavlic.find(".mnav_sub").slideUp();
        mnavlid.find(".mnav_sub").slideUp();
        mnavlie.find(".mnav_sub").slideUp();
        mnavlif.find(".mnav_sub").slideUp();

        $(this).addClass("mnavative");

        if($(this).hasClass("mnavative")) {
            mnavlia.removeClass("mnavative");
            mnavlic.removeClass("mnavative");
            mnavlid.removeClass("mnavative");
            mnavlie.removeClass("mnavative");
            mnavlif.removeClass("mnavative");

            $(this).find("span").css({transform:'translateY(-3px) rotate(135deg)'}),
            mnavlia.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlic.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlid.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlie.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlif.find("span").css({transform:'translateY(1px) rotate(-45deg)'})
        }
    })
    mnavlic.on('click', function(){
        mnavlic.find(".mnav_sub").slideDown();
        mnavlia.find(".mnav_sub").slideUp();
        mnavlib.find(".mnav_sub").slideUp();
        mnavlid.find(".mnav_sub").slideUp();
        mnavlie.find(".mnav_sub").slideUp();
        mnavlif.find(".mnav_sub").slideUp();

        $(this).addClass("mnavative");

        if($(this).hasClass("mnavative")) {
            mnavlia.removeClass("mnavative");
            mnavlib.removeClass("mnavative");
            mnavlid.removeClass("mnavative");
            mnavlie.removeClass("mnavative");
            mnavlif.removeClass("mnavative");

            $(this).find("span").css({transform:'translateY(-3px) rotate(135deg)'}),
            mnavlia.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlib.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlid.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlie.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlif.find("span").css({transform:'translateY(1px) rotate(-45deg)'})
        }
    })
    mnavlid.on('click', function(){
        mnavlid.find(".mnav_sub").slideDown();
        mnavlia.find(".mnav_sub").slideUp();
        mnavlib.find(".mnav_sub").slideUp();
        mnavlic.find(".mnav_sub").slideUp();
        mnavlie.find(".mnav_sub").slideUp();
        mnavlif.find(".mnav_sub").slideUp();

        $(this).addClass("mnavative");

        if($(this).hasClass("mnavative")) {
            mnavlia.removeClass("mnavative");
            mnavlib.removeClass("mnavative");
            mnavlic.removeClass("mnavative");
            mnavlie.removeClass("mnavative");
            mnavlif.removeClass("mnavative");

            $(this).find("span").css({transform:'translateY(-3px) rotate(135deg)'}),
            mnavlia.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlib.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlic.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlie.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlif.find("span").css({transform:'translateY(1px) rotate(-45deg)'})
        }
    })
    mnavlie.on('click', function(){
        mnavlie.find(".mnav_sub").slideDown();
        mnavlia.find(".mnav_sub").slideUp();
        mnavlib.find(".mnav_sub").slideUp();
        mnavlic.find(".mnav_sub").slideUp();
        mnavlid.find(".mnav_sub").slideUp();
        mnavlif.find(".mnav_sub").slideUp();

        $(this).addClass("mnavative");

        if($(this).hasClass("mnavative")) {
            mnavlia.removeClass("mnavative");
            mnavlib.removeClass("mnavative");
            mnavlic.removeClass("mnavative");
            mnavlid.removeClass("mnavative");
            mnavlif.removeClass("mnavative");

            $(this).find("span").css({transform:'translateY(-3px) rotate(135deg)'}),
            mnavlia.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlib.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlic.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlid.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlif.find("span").css({transform:'translateY(1px) rotate(-45deg)'})
        }
    })
    mnavlif.on('click', function(){
        mnavlif.find(".mnav_sub").slideDown();
        mnavlia.find(".mnav_sub").slideUp();
        mnavlib.find(".mnav_sub").slideUp();
        mnavlic.find(".mnav_sub").slideUp();
        mnavlid.find(".mnav_sub").slideUp();
        mnavlie.find(".mnav_sub").slideUp();

        $(this).addClass("mnavative");

        if($(this).hasClass("mnavative")) {
            mnavlia.removeClass("mnavative");
            mnavlib.removeClass("mnavative");
            mnavlic.removeClass("mnavative");
            mnavlid.removeClass("mnavative");
            mnavlie.removeClass("mnavative");

            $(this).find("span").css({transform:'translateY(-3px) rotate(135deg)'}),
            mnavlia.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlib.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlic.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlid.find("span").css({transform:'translateY(1px) rotate(-45deg)'}),
            mnavlie.find("span").css({transform:'translateY(1px) rotate(-45deg)'})
        }
    })

    // 유툽 영상 .p_vm 마우스 오버 했을 때
    $("#player_text").find(".p_vm").on({
        mouseover:function(){
            $(".p_vm").find("div").stop(true).animate({
                width:'100%',
                left:'0',
                marginLeft:'0',
                opacity:'1'
            },200),
            $(this).css({color:'#fff'})
        },
        mouseout:function(){
            $(".p_vm").find("div").stop(true).animate({
                width:'2%',
                left:'50%',
                marginLeft:'-1%',
                opacity:'0'
            },300),
            $(this).css({color:'#6C0012'})
        }
    })

    // 유툽 영상 .movs 클릭시 메인 화면 바뀜
    $('#player_screen .top_img').on('click', function(e) { 
        e.preventDefault(); 
        let $item_top = $("#player_screen").find("iframe").attr("src"); 
        $('#player_screen .top_img').fadeOut("slow");
        $('#player_screen iframe').show().attr("src",$item_top); 
    });

    $('#list .movs .thumb').on('click', function(e) { 
        e.preventDefault(); 
        let $itemx = $(this).parents(".movs") 
        let $itemx_tit = $itemx.find(".list_dt").html(); 
        let $itemx_desc = $itemx.find(".desc").html(); 
        let $itemx_url = $itemx.find(".url iframe").attr("src"); 
        let $sc_top = $(document).scrollTop();
        let $player_top = $('#player').offset().top 

        $('#player_screen iframe').attr("src",$itemx_url); 
        $('#player_screen iframe').show(); 
        $('#player_text .player_dt').html( $itemx_tit );
        $('#player_text .player_dd').html( $itemx_desc );

        if ( $player_top < $sc_top) { 
            $('html, body').animate({ scrollTop: $player_top }, "slow");
            }
        else { return false }
    });

    // 소식 .vm 마우스 오버 했을 때
    $(".vm").find("a").on({
        mouseover:function(){
            $(".vm_btnbg").stop(true).animate({
                width:'100%',
                height:'100%',
                left:'0',
                top:'0',
                marginLeft:'0',
                marginTop:'0',
                opacity:'1'
            },200),
            $(".vm_btn div").find("span").css({
                borderTop:'2px solid #fff',
                borderRight:'2px solid #fff'
            },200)
        },
        mouseout:function(){
            $(".vm_btnbg").stop(true).animate({
                width:'2%',
                height:'2%',
                left:'50%',
                top:'50%',
                marginLeft:'-1%',
                marginTop:'-1%',
                opacity:'0'
            },300),
            $(".vm_btn div").find("span").css({
                borderTop:'2px solid #6C0012',
                borderRight:'2px solid #6C0012'
            },300)
        }
    })

    // 소식 swiper
    let Nswiper = new Swiper(".mediaSwiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

    // 샵 a 마우스 오버 했을 때 
    $("#shop").find("a").on({
        mouseover:function(){
            $(".s_btnbg").stop(true).animate({
                width:'100%',
                left:'0',
                marginLeft:'0',
                opacity:'1'
            },200),
            $(this).css({color:' #6C0012'}),
            $(this).find("span").css({
                borderTop:'2px solid #6C0012',
                borderRight:'2px solid #6C0012'
            })
        },
        mouseout:function(){
            $(".s_btnbg").stop(true).animate({
                width:'2%',
                left:'50%',
                marginLeft:'-1%',
                opacity:'0'
            },300),
            $(this).css({color:'#fff'}),
            $(this).find("span").css({
                borderTop:'2px solid #fff',
                borderRight:'2px solid #fff'
            })
        }
    })

    // 고척 .title 클릭했을 때
    let $carti = $(".dom_way .car").find(".title");
    let $subti = $(".dom_way .subway").find(".title");
    let $busti = $(".dom_way .bus").find(".title");
    let $cartt = $(".dom_way .car").find(".text");
    let $subtt = $(".dom_way .subway").find(".text");
    let $bustt = $(".dom_way .bus").find(".text");

    // console.log($carti);
    // console.log($subti);
    // console.log($busti);
    // console.log($cartt);
    // console.log($subtt);
    // console.log($bustt);

    $carti.on('click', function(){
        $(".dom_map").find("img").attr('src', './img/dom_car.png')
        $cartt.slideDown();
        $subtt.slideUp();
        $bustt.slideUp();

        $(this).addClass("ative");

        if($(this).hasClass("ative")) {
            $subti.removeClass("ative");
            $busti.removeClass("ative");

            $(this).find("span").css({transform:'rotate(135deg)', marginTop:'-5px'})
            $subti.find("span").css({transform:'rotate(-45deg)', marginTop:'8px'})
            $busti.find("span").css({transform:'rotate(-45deg)', marginTop:'8px'})
        }

    });
    $subti.on('click', function(){
        $(".dom_map").find("img").attr('src', './img/dom_sub.png')
        $subtt.slideDown();
        $cartt.slideUp();
        $bustt.slideUp();

        $(this).addClass("ative");

        if($(this).hasClass("ative")) {
            $carti.removeClass("ative");
            $busti.removeClass("ative");

            $(this).find("span").css({transform:'rotate(135deg)', marginTop:'-5px'})
            $carti.find("span").css({transform:'rotate(-45deg)', marginTop:'8px'})
            $busti.find("span").css({transform:'rotate(-45deg)', marginTop:'8px'})
        }
    });
    $busti.on('click', function(){
        $(".dom_map").find("img").attr('src', './img/dom_bus.png')
        $bustt.slideDown();
        $cartt.slideUp();
        $subtt.slideUp();

        $(this).addClass("ative");

        if($(this).hasClass("ative")) {
            $carti.removeClass("ative");
            $subti.removeClass("ative");

            $(this).find("span").css({transform:'rotate(135deg)', marginTop:'-5px'})
            $subti.find("span").css({transform:'rotate(-45deg)', marginTop:'8px'})
            $carti.find("span").css({transform:'rotate(-45deg)', marginTop:'8px'})
        }
    });

    // 선수단 .herose_con 클릭 했을 때
    let hqla = window.matchMedia("screen and (max-width:500px)")
    let hqlb = window.matchMedia("screen and (max-width:400px)")

    if (hqla.matches) {
        $(".herose_con").filter(":first-child").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'240px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
        $(".herose_con").filter(":nth-child(2)").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'240px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
        $(".herose_con").filter(":nth-child(3)").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'240px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
        $(".herose_con").filter(":nth-child(4)").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'240px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
        $(".herose_con").filter(":nth-child(5)").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'240px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
    } else if (hqlb.matches) {
        $(".herose_con").filter(":first-child").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'220px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
        $(".herose_con").filter(":nth-child(2)").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'220px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            })
        });
        $(".herose_con").filter(":nth-child(3)").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'220px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
        $(".herose_con").filter(":nth-child(4)").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'220px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
        $(".herose_con").filter(":nth-child(5)").on('click', function(){
            $(".herose_con").stop(true).animate({width:'100%',height:'40px'},400),
            $(".herose_con").find(".herose_tt").css({color:'#000'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(".herose_tt").find("a").find("span").css({
                borderTop:'1px solid #000',
                borderRight:'1px solid #000'
            }),
            $(this).stop(true).animate({width:'100%', height:'220px'}),
            $(this).find(".herose_tt").css({color:'#fff'}),
            $(this).find(".bg").css({display:'block'}),
            $(this).find(".herose_tt a").find("span").css({
                borderTop:'1px solid #fff',
                borderRight:'1px solid #fff'
            })
        });
    }else {
        $(".herose_con").filter(":nth-child(1)").on('click', function(){

            $(".herose_con").stop(true).animate({width:'6%'},400),
            $(".herose_con").find("span").css({display:'none'}),
            $(".herose_con").find(".herose_tt").css({flexDirection:'column', color:'#000', fontWeight:'600'}),
            $(".herose_con").find("p").css({display:'block'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(this).stop(true).animate({width:'73%'},400),
            $(this).find("span").css({display:'block'}),
            $(this).find(".herose_tt").css({flexDirection:'row', color:'#fff', fontWeight:'500'}),
            $(this).find("p").css({display:'inline-block'}),
            $(this).find(".bg").css({display:'block'})
        });
        $(".herose_con").filter(":nth-child(2)").on('click', function(){

            $(".herose_con").stop(true).animate({width:'6%'},400),
            $(".herose_con").find("span").css({display:'none'}),
            $(".herose_con").find(".herose_tt").css({flexDirection:'column', color:'#000', fontWeight:'600'}),
            $(".herose_con").find("p").css({display:'block'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(this).stop(true).animate({width:'73%'},400),
            $(this).find("span").css({display:'block'}),
            $(this).find(".herose_tt").css({flexDirection:'row', color:'#fff', fontWeight:'500'}),
            $(this).find("p").css({display:'inline-block'}),
            $(this).find(".bg").css({display:'block'})
        });
        $(".herose_con").filter(":nth-child(3)").on('click', function(){

            $(".herose_con").stop(true).animate({width:'6%'},400),
            $(".herose_con").find("span").css({display:'none'}),
            $(".herose_con").find(".herose_tt").css({flexDirection:'column', color:'#000', fontWeight:'600'}),
            $(".herose_con").find("p").css({display:'block'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(this).stop(true).animate({width:'73%'},400),
            $(this).find("span").css({display:'block'}),
            $(this).find(".herose_tt").css({flexDirection:'row', color:'#fff', fontWeight:'500'}),
            $(this).find("p").css({display:'inline-block'}),
            $(this).find(".bg").css({display:'block'})
        });
        $(".herose_con").filter(":nth-child(4)").on('click', function(){

            $(".herose_con").stop(true).animate({width:'6%'},400),
            $(".herose_con").find("span").css({display:'none'}),
            $(".herose_con").find(".herose_tt").css({flexDirection:'column', color:'#000', fontWeight:'600'}),
            $(".herose_con").find("p").css({display:'block'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(this).stop(true).animate({width:'73%'},400),
            $(this).find("span").css({display:'block'}),
            $(this).find(".herose_tt").css({flexDirection:'row', color:'#fff', fontWeight:'500'}),
            $(this).find("p").css({display:'inline-block'}),
            $(this).find(".bg").css({display:'block'})
        });
        $(".herose_con").filter(":nth-child(5)").on('click', function(){

            $(".herose_con").stop(true).animate({width:'6%'},400),
            $(".herose_con").find("span").css({display:'none'}),
            $(".herose_con").find(".herose_tt").css({flexDirection:'column', color:'#000', fontWeight:'600'}),
            $(".herose_con").find("p").css({display:'block'}),
            $(".herose_con").find(".bg").css({display:'none'}),
            $(".h_6").find(".herose_tt").css({color:'#fff', fontWeight:'500'}),
            $(this).stop(true).animate({width:'73%'},400),
            $(this).find("span").css({display:'block'}),
            $(this).find(".herose_tt").css({flexDirection:'row', color:'#fff', fontWeight:'500'}),
            $(this).find("p").css({display:'inline-block'}),
            $(this).find(".bg").css({display:'block'})
        });
    }


    // 왼쪽 바 글자 클릭 해당 섹션으로 이동
    $('.m_g').click(function(){
        let game = $('#g_wrap').offset();
        $('html').animate({scrollTop : game.top}, 400);
    });
    $('.m_p').click(function(){
        let herose = $('#herose').offset();
        $('html').animate({scrollTop : herose.top}, 400);
    });
    $('.m_v').click(function(){
        let video = $('#v_wrap').offset();
        $('html').animate({scrollTop : video.top}, 400);
    });
    $('.m_m').click(function(){
        let media= $('#media').offset();
        $('html').animate({scrollTop : media.top}, 400);
    });
    $('.m_s').click(function(){
        let shop = $('#shop').offset();
        $('html').animate({scrollTop : shop.top}, 400);
    });
    $('.m_sd').click(function(){
        let dom = $('#dom').offset();
        $('html').animate({scrollTop : dom.top}, 400);
    });

    // 상단으로 바로가기
    let Topbtn = document.querySelector('.Topbnt')
    console.log('Topbtn');
    Topbtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });  
    }

    // 각 섹션 보일 때 글자, 컨텐츠 올라오기
    // section h2
    let observer = new IntersectionObserver((a)=>{
        a.forEach((Stitle)=>{
            if(Stitle.isIntersecting) {
                Stitle.target.style.opacity = 1;
                Stitle.target.style.transform = 'translateY(0)';
            }
        })
    })
    let ativeH = document.querySelectorAll('.ativeH')
    // console.log(ativeH);
    observer.observe(ativeH[0])
    observer.observe(ativeH[1])
    observer.observe(ativeH[2])
    observer.observe(ativeH[3])
    observer.observe(ativeH[4])

    // section p
    let observer2 = new IntersectionObserver((b)=>{
        b.forEach((Stext)=>{
            if(Stext.isIntersecting) {
                Stext.target.style.opacity = 1;
                Stext.target.style.transform = 'translateY(0)';
            }
        })
    })
    let ativeP = document.querySelectorAll('.ativeP')
    // console.log(ativeP);
    observer2.observe(ativeP[0])
    observer2.observe(ativeP[1])
    observer2.observe(ativeP[2])
    observer2.observe(ativeP[3])
    observer2.observe(ativeP[4])

    // 각 섹션 컨텐츠 박스
    let observer3 = new IntersectionObserver((c)=>{
        c.forEach((Cbox)=>{
            if(Cbox.isIntersecting) {
                Cbox.target.style.opacity = 1;
                Cbox.target.style.transform = 'translateY(0)';
            }
        })
    })

    let ativeCon = document.querySelectorAll('.ativeCon')
    // console.log(ativeCon);
    observer3.observe(ativeCon[0])
    observer3.observe(ativeCon[1])
    observer3.observe(ativeCon[2])
    observer3.observe(ativeCon[3])
    observer3.observe(ativeCon[4])
    observer3.observe(ativeCon[5])
    observer3.observe(ativeCon[6])

    // shop p
    let observer4 = new IntersectionObserver((d)=>{
        d.forEach((Shop)=>{
            if(Shop.isIntersecting) {
                Shop.target.style.opacity = 1;
                Shop.target.style.transform = 'translateY(0)';
            }
        })
    })
    let ativeShop = document.querySelectorAll('.ativeShop')
    // console.log(ativeShop);
    observer4.observe(ativeShop[0])
    observer4.observe(ativeShop[1])
    observer4.observe(ativeShop[2])

    // shop a
    let observer5 = new IntersectionObserver((e)=>{
        e.forEach((Sbnt)=>{
            if(Sbnt.isIntersecting) {
                Sbnt.target.style.opacity = 1;
            }
        })
    })
    let ativeShopbnt = document.querySelectorAll('.ativeShopbnt')
    // console.log(ativeShopbnt);
    observer5.observe(ativeShopbnt[0])

    // 왼쪽 바 각 섹션마다 이벤트 적용
    // 경기일정
    let section1 = new IntersectionObserver((f)=>{
        f.forEach((GameSC)=>{
            if(GameSC.isIntersecting) {
                $(".mbarul").css({opacity:'1'})
                $(".mbarul").find("a").css({color:'#4E4E4E'})
                $(".mbarul li a").css({fontSize:'0.8em',fontWeight:'200'})
                $(".bar_c").css({opacity:'0.2', transform:'rotate(0) scale(1)'})
                $(".bar_c").find("img").attr('src','./img/main_bar(game).png')
                //////
                $(".m_bar").addClass("fixed")
                $(".m_g").css({fontSize:'1em', color:'#f7f7f7', fontWeight:'300'})
                $(".mbarul li").filter(":first-child").find(".bar_c").css({opacity:'1', transform:'rotate(18deg) scale(1.6)'})
            }
        })
    }, {threshold: 0.5})
    let game = $('#g_wrap')
    console.log(game);
    section1.observe(game[0])

    // 선수단
    let section2 = new IntersectionObserver((f)=>{
        f.forEach((Player)=>{
            if(Player.isIntersecting) {
                $(".mbarul").css({opacity:'1'})
                $(".mbarul").find("a").css({color:'#CDCDCD'})
                $(".mbarul li a").css({fontSize:'0.8em',fontWeight:'200'})
                $(".bar_c").css({opacity:'0.2', transform:'rotate(0) scale(1)'})
                $(".bar_c").find("img").attr('src','./img/main_bar.png')
                //////
                $(".m_bar").addClass("fixed")
                $(".m_p").css({fontSize:'1em', color:'#6C0012', fontWeight:'300'})
                $(".mbarul li").filter(":nth-child(2)").find(".bar_c").css({opacity:'1', transform:'rotate(18deg) scale(1.6)'})
            }
        })
    }, {threshold: 0.5})
    let herose = $('#herose')
    console.log(herose);
    section2.observe(herose[0])

    // 유툽 영상
    let section3 = new IntersectionObserver((f)=>{
        f.forEach((YouTube)=>{
            if(YouTube.isIntersecting) {
                $(".mbarul").css({opacity:'1'})
                $(".mbarul").find("a").css({color:'#CDCDCD'})
                $(".mbarul li a").css({fontSize:'0.8em',fontWeight:'200'})
                $(".bar_c").css({opacity:'0.2', transform:'rotate(0) scale(1)'})
                $(".bar_c").find("img").attr('src','./img/main_bar.png')
                //////
                $(".m_v").css({fontSize:'1em', color:'#6C0012', fontWeight:'300'})
                $(".mbarul li").filter(":nth-child(3)").find(".bar_c").css({opacity:'1', transform:'rotate(18deg) scale(1.6)'})
            }
        })
    }, {threshold: 0.5})
    let video = $('#v_wrap')
    console.log(video);
    section3.observe(video[0])

    // 소식
    let section4 = new IntersectionObserver((f)=>{
        f.forEach((Media)=>{
            if(Media.isIntersecting) {
                $(".mbarul").css({opacity:'1'})
                $(".mbarul").find("a").css({color:'#CDCDCD'})
                $(".mbarul li a").css({fontSize:'0.8em',fontWeight:'200'})
                $(".bar_c").css({opacity:'0.2', transform:'rotate(0) scale(1)'})
                $(".bar_c").find("img").attr('src','./img/main_bar.png')
                //////
                $(".m_m").css({fontSize:'1em', color:'#6C0012', fontWeight:'300'})
                $(".mbarul li").filter(":nth-child(4)").find(".bar_c").css({opacity:'1', transform:'rotate(18deg) scale(1.6)'})
            }
        })
    }, {threshold: 0.4})
    let media = $('#media')
    console.log(media);
    section4.observe(media[0])

    // 샵
    let section5 = new IntersectionObserver((f)=>{
        f.forEach((Shopcon)=>{
            if(Shopcon.isIntersecting) {
                $(".mbarul").css({opacity:'1'})
                $(".mbarul").find("a").css({color:'#4e4e4e'})
                $(".mbarul li a").css({fontSize:'0.8em',fontWeight:'200'})
                $(".bar_c").css({opacity:'0.2', transform:'rotate(0) scale(1)'})
                $(".bar_c").find("img").attr('src','./img/main_bar(game).png')
                //////
                $(".m_s").css({fontSize:'1em', color:'#f7f7f7', fontWeight:'300'})
                $(".mbarul li").filter(":nth-child(5)").find(".bar_c").css({opacity:'1', transform:'rotate(18deg) scale(1.6)'})
                $("#shop").animate({width:'100vw', borderRadius:'0'})
                $(".m_bar").addClass("fixed")
            }
        })
    }, {threshold: 0.5})
    let shop = $('#shop')
    console.log(shop);
    section5.observe(shop[0])

    // 고척
    let section6 = new IntersectionObserver((f)=>{
        f.forEach((Godom)=>{
            if(Godom.isIntersecting) {
                $(".mbarul").css({opacity:'1'})
                $(".mbarul").find("a").css({color:'#CDCDCD'})
                $(".mbarul li a").css({fontSize:'0.8em',fontWeight:'200'})
                $(".bar_c").css({opacity:'0.2', transform:'rotate(0) scale(1)'})
                $(".bar_c").find("img").attr('src','./img/main_bar.png')
                //////
                $(".m_sd").css({fontSize:'1em', color:'#6C0012', fontWeight:'300'})
                $(".mbarul li").filter(":last-child").find(".bar_c").css({opacity:'1', transform:'rotate(18deg) scale(1.6)'})
            }
        })
    }, {threshold: 0.3})
    let dom = $('#dom')
    console.log(dom);
    section6.observe(dom[0])

    // 왼쪽바 .fixed 제거
    let positionA = new IntersectionObserver((f)=>{
        f.forEach((Fix)=>{
            if(Fix.isIntersecting) {
                $(".m_bar").removeClass("fixed")
            }
        })
    },)
    let topbtn = $('.Topbnt')
    console.log(topbtn);
    positionA.observe(topbtn[0])

    // 왼쪽바 .fixed 더하기
    let positionF = new IntersectionObserver((f)=>{
        f.forEach((Novi)=>{
            if(Novi.isIntersecting) {
                $(".m_bar").addClass("fixed")
            }
        })
    },)
    let domH = $('#dom .ativeH')
    console.log(domH);
    positionF.observe(domH[0])


///////////////////////////////////////////////
});

// 경기일정 반응형에 맞춰서 swiper 따로 적용하기
$(function(){
    let ww = window.innerWidth;
    
    responsiveSwiper();

    function responsiveSwiper() {
        if (ww > 501) {
            let SSswiper = new Swiper(".GameSwiper", {
                slidesPerView: 'auto',
                slideToClickedSlide : true,
                centeredSlides: true,
                allowTouchMove : true,
                initialSlide:4,
                pagination: {
                  el: ".swiper-pagination",
                  type: "fraction",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
            });
        
        }else if (ww < 501) {
            let Sswiper = new Swiper(".gameSwiper", {
                slidesPerView: 'auto',
                initialSlide:4,
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
            });
        }
    }

    window.addEventListener('resize', function() {
        ww = window.innerWidth;
        responsiveSwiper();
    });
});

// 유툽 영상 .list 슬라이드
$(function(){

    let ww = window.innerWidth;
    responsiveSwiper();

    function responsiveSwiper() {
        if (ww > 1023) {
                let Uswiper = new Swiper(".yuSwiper", {
                slidesPerView:4.5,
                spaceBetween: 10,
                freeMode: true
            });
        }else if (ww > 766&&ww < 1023) {
            let Uswiper = new Swiper(".yuSwiper", {
            slidesPerView:3.5,
            spaceBetween: 10,
            freeMode: true
            });
        }else if (ww > 500&&ww < 766) {
            let Uswiper = new Swiper(".yuSwiper", {
            slidesPerView:3.5,
            spaceBetween: 10,
            freeMode: true
            });
        }else if (ww < 500) {
            let Uswiper = new Swiper(".yuSwiper", {
            slidesPerView:2.5,
            spaceBetween: 5,
            freeMode: true
            });
        }
        
    }
});

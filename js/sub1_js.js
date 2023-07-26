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
    $(".ham").on('click', function(){

        $(this).toggleClass("inviham")

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

    });

    // .mnav_main>li 클리 했을 때
    $(".mnav_main li").on('click', function(){
        $(this).toggleClass("mnavdown")

        if($(this).hasClass("mnavdown")) {
            $(this).css({color:'#8c0017'}),
            $(this).find("span").css({transform:'translateY(-3px) rotate(135deg)', borderTop:'1px solid #8c0017', borderRight:'1px solid #8c0017'})
            $(this).find(".mnav_sub").slideDown();
        }else {
            $(this).css({color:'#000'}),
            $(this).find("span").css({transform:'translateY(1px) rotate(-45deg)', borderTop:'1px solid #000', borderRight:'1px solid #000'})
            $(this).find(".mnav_sub").slideUp();
        }
    })

    // 배너 글씨 올라오기
    let observer12 = new IntersectionObserver((a)=>{
        a.forEach((글자)=>{
            if(글자.isIntersecting) {
                글자.target.style.opacity = 1;
                글자.target.style.transform = 'translateY(0)';
            }
        })
    })

    let btmove = document.querySelectorAll('.bt_move')
    // console.log(btmove);
    observer12.observe(btmove[0])
    observer12.observe(btmove[1])

    // 기록 버튼 눌렀을 때
    $(".hty_Mbtn").on('click', function(){
        $(this).toggleClass("down");

        if($(this).hasClass("down")) {
            $(".hty_Sbtn").slideDown();
            $(this).find("span").css({transform:'rotate(135deg)', marginTop:'-4px'})
        }else {
            $(".hty_Sbtn").slideUp();
            $(this).find("span").css({transform:'rotate(-45deg)', marginTop:'0'})
        }
    })


    // 상단으로 바로가기
    let Topbtn = document.querySelector('.Topbnt')
    console.log('Topbtn');
    Topbtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });  
    }

////////////////////    
});

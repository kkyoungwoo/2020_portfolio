//javascript main h2 start

function autoType(elementClass,typingSpeed){
  var thisElem = $(elementClass);
  thisElem.css({"position":"relative","display":"inline-block"});
  thisElem.prepend("<div class='cursor' style='right: initial; left: 0;'></div>")
  thisElem = thisElem.find(".text");
  var thisTextSplit = thisElem.text().trim().split(""); //trim은 앞 공백을 지워주는 역활, split은 하나하나 잘라주는 역활
  var ttSplitLeng = thisTextSplit.length; //for 구문으로 돌리기위해 어디까지의 length값을 구하기위해
  var newString = "";
  thisElem.text("|");
  setTimeout(function(){
    thisElem.css("opacity",1);
    thisElem.prev().removeAttr("style");
    thisElem.text("");
    for(var i = 0; i < ttSplitLeng; i++){
      (function(i,char){
        setTimeout(function(){
          newString += char;
          thisElem.text(newString); //0,0.5초,1초...마다 chqr값을 받아서 newString에 붙여서 계속 넣는거.....
        },i*typingSpeed)
      })(i+1,thisTextSplit[i]);
    };
  },0);

}

$(function(){
  //script 입력영역 object
  autoType(".type",200); //0.2초마다
});

//javascript main h2 end

//jQuery section_1 gallery motion start
$(function(){
  $('.gallery').mouseenter(function(){
    $(this).addClass('rotate');
    }).mouseleave(function(){
      $(this).removeClass('rotate');
    });

  $('.column').mouseenter(function(){
    $(this).addClass('rotate');
    }).mouseleave(function(){
      $(this).removeClass('rotate');
  })
  $('.column').click(function(){
    $(this).prependTo('.gallery');
    $('.column').animate({top: "300px"});
  });
  $('.inpobox.section_2').click(function(){
    alert('준비중입니다')
  });
  $('#lastbutton').click(function(){
    alert('준비중입니다')
  })
  //jQuery section_1 gallery motion end

  //jQuery fixed motion start

    $('.fixedbox').mouseenter(function(){
      $(this).addClass('hover');
      $('fixed').html('<div>asdasd</div>');
    }).mouseleave(function(){
      $(this).removeClass('hover');
    });

  //jQuery fixed motion end
  $(".fixed a").click(function(e){
    // console.log($(this.hash).offset().top)
    var thisElem = $(this.hash);
    console.log(thisElem)
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisElem.offset().top},1500);
    //e.preventDefault();
  });
  //
  var toto = $('section:last').offset().top;
  console.log(toto)
  var winVh = $(window).height();

    $(".fixed.upvh").click(function(){
      if( winVh < $('section:last').offset().top && winVh > -1000 ){
        winVh += $(window).height();
        $("html,body").animate({ scrollTop : winVh + "px" },"slow","swing",function(){});
      }else{
        winVh = $('section').offset().top;
      }
    });

    $(".fixed.downvh").click(function(){
      if( winVh < $('section:last').offset().top && winVh > -1000 ){
        winVh -= $(window).height();
        $("html,body").animate({ scrollTop : winVh + "px" },"slow","swing",function(){});
      }
    });





  //SLIDE FUNCTION
  $(window).scroll(function(){
    // console.log($(this).height() + ", scroll top:" + $(this).scrollTop())
    var wHeight = $(this).height(); // window  창의 높이를 가져온다.
    var thisScrollTop = $(this).scrollTop(); // window 창의 scroll top 값을 가져온다.
    $(".skill_wrap").each(function(){
      // console.log($(this).offset().top)
      var thisOffset = $(this).offset();
      if( thisOffset.top<= thisScrollTop  + 500 && thisScrollTop < thisOffset.top + wHeight ){
        $(this).addClass('move');
      }else{
        $(this).removeClass("move");
      }
    });


  });
});

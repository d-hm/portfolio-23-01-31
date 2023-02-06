$(document).ready(function() {

    $(".ddb").on('click', function() {
        $(this).siblings(".ddh").slideToggle(600);
    });

    $(".vimeovideowrap").fitVids();
});

$(document).ready(function(){
    $(".btn-all").click(function(){
    //   $(".ddg").fadeOut();
      $(".ddg").fadeIn();
    });

    $(".btn-draw").click(function(){
        $(".ddg").fadeOut();
        $(".draw").slideDown(3000);
    });

    $(".btn-graf").click(function(){
        $(".ddg").fadeOut();
        $(".graf").slideDown(3000);
    });

    $(".btn-video").click(function(){
        $(".ddg").fadeOut();
        $(".video").slideDown(3000);
    });

    $(".btn-fash").click(function(){
        $(".ddg").fadeOut();
        $(".fash").slideDown(3000);
    });

    $(".btn-misc").click(function(){
        $(".ddg").fadeOut();
        $(".misc").slideDown(3000);
    });
  });
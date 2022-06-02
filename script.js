$(".start-button").click(function() {
   $(".intro").fadeOut();
    $(".decision-1").show();
});

$(".investigate").click(function() {
    $(".decision-1").fadeOut();
    $(".ending-1").show();
}); 

$(".ignore").click(function() {
    $(".decision-1").fadeOut();
    $(".result-1").show();
    
});

$(".continue-1").click(function() {
    $(".result-1").fadeOut();
    $(".decision-2").show();
});

$(".help").click(function() {
    $(".result2-1").show();
    $(".decision-2").fadeOut();
      });

$(".ignore-2").click(function(){
    $(".decision-2").fadeOut();
    $(".result2-2").show();
});

$(".continue-3").click(function(){
    $(".postresult2-1").show();
    $(".result2-1").fadeOut();
});
    
$(".hyperdrive-yes").click(function(){
    $(".postresult2-1").fadeOut();
    $(".maxoverdrive").show();
});
    
$(".Warpspace").click(function(){
    $(".maxoverdrive").fadeOut();
    $(".earth").fadeIn();
});
                          

    
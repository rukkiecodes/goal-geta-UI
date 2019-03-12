$("document").ready(function(){
    $(".list").hide();
    $(".fa-times").hide();

    $(".fa-bars").click(function(){
        $(".list").show(100);
        $(".fa-bars").hide();
        $(".fa-times").show();
    });

    $(".fa-times").click(function(){
        $(".list").hide(100);
        $(".fa-bars").show();
        $(".fa-times").hide();


        
    });

    //water ripples
    $('.container').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });
});
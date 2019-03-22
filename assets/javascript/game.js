//-----------------Global vars-------------------//

var luigi = {info:["luigi","95","8","8","place"]};
    var mario = {info:["mario","120","12","12","place"]};
    var bowser = {info:["bowser","100","14","20","place"]};
    var yoshi = {info:["yoshi","90","9","9","place"]};
    var char=[luigi,mario,bowser,yoshi];
    var flag = false;
    var narration="";    var narration2="";
    var myplayer;

//--------------------Main-----------------------//

$.each(char, function( index, value ) {writechars(value,"selector");});

selections();

attack();

//------------------Funtions----------------------//

    function enemiesearch(array){
var display=place2value("defender",char);
return display;
    }
    function attack(){
    var j=1;
    $(".btn").on("click",function(){
        var counter=myplayer.info[3]*j;
        var enemie= enemiesearch(char);
        enemie.info[1]=enemie.info[1]-counter;
        j++;
        var attacked = myplayer.info[1]-enemie.info[2];
        myplayer.info[1]= attacked;
        narration="you attacked "+enemie.info[0]+" for "+counter+" damage";
        narration2=enemie.info[0]+" attacked you back for "+enemie.info[2]+" damage";
        if (myplayer.info[1]>0){
            if (enemie.info[1]>0){
                $("#p"+enemie.info[0]).html("<p>"+enemie.info[0]+": "+enemie.info[1]+"</p>");
                $("#p"+myplayer.info[0]).html("<p>"+myplayer.info[0]+": "+myplayer.info[1]+"</p>");
            }
            else {
            narration="you defeated "+enemie.info[0];narration2="choose other enemie";
            $(".narration").html("<h3>"+narration+"</h3>");
            $(".narration2").html("<h3>"+narration2+"</h3>");
            $("#"+enemie.info[0]).remove(); flag=false;
            var tempchar = char;
            tempchar.splice($.inArray(enemie, tempchar),1); 
            if(char.length==0){ narration="you won";narration2="GAME OVER";restart();}
            $(".enemie").on("click", function () {
                $(this).remove();
             })}
        }
        else{
            $("#p"+myplayer.info[0]).html("<p>"+myplayer.info[0]+": "+myplayer.info[1]+"</p>");
            narration="you been defeated";narration2="GAME OVER";restart();}

            $(".narration").html("<h3>"+narration+"</h3>");
            $(".narration2").html("<h3>"+narration2+"</h3>");
    })

    }
    function selections(){
    $(".selector").on("click", function () {
        $("#selector").remove();
            id2value(this.id,char);
            var value=id2value(this.id,char);
            myplayer = id2value(this.id,char);
            writechars(value,"yourchar");
            var tempchar = char;
            tempchar.splice($.inArray(value, tempchar),1);
        $.each(tempchar, function( index, value ) {
        writechars(value,"enemies");});  
        $(".enemies").on("click", function () {
            if(flag==false){
                $(this).remove();
                var value=this.id;
                id2value(this.id,char);
                var value=id2value(this.id,char);
                writechars(value,"defender");
                flag=true;}
         })
    })
    }
    function writechars(value,place){
    value.info[4]=place;
    var card = $("<div>");
    card.attr("class", "card"+" "+place+" "+"test");
    card.attr("id", value.info[0]);
    card.appendTo('#'+place);
    var img = $('<img class="card-img-top">');
    img.attr('src',"assets/images/char-"+value.info[0]+".png");
    img.appendTo('#'+value.info[0]);
    var cardbody = $("<div>");
    cardbody.attr("class", "card-body");
    cardbody.attr("id", "p"+value.info[0]);
    cardbody.appendTo('#'+value.info[0]);
    var ptext = $("<p>");
    ptext.attr("class", "card-text");
    ptext.text(value.info[0]+": "+value.info[1]);
    ptext.appendTo('#p'+value.info[0]);
    }
    function id2value(id,array){
    var length2 = array.length;
    for (let index = 0; index <length2; index++) {
    var Obj = array[index];
     var NameOf = Obj.info[0];
     if(id==NameOf){
         return array[index];
    }}
    }
    function place2value(id,array){
        var length2 = array.length;
        for (let index = 0; index <length2; index++) {
        var Obj = array[index];
         var NameOf = Obj.info[4];
         if(id==NameOf){
             return array[index];}}
    }
    function restart(){
        $(".attack").remove();
        var boton = $("<button>");
        boton.attr("class", "btn btn-lg btn-primary restart");
        boton.attr("type", "button");
        boton.text("Restart");
        boton.appendTo(".restart");
        $(".restart").on("click",function(){location.reload();})
    }



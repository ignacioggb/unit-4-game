
    var luigi = {info:["luigi","95","8","8","place"]};
    var mario = {info:["mario","120","12","12","place"]};
    var bowser = {info:["bowser","100","20","20","place"]};
    var yoshi = {info:["yoshi","90","9","9","place"]};
    var char=[luigi,mario,bowser,yoshi];

//------Main--------//
var myplayer;
$.each(char, function( index, value ) {
    writechars(value,"selector");
  });

selections();
attack();

//-----Main------//
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
        myplayer.info[1]=myplayer.info[1]-enemie.info[2];
        if (myplayer.info[1]>0){
            if (enemie.info[1]>0){
                //-------OverWrite-on enemie------//
                $('#p'+enemie.info[0]).remove();
                var cardbody = $("<div>");
                 cardbody.attr("class", "card-body");
                cardbody.attr("id", "p"+enemie.info[0]);
                cardbody.appendTo('#'+enemie.info[0]);
                var ptext = $("<p>");
                ptext.attr("class", "card-text");
                ptext.text(enemie.info[0]+": "+enemie.info[1]);
                 ptext.appendTo('#p'+enemie.info[0]);
                 ///-------------------------------///
                 $('#p'+myplayer.info[0]).remove();
                 var cardbody = $("<div>");
                  cardbody.attr("class", "card-body");
                 cardbody.attr("id", "p"+myplayer.info[0]);
                 cardbody.appendTo('#'+myplayer.info[0]);
                 var ptext = $("<p>");
                 ptext.attr("class", "card-text");
                 ptext.text(myplayer.info[0]+": "+myplayer.info[1]);
                  ptext.appendTo('#p'+myplayer.info[0]);
            }
    else {$("#"+enemie.info[0]).remove();
    var tempchar = char;
            tempchar.splice($.inArray(enemie, tempchar),1);
            $(".card").on("click", function () {
                $(this).remove();
             })}
        }
        else{
            $('#p'+myplayer.info[0]).remove();
            var cardbody = $("<div>");
             cardbody.attr("class", "card-body");
            cardbody.attr("id", "p"+myplayer.info[0]);
            cardbody.appendTo('#'+myplayer.info[0]);
            var ptext = $("<p>");
            ptext.attr("class", "card-text");
            ptext.text(myplayer.info[0]+": "+myplayer.info[1]);
             ptext.appendTo('#p'+myplayer.info[0]);
            alert("you loose");location.reload();}


    })
}
function selections(){
    $(".card").on("click", function () {
        $("#selector").remove();
        id2value(this.id,char);
        var value=id2value(this.id,char);
        myplayer = id2value(this.id,char);
        writechars(value,"yourchar");
        var tempchar = char;
        tempchar.splice($.inArray(value, tempchar),1);
        $.each(tempchar, function( index, value ) {
        writechars(value,"enemies");
        });
                $(".card").on("click", function () {
                    $(this).remove();
                    var value=this.id;
                    id2value(this.id,char);
        var value=id2value(this.id,char);
                    //console.log(this.id);
                   writechars(value,"defender");
                 })
    })

    
}
    function writechars(value,place){
        
    value.info[4]=place;

    var card = $("<div>");
    card.attr("class", "card"+" "+place);
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
    ptext.appendTo('#p'+value.info[0]);}

    function id2value(id,array){
    var length2 = array.length;
    for (let index = 0; index <length2; index++) {
    var Obj = array[index];
     var NameOf = Obj.info[0];
     if(id==NameOf){

         return array[index];}}
    }

    function place2value(id,array){
        var length2 = array.length;
        for (let index = 0; index <length2; index++) {
        var Obj = array[index];
         var NameOf = Obj.info[4];
         if(id==NameOf){
             return array[index];}}
        }




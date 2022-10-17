var color;    
$(function(){
    var tab = ["black", "white", "red", "blue", "lightGrey", "brown", "lightGreen", "magenta", "cyan", "#1d0075"];

    
    for(var i = 0; i < tab.length; i++)
    {  
        $("#panel").append("<td style=\"background-color:"+tab[i]+"\"></td>");
    }


    $("#panel td").click(function(){
        color = $(this).css("background-color");
        $("#panel td").each(function(td){       //pour mettre un encadrer noir (normal)
            $(this).css({"border":"solid 0.02px black"});
        })
        $(this).css({"border":"solid 2px orange"});     //mettre un encadrer orange
        
    })
    
    $("#clear").click(function(){
        $("#Size td").each(function(key, td){
            $(td).css("background-color","white");
        })
    })
})
$(function(){
    
    
    var collpse = false;
    
    
    
    $("#load").click(function(){
        load_split = load_val.split(";");
        
        $("#Height").val(load_split[0]);
        $("#Width").val(load_split[1]);
        
        for(var i = 0; i < load_split[0]; i++)     //Crée les tr d'untableau (hauteur)
        {
            $("#Size").append("<tr></tr>");   
        }
        for(var j = 0; j < load_split[1]; j++)      //Crée les colonne d'un tableau avec des bordure
        {  
            $("#Size tr").append("<td style=\"border: solid 0.5px darkGray; background-color : white\"></td>");
        }
        
        
        $("#Size td").each(function(key, value){
            $(this).css("background-color",""+load_split[key+2]+"");  
        })
        
        
        $.draw();
        
    })
})
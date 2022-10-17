$(function(){
    var collpse = false;
    
    $("#create").click(function(){
        
        $('#Size tr').remove();
        
        var height = $("#Height").val();    //Récupère les valeur de hauteur et largeur
        var width = $("#Width").val();
        for(var i = 0; i < height; i++)     //Crée les tr d'untableau (hauteur)
        {
            $("#Size").append("<tr></tr>");   
        }
        for(var j = 0; j < width; j++)      //Crée les colonne d'un tableau avec des bordure
        {  
            $("#Size tr").append("<td style=\"border: solid 0.5px darkGray; background-color : white\"></td>");
        }
        
        
        $.draw(collpse);
        
        
    })

    
})
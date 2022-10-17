$(function(){
    var save;
    $("#save").click(function(){
        $("#Size td").each(function(key_save, td_save){
            save = save + $(td_save).css("background-color")+";";
        })
        var height_save = $("#Height").val() +";";
        var width_save = $("#Width").val() +";";
        save = save.substring(9);
        alert(save);
        $.ajax({
           url : "index.php", type : "POST", data : {save_color : save, width : width_save, height : height_save}
        });
        
    })
}) 
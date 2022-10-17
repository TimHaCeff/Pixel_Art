$(function(){
    
    var element = $("#Size"); // global variable
    var getCanvas; // global variable
 
    $("#make_jpg").on('click', function () {
        alert("mammamamam");
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#Size").append(canvas);
                getCanvas = canvas;
             }
         });
    });

	$("#make_jpg").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#make_jpg").attr("download", "your_pic_name.png").attr("href", newData);
	});
    
})
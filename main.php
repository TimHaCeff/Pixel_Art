<!DOCTYPE html>
<html>
    <head>
        <title>Pixel Art</title>
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script src="script.js"></script>
        <script src="Color_panel.js"></script>
        <script src="load.js"></script>
        <script src="draw.js"></script>
        <script src="create_image.js"></script>
        

        <table>
            <tr>
                <td>Height</td>
                <td><input type="number" id="Height" required></td>
            </tr>
            <tr>
                <td>Width</td>
                <td><input type="number" id="Width" required></td>
                <td><input type="button" id="create" value="Go"></td>
            </tr>
        </table>
        <table>
            <tr id="panel">
            </tr>
            
        </table>
        <input class="button" type="button" id="clear" value="clear">
        <input class="button" type="button" id="bordure" value="bordure">
        <input class="button" type="button" id="save" value="save">
        <input type="button" class="button" id="load" value="load file">
        <input type="button" class="button" id="make_jpg" value="make jpg">
        
        <div id="bod">
            <table id="Size">
            </table>
        </div>
        <script src="save.js"></script>
        <?php
        if(!empty($_POST)){
            $save_file = $_POST['save_color'];
            $height_file = $_POST["height"];
            $width_file = $_POST["width"];
            if($save_file != NULL)
            {
                file_put_contents('./save.txt', $height_file.$width_file.$save_file);
                window.location.reload();
            }
            
        }
        $load_value = file_get_contents("./save.txt");
        ?>
        <script>
            var load_val="<?php echo $load_value; ?>";
        </script>
    </body>
</html> 
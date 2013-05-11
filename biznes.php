<?
if (isset($_GET['list'])) 
{
	if(file_exists("html/".$_GET['list'].".html"))
	$text = file_get_contents("html/".$_GET['list'].".html");
	else
	$text = "404 Страница не найдена.";
}
else $text = file_get_contents("html/index.html");
?>
<html id="up">
<head>
<title>Classic</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="block/style.css" rel="stylesheet" type="text/css" />
</head>
<body>

<a href="?list=index" title="На главную">
<div class="logo">
<img src="img/logo.png" width="150" height="150" style=" z-index:2" />
</div>
</a>

<div class="header">
<?php require("block/header.php");?>
</div>


<div align="center" class="content">
	<table class="table_main">
    <TR>
    	<td class="left_column" valign="TOP">
        <?php require("block/lefttd.php");?>
        </td>
    	<td class="center_column" valign="TOP">
        <div class="pred_content">Инновационный Бизнес-Центр МГГУ</div>
        <div id="content"> 
 		<? echo $text;?>
        </div>
        </td>
    	<td class="right_column" valign="TOP">
        <?php require("block/righttd.php");?> 
        </td>
    	</TR> 
        <tr>
        <td colspan="3">
		<?php require("block/footer.php");?>
        </td>
        </tr>
    </table>
</div>

</body>
</html>
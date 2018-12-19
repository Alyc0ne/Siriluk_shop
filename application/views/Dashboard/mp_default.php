<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>...</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head> 
<body>
    <div class="wrapper-menu @classOpen" style="background-color:white; !important">
        <?php include('LeftMenu.php'); ?>  
    </div>
    <div>
        <!-- <div class="wrapper-header" style="background-color:white; !important">
           @Html.Partial("~/Views/MP/UC/Header.cshtml")
        </div> -->
        <div>
            <?php $this->load->view($path_link); ?>
        </div>
    </div>
</body>
</html>  
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>...</title>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <!-- <script src="<?php echo base_url(); ?>extensions/scripts/Base/jquery-1.10.2.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <script src="<?php echo base_url(); ?>extensions/scripts/Plugin/PostMessenger/messenger.min.js"></script>
    <script src="<?php echo base_url(); ?>extensions/scripts/Plugin/PostMessenger/messenger-theme-future.js"></script>
    <script src="<?php echo base_url(); ?>extensions/scripts/Default/apps.js"></script>
    <script src="<?php echo base_url(); ?>extensions/scripts/Base/jquery-ui.min.js"></script>
    <script src="<?php echo base_url(); ?>extensions/scripts/Base/jquery.validate.min.js"></script>
    <script src="<?php echo base_url(); ?>extensions/scripts/Base/bootstrap.min.js"></script>
    <link href="<?php echo base_url(); ?>extensions/content/Default/reset.css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>extensions/content/Default/Loading/Loading.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>  
    <link href="<?php echo base_url(); ?>extensions/content/Default/Standard/standard.css" rel="stylesheet" />    
    <link href="<?php echo base_url(); ?>extensions/content/Default/default.css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>extensions/content/Default/site.css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>extensions/content/Bootstrap/bootstrap.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>extensions/content/Default/Messenger/messenger.css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>extensions/content/Default/Messenger/messenger-theme-future.css" rel="stylesheet" />
</head> 
<body>
    <!-- <div class="wrapper-menu @classOpen" style="background-color:white; !important">
        <?php //include('LeftMenu.php'); ?>  
    </div> -->
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
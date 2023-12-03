<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/icon" href="<%=request.getContextPath()%>/assets/images/faviicon...png">
    <title>Player messages</title>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/playermessage.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Serif+Khojki:wght@500&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Serif+Khojki:wght@500&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css" integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q==" crossorigin="anonymous" referrerpolicy="no-referrer"> 

</head>

<body>
<div class="loadingio-spinner-rolling-wv7qus1vjze"><div class="ldio-6rz4e89x6fk">
<div></div>
</div></div>

    <div class="maincontainer">

    <div class="side2">
       <!-- <a href=""> <div class="chatdiv">
            <div class="img">
                <img  class ="peopleimage"src="../../assets/images/cricketplayer.png">
            </div>
            <div class="name">
                <p>Sandeep</p>
                        </div>
          
        </div></a> -->

        <!-- <a href="../../index.html">
            <div class="propage">
                <i class="fa-solid fa-user" style="color: #ffffff;"></i>
                <span>Back to your profile</span>
            </div>
        </a> -->

        <a class="anpro" href="<%=request.getContextPath()%>/userprofile.jsp">
            <div class="propage">
                <i class="bx bx-log-out">
                </i>
                <span>Exit</span>
            </div>
        </a>
        <h3 class="logoletter">Book and Play</h3>

    </div>
    <div class="side3chatmain">
            
            </div>

    </div>
</div>
  	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/assets/js/playermessage.js"></script>
    
</body>
</html>
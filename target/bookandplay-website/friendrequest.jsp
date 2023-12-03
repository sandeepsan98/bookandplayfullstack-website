<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Friend request</title>
    <link rel="icon" type="image/icon" href="<%=request.getContextPath()%>/assets/images/faviicon...png">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/friendrequest.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Serif+Khojki:wght@500&family=Roboto&display=swap" rel="stylesheet">

</head>
<body>
    <!-- header -->
<header>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
   <i class="fa-solid fa-bars"></i>
</label>
    <ul>
     <li>
<a href="<%=request.getContextPath()%>/index.jsp">Home</a> 
</li>
    <li>
<a href="<%=request.getContextPath()%>/ground.jsp">Book Grounds</a>
</li>
    <li>
<a href="<%=request.getContextPath()%>/contact.jsp">Contact us</a>
</li>
     </ul>
    <a href="<%=request.getContextPath()%>/index.jsp">
 <img class="logo" src="<%=request.getContextPath()%>/assets/images/Logo.png" alt="Book and play">
</a>   
    </header>
    <!-- header -->
<!-- main1 -->

    <!-- main1 -->

<!-- main2 -->
    <div class="main2">
    <div class="parent">
    <div class="loadingio-spinner-rolling-wv7qus1vjze"><div class="ldio-6rz4e89x6fk">
<div></div>
</div></div>
   
</div>

    </div>
    <!-- footer -->
   <jsp:include page="footer.jsp"></jsp:include>
    <!-- footer -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/assets/js/friendrequest.js"></script>
</body>
</html>

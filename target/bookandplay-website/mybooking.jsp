
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Ground</title>
    <link rel="icon" type="image/icon" href="<%=request.getContextPath()%>/assets/images/faviicon...png">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/mybooking.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Serif+Khojki:wght@500&family=Roboto&display=swap"
        rel="stylesheet">
</head>

<body>

    <!-- header -->
   <!-- header -->
	<jsp:include page="header.jsp"></jsp:include>
 
    <div class="main2">
<h2 class="groundword">Your Current Ground Booking</h2>
        <div class="parent">
        <div class="loadingio-spinner-rolling-wv7qus1vjze"><div class="ldio-6rz4e89x6fk">
<div></div>
</div></div>
           

        </div>

    </div>

    <!-- <div class="mainext"></div> -->
    <!-- main3  groundslist -->
    <!-- footer -->
   <jsp:include page="footer.jsp"></jsp:include>
    <!-- footer -->
    <script src=" https://smtpjs.com/v3/smtp.js"></script>
         	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
         	
         	
         	  <script>

  
         	 function getBaseUrlFromCurrentPage() {
         		const baseUrl = window.location.protocol + '//' + window.location.host + '/';
         		const contextPath = window.location.pathname.split('/')[1]; // Extract the context path

         		return baseUrl + contextPath;
         	}
            function getContextName() {
         	
         		const contextPath = '/'+window.location.pathname.split('/')[1]; // Extract the context path

         		return contextPath;
         	}

     const url1 =  getBaseUrlFromCurrentPage() +"/GetUserSession";
    
     axios.get(url1)
         .then(function (response) {
             // handle success
             console.log(response.data);
             //const responseUserData = response.data.substring(response.data.indexOf('{'));
             //const userLogin = JSON.parse(responseUserData);
             const userLogin =  response.data;
                 // You can now access the "userLogin" session attribute in userLogin variable
                 console.log(userLogin);
                 
                 
                 const loginbtn = document.querySelector(".login")

                 if (userLogin == null) {
             // nothing
                 }
                 else if (userLogin !== null) {
                 loginbtn.style.display = "none"
                 const myprofile = document.createElement("button");
                 myprofile.setAttribute("class", "login");
                 myprofile.innerText = "My Account"
                 myprofile.style.width = "150px";
                 myprofile.style.left = "50px"
                 myprofile.addEventListener("click", () => { 
                	 window.location.href = getContextName()+"/userprofile.jsp" 
                 });
                 document.querySelector(".contact").append(myprofile)
               }
               else {
                 loginbtn.style.display = "block"

               }
             // checking the user is player
                 const findplayersbtn = document.querySelector(".findplayers")
                 findplayersbtn.addEventListener("click", (e) => {
           

                if( userLogin.playerStatus === false){
                 alert("Please join as a player to find players. To join as a player please tick the box on your profile page ");
                 e.preventDefault();
               }

                   else {
                       window.location.href = getContextName()+"/findplayers.jsp";
                   }
                   // if(loginUser==false){
                   //   console.log("ofmofkf");
                   //   alert("Please join as a player to find players ")
                   //   e.preventDefault();
                   // }

                 })
                 
                 
            
         })
         .catch(function (error) {
             // handle error
             console.log(error);
             const findplayersbtn = document.querySelector(".findplayers")
             findplayersbtn.addEventListener("click", (e) => {
           
             alert("Please login to find players ")
             e.preventDefault();
           })
         });
  </script> 
         	
   
    <script type="text/javascript" src="<%=request.getContextPath()%>/assets/js/mybooking.js"> </script>

</body>

</html>
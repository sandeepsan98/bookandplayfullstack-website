<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*"%>
<%@ page import="com.project.bookandplay.model.Ground"%>

<!DOCTYPE html>
<html>
<head>

<meta charset="ISO-8859-1">
<title>Book and Play</title>
   
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Serif+Khojki:wght@500&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/assets/css/bookground.css">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
        	    <link rel="icon" type="image/icon" href="https://iili.io/J9lLgxR.png">
</head>
</head>
<body>

<jsp:include page="header.jsp"></jsp:include>

 
<div class="main1">
        <h3 class="content1">Search Grounds Around you</h3>
        <img class="locationicon" src="<%=request.getContextPath()%>/assets/images/locationicon.gif" alt="locationicon">
        <select class="locationselect" id="selectlocation">
            <option value="">Select by City</option>
            <option value="all">All Areas</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Salem">Salem</option>
            <option value="Erode">Erode</option>
            <option value="Madurai">Madurai</option>
            <option value="Bangalore">Bangalore</option>

        </select>
        <div class="content2">
            <form class="searchnav">
                <input type="search" placeholder="Search for place,cities,turf,ground names....." id="search2">
                <button class="searchbtn" type="submit" aria-label="search">
                    <i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    </div>
	<div class="main2 loader-filter">

 <div class="parent">
<div class="loadingio-spinner-rolling-wv7qus1vjze"><div class="ldio-6rz4e89x6fk">
<div></div>
</div></div>

 </div>
	
	</div>
	
	
	<jsp:include page="footer.jsp"></jsp:include>
  
  	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/assets/js/bookground.js"> </script>
 
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

const url = getBaseUrlFromCurrentPage() +"/GetUserSession";

    
     axios.get(url)
         .then(function (response) {
             // handle success
             
             console.log(response.data);
             //const responseUserData = response.data.substring(response.data.indexOf('{'));
             //const userLogin = JSON.parse(responseUserData);
             const userLogin =  response.data;
                 
                 
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
           
                	 if(userLogin==null){
                    	   alert("Please join as a player to find players. To join as a player please tick the box on your profile page ");
                           e.preventDefault();
                    	}
                    

                  	 else if( userLogin.playerStatus === false){
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
</body>
</html>
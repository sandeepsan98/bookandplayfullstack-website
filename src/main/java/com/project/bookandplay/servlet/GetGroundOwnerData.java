package com.project.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import com.project.bookandplay.exceptions.DAOException;
import com.project.bookandplay.model.GroundOwner;
import com.project.bookandplay.service.GroundOwnerService;

/**
 * Servlet implementation class GetGroundOwnerData
 */
@WebServlet("/GetGroundOwnerData")
public class GetGroundOwnerData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetGroundOwnerData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession(false); 
		GroundOwner login = (GroundOwner)session.getAttribute("adminuser");
		int groundOwnerId=login.getGroundOwnerId();
		GroundOwnerService gos=new  GroundOwnerService();
		try {
			GroundOwner groundOwner=gos.getgroundOwnerById(groundOwnerId);
			//request.setAttribute("GroundOwnerDetails", groundOwner);
			JSONObject userJson = new JSONObject (groundOwner);
			 if (userJson != null) {
				 response.getWriter().write(userJson.toString());
		    		//out.println(userJson.toString());
		
			        //out.flush();
			    }
		} catch (DAOException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

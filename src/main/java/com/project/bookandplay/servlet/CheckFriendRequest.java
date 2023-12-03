package com.project.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.project.bookandplay.exceptions.DAOException;
import com.project.bookandplay.service.FriendRequestService;

/**
 * Servlet implementation class CheckFriendRequest
 */
@WebServlet("/CheckFriendRequest")
public class CheckFriendRequest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckFriendRequest() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
	        
	        int senderId = Integer.parseInt(request.getParameter("senderId"));
	        int receiverId = Integer.parseInt(request.getParameter("receiverId"));
	        FriendRequestService frs=new FriendRequestService();

	        boolean friendRequestExists = false;
			try {
				friendRequestExists = frs.checkFriendRequest(senderId, receiverId);
			} catch (DAOException | SQLException e) {
				
				e.printStackTrace();
			}
	        
	        JSONObject jsonResponse = new JSONObject();
	        jsonResponse.put("exists", friendRequestExists);

	        response.getWriter().write(jsonResponse.toString());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

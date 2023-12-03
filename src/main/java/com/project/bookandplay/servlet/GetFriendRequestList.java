package com.project.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.project.bookandplay.exceptions.DAOException;
import com.project.bookandplay.model.FriendRequest;
import com.project.bookandplay.service.FriendRequestService;

/**
 * Servlet implementation class GetFriendRequestList
 */
@WebServlet("/GetFriendRequestList")
public class GetFriendRequestList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetFriendRequestList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		List<FriendRequest> pendingfriendreqList=null;
		
	      String receiverId = request.getParameter("receiverId");
	      FriendRequestService frs=new FriendRequestService();
	      try {
	    	  pendingfriendreqList=frs.getAllFriendReq(Integer.parseInt(receiverId));
			JSONArray reListJSonArray = new JSONArray(pendingfriendreqList);
			response.getWriter().write(reListJSonArray.toString());;
		} catch (NumberFormatException | DAOException | SQLException e) {
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

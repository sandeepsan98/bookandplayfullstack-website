package com.project.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.project.bookandplay.exceptions.DAOException;
import com.project.bookandplay.model.User;
import com.project.bookandplay.service.UserService;

/**
 * Servlet implementation class GetAllPlayer
 */
@WebServlet("/GetAllPlayer")
public class GetAllPlayer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetAllPlayer() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
			UserService us=new UserService();
		List<User>  userPlayerList = null;
		try {
			userPlayerList=	us.getAllPlayerStatus();
		//request.setAttribute("PlayerList", userPlayerList);
		JSONArray userJSonArray = new JSONArray(userPlayerList);
		response.getWriter().write(userJSonArray.toString());
	

		} catch (DAOException e) {
		
			e.printStackTrace();
		} catch (SQLException e) {
	
			e.printStackTrace();
		} 

//		RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/ground.jsp");
//	dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

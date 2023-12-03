package com.project.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.project.bookandplay.exceptions.DAOException;
import com.project.bookandplay.model.Ground;
import com.project.bookandplay.service.GroundService;

/**
 * Servlet implementation class GetGroundDetail
 */
@WebServlet("/GetGroundDetail")
public class GetGroundDetail extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetGroundDetail() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		GroundService gs=new GroundService();
		Ground selectedGround =null;
		try {

		
		 // Store selected ground details as session attributes
        String selectedGroundId = request.getParameter("groundId");
        
        if (selectedGroundId != null) {
            selectedGround = gs.getGroundById(Integer.parseInt(selectedGroundId)); 
//    		RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/grounddetail.jsp");
//    		dispatcher.forward(request, response);
    	//	response.sendRedirect("/grounddetail.jsp");
            JSONObject grounddetailJson = new JSONObject(selectedGround);
            response.getWriter().write(grounddetailJson.toString());
    		
            
        }
		
		} catch (DAOException e) {
		
			e.printStackTrace();
		} 
		


	   
		
		//request.setAttribute("GroundJson", grounddetailJson);

	

	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

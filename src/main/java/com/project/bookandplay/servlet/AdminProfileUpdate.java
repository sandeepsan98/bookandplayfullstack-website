package com.project.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.project.bookandplay.exceptions.DAOException;
import com.project.bookandplay.exceptions.InvalidGroundOwnerDetailException;
import com.project.bookandplay.model.GroundOwner;
import com.project.bookandplay.service.GroundOwnerService;

/**
 * Servlet implementation class AdminProfileUpdate
 */
@WebServlet("/AdminProfileUpdate")
public class AdminProfileUpdate extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdminProfileUpdate() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		String id = request.getParameter("uId");
		
		int adminId=Integer.parseInt(id);
	
		String fName = request.getParameter("fname");
		String groundOrgName = request.getParameter("groundOrgName");
	long phoneNumber =Long.parseLong(request.getParameter("uphonenumber1"));
	
	GroundOwnerService gros=new GroundOwnerService();
	
	GroundOwner user1 = new GroundOwner(adminId,fName,groundOrgName,phoneNumber,"https://example.com/image1.jpg");
	try {
		gros.updategroundOwner(user1);
		
		out.println("success");
	} catch (DAOException | SQLException |InvalidGroundOwnerDetailException e) {
		out.println(e.getMessage());
		e.printStackTrace();
		
		
	}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}

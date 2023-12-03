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
import com.project.bookandplay.model.GroundBooking;
import com.project.bookandplay.service.GroundBookingService;

/**
 * Servlet implementation class GetGroundBookingDetailsAdmin
 */
@WebServlet("/GetGroundBookingDetailsAdmin")
public class GetGroundBookingDetailsAdmin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetGroundBookingDetailsAdmin() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		  String userId = request.getParameter("adminId");
			GroundBookingService gbs=new GroundBookingService();

			List<GroundBooking> bookings=null;
			try {
				
				bookings=gbs.getBookingDetailsBySellerId(Integer.parseInt(userId));
				JSONArray bookingsData = new JSONArray(bookings);
				response.getWriter().write(bookingsData.toString());
				
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

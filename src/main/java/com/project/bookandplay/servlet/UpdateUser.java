package com.project.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.project.bookandplay.builder.UserBuilder;
import com.project.bookandplay.exceptions.DAOException;
import com.project.bookandplay.exceptions.InvalidUserDetailException;
import com.project.bookandplay.model.User;
import com.project.bookandplay.service.UserService;

/**
 * Servlet implementation class UpdateUser
 */
@WebServlet("/UpdateUser")
public class UpdateUser extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UpdateUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		String id = request.getParameter("uId");

		String fName = request.getParameter("fname");

		String lName = request.getParameter("lname1");
		// System.out.println(request.getParameter("uphonenumber1"));
		long phoneNumber = Long.parseLong(request.getParameter("uphonenumber1"));

		// String userPass = request.getParameter("upassword");
		String userPlayerStatus = request.getParameter("joinplayer");

		String userAge = request.getParameter("uage1");

		String userGender = request.getParameter("ugender1");

		String userLocation = request.getParameter("ulocation1");
		String startTimeStr = request.getParameter("ustartTime1");
		String endTimeStr = request.getParameter("uendTime1");
		String aboutplayer = request.getParameter("uabout1");

		String[] selectedSports = request.getParameterValues("sportsKnown1");

		List<String> sportsList = null;
		if (selectedSports != null) {

			sportsList = Arrays.asList(selectedSports);
		}

		LocalTime localTime = null;
		LocalTime localTime2 = null;
		if (startTimeStr != "") {
			try {
				SimpleDateFormat inputFormat = new SimpleDateFormat("hh:mm a");
				Date date = inputFormat.parse(startTimeStr);

				// Convert to LocalTime
				localTime = date.toInstant().atZone(ZoneId.systemDefault()).toLocalTime();

			} catch (ParseException e) {
				e.printStackTrace();
			}

		}
		if (endTimeStr != "") {

			try {
				SimpleDateFormat inputFormat = new SimpleDateFormat("hh:mm a");
				Date date = inputFormat.parse(endTimeStr);

				// Convert to LocalTime
				localTime2 = date.toInstant().atZone(ZoneId.systemDefault()).toLocalTime();

			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		boolean status = Boolean.parseBoolean(userPlayerStatus);

		UserService us = new UserService();

		if (status) {

			User user1 = new UserBuilder().userIdBuild(Integer.parseInt(id)).firstNameBuild(fName).lastNameBuild(lName)
					.phoneNumberBuild(phoneNumber).playerStatusBuild(status).ageBuild(Integer.parseInt(userAge))
					.genderBuild(userGender).knownSportsBuild(sportsList).locationBuild(userLocation)
					.timingAvailFromBuild(localTime).timingAvailToBuild(localTime2).aboutBuilder(aboutplayer)
					.imageBuilder("https://example.com/image1.jpg").build();

			try {
				if (us.updateUserPlayer(user1)) {

					out.println("success");

//					RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/userlogin.jsp");
//					dispatcher.forward(request, response);
				}

			} catch (DAOException | SQLException | InvalidUserDetailException e) {

				e.printStackTrace();
				out.println(e.getMessage());
			}

		}

		else {

			User user2 = new UserBuilder().userIdBuild(Integer.parseInt(id)).firstNameBuild(fName).lastNameBuild(lName)
					.phoneNumberBuild(phoneNumber).playerStatusBuild(status)
					.imageBuilder("https://example.com/image1.jpg").build();
			try {
				if (us.updateUserOnly(user2)) {

					out.println("success");

//					RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/userlogin.jsp");
//					dispatcher.forward(request, response);
				} else {

					out.println("fail");
				}

			} catch (DAOException | SQLException | InvalidUserDetailException e) {

				e.printStackTrace();
				out.println(e.getMessage());
			}
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

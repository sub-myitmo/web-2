package org.viacheslav;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.viacheslav.points.PointList;

import java.io.IOException;
import java.util.logging.Logger;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {
    public static final Logger logger = Logger.getLogger("ControllerServlet");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        logger.info("The server runs");
        if (request.getParameter("clear") != null) {
            ((PointList) request.getSession().getAttribute("PointList")).clear();
            request.getRequestDispatcher("./").forward(request, response);
        }
        if (request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
            request.getRequestDispatcher("/check").forward(request, response);
        } else {
            request.getRequestDispatcher("./").forward(request, response);
        }
    }
}

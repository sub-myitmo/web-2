package org.viacheslav;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.viacheslav.points.PointList;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;


public class ControllerServlet extends HttpServlet {
    public static final Logger logger = Logger.getLogger("ControllerServlet");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        logger.info("The server runs");
        logger.info("request = " + request.toString());

        if (request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
            request.getRequestDispatcher("/check").forward(request, response);
        } else if (request.getParameter("clear") != null) {
            if (request.getSession().getAttribute("PointList") == null) request.getSession().setAttribute("PointList", new PointList());
            ((PointList) request.getSession().getAttribute("PointList")).clear();
            request.getRequestDispatcher("./").forward(request, response);
        } else if (request.getParameter("data") != null)  {
            PrintWriter out = response.getWriter();
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.findAndRegisterModules();
            String jsonResponse = objectMapper.writeValueAsString(request.getSession().getAttribute("PointList"));
            logger.info("Отправка всех точек: " + jsonResponse);
            out.print(jsonResponse);
            out.flush();
        } else {
            request.getRequestDispatcher("./").forward(request, response);
        }
    }
}

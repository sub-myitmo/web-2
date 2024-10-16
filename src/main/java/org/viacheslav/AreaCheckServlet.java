package org.viacheslav;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.viacheslav.points.Point;
import org.viacheslav.points.PointList;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;

public class AreaCheckServlet extends HttpServlet {
    public static final Logger logger = Logger.getLogger("AreaCheckServlet");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            double x = Double.parseDouble(request.getParameter("x"));
            double y = Double.parseDouble(request.getParameter("y"));
            double r = Double.parseDouble(request.getParameter("r"));


            logger.info("Получена: " + x + " " + y + " " + r);

            Point point = new Point(x, y, r);
            HttpSession session = request.getSession();

            PointList pl = (PointList) session.getAttribute("PointList");
            if (pl == null) {
                pl = new PointList();
                session.setAttribute("PointList", pl);
            }

            pl.addPoint(point);
            //logger.info(pl.getPoints().toString());
            if (request.getParameter("res") == null) request.getRequestDispatcher("./result.jsp").forward(request, response);
            else {
                PrintWriter out = response.getWriter();
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                ObjectMapper objectMapper = new ObjectMapper();
                objectMapper.findAndRegisterModules();
                String jsonResponse = objectMapper.writeValueAsString(point);
                logger.info("Отправляем назад: " + jsonResponse);
                out.print(jsonResponse);
                out.flush();
            }

        } catch (Exception e) {
            logger.severe(e.toString());
            request.getRequestDispatcher("./").forward(request, response);
        }
    }
}
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="org.viacheslav.points.Point" %>
<%@ page import="org.viacheslav.points.PointList" %>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Web Lab #2</title>

    <link rel="icon" href="img/baby.jpg">
    <link href="style.css" rel="stylesheet">
</head>
<body>

<!-- header -->
<header class="meme">
    <h1>Веб-программирование, Лабораторная работа №1, Вариант 184</h1>
    <h2>
        <a href="https://github.com/petrovviacheslav">
            Петров Вячеслав Маркович, P3208
        </a>
    </h2>
</header>



<main>
    <h1>Results:</h1>
    <!-- check table -->
    <table id="check" class="table-check">
        <tr class="table-header">
            <th scope="col">X</th>
            <th scope="col">Y</th>
            <th scope="col">R</th>
            <th scope="col">Попал?</th>
            <th scope="col">Дата</th>
            <th scope="col">Время работы скрипта, микросек</th>
        </tr>

        <% PointList pl = (PointList) request.getSession().getAttribute("PointList");
            if (pl == null) {
        %>
        <tr>
            <td colspan="6" id="no-results">
                Нет результатов
            </td>
        </tr>

        <% } else {
            for (Point point : pl.getPoints()) { %>
        <tr class="<%= point.getIsHit() ? "hit" : "miss" %>">
            <td>
                <%= point.getX() %>
            </td>
            <td>
                <%= point.getY() %>
            </td>
            <td>
                <%= point.getR() %>
            </td>
            <td>
                <%= point.getIsHit() ? "Да" : "Нет" %>
            </td>
        </tr>
        <% } %>
    </table>
    <% } %>

    <h1 id="toIndex"><a href="index.jsp">Съёбываем на базу</a></h1>
</main>
<!-- footer -->
<footer>
    <div>
        <a href="https://se.ifmo.ru">
            <img class="vt" src="img/favicon.jpg" alt="">
        </a>
    </div>
    <small>
        Проект доступен с открытым исходным кодом на условиях Лицензии CC BY-NC-SA 4.0. Авторские права 2024 Петров
        Вячеслав
    </small>
</footer>

<script src="lib/jquery-3.7.1.min.js"></script>
<script src="script.js"></script>

</body>
</html>









<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="org.viacheslav.points.Point" %>
<%@ page import="org.viacheslav.points.PointList" %>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Web Lab #2</title>

    <link rel="icon" href="img/baby.jpg">
    <link href="styles/main.css" rel="stylesheet">
    <link href="styles/header.css" rel="stylesheet">
    <link href="styles/footer.css" rel="stylesheet">
    <link href="styles/results.css" rel="stylesheet">
</head>
<body>

<!-- header -->
<header>
    <h2><a href="https://github.com/petrovviacheslav">Petrov Viacheslav Markovich P3208 lab2 var.784670</a></h2>

</header>

<div class="main">
    <!-- main block -->
    <div class="graph-data">
        <div>
            <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg" id="paint">

            </svg>
        </div>

        <div>
            <form id="coordinates" action="controller" method="get">
                <div id="X" class="X-radio">
                    Выбери X:
                    <label>
                        <input type="radio" name="x" value="-3" required>-3
                    </label>
                    <label>
                        <input type="radio" name="x" value="-2" required>-2
                    </label>
                    <label>
                        <input type="radio" name="x" value="-1" required>-1
                    </label>
                    <label>
                        <input type="radio" name="x" value="0" required>0
                    </label>
                    <label>
                        <input type="radio" name="x" value="1" required>1
                    </label>
                    <label>
                        <input type="radio" name="x" value="2" required>2
                    </label>
                    <label>
                        <input type="radio" name="x" value="3" required>3
                    </label>
                    <label>
                        <input type="radio" name="x" value="4" required>4
                    </label>
                    <label>
                        <input type="radio" name="x" value="5" required>5
                    </label>
                </div>
                <div class="Y-text" id="Y">
                    <label>
                        Впиши Y:
                        <input id="Y-text" class="Y-text-input" type="text" name="y" placeholder="[-3; 5]"
                               maxlength="14" required/>
                    </label>
                </div>

                <div class="R-radio" id="R">
                    Выбери R:
                    <label>
                        <input type="checkbox" name="r" value="1">1
                    </label>
                    <label>
                        <input type="checkbox" name="r" value="1.5">1.5
                    </label>
                    <label>
                        <input type="checkbox" name="r" value="2">2
                    </label>
                    <label>
                        <input type="checkbox" name="r" value="2.5">2.5
                    </label>
                    <label>
                        <input type="checkbox" name="r" value="3">3
                    </label>
                </div>
                <div id="online-checker" class="not_correct">Данные не корректны</div>
                <button id="submit" type="submit">Отправить</button>
                <button id="clear" type="reset">Очистить таблицу</button>
            </form>
        </div>
    </div>

    <!-- check table -->
    <table id="check" class="table-check">
        <tr class="table-header">
            <th scope="col">X</th>
            <th scope="col">Y</th>
            <th scope="col">R</th>
            <th scope="col">Попал?</th>
            <th scope="col">Дата</th>
        </tr>

        <% PointList pl = (PointList) request.getSession().getAttribute("PointList");
            if (pl == null) {
        %>
        <tr>
            <td colspan="5" id="no-results">Нет результатов</td>
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
            <td>
                <%= point.getDate() %>
            </td>
        </tr>
        <% }} %>
    </table>


</div>
<!-- footer -->
<footer class="footer">
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

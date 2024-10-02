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

<div class="main">
    <!-- main block -->
    <div class="graph-data">
        <div>
            <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">


                <!-- lines -->
                <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
                <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>
                <polygon fill="black" points="150,0 144,15 156,15" stroke="#FF00FF"></polygon>
                <polygon fill="black" points="300,150 285,156 285,144" stroke="#FF00FF"></polygon>

                <!-- lines on lines -->
                <line stroke="black" x1="180" x2="180" y1="155" y2="145"></line>
                <line stroke="black" x1="210" x2="210" y1="155" y2="145"></line>
                <line stroke="black" x1="240" x2="240" y1="155" y2="145"></line>
                <line stroke="black" x1="270" x2="270" y1="155" y2="145"></line>

                <line stroke="#FF00FF" x1="30" x2="30" y1="155" y2="145"></line>
                <line stroke="#FF00FF" x1="60" x2="60" y1="155" y2="145"></line>
                <line stroke="#FF00FF" x1="90" x2="90" y1="155" y2="145"></line>
                <line stroke="#FF00FF" x1="120" x2="120" y1="155" y2="145"></line>

                <line stroke="#FF00FF" x1="145" x2="155" y1="120" y2="120"></line>
                <line stroke="#FF00FF" x1="145" x2="155" y1="90" y2="90"></line>
                <line stroke="#FF00FF" x1="145" x2="155" y1="60" y2="60"></line>
                <line stroke="#FF00FF" x1="145" x2="155" y1="30" y2="30"></line>

                <line stroke="#FF00FF" x1="145" x2="155" y1="180" y2="180"></line>
                <line stroke="#FF00FF" x1="145" x2="155" y1="210" y2="210"></line>
                <line stroke="#FF00FF" x1="145" x2="155" y1="240" y2="240"></line>
                <line stroke="#FF00FF" x1="145" x2="155" y1="270" y2="270"></line>

                <!-- Rs and X, Y -->
                <text fill="#FF00FF" x="170" y="140">R/2</text>
                <text fill="#FF00FF" x="205" y="140">R</text>
                <text fill="#FF00FF" x="225" y="140">3R/2</text>
                <text fill="#FF00FF" x="260" y="140">2R</text>

                <text fill="#FF00FF" x="14" y="140">-2R</text>
                <text fill="#FF00FF" x="40" y="140">-3R/2</text>
                <text fill="#FF00FF" x="82" y="140">-R</text>
                <text fill="#FF00FF" x="107" y="140">-R/2</text>

                <text fill="#FF00FF" x="160" y="35">2R</text>
                <text fill="#FF00FF" x="160" y="65">3R/2</text>
                <text fill="#FF00FF" x="160" y="95">R</text>
                <text fill="#FF00FF" x="160" y="125">R/2</text>

                <text fill="#FF00FF" x="160" y="183">-R/2</text>
                <text fill="#FF00FF" x="160" y="213">-R</text>
                <text fill="#FF00FF" x="160" y="243">-3R/2</text>
                <text fill="#FF00FF" x="160" y="273">-2R</text>

                <text fill="#FF00FF" x="285" y="140">X</text>
                <text fill="#FF00FF" x="160" y="15">Y</text>

                <!-- dot -->
                <circle id="point" cx="150" cy="150" r="4" fill="red" stroke="white" visibility="hidden"/>

                <polygon points="150,150 90,150 150,120" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>

                <rect x="90" y="150" width="60" height="60" fill-opacity="0.4" stroke="navy" fill="blue"></rect>

                <path d="M 150 150 L 150 120 A50,50 0 0,1 180,150 Z" fill-opacity="0.4" stroke="navy"
                      fill="blue"></path>

            </svg>
        </div>

        <div>
            <form id="coordinates">
                <div id="X" class="X-radio">
                    Выбери X:
                    <label>
                        <input type="radio" name="x-parameter" value="-3" required>-3
                    </label>
                    <label>
                        <input type="radio" name="x-parameter" value="-2" required>-2
                    </label>
                    <label>
                        <input type="radio" name="x-parameter" value="-1" required>-1
                    </label>
                    <label>
                        <input type="radio" name="x-parameter" value="0" required>0
                    </label>
                    <label>
                        <input type="radio" name="x-parameter" value="1" required>1
                    </label>
                    <label>
                        <input type="radio" name="x-parameter" value="2" required>2
                    </label>
                    <label>
                        <input type="radio" name="x-parameter" value="3" required>3
                    </label>
                    <label>
                        <input type="radio" name="x-parameter" value="4" required>4
                    </label>
                    <label>
                        <input type="radio" name="x-parameter" value="5" required>5
                    </label>
                </div>
                <div class="Y-text" id="Y">
                    <label>
                        Впиши Y:
                        <input id="Y-text" class="Y-text-input" type="number" name="y-parameter" min="-3" max="5"
                               placeholder="[-3; 5]"
                               maxlength="14" required/>
                    </label>
                </div>

                <div class="R-radio" id="R">
                    Выбери R:
                    <label>
                        <input type="radio" name="r-parameter" value="1" required>1
                    </label>
                    <label>
                        <input type="radio" name="r-parameter" value="2" required>2
                    </label>
                    <label>
                        <input type="radio" name="r-parameter" value="3" required>3
                    </label>
                    <label>
                        <input type="radio" name="r-parameter" value="4" required>4
                    </label>
                    <label>
                        <input type="radio" name="r-parameter" value="5" required>5
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
            <td>
                Дата (fix)
            </td>
            <td>
                Время исполнения (fix)
            </td>
        </tr>
        <% } %>
    </table>
    <% } %>


</div>
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

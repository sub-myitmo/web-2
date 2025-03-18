# web-2

Полезное видео: [Загрузка и настройка сервера WildFly на Helios. Разворачивание Web-приложений на WildFly](https://youtu.be/bHzWVjmhy8g?si=aUUK3D_nE0Xhlw2u)

Ваш веб сервер надо собирать в формате .war, следует прописать в build.gradle это -
```gragle
plugins {
    id 'java'
    id 'war'
}

        ...
        
war {
    archiveFileName = 'server.war'
}

```

Потом качаете либу [wildfly](paint_coordinates), создаёте учётку (без неё нихуя не выйдет) и закидываете war-ник в wildfly/standalone/deployments/

## Гайд на создание пользователя и запуск
1. Открываем терминал в папке wildfly-34.0.0.Beta1 (в общем та папка, в которой лежат все остальные и bin включительно)
2. Пишем команду ./bin/add-user.sh или ./bin/add-user.bat
3. Выбираем а
    ```shell
    What type of user do you wish to add?
    a) Management User (mgmt-users.properties)
    b) Application User (application-users.properties)
    (a):
    ```
4. Заполняем поля
    ```shell
    Username :
    Password :
    ```
5. Теперь всё заебись, запуск:
   - Linux: sudo sh ./bin/standalone.sh
   - Windows: ./bin/standalone.bat
6. Внимательно читаем текст в консоли, поскольку сервер вероятнее всего поднимется не на localhost:8080/server, например у меня он был на localhost:8443/server/.
Берите порт, который был прописан перед сообщением 
    ```shell
    12:00:50,720 INFO  [org.wildfly.extension.undertow] (ServerService Thread Pool -- 80) WFLYUT0021: Registered web context: '/server' for server 'default-server'
    12:00:50,859 INFO  [org.jboss.as.server] (ServerService Thread Pool -- 45) WFLYSRV0010: Deployed "server.war" (runtime-name : "server.war")
    
    ```

## Апдейт:

В общем мне дали ахуенно огромный доп, поэтому в js много лишнего говна, а также сервлеты обрабатывают дополнительный запрос
1. Надо сохранить кнопку "Очистка данных"
2. На странице result.jsp показывается только последний запрос, а не все точки сразу
3. При дабл клике на координатную плоскость открывается модалное окно с ней и теперь нет подтверждения перед отправлением данных - каждый тык на плоскость - это новая точка, которую мы добавляем в таблицу
4. Лучше на мой код не ориентироваться, либо же откатиться на коммит "guide + some fix" (44c74906980b53f85610f6d393f62a1aa6059069). постарался разделить логику, но говнокод ради доп. задания остался

на файлы modal.css, modal.js, clear.js не смотрите, там код для допа

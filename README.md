# web-2

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

Потом качаете либу wildfly, создаёте учётку (без неё нихуя не выйдет) и закидываете war-ник в wildfly/standalone/deployments/

Гайд на создание пользователя и запуск
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

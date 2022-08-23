FROM mysql:5.7

COPY database.sql /docker-entrypoint-initdb.d/

EXPOSE 3306 

VOLUME ["/backup/"]
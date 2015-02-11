                                          --Interval Web App--
Introduction:
-----------------
The interval web app is a web application that collects data generated at an interval(every 5 seconds),
stores it in a database and generate a graph of the data.

Build:
------------------
The data was generated randomly using javascript random number generator.
The current time(in seconds) during each data generation is recorded and stored.
The  stored data are then ported over a socket to the front-end where a graph is plotted.
A table report of the data can be found under the graph. 

Technology:
--------------------
Runtime environment: NodeJS

Language: JavaScript

Framework: Express.js

Database: Mongodb

ODM: Mongoose

Styling: CSS

Templating engine: ejs(embedded javascript)

libraries: jQuery, Socket.io, Chart.js, Twitter Bootstrap

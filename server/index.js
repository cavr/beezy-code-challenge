const express = require('express');
const path = require('path');
const compression = require('compression')

const { app, server } = require('./server');

app.use(compression());


server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 3000


app.listen({ port }, () =>
  console.log(`🚀  🚀  🚀  🚀 Server ready at PORT:${port} `)
);



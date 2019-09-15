const express = require('express');
const path = require('path');
const { app, server } = require('./server');

server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 3000


app.listen({ port }, () =>
  console.log(`🚀  🚀  🚀  🚀 Server ready at PORT:${port} `)
);



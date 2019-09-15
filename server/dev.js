const express = require('express');
const path = require('path');
const expressPlayground = require('graphql-playground-middleware-express')
    .default

const { app, server } = require('./server');

server.applyMiddleware({ app });

app.get('/', expressPlayground({ endpoint: '/graphql' }))

const port = process.env.PORT || 3000


app.listen({ port }, () =>
    console.log(`🚀  🚀  🚀  🚀 Server ready at PORT:${port} `)
);



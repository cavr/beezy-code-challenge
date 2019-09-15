
<br />
<p align="center">
  <h3 align="center">Beezy | Frontend technical test</h3>
  <h3 align="center"><a href="https://charlybeezymarvel.herokuapp.com/">https://charlybeezymarvel.herokuapp.com/</a>




## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
  - [What to do](#what-to-do)
  - [There will be two principal screens in the app:](#there-will-be-two-principal-screens-in-the-app)
  - [Requirements](#requirements)
  [What to do](#what-to-do)




## About The Project

[![Marvel-Api][task-screenshot]](https://charlybeezymarvel.herokuapp.com/)

In relation to the communication between client and server, Graphql has been chosen since it makes simpler the process of calling the API. As for the server, it has been created in the simplest way, providing all the business logic to the client and using Apolloin both parts as it is the library that best suits the client in React.

In terms of the client, in order to generate the structure of the application create-react-app was used. Personally speaking, if it was about developing on a real app, I would have considered other options if required, subjected to use cases.

With regard to using Material UI, I opted for this library to avoid complicating the design of user interface and to put more focus on development.

As for deployment, I used Heroku since it integrates perfectly with Github and facilitates using CircleCi for continuous integration.

### Built With

* [React](https://reactjs.org)
* [Graphql](https://graphql.org)
* [Apollo Client-Apollo Serve](https://www.apollographql.com)
* [Express](https://expressjs.com)
* [Material UI](https://material-ui.com)




## Getting Started

You can use docker-compose and run the app with http://localhost:4000

Or you can run it without docker.


### Prerequisites

* npm or yarn
```sh
npm install npm@latest -g

brew install yarn

```

### Installation

1. Clone the repo
```sh
git clone https://github.com/cavr/beezy-code-challenge.git
```
2. Install NPM packages
```sh
npm install or yarn install
```

3. Run tests
```sh
yarn run test or yarn run test
```

4. Start APP
```JS
npm run start or yarn run start
```


### Deployment

As mentioned above, I used Heroku for deployment. When I push a commit, the tests are executed in CircleCI and, if they are ok, then it will be deployed with Heroku.

[![CircleCI][circleci]](https://i.imgur.com/DPBrCe9.png)
[![Heroku][heroku]](https://i.ibb.co/hYDgy8V/Screen-Shot-2019-09-15-at-19-08-27.png)


### What to do 
The purpose of the test is build a single page application with React, showing a list of items with some information in each of them, and another page showing detailed information of each item. 
Here you have a list of public APIs you can use for the test, but you can use another one, if you want: 
https://github.com/public-apis/public-apis 
Some recommendations: Marvel, SWAPI... 


### There will be two principal screens in the app: 
- Listing: 
o It will show a list of items coming from the API, with some 
information. Title is mandatory. o The app will be able to order the items by, at least, the Title. o The app will be able to filter the items by some of the fields. It could be a property from the items with any select or checkbox or a search field, or all of them.
 - Detail: 
o It will show detailed information of the selected element. 
Technical 

### Requirements 
- The app should be done in React - The app should be compatible with IE11+. 
Bonus points 
- Mobile support - Testing - User interface - Performance (loading and rendering) 

[task-screenshot]: https://i.imgur.com/yPdWPUZ.jpg
[circleci]: https://i.imgur.com/DPBrCe9.png
[heroku]:https://i.ibb.co/hYDgy8V/Screen-Shot-2019-09-15-at-19-08-27.png

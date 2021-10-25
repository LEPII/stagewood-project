# Stagewood :tickets:

Stagewood Search Bar that allows users to search for their favorite events. 

:desktop_computer:	The front-end side of the application was done using 

- Apollo libraries
- CSS
- GraphQL
- React.js

:package: The back-end side of the application have all the logic to process request to the database. It was done using the following technologies: 
- GraphQL
- Apollo Server
- Prisma
- MySQL Database 
- Heroku. 
- Concurrently 

## :performing_arts: Let The Show Begin

### Step 1: Set-up
- [ ] `Git clone` https://github.com/LEPII/stagewood-project.git
- [ ] `cd` into repository
- [ ] `npm install`
- [ ] `npm start`

### Step 2: Main Dependencies

BackEnd
- [ ] `cd` into stagewood-project 
- [ ] `@prisma/client` run command `$ npm install @prisma/client`
- [ ] `apollo-server` run command `$ npm install apollo-server`
- [ ] `graphql` run command `$ npm install graphql`
- [ ] `dotenv` run command `$ npm install dotenv`

FrontEnd
- [ ] `cd` into client 
- [ ] `react-app` run command `$ npm install create-react-app <app-name>`
- [ ] `react-router-dom` run command `$ npm install --save react-router-dom`
- [ ] `use-history` run command `$ npm install use-history`
- [ ] `apollo/client` run command `$ npm install apollo/client`
- [ ] `apollo-boost` run command `$ npm install apollo-boost`
- [ ] `graphql` run command `$ npm install graphql`
- [ ] `graphql-tag` run command `$ npm install graphql-tag`
- [ ] `react-apollo` run command `$ npm install react-apollo`
- [ ] `semantic-ui-react` run command `$ npm install semantic-ui-react`


### Step 4: API Keys (.env) :key:

| Key Name                    |  Source                  |
| ----------------------------|:-----------------------  |
| DATABASE_URL=               | [:link:] [MySQL]|

[MySQL]: https://www.mysql.com/

### Deploying to Heroku?
1. `heroku create <app_name>`
2. `git remote -v` 
3. `git push heroku main`
5. `heroku logs --tail` 


## :parachute: Runs on Heroku
:desktop_computer: https://stagewood-events.herokuapp.com/


<br> </br> 

![](/client/src/styles/assets/Stagewood%20Screenshot.png)

<br> </br> 

![](/client/src/styles/assets/Stagewood%20Screenshot%202.png)
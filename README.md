# How to install

1. Install `docker` and `docker-compose`
2. Create a new project on forestadmin.com
3. Set these env variables :
```
DATABASE_URL='mongodb://localhost:27017/forest_demo'
FOREST_ENV_SECRET= the secret token given while creating a new project of forestadmin.com
FOREST_AUTH_SECRET= the other secret token given while creating a new project of forestadmin.com
```
4. Run `yarn` to install the dependencies 
5. Run `docker-compose -f docker-compose.yml up` to run the local database
6. Run `yarn start`
7. Test basic server response on `http://localhost:3000`
8. Validate the connection on forestadmin.com


# Tips

If you'd like to directly connect to the database with tools like Robo3T, set the connection like that:
```
Connection
  Type: Direct Connexion
  Name: ForestAdmin Demo
  Adresse: localhost:27017
Authentication
  Database: forest_demo
  User Name: forest 
  Password: secret
  Auth Mechanism: MONGODB-CR 
```

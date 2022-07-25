<br />
<div align="center">
    <img src="./.github/repoprovas.png" alt="RepoProvas Logo" width="150">
    <h3 align="center">RepoProvas</h3>
    <p> A Back-End Project
</div>

# About

All of us at some time need to take a look at those old tests, either to review the subject or to learn it. 
For this, this application was developed, to help everyone adding old tests of different subjects and teachers, quickly and practically.


## Technologies
These are the main tools, frameworks and languages that were used in this project:<br>

<div>
  <img style='margin: 5px;' src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" />
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/postgresql-%23336791.svg?&style=for-the-badge&logo=postgresql&logoColor=white" />
  <img style='margin: 5px;' src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/joi-%23323330.svg?style=for-the-badge&color=990000"/>
</div>

## How to Run

You can use this API in two ways, cloning this repository or testing with our deploy running on Heroku

To clone the project, run the following command:

```git
git clone https://github.com/bruno-ruotolo/RepoProvas
```

Then, navigate to the project folder and run the following command:

```git
npm i
```

Finally, start the server:

```git
npm start
```

You can now access the API's endpoints locally, use the Prisma Migrations to create your database:

```git
npm prisma migrate dev
```

If you want to use the deployed API access: https://repoprovas-ruotolo.herokuapp.com

# API Reference

Here you can check the endpoints related to the project, as well as their respective characteristics. Have Fun 😄

## Routes
### Authentication Routes

#### Register
   - POST _/sign-up_

   - Body  
```json
{
  "email": "user@myemail.com",
  "password": "mypassword" // >= 10 char
}
```


#### Login
- POST _/_

- Body
```json
{
  "email": "user@myemail.com",
  "password": "mypassword"
}
```
---

### Websites Credentials Routes

#### Create Credential
- POST _/credentials_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Body
```json
{
    "title":"My Title",
    "url":"https://www.myemail.com",
    "username":"user",
    "password": "mypassword"
}
```


#### Get All My Credentials
- GET _/credentials_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Response
```json
[
    {
        "id": 0
        "userId": 0,
        "title":"My Title",
        "url":"https://www.myemail.com",
        "username":"user",
        "password": "mypassword"
        "createdAt": "2022-07-17T16:46:42.056Z"
    }
] {...}
```

#### Get Credential By ID
- GET _/credentials/:id_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Response
```json
{
    "id": 0
    "userId": 0,
    "title":"My Title",
    "url":"https://www.myemail.com",
    "username":"user",
    "password": "mypassword"
    "createdAt": "2022-07-17T16:46:42.056Z"
}
```


#### Delete Credential By ID
- DELETE _/credentials/:id_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

---

### Secure Notes Routes

#### Create Secure Notes
- POST _/secure-notes_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Body
```json
{
    "title":"My Title",
    "note" : "My Note"
}
```


#### Get All My Secure Notes
- GET _/secure-notes_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Response
```json
[
  {
    "id": 0,
    "userId": 0,
    "title": "My Title",
    "note": "My Note",
    "createdAt": "2022-07-17T16:47:19.507Z"
  }
] {...}
```

#### Get Secure Notes By ID
- GET _/secure-notes/:id_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Response
```json
{
    "id": 0,
    "userId": 0,
    "title": "My Title",
    "note": "My Note",
    "createdAt": "2022-07-17T16:47:19.507Z"
}
```


#### Delete Secure Notes By ID
- DELETE _/secure-notes/:id_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

---

### Cards Routes

#### Create Cards
- POST _/cards_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Body
```json
{
  "title":"My Title",
  "number":"0000000000000000",
  "name":"USER U USERS",
  "cvv":"000",
  "expirationDate":"12/22",
  "password":"0000",
  "isVirtual":true, //true or false
  "type":"debit" //"credit", "debit", "both"
}
```

#### Get All My Cards
- GET _/cards_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Response
```json
[
  {
    "id": 0,
    "userId": 0,
    "title": "My Title",
    "number": "0000000000000000",
    "name": "USER U USERS",
    "cvv": "000",
    "expirationDate": "12/22",
    "password": "0000",
    "isVirtual": true,
    "type": "debit",
    "createdAt": "2022-07-17T16:47:19.507Z"
  }
] {...}
```

#### Get Card By ID
- GET _/cards/:id_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Response
```json
{
    "id": 0,
    "userId": 0,
    "title": "My Title",
    "number": "0000000000000000",
    "name": "USER U USERS",
    "cvv": "000",
    "expirationDate": "12/22",
    "password": "0000",
    "isVirtual": true,
    "type": "debit",
    "createdAt": "2022-07-17T16:47:19.507Z"
}
```


#### Delete Card By ID
- DELETE _/cards/:id_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

---

### WIFI Credentials Routes

#### Create WIFI 
- POST _/wifi_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Body
```json
{
  "title":"My Title",
  "name":"USER WIFI",
  "password":"000000",
}
```

#### Get All My WIFIs
- GET _/wifi_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Response
```json
[
  {
    "id": 0,
    "userId": 0,
    "title": "My Title",
    "name":"USER WIFI",
    "password":"000000",
    "createdAt": "2022-07-17T16:47:19.507Z"
  }
] {...}
```

#### Get WIFI By ID
- GET _/wifi/:id_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Response
```json
{
    "id": 0,
    "userId": 0,
    "title": "My Title",
    "name":"USER WIFI",
    "password":"000000",
    "createdAt": "2022-07-17T16:47:19.507Z"
}
```


#### Delete WIFI By ID
- DELETE _/wifi/:id_

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

## Authors
### Bruno Ruotolo

[![GitHub](https://img.shields.io/badge/-BrunoRuotolo-black?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/bruno-ruotolo/)]([https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/](https://github.com/bruno-ruotolo/))
[![Gmail Badge](https://img.shields.io/badge/-brunoaruotolo@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:)](mailto:brunoaruotolo@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-brunoamaralruotolo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/)](https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/)

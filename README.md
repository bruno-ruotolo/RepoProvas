<br />
<div align="center">
    <img src="./.github/repoprovas.png" alt="RepoProvas Logo" width="150">
    <h3 align="center">RepoProvas</h3>
    <p> A Back-End Project
</div>

# About

All of us, at some time, needed to take a look at those old tests, either to review the subjects or to learn it. 
Keeping this in mind, this application was developed to help everyone adding old tests of different subjects and teachers, and to acesss it quickly and practically.

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
  "password": "mypassword", // >= 10 char
  "confirmPassword":"mypassword"
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

### Tests Routes

#### Create Tests
- POST _/tests/create

- Header
```json
{
    "Authorization" : "Bearer <token>"
}
``` 

- Body
```json
{
    "name":"My Test Name",
    "pdfUrl": "https://www.free-scores.com/PDF/mozart-wolfgang-amadeus-turkish-march-662.pdf",
    "categoryId": 1,
    "teacherDisciplineId": 1
}
```


#### Get All Tests By Term and Disciplines
- GET _/tests/disciplines_

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
    "id": 1,
    "number": 1,
    "disciplines": [
      {
        "id": 1,
        "name": "Discipline's Name",
        "teachersDisciplines": [
          {
            "id": 1,
            "teacher": {
              "id": 1,
              "name": "Teacher's Name"
            },
            "tests": [
              {
                "id": 2,
                "name": "Test's Name",
                "pdfUrl": "https://www.free-scores.com/PDF/mozart-wolfgang-amadeus-turkish-march-662.pdf",
                "category": {
                  "id": 2,
                  "name": "Category's Name"
                }
              }, {...}
            ]
          }, {...}
        ]
      }, {...}
    ]
  }, {...}
]
```

#### Get All Tests By Teachers
- GET _/tests/teachers_

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
    "id": 1,
    "name": "Teacher's Name",
    "teachersDisciplines": [
      {
        "discipline": {
          "id": 1,
          "name": "Discipline's Name",
          "term": {
            "id": 1,
            "number": 1
          }
        },
        "tests": [
          {
            "id": 2,
            "name": "Test's Name",
            "pdfUrl": "https://www.free-scores.com/PDF/mozart-wolfgang-amadeus-turkish-march-662.pdf",
            "category": {
              "id": 2,
              "name": "Category's Name"
            }
          }, {...}
        ]
      }, {...}
    ]
  }, {...}
]
```


#### Get All Categories
- GET _/tests/categories_

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
    "id": 1,
    "name": "Projeto"
  }, {...}
]
```

## Authors
### Bruno Ruotolo

[![GitHub](https://img.shields.io/badge/-BrunoRuotolo-black?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/bruno-ruotolo/)]([https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/](https://github.com/bruno-ruotolo/))
[![Gmail Badge](https://img.shields.io/badge/-brunoaruotolo@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:)](mailto:brunoaruotolo@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-brunoamaralruotolo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/)](https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/)

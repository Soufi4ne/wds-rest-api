# Rest API using Express and MongoDB/Mongoose

This project is a REST API built using the Express framework and MongoDB/Mongoose for the database. It features four collections:
- Classes
- Students
- Subjects
- Grades

Each collection allows for full CRUD (Create, Read, Update, Delete) functionality.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
- Node.js
- MongoDB

## Installing
1. Clone the repository
```bat
git clone https://github.com/Soufi4ne/wds-rest-api.git
```

2. Install the dependencies
```bat
npm install
```

3. Start the server
```bat
npm run devStart
```

4. Connect to the database
in the `.env` file, replace `DATABASE_URL` with the url of your MongoDB database.

## API Endpoints 
### Classes 
- `GET /classes` : Retrieves all classes 
- `GET /classes/:id` : Retrieves a specific classe by id
- `POST /classes` : Creates a new classe
- `PUT /classes/:id` : Updates a specific clase by id
- `DELETE /classes/:id` : Deletes a specific clase by id

### Students
- `GET /students` : Retrieves all students 
- `GET /students/:id` : Retrieves a specific student by id
- `POST /students` : Creates a new student
- `PUT /students/:id` : Updates a specific student by id
- `DELETE /students/:id` : Deletes a specific student by id

### Grades
- `GET /grades` : Retrieves all grades 
- `GET /grades/:id` : Retrieves a specific grade by id
- `POST /students` : Creates a new grade
- `PUT /students/:id` : Updates a specific grade by id
- `DELETE /students/:id` : Deletes a specific grade by id

### Notes
- `GET /subjects` : Retrieves all subjects 
- `GET /subjects/:id` : Retrieves a specific subject by id
- `POST /subjects` : Creates a new subject
- `PUT /subjects/:id` : Updates a specific subject by id
- `DELETE /subjects/:id` : Deletes a specific subject by id

## Built With
- Express 
- Mongoose

## Author
- [@Soufi4ne](https://www.github.com/Soufi4ne)

## Support
For support, you can tip [@octokatherine](https://www.github.com/octokatherine), because she is the one who made [readme.so](https://readme.so/editor) the tool that im using to make this readme file 

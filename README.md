<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Content Rating API - Node | Fastify</h3>

  <p align="center">
    This is the repository for the "Content Rating" API, a backend service built with Node and Fastify.
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About the Project

The Content Rating API is a backend service built with Node and Fastify, which can be run locally or via Docker. A complete CRUD system has been created for content/post management, including user registration and login endpoints, as well as endpoints for rating posts on a scale from 1 to 5.
<br />


Note: All endpoints are protected except for login and registration, requiring a JWT token to be passed in requests.

<br />

<!-- TECHNOLOGIES USED -->
## Technologies Used

* Node
* Fastify
* MongoDB
* Mongoose
* Jsonwebtoken
* Bcrypt
* Jest
* Zod
* Postman


<!-- GETTING STARTED -->
## Getting Started

The API can be run locally or using Docker. If you're running locally, you'll need a MongoDB connection string. This step can be skipped if using Docker, as it will create three containers: a MongoDB container, a testing container to run all unit tests, and finally, the container running the API.

### Installation

#### Running with Docker

1. Clone the repository
   ```sh
   git clone git@github.com:amandapccs/content-manager.git
   ```
2. Run the command:
   ```sh
   docker compose up
   ```
3. The application will be running at `http://localhost:3000/`

#### Rodando localmente

1. Clone o repositório
   ```sh
   git clone git@github.com:amandapccs/content-manager.git
   ```
2. Create a `.env` file in the root of the repository with the "MONGO" variable using your MongoDB connection string.
3. Install dependencies with the command:
   ```sh
   npm install
   ```
4. Start the application
   ```sh
   npm run dev
   ```
5. The application will be running at `http://localhost:3000/`

## Endpoints

| Method | Endpoint          | Description                                                                                   |
|--------|--------------------|-----------------------------------------------------------------------------------------------|
| POST   | /register          | User registration with name, email, and password                                             |
| POST   | /login             | User login                                                                                   |
| POST   | /posts             | Create posts with the following properties: id, title, description, category, thumbnailUrl, contentUrl |
| PUT    | /posts/:id         | Edit posts                                                                                   |
| GET    | /posts/:id         | Access a post                                                                                |
| DELETE | /posts/:id         | Delete a post                                                                               |
| POST   | /ratings           | Create a rating with the following properties: user (user ID), post (post ID), and rating (number from 1 to 5) |
| GET    | /ratings/:id       | Access the rating with details about the post and the rater                                |
| PUT    | /ratings/:id       | Edit the rating with the same properties as the POST endpoint                               |
| DELETE | /ratings/:id       | Delete the rating                                                                           |
     

### Tests
Unit tests have been implemented for the API services using Jest.


<!-- CONTACT -->
## Contact

Amanda Soares - amandchen@hotmail.com - <a href="https://www.linkedin.com/in/amandapccs/">LinkedIn</a>
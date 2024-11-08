**SuperheroCatalog**.

**SuperheroCatalog is a web application for managing a superhero catalog. Users can browse existing superheroes, create new ones, edit existing ones, as well as upload, replace, and delete superhero images. All data is stored in a PostgreSQL database, which ensures the safety of information about superheroes.

## Technologies

The project is built using the following technologies:

- **Vite** is a fast builder for React applications that provides instant page refreshing using HMR (Hot Module Replacement).
- React is a popular library for building interfaces.
- TypeScript** is a superlayer for JavaScript that adds typing and helps to avoid many errors at the compilation stage.
- Node.js + Express** - for building the server side of the application.
- PostgreSQL is a relational database for storing information about superheroes.
- Sass is a CSS preprocessor that allows you to write more convenient styles.
- ESLint - for checking the quality of the code.

## Functionality

- Viewing superheroes stored in the database.
- Create new superheroes with the ability to add images.
- Editing existing superheroes.
- Upload, delete, and replace superhero images.

## Steps to get started.

### 1. Clone the repository

First, clone the repository:

git clone https://github.com/your-username/hero-catalog.git
cd superhero-catalog
code superhero-catalog

To run this project on your computer, follow these steps:

### 1. Setting up and running the backend

1. Change to the `backend` folder:

   cd ./backend

2. Install the dependencies

npm install

Install the dependencies for the backend:

npm install
Set up the PostgreSQL database:

Install PostgreSQL on your computer. To do this, you can use the official link: Download PostgreSQL.

Create a database for the project:

psql -U postgres
CREATE DATABASE hero_catalog;
Install all the necessary tables and data. If you have a SQL dump with the database, you can load it with:

psql -U postgres -d hero_catalog < full_backup.sql

Configure the Environment Variables
Create a .env file in the backend folder with the following content:

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=root
DB_NAME=postgres
DB_PORT=5432
FRONTEND_URL=http://localhost:5173
PORT=8080

Start the server:

npm run dev


2. Setting up and running the frontend
Change to the root folder of the project:

cd ..
Install the dependencies for the frontend:

npm install

Create a .env file in the backend folder with the following content:

VITE_SERVER_URL=http://localhost:8080

Launch the frontend using Vite:
npm run dev
Go to http://localhost:5173 in your browser.

3. How to work with the database
All information about superheroes is stored in a PostgreSQL database. You can perform the following operations:

Viewing superheroes: Getting all the superheroes that are stored in the database.
Create a new superhero: Using the form on the frontend, you can add new superheroes.
Edit a superhero: You can change the properties of existing superheroes.
Upload images: You can upload and replace images for each superhero.
Delete a superhero: Delete a superhero from the database.

This **README.md** file includes all the necessary instructions to set up both the frontend and backend environments, configure PostgreSQL, and get your project running.

Let me know if you need any additional changes!

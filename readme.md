# Currency converter
#### This is a currency converter made as pre-requisite for a selection proccess. 
<br />

## Purpose
#### The purpose of this project is to convert a monetary value between two currencies, store the conversion information in a database, and get it back in query format.

<br />

## Features
> - Register a user
> - List registered users.
> - Convert a money value between two currencies.
> - List a user's conversion transactions. This can be paginated.

<br />

## Main technologies :technologist:
> [![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev) The project was built using Node JS. <br/><br/>
> [![My Skills](https://skillicons.dev/icons?i=express)](https://skillicons.dev) Express is the most popular and simple Node.JS web framework, to create web apps and APIS. And in this case was used to control all the routes and HTTP requests and responses. <br/><br/>
> [![My Skills](https://skillicons.dev/icons?i=sqlite)](https://skillicons.dev) SQLite is one of the most used database engines in the world, and it's an embedded SQL database engine.  for this reason, it was used as database to store the user information, and the currencies conversions made by a user. </br></br>
> - Sequelize: Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, SQLite and many others. And in this case was used to map the objects, and make the database operations like SELECT, INSERT, etc. using javascript instead of pure SQL.
> - Swagger: Swagger allows you to describe your API structure and document it in a simple and beautiful way. In addition to providing an interface for testing the API without the need to use any third-party tools.
> - Express validator: is a set of express.js middleware that wraps around to validate HTTP requests in a simple and practical way, specifying several validation rules without the need to write a bunch of if and elses.
> - Axios: 

<br />

## Layer separation
The project was separated into 4 layers:
<ol>
    <li>Routes: contains the http route files, with the specific calls for each http operation, and the respective functions that execute the chosen operation.</li>
    <li>Middlewares: contains the functions that carry out the validation of HTTP calls as well as the passing of parameters to the object control functions, and the return of response codes for HTTP requests.</li>
    <li>Controllers: contains functions for manipulating objects, calculations, and calls to the database layer.</li>
    <li>DB Models: contains database object definitions, such as object name, object properties and data type definitions.</li>
</ol>
<br />

## How to use
<ul>
    <li>Requirements</li>
    <ul><li>Download and install Node JS v18.12.1 or higher</li></ul>
    </br>
    <li>Installation</li>
        <ol>
            <li>Access the repository through [this link](https://github.com/digicabral/currency-converter) and download the zip file.</li>
            <li>Extract the zip file downloaded to a folder in your computer and open it. </li>
            <li>Open this directory on your command line tool.</li>
            <li>Create the enviroment variables as the .env.example file at the root folder shows. </li>
                <ul>
                    <li>To create </li>
                </ul>
            <li>To run run the dev environment type:
                ```
                npm run dev
                ```
            </li>
        </ol>
</ul>
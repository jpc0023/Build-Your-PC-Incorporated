# Build-Your-PC-Incorporated 

## Purpose
    The purpose of this project is to create a website that will help the user  
build their own desktop computer using the parts avaliable on the site. The
user is able to login and review the parts he/she is interested in and use
those to find out if the user can afford the total of parts. The project was built based on the principles of MERN. It consists of a client directory and a server directory. 

### Table of Contents
- [Installation Instructions](#installation-instructions)
- [Deployment Link](#deployment-link)
- [Software Used](#software-used)
- [Credits](#credits)

## Installation Instructions

1. Local Installation

    First, run the script "npm install" in the command line on the root
directory of the project. Navigate to the server directory on the command line.
Pay attention to the auth.js file(in the utils directory) and the connection.js 
file(in the config file). We recommend creating an .env file in the server 
directory for the jwt secret in the auth.js file. In the .env file, create 
a variable for your jwt secret and expiration date and store the values there.
In the auth.js file, modify the value for secret and expiration to the 
.env variables. Next check the version of mongoose by entering "npm list" on 
the command line. If the version of mongoose is 6.0.0 or up, comment out the
options in mongoose.connect. Then run the line "npm run seed" on the command line. 
Create another command line window for the client and navigate towards the client
directory (leave the 1st commend line in the server directory). Finally, run 
"npm start" in the server command line 1st, then "npm start" in the client command line.   



### Deployment link
Here is the link to the deployed project:
https://build-your-pc-incorporated.herokuapp.com/

### Software Used
1. Client Software

- apollo/client package
- bindings package
- create-react-app packages (several packages that are installed with react)
- file-uri-to-path package
- graphql package
- jwt-decode package
- nan package
- stripe package


2. Server Software

- apollo-server-express package
- bcrypt package
- dotenv package
- express package
- graphql package
- jsonwebtoken (jwt) package
- mongoose package
- nodemon package
- stripe package


3. Root Software

- concurrently package

## Credits
- James Crowell (aka jpc0023)
- Semi Harris (aka SemiHarris)
- Pao Herr (aka p-her)
- Michael Brown (aka randomguy1234)
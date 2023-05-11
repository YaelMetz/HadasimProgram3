# HadasimProgram3
1. Activate the program:

   Open the "Postman" api in the computer and then to add and search in Postman, follow these steps:
    1. Create a new request by clicking on the "New" button in the top left corner.
    2. Choose the HTTP method you want to use (e.g. GET or POST) from the drop-down menu.
    3. Enter the URL for the API endpoint you want to interact with in the
     "Enter request URL" field: "http://localhost:3000/" + the name of the table.
    4. If you want to search for a specific tuple/s write in addition to the URL: "/"+ the number ID of the pationt. 
    5. Click on the "Send" button to send the request and view the response in the "Response" section below.
     
     Post pationt:
    ![image](https://github.com/YaelMetz/HadasimProgram3/assets/79614198/0448adad-06a5-4eb4-be66-2b23d532470a)
     
     Get specific pationt vaccinations':
     ![image](https://github.com/YaelMetz/HadasimProgram3/assets/79614198/25caaf24-7014-4b91-a7cc-b05d37415839)

     Get all the pationts illness':
    ![image](https://github.com/YaelMetz/HadasimProgram3/assets/79614198/dfb5aaca-66b5-4389-9152-703b3177fcc4)

     Get an illness of a pationt that doesn't exist:
     ![image](https://github.com/YaelMetz/HadasimProgram3/assets/79614198/ca4b942c-0a3d-410b-b5d5-9c5fbea54ee6)
     
     
2. External dependencies
       
    Installing Node.js and NPM
    1. Download the latest version of Node.js from the official website [https://nodejs.org](https://nodejs.org/en/).
    2. Run the installation wizard and follow the prompts to install Node.js and NPM.
    3. Verify that Node.js and NPM are installed correctly by running the following commands in your terminal the next lines:
       node -v
       npm -v

    Setup of the server:
    After npm installed, create a new Nest project with the following commands in cmd:
    $ npm i -g @nestjs/cli
    $ nest new project-name    
    
    Running the application:
    In order to run the application write the folowing command in the terminal of the project.
    This command will watch your files, automatically recompiling and reloading the server:
    $ npm run start:dev
    
    Installing MySQL and TypeORM
    1. Download and install the MySQL Community Server from the official website  [https://dev.mysql.com/downloads/mysql](https://dev.mysql.com/downloads/mysql/).
    2. Download and install MySQL Workbench from the official website [https://dev.mysql.com/downloads/workbench](https://dev.mysql.com/downloads/workbench/).
    3. Open MySQL Workbench and create a new connection to your local MySQL server.
    4. Install TypeORM by running the following command in your terminal
       npm install typeorm --save
       
    Use TypeORM to connect to your MySQL database and perform CRUD operations:
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: *,
      username: 'root',
      password: '*',
      database: 'server-with-db',
      autoLoadEntities: true,
      synchronize: true,
     }),

3. Assumptions made:
     I split the corona information details for a patient into two modules.
     One for vaccinations and the other for illness so as not to limit the plan's options if in 
     the future it is necessary to increase the number of vaccinations beyond 4 or the possibility 
     of getting sick more than once.
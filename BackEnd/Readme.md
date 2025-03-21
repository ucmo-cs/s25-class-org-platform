# Set up the Backend
1. Ensure you have IntelliJ and Java 21 or higher.
2. Ensure your database is setup and running. See Database/Readme for more info
3. If you didn't use the default settings, named the database user something other than 'user' or gave the user a password, go to BackEnd/src/main/java/resources/application.properties and update spring.datasource.url, spring.datatsource.username, and spring.datasource.password.
4. Right click on BackEnd/pom.xml click on 'Maven' at the bottom and select 'Reload Project'. This ensures the dependencies are up to date.
5. Now, go to BackEnd/src/main/java/com.senior_project.senior_project/SeniorProjectApplication and click on the run button next to the main function. This should launch the server
6. If the server launches successfully, you can go to [http://localhost:8080/](http://localhost:8080/), and get a Hello World message to ensure it is running and can be connected to.

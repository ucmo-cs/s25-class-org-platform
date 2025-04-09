# Creating the Datatbase
1. Install [MySQL](https://dev.mysql.com/downloads/installer/). You will definetly need the Server, and while not required, the Workbench is will make things easier.
2. Create a server. Like below using the workbench. Ensure the server is running. It should be just after an install.
![image](https://github.com/user-attachments/assets/f692a1fa-f496-452c-bc02-f23e66367f7d)
3. In the server iport the data from DumpXXXXXXXX.sql. In the workbench this can be done by going to Server/Data Import. Then select 'Import from self-Contained File'. Select the dump file, and then click start import at the bottom.
![image](https://github.com/user-attachments/assets/a67c4a43-d82f-4a7b-996b-4393625966db)
4. Next add a user named 'user' with no password that can SELECT, INSERT, UPDATE, and DELETE on the seniorproject shcema. I reccomend limiting this user's access to just these things, but it's not required. To add a new user in the workbench go to Server/Users and Privileges. Then 'Add Account' and begin updating settings. Go to the Schema Privileges tab to update the user's access
![image](https://github.com/user-attachments/assets/69652a66-8073-4f3f-bac9-02c519ec309e)
![image](https://github.com/user-attachments/assets/27b1edde-8137-4a9d-8c26-37cabc147bb6)

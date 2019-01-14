# vuejs-nodejs-chart
A simple application that displays BSE and DJIA indexes in a chart for comparison. The data is monthly data for 5 years from 2013 Dec to 2018 Dec.

NOTE: The application requires a password to be set in environment variable to connect to DB.

To start, perform the following steps:
1. Install nodejs
2. Clone repository
3. run command "npm install", then run "node app.js"
4. navigate to ui/indexapp
5. run command "npm install"
6. run command "npm run dev"
7. If not automatically started started, run browser and hit http://localhost:8080/


The data is already loaded to DB. In order to remove data, fetch data, setup data etc, please hit the following URLs:

1. Remove Data - http://localhost:3000/api/removeData
2. Fetch Data - http://localhost:3000/api/fetchData
3. Setup Data - http://localhost:3000/api/setupData

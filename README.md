# ShopBridge
 
 ### How to run Backend(.Net core 2) project

1) Download all the files
2) Open this project in Visual studio having .Net core 2
3) Goto DemoTest/appsetting.json file and change the connection string according to you e.g

"ConnectionStrings": {
    "Default": "Server=YourServerName; Database=ShopBridgeDb; Trusted_Connection=True;"
  },
  
  OR
  
  "ConnectionStrings": {
        "Default": "Server=YourServerName; Database=ShopBridgeDb; User=YourDBUsername; Password=YourDBPassword;"
  },

4) In Visual Studio from menu click on Tools --> NuGet Package Manager --> Package Manager Console 
5) On below open one window select Default Project as DemoTest.EntityFrameworkCore and run command PM> Update-Database
6) It will create the table structure in your database by Database First Method
7) Then right click on solution from solution explorer and select Build Solution
8) Right click on DemoTest project from solution explorer and select Set as Startup Project
9) Run the project by clicking IIS Server
10) It will redirect to https://localhost:44369/weatherforecast but replace 'weatherforecast' to 'swagger' like this https://localhost:44369/swagger/index.html and your API's are there.


 ### How to run Frontend(Angular 10) project

1) Download all the files
2) Open the project path in cmd and run command: npm install
3) After installing all packages run command: npm start
4) After starting the project goto http://localhost:4200/dashboard 

### Time taken for tasks

1) Backend with .Net Core 2 by Database first approach: 3-4 hrs
2) Backend-Frontend Integration : 3 hrs
3) Frontend template setup: 1 hr
4) Form Validations : 1 hr
5) UI functionality: 3 hrs

### Functionality coverd

1) Listing of available products in inventory
2) Addition of new product
3) View details of the product
4) Delete Product

 ### Screenshots
 
 1) ShopBridge Dashboard screenshot: 
 
![screencapture-localhost-4200-dashboard-2020-11-15-20_12_19](https://user-images.githubusercontent.com/68971171/99187835-ecf87300-277e-11eb-948c-d99f6f5fb046.png)

2) Add product page with validations

![screencapture-localhost-4200-dashboard-add-product-2020-11-15-20_16_57](https://user-images.githubusercontent.com/68971171/99188030-ee766b00-277f-11eb-864b-485892ad639b.png)

3) View product details page

![screencapture-localhost-4200-dashboard-add-product-id-7-2020-11-15-20_21_56](https://user-images.githubusercontent.com/68971171/99188112-42814f80-2780-11eb-8f87-f4f338af3146.png)

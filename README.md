# ShopWebsite

-prerequicites: 

    -ruby   :https://www.ruby-lang.org/en/documentation/installation/
    -sass   :http://sass-lang.com/install
    -node   :https://nodejs.org/download/
    -bower  :http://bower.io/
    -mongod :http://docs.mongodb.org/manual/installation/

How to setup the enviroment:
  on front directory
  -npm bower install
  on server directory
  -npm install
  

how to run the page:
    run the server:
    -run mongod
    -console 1 : go into the server folder and run 
        | node app.js
        
    page should now be visible on your page: 127.0.0.1:8000

to modify code
    go into the front/components directory:
    to save modifications 
        -console 2 : go into the front folder and run 
        | grunt

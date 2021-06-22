
npm run test will run the jasmine unit tests
npm run start will start the server listening locally on port 3000

I have a kubernetes cluster setup for testing, I need to integrate cloud storage as right now photos are stored locally to the containers.

run these to test my service:
http://localhost:3000/photo //health endpoint
http://localhost:3000/photo/list //shows photos avaialble for resize
http://localhost:3000/photo/cache //shows cached photos with sizes in name
http://localhost:3000/photo/fjord?width=100&height=100 // will resize and return
http://localhost:3000/photo // with a put and an image attached will uplaod your own photo there is a test.html in the porject to load

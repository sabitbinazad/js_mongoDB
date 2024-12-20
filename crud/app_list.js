const mongoose = require('mongoose');
const Employee = require('./employee');

//this was incorrect 
//const uri =  "mongodb://root:gyL2Ou9rBNt1nLnZrZR3tfkX@localhost:27017";

// correct one by myself
const uri =  "mongodb://root:gyL2Ou9rBNt1nLnZrZR3tfkX@172.21.80.133:27017";


mongoose.connect(uri,{'dbName':'employeeDB1'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })
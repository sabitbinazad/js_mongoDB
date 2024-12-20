const mongoose = require('mongoose');
const Employee = require('./employee');


//ibm code correction
const uri =  "mongodb://root:gyL2Ou9rBNt1nLnZrZR3tfkX@172.21.80.133:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })



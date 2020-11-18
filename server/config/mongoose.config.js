const mongoose = require('mongoose');
    
module.exports = db_name => {


    mongoose.connect(`mongodb://localhost/${db_name}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(() => console.log(`DB connection established ${db_name}`))
        .catch(err => console.log("Something went wrong: ", err));
}
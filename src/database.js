import mongoose from 'mongoose'

//mongoose.connect("mongodb://localhost/apirest1",
  mongoose.connect("mongodb+srv://tp_irso:tp2020@clase-db.cdqxg.mongodb.net/Clase-DB?retryWrites=true&w=majority",
    
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true

})
    .then(db => console.log('DB CONECTADA'))
    .catch(Error => console.log(Error))
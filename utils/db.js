const mongoose = require('mongoose');

// Kredensial otentikasi
const username = 'root';
const password = 'root';

// URL MongoDB dengan kredensial
const mongoURL = `mongodb://${username}:${password}@127.0.0.1:27017/admin`;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("we're connected!"));





// // memambah 1 data
// const contact1 = new Contact({
//     nama: "fanthom",
//     nohp: "08812579899",
//     email: "fanthom@gmail.com",
// })

// // simpan data ke collection
// contact1.save().then((contact) => console.log(contact));

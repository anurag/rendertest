
const app = require('express')()
const firebase = require('firebase')

var config = {
    apiKey: "AIzaSyC3BNgKwynbLsVngmQe44nwI_rEMImvEXM",
    authDomain: "timkay.firebaseapp.com",
    databaseURL: "https://timkay.firebaseio.com",
    projectId: "project-6304053213456377000",
    storageBucket: "",
    messagingSenderId: "93633536571",
};

firebase.initializeApp(config)

let root = firebase.database().ref().child('rendertest')

app.get('/', (req, res) => {
    root
        .child('counter').transaction(value => (value || 0) + 1)
        .then(({committed, snapshot}) => res.send('Hello, World! Your unique value is ' + snapshot.val()))
        .catch(error => {
            console.log('error', error)
            res.send('error')
        })
})

app.listen(80, () => console.log('Hello world  app is listening'))

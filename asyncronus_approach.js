const name = require('./names')
require('./utils')

const {readFileSync, writeFileSync} = require('fs')

readFileSync('./content/first.txt','utf8',(err,result) => {

    if(err){
        console.log(err)
        return;
    }
    const first = result 
    readFileSync('./content/second.txt','utf8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result 

        writeFileSync('./content/asyncronus.txt',
                    "this is the first and second",
                    (err, result) => {
                        if(err){
                            console.log(err)
                            return;
                        }
                        console.log('done with this task')
                    })

    })
})

console.log('starting a new task')
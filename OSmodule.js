const os = require('os')

const user = os.userInfo()

console.log(user)

console.log('the system uptime is '+os.uptime())

const currentOS = {
    name:os.type(),
    realese:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}


console.log(currentOS)
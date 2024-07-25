const newpass=require("generate-password")
// console.log(newpass)


let password= newpass.generate({
    length: 15,
    numbers: false,
    uppercase:true,
    symbols:true,
    lowercase:true
})
console.log(password)
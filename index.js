
const os = require("os")
const fs = require("fs")
const crypto = require("crypto")
const data = require("./data")

var value = os.userInfo()
var user = data("Prograd", 2019, "MCA")
const password = crypto.createHmac('sha256',"secret").update('Prograd').digest('hex');

fs.appendFileSync("message.txt", "Prograd Details: \n")
fs.appendFileSync("message.txt", `\tUserId ->          ${value.uid},\n`)
fs.appendFileSync("message.txt", `\tName ->            ${user.name},\n`)
fs.appendFileSync("message.txt", `\tYear ->            ${user.Year},\n`)
fs.appendFileSync("message.txt", `\tQualification ->   ${user.Qualification},\n`)
fs.appendFileSync("message.txt", `\tUserName ->        ${value.username},\n`)
fs.appendFileSync("message.txt", `\tPassword ->        ${password}`)
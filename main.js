const fs = require('fs')
var geoip = require('geoip-lite');

var path = process.argv.slice(2);
var folder = process.argv.slice(3);
if(path == "-h"){
    console.log("to use this applicatie the first argument should be a readable file \n to create a file per country use the -f flag")
}
else{
    var r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;

const data = fs.readFileSync(path[0], "utf8");
var lines = data.split("\n");

lines.forEach((element) => {
    ip = element.match(r)
    if(ip !== null){
        var test = (geoip.lookup(ip[0]))
        if(test !== null){
            if(folder == "-f"){
                if (!fs.existsSync("./countries")) {
                    fs.mkdirSync("./countries")
                }
            fs.appendFileSync(("./countries/" + test.country + ".txt"), ip[0] + "\n")
            }
            else{
                console.log(ip + " = " + test.country)
            }

        }
    }
  
} )
}

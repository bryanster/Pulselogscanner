const fs = require('fs')
var geoip = require('geoip-lite');

var path = process.argv.slice(2);

var r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;

const data = fs.readFileSync(path[0], "utf8");
var lines = data.split("\n");

lines.forEach((element) => {
    ip = element.match(r)
    if(ip !== null){
        var test = (geoip.lookup(ip[0]))
        if(test !== null){
            console.log(ip + " = " + test.country)
        }
    }
  
} )
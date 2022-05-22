var fs = require("fs");
var stringify = require("csv-stringify");

//json de los datos

var data = [
    {"Country": "El Salvador", "Official Lenguages(s)": "Spanish"},
    {"Country": "India", "Official Lenguages(s)": "Hindi, English"}

];

stringify.stringify(data , {
    header: true
}, function (err, output) {
    fs.writeFileSync(__dirname+"/data.csv", output);
});
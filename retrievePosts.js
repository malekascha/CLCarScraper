var xray = require('x-ray')();
var fs = require('fs');

function retrievePosts(){
  var contents = fs.readFileSync('listings.json');
  var links = JSON.parse(contents);
  var results = [];
  var counter = 0;
  links.forEach(function(item){
    var url = item.href;
    xray(url, 'div.mapAndAttrs',
      {
        make: 'div.mapbox + p.attrgroup>span>b',
        details: ['p.attrgroup + p.attrgroup>span']
      })(function(err, result){
        if(err) {
          console.log('Error reading from '+url+' : ', err);
        }
        var formatted = {};
        formatted.CLpost = item.title;
        if(result.make){
          formatted.make = result.make;
        }
        result.details.forEach(function(item){
          var info = item.split(': ');
          formatted[info[0]] = info[1];
        })
        results.push(formatted);
        counter++;
        if(counter === links.length){
          fs.writeFile('posts.json', JSON.stringify(results));
        }
      })
  });
};

retrievePosts();
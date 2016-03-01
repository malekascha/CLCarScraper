var xray = require('x-ray')();

function retrieveListings(numOfPages){
  xray('https://sfbay.craigslist.org/search/cta', 'p.row', 
    [{
      title: 'span#titletextonly',
      price: 'span.price',
      href: 'span.txt>span.pl>a@href'
    }]
  )
  .paginate('a.button.next@href')
  .limit(numOfPages)
  .write('listings.json');
};

retrieveListings(1);
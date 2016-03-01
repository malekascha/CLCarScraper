# CLCarScraper

Retrieves listings and posts from Craigslist cars+trucks for sale section

# How to use

First, install required dependencies:

```
npm install
```

To retrieve all car listings in the SF Bay Area, use the following command. By default, only the first page of search results will be retrieved. To retrieve more, go to the file retrieveListings.js and change the number on line 16 to the number of pages you want scraped. The results will be in a file called listings.json.

```
npm run retrieve-listings
```

To get the details of each listing, run the following command. NOTE: You must retrieve listings before using this command. The results will be in a file called posts.json.

```
npm run retrieve-posts
```


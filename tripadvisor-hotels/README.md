# TripAdvisor Hotels Scraper

Get data from TripAdvisor fast and easily. It's suitable for such use cases as scraping TripAdvisor emails, addresses, awards and many more attributes of hotels on TripAdvisor.

# Input - TripAdvisor Crawler

Enter the location, state how many items you want to get (max items) and download the data from the dataset.
For the input example, check the INPUT tab.

# Output - TripAdvisor Export

You can extract a variety of data about a places listed on Tripadvisor, including some of the most essential information, such as `email`, `phone`, `price` and `reviewTags`. Data can be downloaded in various formats, such as `JSON`, `CSV`, `XML` and others. For more details, see the [Apify Docs](https://www.apify.com/docs).

**Here is an example of `JSON` output:**

```json
[
  {
    "id": "8481561",
    "type": "RESTAURANT",
    "name": "Two Chicks Cafe",
    "awards": [
      {
        "year": "2021",
        "name": "Certificate of Excellence 2021"
      },
      {
        "year": "2020",
        "name": "Certificate of Excellence 2020"
      }
    ],
    "rankingPosition": "9",
    "priceLevel": "$$ - $$$",
    "category": "restaurant",
    "rating": "4.5",
    "isClosed": false,
    "isLongClosed": false,
    "phone": "+1 504-407-3078",
    "address": "901 Convention Center Blvd #109, New Orleans, LA 70130-1769",
    "email": "info@twochickscafe.com",
    "cuisine": [
      "American",
      "Cajun & Creole",
      "Healthy",
      "Cafe",
      "Vegetarian Friendly",
      "Vegan Options",
      "Gluten Free Options"
    ],
    "mealTypes": [],
    "hours": [
      [
        {
          "open": 480,
          "close": 840
        }
      ],
      [],
      [
        {
          "open": 480,
          "close": 840
        }
      ]
    ],
    "latitude": "29.942226",
    "longitude": "-90.0651",
    "webUrl": "https://www.tripadvisor.com/Restaurant_Review-g60864-d8481561-Reviews-Two_Chicks_Cafe-New_Orleans_Louisiana.html",
    "website": "http://www.twochickscafe.com/",
    "rankingDenominator": "1606",
    "rankingString": "#6 of 1,578 Restaurants in New Orleans",
    "numberOfReviews": "599",
    "reviewsCount": 0,
    "reviews": [],
    "reviewTags": [
      {
        "text": "brunch",
        "review_count": 38
      },
      {
        "text": "french toast",
        "review_count": 74
      },
      {
        "text": "crab cake benedict",
        "review_count": 15
      }
    ]
  }
]
```

# TripAdvisor Cost of Usage
Apify provides you with $5 free usage credits to use every month on the [Apify Free plan](https://apify.com/pricing) and you can get up to 200,000 results from this Tripadvisor Hotel Scraper for $5. So it will be completely free for 200k results!

But if you need to get more data regularly you should grab an Apify subscription. We recommend our [$49/month Personal plan](https://apify.com/pricing) - you can get up to 2 million hotels every month! Or if you want to scrape even more, grab our [Team plan](https://apify.com/pricing)!

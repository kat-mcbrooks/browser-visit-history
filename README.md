# Browser visits

**Node | JavaScript | Express**

## My program

Access the first URL here: https://zedify-kb.herokuapp.com/
View the user-agent strings here: https://zedify-kb.herokuapp.com/visitHistory

I set up a server-side web app using Node and Express. So that the webpages can be easily accessed from phones (as per the instructions), I deployed the app using Heroku.

- Index.js is the entry point to the application. For simplicity, the routes are defined here, rather than in a separate router file. When requests are made to the server, the app looks for the relevant route here.
- VisitHistory model is responsible for keeping a log of the visits to the first URL. It logs the timestamp and the user-agent string.

#### How it works

1. When a user visits the first URL, a GET request is made to the server. The app.get '/' route calls the model's addVisit function, passing in the user-agent string. The user-agent string is found within the headers of the request(req).
   The addVisit function, defined in the visitHistory.js file, adds the user-agent string and the timestamp to the log.
   Express's res.render function renders the index view. It sends the rendered HTML string to the client
2. When a user visits the /visitHistory URL, a GET request is made to the server. The app.get '/visitHistory' route calls the model's getVisitHistory function. getVisitHistory returns the log that contains each visit's agent-url and timestamp.
   The log (an array of objects) is passed in to the res.render function so that the visitHistory view has access to it. Within the visitHistory view, we iterate over the log to display each visit as a list item.

As the instructions said to spend no more than 30 minutes or so on this task, I opted for a simple design that uses .ejs files rather than creating a separate frontend app with a framework. I recognise that it is perhaps not the most well structured design, and I would happily receive advice on how to improve it. Some issues I've noticed that should be improved include:

- I have captured the useragent string within a GET request route, but I wondered if it might be more appropriate to use a POST request because we are _adding_ data to the model layer. However, I am accustomed to using html forms to send data back to the server as POST requests, and this was not appropriate for this task. Moreover, the task was to capture the user-agents from when a user visits the url.
- In the interest of time, and as I was instructed the system did not need to be long lasting, I did not use a database and instead am simply storing the agent urls as state within the model. To make the system more robust, one would use a database.
- Testing. As I was instructed to spend no more than 30 minutes on this task, I did not look in depth at how to robustly test the app i.e. I used Postman to check that I could successfully make GET requests to the URLs and that I was correctly retrieving the user-agent from the headers.
- There are many ways the app could be made more scalable. One would be to use express.router when more routes and models are introduced
- Add error handling!

## Task Instructions

Set up a mechanism to capture user-agent strings from visits to a website.

Step 1: We'd like to receive from you a URL we can browse to from a phone and another URL we can browse to which will list the user-agent strings of browsers that accessed the first URL, with a timestamp of the access.

Step 2: We'd like a brief summary of how you built the solution and how it works.

Notes & timeframe:
The technical approach and solution is entirely up to you. It doesn’t need to be a long-lasting system i.e. it can be as temporary as needed. We're most interested in the explanation of the solution you create. How you do this is up to you and we don’t expect you to spend more than half an hour or so on this.

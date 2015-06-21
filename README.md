###Chrome Extension Overview
This is an example Chrome extension for interacting with the [Genius API](http://genius.com/developers). It adds functionality to Chrome's Omnibox (the search bar) that allows users to type the keyword 'Genius' followed by any query. This returns search results of the query from Genius in the suggestion dropdown of Chrome's Omnibox.

###Usage
To use this extension, simply sign up for the [Genius API](http://genius.com/developers). Once you are signed up, replace ```var accessToken="<your access token>"``` with the access token that you are given by Genius. To test this chrome extension out locally, you need to go to your Chrome Extensions and enable "Developer Mode". Then click "Load unpacked extension" and select the folder you cloned this repository into. Now, try typing a query after the keyword "Genius", such as "Genius kanye west".

###What next?
You can use this as an intro to using the Genius API and to writing Chrome Extensions. Maybe you want to make an app that finds and flags songs on Genius without annotations, or an app that alerts you whenever a presidential candidate makes a speech so that you can annotate it. Perhaps you'd like a Chrome extension that allows you to easily create a list of favorite songs that when clicked, brings up their Genius pages, or an extension that automatically uploads a poem every day to Genius. Whatever it is you'd like to create, go forth and create it!

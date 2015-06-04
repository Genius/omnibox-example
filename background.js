chrome.omnibox.onInputChanged.addListener(function (query, suggest) {
  var accessToken = '<your-access-token>';

  fetch('https://api.genius.com/search?access_token=' + accessToken + '&q=' + encodeURIComponent(query)).then(function (response) {
    response.json().then(function (data) {
      suggest(data.response.hits.map(function (hit) {
        return {
          content: hit.result.url,
          description: hit.result.title + ' by ' + hit.result.primary_artist.name
        };
      }));
    });
  });
});

chrome.omnibox.onInputEntered.addListener(function (content) {
  chrome.tabs.update({ url: content });
});

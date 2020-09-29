const NG_DOMAINS = new Set([
  'www.youtube.com',
  'twitter.com',
  'b.hatena.ne.jp',
])

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  const url = changeInfo.url
  if(typeof url !== 'string') return

  const parsed = new URL(url)
  if(NG_DOMAINS.has(parsed.host)) {
    chrome.tabs.update(tabId, { url: chrome.extension.getURL('redirect.html') });
  }
})

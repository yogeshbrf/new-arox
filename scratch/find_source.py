import urllib.request
import urllib.parse
import re

query = '"logoutButton" "doorway" "button-text"'
url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(query)
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        for match in re.finditer(r'<a class="result__url" href="([^"]+)">', html):
            print(match.group(1))
except Exception as e:
    print('Error:', e)

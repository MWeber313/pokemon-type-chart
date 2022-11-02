from contextlib import nullcontext
import requests

cache = dict()
pokeTYPE = None 

class Pokemon:
    def show_cache(self, cache):
        for i in cache:
            print(i)
        
    def set_type(self, type):
        pokeTYPE = type
        print(pokeTYPE)
    def get_article_from_server(url):
        response = requests.get(url)
        return response.text

    def get_article(self, url):
        if url not in cache:
            cache[url] = self.get_article_from_server(url)
        return cache[url]


print("Select Pokemon Type")
pokeType = input()
pokeURL = f"https://pokeapi.co/api/v2/type/{pokeType}"
programInstance = Pokemon()
programInstance.get_article(pokeURL)
print(cache)
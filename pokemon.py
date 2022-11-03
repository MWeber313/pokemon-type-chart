from contextlib import nullcontext
import requests

cache = dict()
pokeTYPE = None 

class Pokemon():
    def __init__(self) -> None:
        super().__init__()
        self.cache = dict()
        self.pokeTYPE = None
        
    def show_cache(self):
        cache = self.cache
        for i in cache:
            print(i)
        
        return 
    def set_type(self, type):
        pokeTYPE = type
        print(pokeTYPE)

        return pokeTYPE

    def get_article_from_server(self, url):
        self.cache.update({pokeTYPE:url})
        return 
        # response = requests.get(url)
        # return response.text

    def get_article(self, url):

        return


print("Select Pokemon Type")
pokeType = input()
# pokeURL = f"https://pokeapi.co/api/v2/type/{pokeType}"
programInstance = Pokemon()
programInstance.set_type(pokeType)
programInstance.get_article_from_server(pokeTYPE)
programInstance.show_cache()

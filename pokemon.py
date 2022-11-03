import requests

cache = dict()
pokeTYPE = None 

class Pokemon():
    def __init__(self) -> None:
        super().__init__()
        self.cache = list()
        self.pokeTYPE = None
        
    def show_cache(self):
        cache = self.cache
        print(self.cache)
        for i in cache:
            print(f"This is i: {i}")
        
        return 
    def set_type(self, type):
        print(f"Current poketype: {self.pokeTYPE}")
        self.pokeTYPE = type

        return 

    def cache_type_data(self, url):
        cache = self.cache
        cache.append({url:"Data of Pokemon Type"})
        return 
        # response = requests.get(url)
        # return response.text

    def get_article(self, url):

        return


# pokeURL = f"https://pokeapi.co/api/v2/type/{pokeType}"
programInstance = Pokemon()
while True:
    try:
        programInstance.show_cache()
        print("Select Pokemon Type")
        pokeTypeInput = input()
        programInstance.set_type(pokeTypeInput)
        programInstance.cache_type_data(pokeTypeInput)
    except KeyboardInterrupt:
        exit()
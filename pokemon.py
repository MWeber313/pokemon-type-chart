class Pokemon():
    def __init__(self):
        self.cache = dict()
        self.baseLink = "https://pokeapi.co/api/v2/"
        self.linkCat = str()
        
    def show_cache(self):
        cache = self.cache
        print(self.cache)
        for i in cache:
            print(f"This is i: {i}")
        
        return 
    def set_link_category(self):
        print(f"Current Link: {self.baseLink}")
        self.linkCat = input("Please submit your category: ")
        print(f'You entered: {self.linkCat}')
        self.baseLink = f"https://pokeapi.co/api/v2/{self.linkCat}/"
        print(f"Updated Link: {self.baseLink}")
        return 

# If you make an instance of the pokemon class in THIS file, it will not carry data over to another file
# Don't do this \/
# shankProof = Pokemon()
# shankProof.set_link_category()
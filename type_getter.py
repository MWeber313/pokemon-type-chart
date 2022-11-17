import requests
from pokemon import Pokemon

class TypeGetter(Pokemon):
    def __init__(self):
        super().__init__()
        self.damageType = None

    
    def set_damage_type(self):
        newType = input("Please input the id # of the damage type: ")
        if int(newType) == ValueError:
            print("Please input a number")
            self.set_damage_type()
        else:
            self.damageType = int(newType)
        return

    def get_damage_data(self):
        if self.damageType == None: 
            self.set_damage_type()
            # response = requests.get(f"https://pokeapi.co/api/v2/{self.linkCat}/{self.damageType}")
            response = requests.get("https://pokeapi.co/api/v2/type/1")
            self.cache[self.damageType] = response.json()
            self.show_damage_data()
        else:
            self.show_damage_data()
        return
    
    def show_damage_data(self):
        # damage_data = self.cache[0]

        # print(type(damage_data))
        # print(damage_data.items())
        

        print(self.cache[self.damageType]["damage_relations"])

                
    
        # print(f"This is the cache: {self.cache}")
        # print("This is every item in the cache")
        # for i in self.cache:
        #     print(f"This is i: {i}")
        return
    

programInstance = TypeGetter()
programInstance.set_link_category()
import requests 

class Pokemon:
    def __init__(self):
        self.cache = list()
        self.damageType = None
    
    def set_damage_type(self):
        newType = input("Please input the id # of the damage type: ")
        self.damageType = newType
        return

    def get_damage_data(self):
        if self.damageType not in self.cache: 
            response = requests.get(f"https://pokeapi.co/api/v2/type/{self.damageType}")
            self.cache.append({self.damageType:response.json()})
            self.show_damage_data()
        else:
            self.show_damage_data()
            print(len(self.cache))
        return
    
    def show_damage_data(self):
        print(f"This is the cache: {self.cache}")
        print("This is every item in the cache")
        for i in self.cache:
            print(i["damage_relations"])
        return
    
programInstance = Pokemon()
programInstance.set_damage_type()
programInstance.get_damage_data()
programInstance.show_damage_data()
programInstance.set_damage_type()
programInstance.get_damage_data()
programInstance.show_damage_data()
# this should NOT append a new item to the cache
programInstance.set_damage_type()
programInstance.get_damage_data()

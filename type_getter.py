import requests 

class Pokemon:
    def __init__(self):
        self.cache = list()
        self.damageType = None
    
    def set_damage_type(self):
        newType = input()
        self.damageType = newType
        return

    def get_damage_data(self): 
        response = requests.get("https://pokeapi.co/api/v2/type/1")
        self.cache.append({self.damageType:response.text})
        return
    
    def show_damage_data(self):
        for i in self.cache:
            print(i)
        return
    
programInstance = Pokemon()
programInstance.set_damage_type()
programInstance.get_damage_data()
programInstance.show_damage_data()
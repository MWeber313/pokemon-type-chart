import requests
from pokemon import Pokemon

class TypeGetter(Pokemon):
    def __init__(self):
        super().__init__()
        self.damageType = None
        # self.cache = dict()
        # self.commands = {
        #     "a": self.set_damage_type(),
        #     "b": self.get_damage_data(),
        #     "c": self.show_damage_data(),
        #     "q": print("Press CTRL+Z to quit")
        # }
        # self.commands = {
        #     'a': self.set_damage_type(),
        #     'b': self.get_damage_data(),
        #     'c': self.show_damage_data(),
        #     'q': quit()
        #     },
    
    # def input_command(self):
    #     print("Please type a command")
    #     command = input()
    #     self.commands
    #     return
    
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
            response = requests.get(f"https://pokeapi.co/api/v2/type/{self.damageType}")
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
    
running = True
programInstance = TypeGetter()

programInstance.get_damage_data()
programInstance.show_cache()

# while running:
#     programInstance.input_command()

# programInstance.set_damage_type()
# programInstance.get_damage_data()
# programInstance.show_damage_data()
# programInstance.set_damage_type()
# programInstance.get_damage_data()
# programInstance.show_damage_data()
# # this should NOT append a new item to the cache
# programInstance.set_damage_type()
# programInstance.get_damage_data()



import requests

cache = dict()
pokeTYPE = None 


# response = {"damage_relations": {
# 		"double_damage_from": [
# 			{
# 				"name": "flying",
# 				"url": "https://pokeapi.co/api/v2/type/3/"
# 			},
# 			{
# 				"name": "psychic",
# 				"url": "https://pokeapi.co/api/v2/type/14/"
# 			},
# 			{
# 				"name": "fairy",
# 				"url": "https://pokeapi.co/api/v2/type/18/"
# 			}
# 		],
# 		"double_damage_to": [
# 			{
# 				"name": "normal",
# 				"url": "https://pokeapi.co/api/v2/type/1/"
# 			},
# 			{
# 				"name": "rock",
# 				"url": "https://pokeapi.co/api/v2/type/6/"
# 			},
# 			{
# 				"name": "steel",
# 				"url": "https://pokeapi.co/api/v2/type/9/"
# 			},
# 			{
# 				"name": "ice",
# 				"url": "https://pokeapi.co/api/v2/type/15/"
# 			},
# 			{
# 				"name": "dark",
# 				"url": "https://pokeapi.co/api/v2/type/17/"
# 			}
# 		],
# 		"half_damage_from": [
# 			{
# 				"name": "rock",
# 				"url": "https://pokeapi.co/api/v2/type/6/"
# 			},
# 			{
# 				"name": "bug",
# 				"url": "https://pokeapi.co/api/v2/type/7/"
# 			},
# 			{
# 				"name": "dark",
# 				"url": "https://pokeapi.co/api/v2/type/17/"
# 			}
# 		],
# 		"half_damage_to": [
# 			{
# 				"name": "flying",
# 				"url": "https://pokeapi.co/api/v2/type/3/"
# 			},
# 			{
# 				"name": "poison",
# 				"url": "https://pokeapi.co/api/v2/type/4/"
# 			},
# 			{
# 				"name": "bug",
# 				"url": "https://pokeapi.co/api/v2/type/7/"
# 			},
# 			{
# 				"name": "psychic",
# 				"url": "https://pokeapi.co/api/v2/type/14/"
# 			},
# 			{
# 				"name": "fairy",
# 				"url": "https://pokeapi.co/api/v2/type/18/"
# 			}
# 		],
# 		"no_damage_from": [],
# 		"no_damage_to": [
# 			{
# 				"name": "ghost",
# 				"url": "https://pokeapi.co/api/v2/type/8/"
# 			}
# 		]
# 	},}
class Pokemon():
    def __init__(self):
        self.cache = dict()
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
        cache.append({url:{f"Object {self.pokeTYPE}": "Object Data of Pokemon Type"}})
        return 

    # def get_article(self):
	# 				if self.pokeTYPE == None:	
	# 					print("Do this")
	# 					self.pokeTYPE = input()
	# 					self.cache.append({self.pokeTYPE: response})
	# 				else:
	# 					self.cache.append({self.pokeTYPE: response})
					
	# 				return


# pokeURL = f"https://pokeapi.co/api/v2/type/{pokeType}"
# programInstance = Pokemon()
# programInstance.get_article()
# programInstance.show_cache()
# while True:
#     # try:
#     #     programInstance.get_article()
#     #     programInstance.show_cache()
		
#     #     # programInstance.show_cache()
#     #     # print("Select Pokemon Type")
#     #     # pokeTypeInput = input()
#     #     # programInstance.set_type(pokeTypeInput)
#     #     # programInstance.cache_type_data(pokeTypeInput)
#     # except KeyboardInterrupt:
#     #     exit()

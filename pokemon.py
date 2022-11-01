import requests


cache = dict()


def get_article_from_server(url):

    print("Fetching article from server...")

    response = requests.get(url)

    return response.text


def get_article(url):

    print("Getting article...")

    if url not in cache:

        cache[url] = get_article_from_server(url)


    return cache[url]


print("Select Pokemon Type")
pokeType = input()
get_article(f"https://pokeapi.co/api/v2/type/{pokeType}")

print(cache)
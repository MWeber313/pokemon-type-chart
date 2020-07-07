import click

file = open('types.txt', 'r')
types = file.readlines().split('\n')
# cleanTypes = types.split(': ')
file.close()

# for lines in types:
#     print("l",lines)

print(types)
# @click.command()


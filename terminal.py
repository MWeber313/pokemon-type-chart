# import click
import re
choice = input("Attack or Defend? \n").lower()

atkFile = open("attack_types.txt", "r")
atkTypes = atkFile.read().split('\n\n')
# cleanAtk = atkTypes.replace('\n', ',')
atkFile.close()
print("atkfile", atkFile)
defFile = open("defend_types.txt", "r")
defTypes = defFile.read().split("\n\n")
# cleanTypes = types.split(': ')
defFile.close()
for lines in atkTypes:
    newLines=lines.split("\n")
test = []
if choice == "defend":
    print("defend", defTypes)
elif choice == "attack":
    print("attack", atkTypes)

    # test.append(lines)
    # print("atklines", lines[0:])
# types = str(types).split('\\n')
print("test", test)
# print('dicttest', lineDict)
# @click.command()
# if end of line == : then go to next line with end of line == : and make object
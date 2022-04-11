a =["plumed helmet", "etched helmet", "crested helmet", "visored helmet", "tattered cape", "ornamental cope", "opera cloak", "piece of cloth", "old gloves", "padded gloves", "riding gloves", "fencing gloves", "mud boots", "snow boots", "riding boots", "buckled boots", "hiking boots", "combat boots", "jungle boots"]
i = 0
print("[")
for x in a:
    print("{ar:"+str(0)+", ap: \""+str(x)+"\",base: "+str(0)+", name: "+str(0)+"},")
    i=i+1

b = ["helmet(kabuto)", "helm of brilliance", "helm of opposite alignment", "helm of telepathy", "cloak of protection", "cloak of invisibility", "cloak of magic resistance", "cloak of displacement", "leather gloves", "gauntlets of fumbling", "gauntlets of power", "gauntlets of dexterity", "speed boots", "water walking boots", "jumping boots", "elven boots", "kicking boots", "fumble boots", "levitation boots"]
i = 1

print("[")

for x in b:
    print(""+str(i)+": \""+str(x)+"\",")
    i=i+1
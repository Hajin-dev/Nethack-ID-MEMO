a =["aluminum", "balsa", "brass", "copper", "crystal", "curved", "ebony", "forked", "glass", "hexagonal", "iridium", "iron", "jeweled", "long", "maple", "marble", "oak", "pine", "platinum", "runed", "short", "silver", "spiked", "steel", "tin", "uranium", "zinc"]
a.sort()
i = 0
print("[")
for x in a:
    print("{no:"+str(i)+", ap: \""+str(x)+"\",base: "+str(0)+", name: "+str(0)+"},")
    i=i+1

b = ["light", "nothing", "secret door detection", "enlightenment", "striking", "make invisible", "slow monster", "speed monster", "undead turning", "opening", "locking", "probing", "digging", "magic missile", "fire", "cold", "sleep", "lightning", "create monster", "polymorph", "cancellation", "teleportation", "wishing", "death"]
i = 1

print("[")

for x in b:
    print(""+str(i)+": \""+str(x)+"\",")
    i=i+1
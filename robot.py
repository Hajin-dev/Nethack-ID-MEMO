a = ["pearl", "iron", "twisted", "steel", "wire", "engagement", "shiny", "bronze", "brass", "copper", "silver", "gold", "wooden", "granite", "opal", "clay", "coral", "black onyx", "moonstone", "tiger eye", "jade", "agate", "topaz", "sapphire", "ruby", "diamond", "ivory", "emerald"]
a.sort()
i = 0
print("[")
for x in a:
    print("{no:"+str(i)+", ap: \""+str(x)+"\",base: "+str(0)+", name: "+str(0)+"},")
    i=i+1

b = ["adornment", "protection", "stealth", "sustain ability", "hunger", "warning", "protection from shape changers", "gain strength", "gain constitution", "increase accuracy", "increase damage", "aggravate monster", "poison resistance", "cold resistance", "shock resistance", "invisibility", "see invisible", "regeneration", "searching", "levitation", "fire resistance", "free action", "slow digestion", "teleportation", "conflict", "teleport control", "polymorph", "polymorph control"]
i = 1

print("[")

for x in b:
    print(""+str(i)+": \""+str(x)+"\",")
    i=i+1
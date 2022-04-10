'''a = ['parchment', 'vellum', 'ragged', 'dog eared', 'mottled', 'stained', 'cloth', 'leather', 'white', 'pink', 'red', 'orange', 'yellow', 'velvet', 'light green', 'dark green', 'turquoise', 'cyan', 'light blue', 'dark blue', 'indigo', 'magenta', 'purple', 'violet', 'tan', 'plaid', 'light brown', 'dark brown', 'gray', 'wrinkled', 'dusty', 'bronze', 'copper', 'silver', 'gold', 'glittering', 'shining', 'dull', 'thin', 'thick']
a.sort()
i = 0
print("[")
for x in a:
    print("{no:"+str(i)+", ap: \""+str(x)+"\",base: "+str(0)+", name: "+str(0)+"},")
    i=i+1'''

b = ["sleep", "light", "detect monsters", "healing", "knock", "force bolt", "protection", "jumping", "magic missile", "confuse monster", "cure blindness", "drain life", "slow monster", "wizard lock", "create monster", "detect food", "cause fear", "clairvoyance", "cure sickness", "charm monster", "haste self", "detect unseen", "extra healing", "remove curse", "identify", "stone to flesh", "fireball", "cone of cold", "levitation", "restore ability", "invisibility", "detect treasure", "dig", "magic mapping", "turn undead", "polymorph", "teleport away", "create familiar", "finger of death", "cancellation"]
i = 1

print("[")

for x in b:
    print(""+str(i)+": \""+str(x)+"\",")
    i=i+1
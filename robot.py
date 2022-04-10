a = ['parchment', 'vellum', 'ragged', 'dog eared', 'mottled', 'stained', 'cloth', 'leather', 'white', 'pink', 'red', 'orange', 'yellow', 'velvet', 'light green', 'dark green', 'turquoise', 'cyan', 'light blue', 'dark blue', 'indigo', 'magenta', 'purple', 'violet', 'tan', 'plaid', 'light brown', 'dark brown', 'gray', 'wrinkled', 'dusty', 'bronze', 'copper', 'silver', 'gold', 'glittering', 'shining', 'dull', 'thin', 'thick']
a.sort()
i = 0
print("[")
for x in a:
    print("{no:"+str(i)+", ap: \""+str(x)+"\",base: "+str(0)+", name: "+str(0)+"},")
    i=i+1
a =["ZELGO MER", "JUYED AWK YACC", "NR 9", "XIXAXA XOXAXA XUXAXA", "PRATYAVAYAH", "DAIYEN FOOELS", "LEP GEX VEN ZEA", "PRIRUTSENIE", "ELBIB YLOH", "VERR YED HORRE", "VENZAR BORGAVVE", "THARR", "YUM YUM", "KERNOD WEL", "ELAM EBOW", "DUAM XNAHT", "ANDOVA BEGARIN", "KIRJE", "VE FORBRYDERNE", "HACKEM MUCHE", "VELOX NEB", "FOOBIE BLETCH", "TEMOV", "GARVEN DEH", "READ ME", "ETAOIN SHRDLU", "LOREM IPSUM", "FNORD", "KO BATE", "ABRA KA DABRA", "ASHPD SODALG", "MAPIRO MAHAMA DIROMAT", "GNIK SISI VLE", "HAPAX LEGOMENON", "EIRIS SAZUN IDISI", "PHOL ENDE WODAN", "GHOTI", "ZLORFIK", "VAS CORP BET MANI", "STRC PRST SKRZ KRK", "XOR OTA"]
a.sort()
i = 0
print("[")
for x in a:
    print("{no:"+str(i)+", ap: \""+str(x)+"\",base: "+str(0)+", name: "+str(0)+"},")
    i=i+1

b = ["identify", "light", "enchant weapon", "enchant armor", "remove curse", "destroy armor", "confuse monster", "scare monster", "teleportation", "gold detection", "food detection", "magic mapping", "fire", "create monster", "taming", "amnesia", "earth", "genocide", "punishment", "charging", "stinking cloud"]
i = 1

print("[")

for x in b:
    print(""+str(i)+": \""+str(x)+"\",")
    i=i+1
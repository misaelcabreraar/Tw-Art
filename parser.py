import json
import re

file = open("tweets.json", "r")
file = file.read()

file = "{" + file + "}"
file = json.dumps(file, indent = 4)
file = json.loads(file)
file = re.sub("[^\w]", " ",  file).split()
#print(file)

    
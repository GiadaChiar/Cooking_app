# I wnat to use python to traslate insted to use api so it is free
# I wnat to use deep-translator, 
#Command to install it: pip install deep-translator

import sys # I use to read arguments from js files
from deep_translator import GoogleTranslator


text = sys.argv[1] #pass text like argument

traslated= GoogleTranslator(source="auto", target="it").translate(text)

print(traslated)
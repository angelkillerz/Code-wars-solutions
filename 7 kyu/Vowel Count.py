# Vowel Count
def getCount(inputStr):
    num_vowels = 0
    # your code here
    vowel = ['a','e','i','o','u']
    for i in inputStr:
        for x in vowel:
            if i == x:
                num_vowels +=1
    
    return num_vowels
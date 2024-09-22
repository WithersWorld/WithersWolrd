#This is Python
"""
Long Comment
"""
variable = "New Variable"
string = "string" + 'string'
number = 0
boolean = True
# Lists
turple = ("red", "black")
set = {"red", "black"}

# Array
array = ["red", "black"]
array[0] # red
array[2] = "white" # Add to array

# Dictionary
dictionary = {"color1": "red", "color2": "black"}
dictionary.color1 or dictionary["color1"] # red

print("message")
inputTo = input("Prompt")

str() # Converts a number, boolean to a string
int() # Converts a digit to a number
float() # Convert a decimal digit into a decimal
bool() # "..." 1 -> true      "" 0 -> false

condition1 = ""
condtition2 = ""
i = 0

# IF
if 1 > 0:
    print("condition1: true")
elif 1 == 0:
    print("condition1: false, condition2: true")
else:
    print("all condtitions: false")

# For
for i in range(0, 9, 1):
    #1-Param: 1param: End (Start is 0)
    #2-Params: 1param: Start, 2param: End
    #3-Params: 1param: Start, 2param: End, 3param: Increment
    print(i)
for i in array:
    # Repeat for all items
    # Works with Dictionaries, repeat for all keys
    print(i)

# FUNCTION
def myFunction(e):
    return e

# WHILE
while condition1:
    print("Condition1 is true")

class MyClass:
    def __init__(self, name):
        self.name = name
        super().__init__()
    def say(self):
        return self

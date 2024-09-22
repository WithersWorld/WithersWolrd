#!/bin/bash
variable="variable"
string="string"
number=0
boolean=true
# Lists
array=("list" "data")

echo 'print'
echo ${array}
echo ${array[0]}

if [ 1 > 0 ]; then
    echo "true"
elif [ 1 == 0 ]; then
    echo "maybe"
else
    echo "false"
fi


strr=input("Input a string: ")
num=int(input("Input a number: "))
numstr=str(num)
z=strr+numstr
count = int(0)
while count < num:
    z=z+strr+numstr
    count = count +1

print(z)
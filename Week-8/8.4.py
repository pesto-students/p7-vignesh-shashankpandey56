s = input()
stack =[]
dict1={
    ')':'(',
    '}':'{',
    ']':'['
}
for ele in s:
    if ele in ['(','{','[']:
        stack.append(ele)
    else:
        if stack != []:
            if dict1[ele]==stack[-1]:
                stack.pop()
        else:
            print(False)
            break

if stack==[]:
    print(True)
else:
    print(False)

# pair with given difference
diff = int(input())
lst = list(map(int,input().split(" ")))
lst = sorted(lst)
i =0 
j = len(lst)-1
pairs =[]
while(i<j):
    if(lst[j]-lst[i])==diff:
        pairs.append(lst[i])
        pairs.append(lst[j])
        break
    elif  lst[j]-lst[i]>diff:
        j -= 1 
    else:
        i +=1 
if pairs==[]:
    print(0)
else:
    print(pairs)
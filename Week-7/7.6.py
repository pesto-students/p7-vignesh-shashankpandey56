# 3 sum
import sys
lst = list(map(int,input().split(" ")))
target = int(input())
closest =sys.maxsize
lst = sorted(lst)
for i in range(len(lst)-2):
    remain = target - lst[i]
    j = i+1 
    k = len(lst)-1
    while j<k:
        curr = lst[i]+lst[j]+lst[k]
        if abs(target-curr) < abs(target-closest):
            closest = target - curr
        if curr > target :
            k-= 1
        else:
            j+=1 
print(closest) 


        


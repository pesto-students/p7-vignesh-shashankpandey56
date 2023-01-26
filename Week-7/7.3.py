lst = list(map(int,input().split(" ")))
n = len(lst)
count_2 = 0 
count_1 =0
count_0 =0
for ele in lst:
    if ele ==2:
        count_2 += 1
    if ele ==1:
        count_1+= 1 
    if ele ==0:
        count_0 += 1
    
for i in range(len(lst)):
    if(count_0 !=0):
        lst[i] =0
        count_0 -= 1 
        continue
    if count_1 != 0:
        lst[i] =1 
        count_1 -= 1 
        continue
    if count_2 !=0:
        lst[i] =2 
        count_2 -= 1 
print(lst)
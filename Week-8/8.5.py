lst = [1,3,2,4]
new_lst =[]
i =0
# O(n^2) complexity
while i<len(lst):
    j = i+1 
    found = False
    while j<len(lst):
        if lst[i]< lst[j]:
            new_lst.append(lst[j])
            found = True
            break 
        j+=1
    if not found:
        new_lst.append(-1) 
    i+=1
print(new_lst)


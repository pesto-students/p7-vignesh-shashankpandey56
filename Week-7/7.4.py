lst = list(map(int,input().split(" ")))
profit = 0
best_price = lst[0]
for price in lst:
    if price - best_price >profit:
        profit = price-best_price 
    best_price = min(price,best_price)
print(profit)
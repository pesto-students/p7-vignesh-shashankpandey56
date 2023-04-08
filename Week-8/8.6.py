st1 =[]
st2 = []

def enque(ele):
    st1.append(ele)

def deque():
    if len(st2)==0:
        if len(st1)==0:
            return 'cannot deque from empty queue'
        while st1 != []:
            new = st1.pop()
            st2.append(new)
    return st2.pop()

enque(1)
enque(2)
enque(3)
print(deque())

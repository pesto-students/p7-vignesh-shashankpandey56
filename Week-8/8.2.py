class Node:
    def __init__(self,info,link = None):
        self.info = info
        self.link  = link


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self,info):
        new_node = Node(info)
        if self.head != None:
            new_node.link = self.head
            self.head = new_node
        else:
            self.head = new_node
    def insert_at_end(self,info):
        new_node = Node(info)
        if self.head != None:
            current = self.head
            while current.link != None:
                current = current.link
            current.link = new_node
        else:
            self.head = new_node
    def rotateKIndex(self,k):
        if self.head ==None:
            return 
        if k==0:
            return 
        itr = k-1
        curr = self.head
        while itr and curr.link:
            curr = curr.link 
            itr -= 1 
        if not curr.link:
            return 
        new_temp = curr 
        while curr.link:
            curr = curr.link 
        curr.link = self.head 
        self.head = new_temp.link 
        new_temp.link = None 
        return self.head
    
    def display(self):
        current = self.head
        while current != None:
            print(current.info,end="-->")
            current = current.link
        print()


            



ll = LinkedList()
ll.insert_at_beginning(5)
ll.insert_at_beginning(2)
ll.insert_at_beginning(1)
ll.insert_at_end(8)
ll.insert_at_end(10)
ll.display()
ll.rotateKIndex(2)
ll.display()



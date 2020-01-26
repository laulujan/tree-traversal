
//linked list and linear search
function LinkedList(value, prev, next){
    this.value = value;
    this.prev = prev;
    this.next = next;


    return this;
}

var head = new LinkedListNode(6, null, null);
head.next = new LinkedListNode(7,6,null);
head.next.next = new LinkedListNode(8, head.next, null )

function addNext(node, next){
    node.next = next;
}


LinkedListNode.prototype.add = function(value){
    if(this.next == null){
        this.next = new LinkedListNode(value, this, null);
    }else{
        addToList(this, value);
    }
}


function addToList(node, value){
    var tmp  = node;
    while(tmp.next != null){
        tmp = tmp.next;
    }
    tmp.next = new LinkedListNode(value, tmp, null);
}


function linearSearch(head, searchValue){
    var node = head;
    var result = null;
    while(node != null){
        if(node.value == searchValue)
        return node;
    }
    node = node.next;
}

//

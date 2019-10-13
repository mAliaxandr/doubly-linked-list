const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;
// console.log('append  --  ', data);

        return this;
    }

    head() {
        if (this._head === null) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if (this._tail === null) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head;
        var count = 0;

        while (count < index){
            currentNode = currentNode.next;
            count++;
        }
        // console.log('at', count , currentNode);
        
        return currentNode.data;
    }

    currentNodeAt(index) {
        var currentNode = this._head;
        var count = 0;

        while (count < index){ 
            currentNode = currentNode.next;
            count++;
        }
        // console.log('Current at-----', currentNode.prev);
        
        return currentNode;
    }

    insertAt(index, data) {
        
        var newNode = new Node(data);
        if (index < this.length){
            var currentNode = this.currentNodeAt(index);
            var prevNode = currentNode.prev;
            newNode.prev = prevNode;
            newNode.next = currentNode;
            prevNode.next = newNode;
            currentNode.prev = newNode;   
        }
        // console.log('insert -------');
        if (index === 0 && this.length === 0){
            this._head = newNode;
            this._tail = newNode;
        }

        this.length++;
        
    }

    isEmpty() {
        if ( this.length === 0){
            return true;
        }
        if (this.length > 0) {
            return false;
        }
    }

    clear() {
        
        
        this.length = 0;
        this._head = null;
        this._tail = null;
        // console.log('clear', this);
        return this;
    }

    deleteAt(index) {
        // console.log('del',index);
        
        var currentNode = this.currentNodeAt(index);
        var prevNode = currentNode.prev;
        var nextNode = currentNode.next;
        var message = {failure: 'Failure: non-existent node in this list.'};
        
        if (prevNode != null){
            prevNode.next = nextNode;
        }

        if (nextNode != null){
            nextNode.prev = prevNode;
        }   
        this.length = this.length - 1;
        // console.log('del --', this);       
        return this;
    }

    reverse() {
        var currentNode = this._head;
        var count = 0;
        // console.log('reverse');
        
        

        while (count < this.length){ 
            var newPrev = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = newPrev;
            currentNode = currentNode.prev;
            count++;
        }

        var newHead = this._tail;
        this._tail = this._head;
        this._head = newHead;
        return this;
    }

    indexOf(data) {
        var currentNode = this._head;
        var count = 0;
        var notFound = -1; 

        while (count < this.length){
            // console.log('data', data, count, this.length);
            
            if (data === currentNode.data){
                count++;
                // console.log('return index -- ', count-1 ); 
                return count -1;
            }
            currentNode = currentNode.next;
            count++;
        }
        // console.log('not found -- ', notFound);
        
        return notFound;
    }
}

module.exports = LinkedList;

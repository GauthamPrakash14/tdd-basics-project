class Stack {
    constructor() {
      this.top = -1;
      this.items = {};
    }
  
    get peek() {
      return this.items[this.top];
    }
  
    push(value) {
      this.top += 1;
      this.items[this.top] = value;
    }
  
    pop(){
      let r = this.items[this.top];
      return r;
    }
}
module.exports = Stack;


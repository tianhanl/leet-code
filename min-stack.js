/** Question 155
 * initialize your data structure here.
 */
var MinStack = function () {
  this.elements = [];
  this.currentMininum;
};


/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.elements.push(x);
  if (this.currentMinimum === undefined) {
    this.currentMinimum = x;
  } else {
    if (x < this.currentMinimum) {
      this.currentMinimum = x;
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.elements.length === 0) return;
  if (this.elements.pop() === this.currentMinimum) {
    this.currentMinimum = this.elements[0];
    for (let i = 1; i <= this.elements.length; i++) {
      if (this.elements[i] < this.currentMinimum) this.currentMinimum = this.elements[i];
    }
  }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.elements.length === 0) return null;
  return this.elements[this.elements.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.currentMinimum;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
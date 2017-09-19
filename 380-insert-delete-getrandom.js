/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.values = [];
  this.locations = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.locations.has(val)) return false;
  this.locations.set(val, this.values.length);
  this.values.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.locations.has(val)) return false;
  let location = this.locations.get(val);
  if (location < this.values.length - 1) {
    let temp = this.values[this.values.length - 1];
    this.values[location] = temp;
    this.locations.set(temp, location);
  }
  this.locations.delete(val);
  this.values.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let index = Math.floor(Math.random() * this.values.length);
  return this.values[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

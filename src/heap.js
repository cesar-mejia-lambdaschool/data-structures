class Heap {
  /* Do not modify the constructor */
  constructor () {
    this.storage = []
  }

  /* Insert the given value into the heap.
  The heap should maintain the heap property 
  after insertion */
  insert (value) {}

  /* Remove the maximal value from the heap and
  return it. The heap should maintain the heap
  property after removing the maximal value */
  delete () {}

  /* Return the maximal value in the heap
  without removing it */
  getMax () {}

  /* Return the size of the heap */
  getSize () {}

  /* Moves the element at the specified index "up"
  the heap by swapping it with its parent if its
  parent value is less than the value located at
  the input index */
  bubbleUp (index) {}

  /* Move the element at the specified index "down"
  the heap by swapping it with its larger child if its
  child's value is greater than the value located at
  the input index */
  siftDown (index) {}
}

module.exports = Heap

function linearSearch(inputArray, searchItem) {
  inputArray.forEach((item, index) => {
    if(searchItem == item) return `found at ${index} index`
  })
  return 'Search item does not exist in the input array'
}
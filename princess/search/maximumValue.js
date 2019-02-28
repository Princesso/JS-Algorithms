function maximumValue(inputArray) {
  for (let i=0; i<inputArray.length; i++) {
    let maxItem = inputArray[i]; 
    if (maxItem < inputArray[i+1]) {
      maxItem = inputArray[i+1]
    }
  }
}
function isValidSubsequence(array, sequence) {
    let sequenceLength=sequence.length;
    let index=0;
    for(value of array){
      if(sequence[index]==value){
        index++;
      }
      if(index>=sequenceLength){return true;}
    }
    return false;
  }
// add whatever parameters you deem necessary
function constructNote(message, letters) {
    let FCmessage = createFrequencyCounter(message);
    let FCletters = createFrequencyCounter(letters);

    for(key of FCmessage.keys()) {
        if (FCletters.has(key) === false) {
            return false;
        }

        if (FCletters.get(key) !== FCmessage.get(key) && FCletters.get(key) < FCmessage.get(key)) {
            return false;
        }
    }
    return true;
}

function createFrequencyCounter(string) {
    let frequencies = new Map();
  
    for (let val of string) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  
    return frequencies;
  }

function getUniqueWordCount(wordList) {
    'use strict';
    var retCount = 0, uniqueArray = [], i = 0;
    
    if (wordList.length > 0) {
        for (i = 0; i < wordList.length; i++) {
            console.log('wordList[i]: ' + wordList[i]);
            console.log('includes: ' + uniqueArray.includes(wordList[i]));
            if (uniqueArray.includes(wordList[i]) !== true) {
                console.log('ready to push: ' + wordList[i]);
                uniqueArray.push(wordList[i]);
                console.log('uniqueArray' + uniqueArray);
            }
        }
        if (uniqueArray.length > 0) {
            retCount = uniqueArray.length;
        }
    }
    return retCount;
}

function getSum(total, num) {
    return total + num;
}

function getAverageWordLength(wordList) {
    'use strict';
    var retAvgLength = 0, wordLengthArray = [], i = 0;
    
    if (wordList.length > 0) {
        for (i = 0; i < wordList.length; i++) {
            //console.log('wordList[i]: ' + wordList[i]);
            //console.log('includes: ' + uniqueArray.includes(wordList[i]));
            wordLengthArray.push(wordList[i].length);
        }
        if (wordLengthArray.length > 0) {
            var sum = wordLengthArray.reduce(getSum);
            console.log('sum: ' + sum);
            retAvgLength =  sum / wordLengthArray.length;
        }
    }
    return retAvgLength;
}

$('.js-form').submit(function(event) {
  'use strict';

  // this stops the default form submission behavior
  event.preventDefault();

  // get user submitted text
  var userText = $(this).find('#user-text').val();
    console.log(userText);
    
  // split text into array of words    
  var words = userText.split(' ');
    console.log(words);

  // calculate word count
  var wordCount = words.length;  
    console.log(wordCount);

  // if there are more than 2 words    
  if (wordCount > 0) {
      // display word count 
      $(".js-wordCount").text(wordCount);
      
      // calculate unique word count and display
      var uniqueWordCount = getUniqueWordCount(words);
      $(".js-uniqueWordCount").text(uniqueWordCount);
      
      // calculate average word length and display
      var avgWordLen = getAverageWordLength(words);
      $(".js-averageWordLength").text(avgWordLen + ' characters');

      // display hidden results area 
      $(".js-text-report").removeClass("hidden");

  }
});


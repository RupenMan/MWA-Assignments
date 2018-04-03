/**
 * Written on April 2, 2019
 * To dot the banned words in a given sentence
 * @author Rupendra MAHARJAN
 */
(function(){
    function processString(sentence, bannedWords){
        var wordsOfSentence = sentence.split(" ");
        return wordsOfSentence
            .map(word => bannedWords.includes(word)?'*'.repeat(word.length)+" ":word+ " ").join(" ");

    }
    console.log(processString("This house is nice. But, this house is too expensive.",['house','nice']));
}());
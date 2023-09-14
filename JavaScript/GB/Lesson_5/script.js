const learnObject = {
    firstElement: [1, 2, [1, 2, [1, 2, 3]]],
    secondElement: 2,
    thirdElemen: 3,
    fourthElement: 4,
    fifthElement: 5
}
learnObject.sixth = '6';
delete learnObject.sixth;
console.log(learnObject);

// I have collected them in 2 functions ascSort and descSort 



//AscSort takes input from data.txt file using the readfile store the numbers in the array sort them and then write them on the output.txt
function AscSort(){
let numbers=[]



    var fs = require('fs');
  
    fs.readFile('data.txt', function (err, data) {
        numbers=data.toString().split(',').map(function(item) {
            return parseInt(item, 10);
        });

        for(let i = 0 ; i < numbers.length ; i++)
        {
            //numbers.length instead of numbers.length-1
            for(let j = 0 ; j < numbers.length  ; j++)
            {
            //numbers.length instead of numbers.length-1
                if(numbers[j] > numbers[j + 1])
                {
                    let temp = numbers[j];
                    numbers[j] = numbers[j + 1]
                    numbers[j + 1] = temp;
                }
            }
        }
    
        const writeStream = fs.createWriteStream('output.txt');
    const pathName = writeStream.path;
     
    // write each value of the array on the file breaking line
    numbers.forEach(value => writeStream.write(`${value} `));
    
    
    
    // close the stream
    writeStream.end();
    });


}


//the DescSort takes the input as parameter sort it and then print it

function DescSort(numbers){

    for(let i = 0 ; i < numbers.length ; i++)
    {
        //numbers.length instead of numbers.length-1
        for(let j = 0 ; j < numbers.length ; j++)
        {
            //numbers.length instead of numbers.length-1
            if(numbers[j] < numbers[j + 1])
            {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp;
            }
        }
    }
    console.log("Numbers list After Desc sorting: ", numbers)

}



let nums= [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];
let numbers = [...nums] //creates an immutable copy of nums using the spread operator

AscSort();
DescSort(numbers);

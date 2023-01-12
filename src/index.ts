function getAverage(arr: number[]): number {
    let sum: number = 0;
    let count: number = 0;
    arr.forEach(element => {
        sum += element;
        count++;
    });
    let avrage = sum/count;
    return avrage;
}

/*
let num = prompt("enter a number");
let arrNumbers: number[] = [];
while (num != null)
{
    arrNumbers.push(+num);
    num = prompt("enter a number");
}
*/
console.log(getAverage([1.5,8,9.1,5]));

function getAmountOfPositive(arr: number[]): number {
    let count: number = 0;
    arr.forEach(element => {
        if(element >0)
        {
            count++;
        }

    });
    return count;
}

console.log(getAmountOfPositive([-1,89,3,-45,21]));

function sortList(arrOG: number[]): number[] {
    let keepNum: number;
    for(let i = 0; i < arrOG.length; i++)
    {
        for(let j = i+ 1; j < arrOG.length; j++)
        {
            if(arrOG[i] > arrOG[j])
            {
                keepNum = arrOG[i];
                arrOG[i] = arrOG[j];
                arrOG[j] = keepNum;
                console.log(arrOG);
            }
        }
    }
    return arrOG;
}
console.log(sortList([6,3,21,9,1]));
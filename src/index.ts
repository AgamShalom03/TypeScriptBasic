let getAverage = (arr: number[]) => {
    const sum = arr.reduce((sum, current) => sum + current);
    return sum/ arr.length;
}

console.log(getAverage([1.5,8,9.1,5]));

const getAmountOfPositive = (arr: number[]) => {
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

let sortList= (arrOG: number[])=> {
    return arrOG.sort();
}
console.log(sortList([6,3,21,9,1]));
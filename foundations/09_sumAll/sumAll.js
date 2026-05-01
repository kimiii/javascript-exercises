const sumAll = function(a, b) {
    if (a < 0 || a % 1 !== 0 || b < 0 || b % 1 !== 0 
        || typeof a !== "number" || typeof b !== "number" 
    ) {
        return "ERROR"
    }

    const arr = [a, b].sort((a, b) => a - b);
    const arrSum = [];

    for (let i = arr[0]; i <= arr[1]; i++) {
        arrSum.push(i)
    }

    return arrSum.reduce((sum, current) => sum + current, 0);
};

//먼저 a, b 중에 작은걸 첫번째로, 큰걸 뒤로 정렬
//a와 b 사이 숫자를 생성하고 어레이에 집어 넣기
//집어 넣은 어레이의 합 구하기.

// Do not edit below this line
module.exports = sumAll;

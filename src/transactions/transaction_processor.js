function processTransactions(transActions) {
    let txr = [];

    if (!transActions) {
        throw new Error("Undefined collection of transactions");
    }

    let txCount = {};

    transActions.forEach(transaction =>
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1);

    txCount = sortByAmountThenName(txCount);

    Object.keys(txCount).forEach(function (key) {
        txr.push(`${key} ${txCount[key]}`);
    });

    return txr;
}

function sortByAmountThenName(txCount) {
    return Object.keys(txCount)
        .sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne.localeCompare(itemTwo))
        .reduce(((sortedResults, objectKey) => {
            sortedResults[objectKey] = txCount[objectKey];
            return sortedResults
        }), {})
}

module.exports = processTransactions;



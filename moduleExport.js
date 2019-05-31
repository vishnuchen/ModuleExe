let list = []

module.exports = {

    appendToList: function (num) {
        list.push(num)
    },

    accesndingList: () => {       
        let sorted = list.sort((a, b) => { 
        return a - b;
        });
        return sorted;
    }

}








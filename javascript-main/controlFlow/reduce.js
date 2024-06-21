const num = [1,2,3]
const mytotal = num.reduce(function(acc, currval)
{
    return acc + currval
},0)
console.log(mytotal);

const shoppingcart = [
    {
    itemName : 'js course',
    price : 2999
    },
    {
    itemName : 'py course',
    price : 2999
    },
    {
    itemName : 'datascience course',
    price : 2999
    },

]

const price_topay= shoppingcart.reduce((acc,item)=>acc+item.price,0 )

console.log(price_topay);
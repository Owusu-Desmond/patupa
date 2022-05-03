let cart = [
    {
        id : 0,
        name : 'Ipad 13 pro',
        discription : 'This Ipad is not common in many countries',
        price : '$400',
    },
    {
        id : 1,
        name : 'Portable universal mifi',
        discription : 'New portable universal mifi that can pick any sim card',
        price : '$50',
    },
    {
        id : 1,
        name : 'Portable universal mifi',
        discription : 'New portable universal mifi that can pick any sim card',
        price : '$50',
    }
]
function summarizeCart(cart) {
    const groupItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0
      }
      summary[item.id].count++;
      return summary;
    }, {});
    return Object.values(groupItems);
  };
console.log(summarizeCart(cart));
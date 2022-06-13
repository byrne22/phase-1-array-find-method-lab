// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  const returnYear = record.find(superbowlWin)

  function superbowlWin(record){

    //   if (record.result === 'W'){
    //       return record.year
    //   }
    
    
      for (let item of record){
          if(item.result ==='W')
          return item.year
      }
    

  }
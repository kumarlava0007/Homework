var states = {
    "delhi" : {
      "cp" : "foodie special",
      "janpath" : "shopping spot",
      "sarojini" : "cheap and best"
    },
    "bangalore" : {
      "hsr layout": "pgs and hostels k lie bessst hai!",
      "kormangala" : "soooo many startups!!",
    },
    "hyderabad": {
      "lb city": "cheap cheap",
      "electronic city": "msst msst offices"
    },
    "agra": {
      "landmark1": "NA",
      "landmark2": "NA"
    }
  }
  
  let res1 = [];
  for(key in states){
    res1.push(key)
  }
  
  console.log(res1);
  
  let res = [];
  for(key in states){
    let str = key;
    if(str.charAt(0) == 'a' || str.charAt(0) == 'e' || str.charAt(0) == 'i' || str.charAt(0) == 'o' || str.charAt(0) == 'u'){
      res.push(key)
    }
  }
  
  console.log(res)
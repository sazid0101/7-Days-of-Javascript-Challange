// json to object convert ......................
let text = '{ "employees" : [' +
    '{ "firstName":"sazid" , "lastName":"islam" },' +
    '{ "firstName":"shakib" , "lastName":"al hasan" },' +
    '{ "firstName":"leo" , "lastName":"messi" } ]}';

    const jsonToObj = JSON.parse(text) 
    console.log(jsonToObj)

    // object to json convert ..........................
     const person ={
        firstName:"shahriar",
        age: 25
     }
    const objectToJson = JSON.stringify(person)
    console.log(objectToJson)
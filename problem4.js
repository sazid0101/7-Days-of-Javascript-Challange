function findAddress(Obj) {
    const street = Obj.street || '__';
    const house = Obj.house || '__';
    const society = Obj.society || '__';
    return ` ${street}, ${house},${society}`;
    }
   
    const input = {
    // street: 'John Doe',
    house: 'Main St',
    society: 'Exampleville'
    };
    const output = findAddress(input);
    console.log(output);
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"sazid",
    lastName: "islam"
  }
  const person2 = {
    firstName:"shahriar",
    lastName: "islam"
  }

  console.log(person.fullName.call(person1));
  console.log(person.fullName.call(person2));
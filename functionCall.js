const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + " lives in " + city + ", " + country;
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

  console.log(person.fullName.call(person1, "Dhaka", "Bangladesh"));
  console.log(person.fullName.apply(person2, ["chittagong", "Bangladesh"]));
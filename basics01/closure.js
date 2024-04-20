// // The outer function defines a variable called "name"
// const pet = function (name) {
//     const getName = function () {
//       // The inner function has access to the "name" variable of the outer function
//       return name;
//     };
//     return getName; // Return the inner function, thereby exposing it to outer scopes
//   };
//   const myPet = pet("Vivie");
  
//   console.log(myPet()); // "Vivie"


  const createPet = function (name) {
    let sex;
  
    const pet = {
      // setName(newName) is equivalent to setName: function (newName)
      // in this context
      setName(newName) {
        name = newName;
      },
  
      getName() {
        return name;
      },
  
      getSex() {
        return sex;
      },
  
      setSex(newSex) {
        if (
          typeof newSex === "string" &&
          (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
        ) {
          sex = newSex;
        }
      },
    };
  
    return pet;
  };
  
  const pet = createPet("Vivie");
  console.log(pet.getName()); // Vivie
  
  pet.setName("Oliver");
  pet.setSex("male");
  console.log(pet.getSex()); // male
  console.log(pet.getName()); // Oliver
  
  

//   function Person() {
//     this.age = 0;
  
//     setInterval(() => {
//       this.age++; // `this` properly refers to the person object
//     }, 1000);
//   }
  
//   const p = new Person();
  
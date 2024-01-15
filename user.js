
class User {
    constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
      this.location = _location;
    }
  
 
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      }
    }
  }
  
  
  const user1 = new User("John", "Doe", 30, "New York");
  const user2 = new User("Jane", "Smith", 35, "London");
  
  
  const comparisonResult = user1.compareAge(user2);
  console.log(comparisonResult);
  
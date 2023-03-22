class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    
    getName() {
      return this.name;
    }
    
    setName(name) {
      this.name = name;
    }
    
    getEmail() {
      return this.email;
    }
    
    setEmail(email) {
      this.email = email;
    }
  }
  const user1 = new User("John Doe", "johndoe@example.com");
  
  console.log(user1.getName()); // "John Doe"
  console.log(user1.getEmail()); // "johndoe@example.com"
  
  user1.setName("Jane Doe");
  user1.setEmail("janedoe@example.com");
  
  console.log(user1.getName()); // "Jane Doe"
  console.log(user1.getEmail()); // "janedoe@example.com"

  //

  class Activity {
    constructor(type, title, duration, distance, date, description) {
      this.type = type;
      this.title = title;
      this.duration = duration;
      this.distance = distance;
      this.date = date;
      this.description = description;
    }
  
    // Getter methods
    getType() {
      return this.type;
    }
  
    getTitle() {
      return this.title;
    }
  
    getDuration() {
      return this.duration;
    }
  
    getDistance() {
      return this.distance;
    }
  
    getDate() {
      return this.date;
    }
  
    getDescription() {
      return this.description;
    }
  
    // Setter methods
    setType(type) {
      this.type = type;
    }
  
    setTitle(title) {
      this.title = title;
    }
  
    setDuration(duration) {
      this.duration = duration;
    }
  
    setDistance(distance) {
      this.distance = distance;
    }
  
    setDate(date) {
      this.date = date;
    }
  
    setDescription(description) {
      this.description = description;
    }
  }
  
  // Usage example
  const myActivity = new Activity(
    'Running',
    'Morning Run',
    '30 minutes',
    '5 km',
    new Date(),
    'Ran along the river and saw some beautiful wildlife!'
  );
  
  console.log(myActivity.getTitle()); // Output: 'Morning Run'
  console.log(myActivity.getDuration()); // Output: '30 minutes'
  myActivity.setDescription('Changed my route and saw some amazing scenery!');
  console.log(myActivity.getDescription()); // Output: 'Changed my route and saw some amazing scenery!'
  
  
  console.log(myActivity);
  
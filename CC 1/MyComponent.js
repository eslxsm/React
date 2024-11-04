import React, { useState } from 'react';

function MyComponent() {
  const [person, setPerson] = useState({
    name: 'John Doe',
    age: 28,
    occupation: 'Software Engineer',
    location: 'New York'
  });

  const updateAge = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,  
      age: prevPerson.age + 1  
    }));
  };

  return (
    <div>
      <h1>Person Details</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
      <p>Location: {person.location}</p>
    </div>
  );
}

export default MyComponent;

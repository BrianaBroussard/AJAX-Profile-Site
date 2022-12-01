function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    salary: document.querySelector('[name="salary"]').value,
    education: document.querySelector('[name="education"]').value,
    state: document.querySelector('#state-field').value,
    city: document.querySelector('[name="city"]').value,
    garden: document.querySelector('[name="garden"]').value,
    tv: document.querySelector('[name="tv"]').value,
    
  };

  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")

  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      document.querySelector('#profiles').insertAdjacentHTML('beforeend',
                                                             `<p>Full name: ${responseJson.fullname}</p>
                                                              <p>Age: ${responseJson.age}</p>
                                                              <p>Occupation: ${responseJson.occupation}</p>
                                                              <p>Salary: ${responseJson.salary}</p>
                                                              <p>Education: ${responseJson.education}</p>
                                                              <p>State: ${responseJson.state}</p>
                                                              <p>City Type: ${responseJson.city}</p>
                                                              <p>Do you Garden?: ${responseJson.garden}</p>
                                                              <p>How many hours of TV?: ${responseJson.tv}</p>
                                                              
                                                              `) 
                                                            
    });
};

document.querySelector('#profile-form').addEventListener('submit', submitProfile);

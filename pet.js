class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }

    
    hasSameOwner(otherPet) {
      return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
    }
  }

  
  const pets = [];

  
  function createPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);

   
    displayPetList();
  }

  
  function displayPetList() {
    const petListElement = document.getElementById('petList');
    petListElement.innerHTML = '';

    pets.forEach(pet => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
      petListElement.appendChild(listItem);
    });
  }


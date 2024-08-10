document.addEventListener('DOMContentLoaded', function() {
    fetch('plants.json')
        .then(response => response.json())
        .then(data => {
            // Assuming we're interested in the first plant in the array
            const plant = data[0];

            document.getElementById('plantName').textContent = plant.name;
            document.getElementById('scientificName').innerHTML = `<i>${plant.scientificName}</i>`;
            document.getElementById('plantImage').src = plant.image;
            document.getElementById('otherNames').textContent = plant.otherNames;

            const benefitsList = document.getElementById('benefitsList');
            plant.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });

            const usesList = document.getElementById('usesList');
            plant.uses.forEach(use => {
                const li = document.createElement('li');
                li.textContent = use;
                usesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading the plant data:', error));
});

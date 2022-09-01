const loadPhot = async() => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data[0]);
    displayPhoto(data);
}

const displayPhoto = (photos) => {
    const photoContainer = document.getElementById('photoContainer');
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('col');
    for (let i = 0; i < 10; i++) {
        console.log(photos[i]);
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('col');
        photoDiv.innerHTML = `
        
        <div class="card">
        <img src="${photos[i].thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${photos[i].title}</h5>
            <a href="${photos[i].url}">See The Details</a>
        </div>
    </div>
        `
        photoContainer.appendChild(photoDiv);
    }

}


loadPhot();
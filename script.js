console.log('hello world');

async function getData(){
    document.querySelector('form.pure-form').addEventListener('submit', function (e) {

        //prevent the normal submission of the form
        e.preventDefault();    
    });

    var artist = document.getElementById('searchArtist').value
    var str = 'https://itunes.apple.com/search?entity=album&term=ARTIST_NAME';
    var url = str.replace('ARTIST_NAME', artist);
    var request = new Request(url);
    var response = await fetch(request);
    var responseBody = await response.json();
    data = responseBody;
    results = data.results;
    console.log(results);
    for(var i = 0; i < results.length; i++) {
        var holder = document.getElementById('container');
        var artistInfo = document.createElement('ul');
        var artistInfoItems = document.createElement('li');
        var artistName = document.createElement('p');
        var artworkURL60 = document.createElement('img');
        var artworkURL100 = document.createElement('img');
        artworkURL60.className = 'album_image-container';
        artworkURL60.src = results[i].artworkURL60;
        artworkURL100.className = 'album_image-container';
        artworkURL100.src = results[i].artworkURL100;
        holder.appendChild(artistInfo);
        artistName.innerText = results[i].artistName;
        artistInfo.appendChild(artistInfoItems);
        artistInfoItems.appendChild(artistName);
        artistInfoItems.appendChild(artworkURL60);
        artistInfoItems.appendChild(artworkURL100);
        console.log(results[i]);
    }
  }
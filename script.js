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
    document.getElementById('container').innerText = results;
    console.log(results);
  }
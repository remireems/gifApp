document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()

  const keyword = document.getElementById('keyword').value

  //api key sFTcNNevpG5WRhbftXDrfPBvTMH8PXZa

  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=sFTcNNevpG5WRhbftXDrfPBvTMH8PXZa&q=${keyword}&limit=20&offset=0&rating=g&lang=en`)
    .then(res => {
      const gifs = res.data

      console.log(gifs)

      
      document.getElementById('gifs').innerHTML = `
        <img src="${gifs.data.images.original_still.url}" alt="${gifs.data[0].title}">
        <button id="saveGif">Save Gif</button>
      `
      


      document.getElementById('keyword').value = ''
    })
    .catch(err => console.error(err))

})
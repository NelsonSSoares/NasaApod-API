var nasa = $.ajax({url: 'https://api.nasa.gov/planetary/apod?api_key=lP2iHuJuKtd2hlJWxpwFfSCAFE2bTMc7rCghVUm2', async: false}).responseJSON
document.querySelector('body').style.backgroundImage = `url(${nasa.hdurl})`;


const btnPesquisar = $('#btnPesquisar');


btnPesquisar.on('click', function(){
    
    let data = document.getElementById('dataapi').value;
    console.log(data)
    let photo = $.ajax({
        url:` https://api.nasa.gov/planetary/apod?api_key=lP2iHuJuKtd2hlJWxpwFfSCAFE2bTMc7rCghVUm2&date=${data}`, async: false
      /*  success: function(request){
            $('body').css('background-image', `url:(${request.hdurl})`);
        }*/
    }).responseJSON

    if(photo.media_type == 'image'){
        document.querySelector('body').style.backgroundImage = `url(${photo.hdurl})`
        console.log(photo);
    }else{
        console.log(photo)
        let  body = document.querySelector('#pnlData');
        let  video = document.createElement('iframe');
        video.src = `${photo.url}`;
        video.style.width = '100%'
        video.style.height = '100%'
        body.append(video);
  
    }
})
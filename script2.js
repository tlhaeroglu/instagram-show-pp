class cDg {
    constructor(id) {
        this.id = id;
    }
    view() {
        var url = document.getElementById(this.id).src;
        const p = url.split("/");
        var t = '';
        for (let i = 0; i < p.length; i++) {
            if(i==2){
                t += p[i].replaceAll('-', '--').replaceAll('.','-')+atob('LnRyYW5zbGF0ZS5nb29n')+'/';
            } else { if(i != p.length-1){ t += p[i]+'/'; } else { t += p[i]; } }
        }
        document.getElementById(this.id).src = encodeURI(t);
        return encodeURI(t);
    }
}

$body = $("body");

$(document).on({
  ajaxStart: function () {
    $body.addClass("loading");
  },
  ajaxStop: function () {
    $body.removeClass("loading");
  },
});




$('.btn').click(function(){
    if ($('#username').val() === '') {
        alert('Kullanıcı adı giriniz.');
        return false;
    }

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://instagram28.p.rapidapi.com/user_info?user_name="+$('#username').val(),
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "instagram28.p.rapidapi.com",
            "x-rapidapi-key": "YOUR-API-KEY"
        }
    };
    
    $.ajax(settings).done(function (response) {
        $('.info').html(`
        <img src="${response.data.user.profile_pic_url_hd}.jpg" alt="pp bulunamadı" id="image" width="220" height="220">
        <h3 class="h3">@${response.data.user.username}</h3>
        <h4 class="h4">${response.data.user.full_name}</h4>`);
        let newUri1 = new cDg('image').view();
    });


    
});
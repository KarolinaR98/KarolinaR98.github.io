$(function(){

    let button = $('#get-data');

    button.on('click', function(){

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data){

                let pName = $('<p></p>').text(`Imię: ${data.imie}`);
                let pLastName = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let pProfession = $('<p></p>').text(`Zawód: ${data.zawod}`);
                let pCompany = $('<p></p>').text(`Firma: ${data.firma}`);

                $('body').append($('<div></div>').attr('id', 'dane-programisty').append(pName, pLastName, pProfession, pCompany));

                
            })
            .fail(error => {
                console.error(error);
            })
    })
})
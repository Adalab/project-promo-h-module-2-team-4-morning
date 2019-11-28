'use strict';


const responseURL = document.querySelector('.js-response');

createAllowCard.addEventListener('click', loadPhoto);

function sendData() {

  let inputs = Array.from(formValidation.elements);
  let json = getJSONFromInputs(inputs);
  json.skills = ['JavaScript', 'React'];
  json.photo = fr.result;
  sendRequest(json);
}

function loadPhoto() {
  const myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs) {
  return inputs.reduce(function (acc, val) {
    if (val.nodeName !== 'BUTTON')
      acc[val.name] = val.value;
    return acc;
  }, {})
}

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
  shareTwitter(result.cardURL);
}

const btnTwitter = document.querySelector('.js-button-twitter');

function shareTwitter(x) {
  btnTwitter.href = `https://twitter.com/intent/tweet?text=Quiero%20compartir%20mi%20tarjeta%20profesional%20por%20Twitter.&url=${x}%20La%20he%20creado%20en%3A%20&url=https%3A%2F%2Fn9.cl%2F9vmf&hashtags=tarjetavisita,html,css,javascript,businesscard,card,profile`;
}

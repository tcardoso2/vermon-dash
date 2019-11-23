widget = {
  //runs when we receive data from the job
  onData: function (el, data) {

    //The parameters our job passed through are in the data object
    //el is our widget element, so our actions should all be relative to that
    if (data.title) {
      $('h2', el).text(data.title);
    }
    $('.content', el).empty();
    for(let d in data.detectors) {
      if(!data.detectors[d].currentIntensity.ip) {
        continue
      }
      if(data.detectors[d].name) {
        $('.content', el).append(`<ul class='detector'>
        <li>${data.detectors[d].name}</li>
        <li>${data.detectors[d].currentIntensity.ip}</li>
        <li>${data.detectors[d].currentIntensity.up}</li>
        <li>${data.detectors[d].currentIntensity.mac}</li>
        </ul>`);
      } else {
        $('.content', el).append("<ul class='error'>Error</ul>")
      }
    }
  }
};

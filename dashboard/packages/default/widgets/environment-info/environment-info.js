widget = {
  //runs when we receive data from the job
  onData: function (el, data) {

    //The parameters our job passed through are in the data object
    //el is our widget element, so our actions should all be relative to that
    if (data.title) {
      $('h2', el).text(data.title);
    }

    $('.item-cpus', el).remove();
    $('.item-nr-cpus > .value' , el).html(data.info.cpus.length)

    let cpus = data.info.cpus;
    for(let i in cpus) {
      $('.content', el).append(
      `<div class='item-container item-cpus item-cpu-${i}'>` +
        "<div class='key'>CPU #" + (parseInt(i)+1) + "</div>" +
        "<div class='value'>" + cpus[i].model + "</div>" +
      "</div>");
    }

    $('.item-freemem > .value' , el).html(data.info.freemem);
    $('.item-totalmem > .value' , el).html(data.info.totalmem);
    $('.item-timestamp > .value' , el).html(data.info.timestamp);

    console.log(data.info);
  }
};
$(function() {
  const url = "https://restcountries.eu/rest/v2/name/";
  const $countriesList = $("#countries");

  $("#search").click(searchCountries);
  $("#country-name").keypress(function(e) {
    if (e.which === 13) {
      searchCountries();
    }
  });

  function searchCountries() {
    let countryName = $("#country-name").val();
    if (!countryName.length) {
      countryName = "Poland";
    }
    $.getJSON(url + countryName, showCountriesList);
  }

  function showCountriesList(resp) {
    $countriesList.empty();

    let $wrapper = $("<div>");

    const $listItem = $("<li>")
      .addClass("country")

      .appendTo($wrapper);

    const $colOne = $("<div>")
      .addClass("col-one")
      .appendTo($listItem);
    const $colTwo = $("<div>")
      .addClass("col-two")
      .appendTo($listItem);
    resp.forEach(function(item) {
      $("<p>")
        .text("Name")
        .appendTo($colOne);
      $("<p>")
        .text("Flag")
        .appendTo($colOne);
      $("<p>")
        .text("Population")
        .appendTo($colOne);
      $("<p>")
        .text("Capital")
        .appendTo($colOne);
      $("<p>")
        .text("Currency")
        .appendTo($colOne);
      $("<p>")
        .text(item.name)
        .appendTo($colTwo);
      $("<figure>")
        .addClass("figure-flag")
        .appendTo($colTwo);
      $("<img>")
        .addClass("flag")
        .attr("src", item.flag)
        .appendTo(".figure-flag");
      $("<p>")
        .text(item.population)
        .appendTo($colTwo);
      $("<p>")
        .text(item.capital)
        .appendTo($colTwo);
      $("<p>")
        .text(item.currencies[0].code)
        .appendTo($colTwo);
    });
    $wrapper.appendTo($countriesList);
  }
});

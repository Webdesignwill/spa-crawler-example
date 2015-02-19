
$(function () {

  var Results = function (element) {
    var $el = $(element),
          el = $el[0];

    return function render (res) {
      $el.empty().html('<a href="#" class="list-group-item"><h3>' + res.title + '</h3><p>' + res.content + '</p></a>');
    };
  };

  var results = new Results(document.getElementById('results-list'));

  var Filter = function (element) {
    var $el = $(element),
          el = $el[0];

    function filterResults (param) {

      function success (res, status) {
        results(res[0]);
      }

      $.ajax({
        type : 'GET',
        context : this,
        url : '/filter/?filter=' + param,
        contentType : 'application/x-www-form-urlencoded',
        success : success
      });
    }

    function getParams (href) {
      return href.split('filter=')[1];
    }

    $el.on('click', function (e) {
      e.preventDefault();
      filterResults(getParams(e.target.href));
    });

    if(window.location.hash) {
      filterResults(getParams(window.location.hash));
    }

  };

  new Filter(document.getElementById('filter'));

});
(function () {
  var $container = $('.row.shots')
  var tpl = _.template($('#shot-template').html())
  $.ajax({
    type: 'GET',
    url: 'https://api.dribbble.com/v1/users/marulango/shots',
    xhrFields: {
      'Access-Control-Allow-Credentials': '*',
      withCredentials: false
    },
    headers: {
      Authorization: 'Bearer 4801b9e49d6609420a8374179862292c9d94cfeedc05d1942af631370038d05a'
    }
  })
        .done(function (data) {
          var html = _(data).map(function (shot) {
            return tpl(shot)
          }).join('\n')
          $container.append(html)
        })
}())

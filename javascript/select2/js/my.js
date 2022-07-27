'use strict';
$(document).ready(function() {
  //single
  $('.js-example-basic-single').select2({
    placeholder:"Select a state",
    allowClear: true,
  });
  //multiple
  $('.js-example-basic-multiple').select2({
    placeholder:"Select a state",
  });
  //array
  var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];

  $(".js-example-data-array").select2({
    data: data
  })

  $(".js-example-data-array-selected").select2({
    data: data
  })

  //AJAX simple
  $(".js-data-example-ajax-simple").select2({
    ajax:{
      url: "https://api.github.com/search/repositories",
      dataType: 'json',
      delay: 250,
      /*data: (params) => {
        return {
          q: params.term,
        }
      },*/
      processResults: (data, params) => {
        const results = data.items.map(item => {
          return {
            id: item.id,
            text: item.full_name || item.name,
          };
        });
        return {
          results: results,
        }
      },
    }
  });
  //AJAX hard
  $(".js-data-example-ajax").select2({
    ajax: {
      url: "https://api.github.com/search/repositories",
      dataType: 'json',
      delay: 250,
      data: (params) => {
        return {
          q: params.term, // search term
          page: params.page //strankovací request
        };
      },
      processResults: function (data, params) {
        // parse the results into the format expected by Select2
        // since we are using custom formatting functions we do not need to
        // alter the remote JSON data, except to indicate that infinite
        // scrolling can be used
        params.page = params.page || 1;
  
        return {
          results: data.items,
          pagination: {
            more: (params.page * 30) < data.total_count
          }
        };
      },
      cache: true
    },
    placeholder: 'Search for a repository',
    minimumInputLength: 1,
    templateResult: formatRepo,
    templateSelection: formatRepoSelection
  });
  
  function formatRepo (repo) {
    if (repo.loading) {
      return repo.text;
    }
  
    var $container = $(
      "<div class='select2-result-repository clearfix'>" +
        "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
        "<div class='select2-result-repository__meta'>" +
          "<div class='select2-result-repository__title'></div>" +
          "<div class='select2-result-repository__description'></div>" +
          "<div class='select2-result-repository__statistics'>" +
            "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> </div>" +
            "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> </div>" +
            "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> </div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  
    $container.find(".select2-result-repository__title").text(repo.full_name);
    $container.find(".select2-result-repository__description").text(repo.description);
    $container.find(".select2-result-repository__forks").append(repo.forks_count + " Forks");
    $container.find(".select2-result-repository__stargazers").append(repo.stargazers_count + " Stars");
    $container.find(".select2-result-repository__watchers").append(repo.watchers_count + " Watchers");
  
    return $container;
  }
  
  function formatRepoSelection (repo) {
    return repo.full_name || repo.text;
  }


});
reload_user();

function reload_user(){
  $("#loadingtext").show();
  $.ajax({
    method: "get",
    url: "https://randomuser.me/ai",
    datatype: "json",
    data: { results: 1 },
    success: function(r) {
      $("#firstname").text(r.results[0].name.first);
      $("#lastname").text(r.results[0].name.last);
    },
    error: function(error) {
      //alert(JSON.stringify(error));
    },
    complete: function(){
      $("#loadingtext").fadeOut();
    }
  }).then(function() {
    alert("then after catch");
  }).catch(function() { //catch any error thrown during the ajax call
    alert("catch");

  }).fail(function() { //failure of the ajax call will be handled here and not going go to .then()
    alert("fail");
  });

}
function call($url){
  $("#loadingtext").show();
  return (
    $.ajax({
      method: "get",
      url: $url,
      datatype: "json",
      data: { results: 1 },
      success: function(r) {
        $("#firstname").text(r.results[0].name.first);
        $("#lastname").text(r.results[0].name.last);
      },
      error: function(error) {
        //alert(JSON.stringify(error));
      },
      complete: function(){
        $("#loadingtext").fadeOut();
      }
    }));
}
function catchThenError(){
  return call("https://randomuser.me/ai")
    .catch(function() { //catch any error thrown during the ajax call
      alert("spusteni catch()");})
    .then(function() {
    alert("spusteni then()");})
}
function failThenError(){
  return call("https://randomuser.me/ai")
    .fail(function() { 
      alert("spusteni fail()");})
    .then(function() {
    alert("spusteni then()");})
}

function catchThenOk(){
  return call("https://randomuser.me/api")
    .catch(function() { //catch any error thrown during the ajax call
      alert("spusteni catch()");})
    .then(function() {
    alert("spusteni then()");})
}
function failThenOk(){
  return call("https://randomuser.me/api")
    .fail(function() {
      alert("spusteni fail()");})
    .then(function() {
    alert("spusteni then");})
}

(document).ready(function() {



  var jqRequest = {
    url: "https://api.github.com/repos/rails/rails",
    type: "GET",
    dataType: "json", //expected format of response
    beforeSend: ( jqXHR )=> {
      jqXHR.overrideMimeType( "text/plain; charset=cs-CZ" );
      jqXHR.ahoj="predPoslanim";
      console.log(jqXHR);
    }
  }

  $.ajax(jqRequest)
    .done((data, textStatus, jqXHR)=> {
      jqXHR.ahoj="hotovo";
      console.log(data);
      console.log(jqXHR);
      console.log(textStatus);

    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.log('The AJAX request could not be completed!');
    }).always(function () {
      console.log('The request completed, one way or another.');
    });


    
  
  function reload_user(){
      $("#loadingtext").show();
      $.ajax({
      method: "get",
      url: "https://randomuser.me/api",
      datatype: "json",
      data: { results: 1 },
      success: function(r) {
        $("#firstname").text(r.results[0].name.first);
        $("#lastname").text(r.results[0].name.last);
      },
      error: function(error) {
        //alert(JSON.stringify(error));
      },
      complete: function(){
        $("#loadingtext").fadeOut();
      }
    }).catch(function() {
      alert("catch");
    })
    .then(function() {
      alert("then after catch");
    })
  }

});
  
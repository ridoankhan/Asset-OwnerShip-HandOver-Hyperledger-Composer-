$(document).ready(function () {

  $("#addTrader").click(function () {
    var param_data = {
      "$class": "org.example.mynetwork.Trader",
      "tradeId": $('#traderId').val(),
      "firstName": $('#firstName').val(),
      "lastName": $('#lastName').val()
    };
      $.ajax({

          url: 'http://localhost:3000/api/Trader',

          type: 'POST',

          dataType: 'json',

          data: param_data,

          success: function (data, textStatus, xhr) {
            //console.log(data);
            
            $("#failMsg").empty();
            document.getElementById("successMsg").innerHTML = "The trader has been succesfully added";
          },

          error: function (xhr, textStatus, errorThrown) {

              //console.log(textStatus);
              $("#successMsg").empty();
              document.getElementById("failMsg").innerHTML = "Error! Failed to add trader";
          }

      });

  });

});
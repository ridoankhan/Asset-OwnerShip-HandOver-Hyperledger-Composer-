$(document).ready(function () {

    $("#addCommodity").click(function () {
      var param_data = {
            "$class": "org.example.mynetwork.Commodity",
            "tradingSymbol":  $('#tradingSymbol').val(),
            "description": $('#description').val(),
            "mainExchange": $('#mainExchange').val(),
            "quantity": $('#quantity').val(),
            "owner": $('#newOwner').val()
      };
        $.ajax({
  
            url: 'http://localhost:3000/api/Commodity',
  
            type: 'POST',
  
            dataType: 'json',
  
            data: param_data,
  
            success: function (data, textStatus, xhr) {
  
                // console.log(data);
                $("#failMsg1").empty();
                document.getElementById("successMsg1").innerHTML = "The commodity has been succesfully added";
            },
  
            error: function (xhr, textStatus, errorThrown) {
  
                console.log(textStatus);
                $("#successMsg1").empty();
                document.getElementById("failMsg1").innerHTML = "Error! Failed to add commodity";
            }
  
        });
  
    });
  
  });
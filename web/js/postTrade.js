$(document).ready(function () {
  
    $("#performTrade").click(function () {
      var time=new Date(new Date().getTime() - new Date().getTimezoneOffset("GMT"+6) * 60000).toISOString();
      var param_data = {
          "$class": "org.example.mynetwork.Trade",
          "commodity": $('#commodityId').val(),
          "newOwner": $('#newOwnerId').val(),
          "transactionId": "",
          "timestamp": time
      };
        $.ajax({
  
            url: 'http://localhost:3000/api/Trade',
  
            type: 'POST',
  
            dataType: 'json',
  
            data: param_data,
  
            success: function (data, textStatus, xhr) {
  
                //console.log(data);
                $("#failMsg2").empty();
                document.getElementById("successMsg2").innerHTML = "The trade transaction has been performed";
                
  
            },
  
            error: function (xhr, textStatus, errorThrown) {
  
                //console.log(textStatus);
                $("#successMsg2").empty();
                document.getElementById("failMsg2").innerHTML = "Error! the transaction could not performed ";
  
            }
  
        });
  
    });
  
  });
$(document).ready(function() {
    // $("#showTrade").click(function() {
      var displayTrade = $("#tradeTable");
      
      displayTrade.text("Loading data from JSON source...");
  
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/api/Trade", // Using our resources.json file to serve results
        success: function(result) {
          console.log(result);
          var output =
            "<table><br/><thead><tr><th>Commodity</th><th>New Owner</th><th>transaction Id</th><th>timestamp</th></thead><tbody>";
          for (var i in result) {
            output +=
              "<tr><td>" +
              result[i].commodity.substring(41,44) +
              "</td><td>" +
              result[i].newOwner.substring(38,53) +
              "</td><td>" +
              result[i].transactionId +
              "</td><td>" +
              result[i].timestamp +
              "</td></tr>";
          }
          output += "</tbody></table>";
  
          displayTrade.html(output);
          $("table").addClass("table");
        },

        error: function(){
          alert("Error fetching Trade transaction data")
        }

      });
    // });
  });
  
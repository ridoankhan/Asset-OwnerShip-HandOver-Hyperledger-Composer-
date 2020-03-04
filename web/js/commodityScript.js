$(document).ready(function() {
    // $("#showCommodity").click(function() {
      var displayCommodity = $("#commodityTable");
      
      displayCommodity.text("Loading data from JSON source...");
  
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/api/Commodity", // Using our resources.json file to serve results
        success: function(result) {
          console.log(result);
          var output =
            "<table><thead><tr><th>Trading Symbol</th><th>Description</th><th>Main Exchange</th><th>Quantity</th><th>Owner</th></thead><tbody>";
          for (var i in result) {
            output +=
              "<tr><td>" +
              result[i].tradingSymbol +
              "</td><td>" +
              result[i].description +
              "</td><td>" +
              result[i].mainExchange +
              "</td><td>" +
              result[i].quantity +
              "</td><td>" +
              result[i].owner.substring(38,53) +
              "</td></tr>";
          }
          output += "</tbody></table>";
  
          displayCommodity.html(output);
          $("table").addClass("table");
        }
      });
    // });
  });
  
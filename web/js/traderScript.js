$(document).ready(function() {
  // $("#showTraders").click(function() {
    var displayTraders = $("#tradersTable");

    displayTraders.text("Loading data from JSON source...").css("color", "white");
    
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/api/Trader", // Using our resources.json file to serve results
      success: function(result) {
        console.log(result);
        var output =
          "<table><thead><tr><th>Trader ID</th><th>First Name</th><th>Last Name</th></thead><tbody>";
        for (var i in result) {
          output +=
            "<tr><td>" +
            result[i].tradeId +
            "</td><td>" +
            result[i].firstName +
            "</td><td>" +
            result[i].lastName +
            "</td><td>" +
            '<button class="update"> Update</button>' +
            "</td></tr>" 
            ;
        }
        output += "</tbody></table>";

        displayTraders.html(output);
        $("table").addClass("table");
      },

      error: function(){
        alert("Error fetching traders records");
      }

    });
  // });
});

// User interaction with table cells
$(document).ready(function () {
  $("td:not(:first-child)").click(function () {
    var content = $(this).text(); // Get the activity name

    if (content !== "Not Available") {
      $(this).toggleClass("tdhighlight"); // Highlight selection

      // Get the column index of the selected cell
      var columnIndex = $(this).index();

      // Get the corresponding cliff name from the table header
      var cliffName = $("thead th").eq(columnIndex).text();

      // Create the final display text
      var displayText = content + " at " + cliffName;

      if ($(this).hasClass("tdhighlight")) {
        $("#displaySelected").css("visibility", "visible");
        $("#displaySelected").css("margin-top", "2em");
        $("#result").append("<p>" + displayText + "</p>");
      } else {
        $("#result p:contains('" + displayText + "')").remove();

        if ($("#result").has("p").length == false) {
          $("#displaySelected").css("visibility", "hidden");
          $("#displaySelected").css("margin-top", "0");
        }
      }
    }
  });
});

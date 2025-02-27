$(document).ready(function () {
  let selectedActivities = new Set(); // Store selected activities uniquely

  $("td:not(:first-child)").click(function () {
    var content = $(this).text(); // Get the activity name
    if (content !== "Not Available") {
      $(this).toggleClass("tdhighlight"); // Highlight selection

      var columnIndex = $(this).index();
      var cliffName = $("thead th").eq(columnIndex).text();
      var displayText = content + " at " + cliffName;

      if ($(this).hasClass("tdhighlight")) {
        selectedActivities.add(displayText); // Add activity
      } else {
        selectedActivities.delete(displayText); // Remove if deselected
      }

      // Update modal content
      $("#modalBody").html(
        [...selectedActivities].map((item) => `<p>${item}</p>`).join("")
      );

      // Show the modal
      $("#activityModal").modal("show");
    }
  });
});

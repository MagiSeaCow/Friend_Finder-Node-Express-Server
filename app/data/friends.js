//Test Case
var friends = [
{
  name:"Mami Tomoe",
  photo:"https://i.kym-cdn.com/photos/images/newsfeed/000/439/250/fc8.jpg",
  scores:
  [
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1'
  ]
}
];

module.exports = friends;

// -------Function to compare two arrays and return difference (using this to detect result)
function findDiffOfScore(array1,array2)
{
  var result = 0;
  for(var i = 0; i < array1.length;i++)
  {
    result += Math.abs(array1[i] - array2[i]);
  }
  return result;
}
// // -------------

$("#submit").on("click", function(event)
{
  event.preventDefault();

  // Form validation
  function validateForm() 
  {
    var isValid = true;
    $(".form-control").each(function() 
    {
      if ($(this).val() === "")
      {
        isValid = false;
      }
    });

    $(".chosen-select").each(function() 
    {
      if ($(this).val() === "")
      {
        isValid = false;
      }
    });
    return isValid;
  }

  // If all required fields are filled
  if (validateForm())
  {
  // Create an object for the user"s data
  var userData =
  {
  name: $("#name").val(),
  photo: $("#photo").val(),
  scores:
  [
    $("#q1").val(),
    $("#q2").val(),
    $("#q3").val(),
    $("#q4").val(),
    $("#q5").val(),
    $("#q6").val(),
    $("#q7").val(),
    $("#q8").val(),
    $("#q9").val(),
    $("#q10").val()
  ]
  };
  // AJAX post the data to the friends API.
  $.post("/api/friends", userData, function(data) { //userData being the data that was entered from the survey file

  console.log("userData:" + JSON.stringify(userData));
  console.log("data" + JSON.stringify(data));

  // =============================================================================

  var results = 0;
  var tempresult = 999; // high number value just to ensure the numbers get replaced

  var tempDataArray = ["1","2"]; // holds the match data, (for multiple matches?)
  for(var i = 0; i < data.length; i++)
  {
    console.log("USER DATA: " , userData);
    console.log("DATA :" , data[i])
    var resultName;
  // console.log("Show me the magic" + testArray(addFriend.scores,friends[i].scores));
    if(userData.name != data[i].name)
    {
      results =  findDiffOfScore(userData.scores,data[i].scores);
      if(results < tempresult)
      {
        tempresult = results;
        tempDataArray[0] = data[i].name;
        tempDataArray[1] = data[i].photo;
      }
    }

    console.log("Testing: " ,   tempDataArray[0] );
    console.log("New Fresh Results: " + results);

    $("#match-name").text(tempDataArray[0]);
    $("#match-img").attr("src", tempDataArray[1]);
    $("#results-modal").modal("show");
  }
  // =============================================================================
  });
  } 
    else 
  {
    alert("Please fill out all fields before submitting!");
  }

  console.log(tempDataArray);

});
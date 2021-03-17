//jQuery and underscore already included

//Also already include are three json files that define three vars: routes, stops, and routeStops. Those vars have
//all the data you'll need for this project.


$(function(){
	//if you haven't used jQuery before, the code in here runs when the page first loads
	
	//As a test, let's add some html to the document. We'll make a simple dropdown list.
	//Just call the `InsertText` function with the id of the element you want to insert html inside
	//and the content to add.
	InsertText('mainContent', "<select><option>Option A</option><option>Option B</option></select>");
	// InsertText('test',"<select><option>"+routes+"</option></select>")

	//Also, as a test, let's take a look at some of the data from the json files. This will log it to your browsers
	//javascript console. You can see the output by opening up the dev tools in your browser.
	console.log(routes);
})

//This is a helper function we're giving you to insert any html you want inside an element with the specified Id
function InsertText(Id, Text){
	var Element = document.getElementById(Id);
	Element.innerHTML = Text;
};

// var $dropdown = $("#test");
// $.each(result,function(){
// 	$dropdown.append($("<option />").val(this.shortName.text(this.longName)))
// })

$.getJSON("/routes.json", function(result) {
    for (var i = 0; i < result.length; i++) {
        options += '<option value="' + result[i].ImageFolderID + '">' + result[i].Name + '</option>';
    }
});





// let dropdown = $('#locality-dropdown');

// dropdown.empty();

// dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
// dropdown.prop('selectedIndex', 0);


// // Populate dropdown with list of provinces
// $.getJSON(routes, function (data) {
//   $.each(data, function (key, entry) {
//     dropdown.append($('<option></option>').attr('value', entry.shortName).text(entry.Longname));
//   })
// });





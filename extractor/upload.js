function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            document.getElementById("inputBox").value = rawFile.responseText;
        }
    };
    rawFile.send(null);
}

 var fileInput = document.getElementById("fileInput");
var submitButton = document.getElementById("submitButton");
var textArea = document.getElementById("textbox");

submitButton.addEventListener("click", function() {
var file = fileInput.files[0];
var reader = new FileReader();
reader.onload = function(event) {
var contents = event.target.result;
textbox.value = contents;
};
reader.readAsText(file);

var contextss = reader.readAsText(file);

});

readTextFile(contextss);

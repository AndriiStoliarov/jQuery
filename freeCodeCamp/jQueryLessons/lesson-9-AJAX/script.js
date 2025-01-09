/* jQuery: AJAX = Asynchronous JavaScript And XML */

// function loadDoc() {
//     $("#demo").load("https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt",
//         function (responseText, statusTxt, xhr) {
//             if(statusTxt == "success")
//                 alert("External content loaded successfully!");
//             if(statusTxt == "error")
//                 alert("Error: " + xhr.status + ": " + xhr.statusText);
//         }
//     );
// }


// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
//     };
//     xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt", true);
//     xhttp.send();
// }


function loadDoc() {
    $.get("https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt",
        function(data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
        }
    );

    $.post("https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt",
        {
            name: "Beau Carnes",
            city: "Grand Rapids"
        },
        function(data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
        }
    );
}

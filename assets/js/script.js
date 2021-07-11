var containerEl = document.querySelector(".container");
var text = [];

var saveButtonHandler = function(event) {
    var targetEl = event.target;
    if (targetEl.matches(".saveBtn") || targetEl.matches(".fa-save")) {
        var timeId = targetEl.getAttribute("id");
        var textEl = document.querySelector("textarea[id='" + timeId + "']").value;

        text.push({time:timeId,text:textEl});

        localStorage.setItem("text",JSON.stringify(text));
    }
};

var load = function() {
    var savedText = localStorage.getItem("text");

    if (!savedText) {
        return false;
    }
    
    text = JSON.parse(savedText);
    
    for (var i = 0; i < text.length; i++) {
        document.querySelector("textarea[id='" + text[i].time + "']").value = text[i].text;
    }
};

containerEl.addEventListener("click", saveButtonHandler);

load();
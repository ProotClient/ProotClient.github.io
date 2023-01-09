let addedStylesheet = false;

function minecraftFontMainLogic (elementId = String, jsonText = Object ) {
    if (typeof jsonText=="object") {

        const element = document.getElementById(elementId);

        for (const prop in jsonText) {
          switch (prop) {
            case "bold":
              if (jsonText[prop]) element.className += " bold";
              break;
            case "italic":
              if (jsonText[prop]) element.className += " italic";
              break;
            case "underlined":
              if (jsonText[prop]) element.className += " underlined";
              break;
            case "strikethrough":
              if (jsonText[prop]) element.className += " strikethrough";
              break;
            case "color":
              element.className += ` ${jsonText[prop]}`;
              break;
          }
        }
        
        document.getElementById(elementId).className = document.getElementById(elementId).className.trim()
        document.getElementById(elementId).textContent = jsonText["text"];
    } else if (typeof jsonText=="string") {
        document.getElementById(elementId).textContent = jsonText;
    } else {
        console.error("Expected \"object\" or \"string\". Got \"" + typeof jsonText + "\".");
    }
}

function minecraftFont (elementId = String, jsonText = Object) {
    if (addedStylesheet == false) {
        const node = document.createElement("link");
        node.rel = "stylesheet";
        node.href = "https://prootclient.github.io/librarys/minecraftfont.css";

        document.head.appendChild(node);
        addedStylesheet = true;
    }

    console.log("jsonText", jsonText);

    if (!Array.isArray(jsonText)) {
        minecraftFontMainLogic (elementId, jsonText);
    } else if (Array.isArray(jsonText)) {
        for (let i = 0; i < jsonText.length; i++) {
            const node = document.createElement("text");
            node.id = elementId + "_" + i;

            document.getElementById(elementId).appendChild(node);
            minecraftFontMainLogic(node.id, jsonText[i]);
        }
    }
}

function minecraftFontWithShadow (jsonText) {
}


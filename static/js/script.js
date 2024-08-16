document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("chat-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const chatInput = document.getElementById("chat-input");
    const messageText = chatInput.value.trim();
    if (messageText !== "") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerText = messageText;

        document.getElementById("chat-box").appendChild(messageElement);
        chatInput.value = "";
        chatInput.focus();

        // Scroll to the bottom of the chat box
        document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
    }
}

function alertConvo() {
    return new Promise((resolve, reject) => {
        // Create a modal background
        var modalBackground = document.createElement("div");
        modalBackground.style.position = "fixed";
        modalBackground.style.top = "0";
        modalBackground.style.left = "0";
        modalBackground.style.width = "100%";
        modalBackground.style.height = "100%";
        modalBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        modalBackground.style.display = "flex";
        modalBackground.style.justifyContent = "center";
        modalBackground.style.alignItems = "center";
        modalBackground.style.zIndex = "1000";

        // Create the modal box
        var modalBox = document.createElement("div");
        modalBox.style.position = "relative"; // Position relative for the close button
        modalBox.style.backgroundColor = "white";
        modalBox.style.padding = "20px";
        modalBox.style.borderRadius = "8px";
        modalBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        modalBox.style.textAlign = "center";

        // Create the close button (X)
        var closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.cursor = "pointer";
        closeButton.style.fontSize = "20px";
        closeButton.style.color = "#888";

        // Create the input field
        var inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.placeholder = "Enter conversation name";
        inputBox.style.padding = "10px";
        inputBox.style.marginBottom = "10px";
        inputBox.style.width = "80%";
        inputBox.style.fontSize = "16px";

        // Create the confirm button
        var confirmButton = document.createElement("button");
        confirmButton.innerHTML = "OK";
        confirmButton.style.padding = "10px 20px";
        confirmButton.style.marginTop = "10px";
        confirmButton.style.backgroundColor = "#5680e9";
        confirmButton.style.color = "white";
        confirmButton.style.border = "none";
        confirmButton.style.borderRadius = "4px";
        confirmButton.style.cursor = "pointer";

        // Append close button, input and confirm button to the modal box
        modalBox.appendChild(closeButton);
        modalBox.appendChild(inputBox);
        modalBox.appendChild(confirmButton);

        // Append the modal box to the modal background
        modalBackground.appendChild(modalBox);

        // Append the modal background to the document body
        document.body.appendChild(modalBackground);

        // Add event listener to the confirm button
        confirmButton.addEventListener("click", function() {
            var convoName = inputBox.value;
            if (convoName) {
                document.body.removeChild(modalBackground); // Remove the modal
                resolve(convoName); // Resolve the promise with the conversation name
            }
        });

        // Add event listener to the close button
        closeButton.addEventListener("click", function() {
            document.body.removeChild(modalBackground); // Remove the modal
            reject("User closed the modal without entering a name"); // Reject the promise
        });
    });
}

// Function to create a new conversation list item
function newConvo(convoName) {
    const newConvo = document.createElement("li");
    newConvo.classList.add("convo");
    newConvo.title = convoName;
    newConvo.textContent = convoName; // Set the text content of the new list item

    const contactList = document.getElementById("contact-list");
    contactList.appendChild(newConvo); // Append the new item to the end of the list
}

// Usage of the functions
document.getElementById("add-convo").addEventListener("click", async function() {
    try {
        const convoName = await alertConvo(); // Wait for the user to input the conversation name
        newConvo(convoName); // Create the new conversation with the provided name
    } catch (error) {
        console.log(error); // Handle the case where the user closed the modal without input
    }
});




function openMenu() {
    var menu = document.querySelector('.menu');
    var menuContainer = document.querySelector('.menu-container');
    menuContainer.style.width = '15%'; // Change width on hover
    menu.style.display = 'flex';
}

function closeMenu() {
    var menu = document.querySelector('.menu');
    var menuContainer = document.querySelector('.menu-container');
    menuContainer.style.width = '5%'; // Reset width when not hovered
    menu.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('myVideo');
    video.controls = false;
  });


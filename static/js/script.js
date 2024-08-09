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

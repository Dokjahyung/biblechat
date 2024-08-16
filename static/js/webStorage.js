// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve and log to console
    console.log("Stored value:", localStorage.getItem("lastname"));
  } else {
    console.error("Sorry, your browser does not support Web Storage...");
  }


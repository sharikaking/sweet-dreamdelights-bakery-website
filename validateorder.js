document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Clear errors
    document.querySelectorAll(".error").forEach(function(el){
        el.innerText = "";
    });

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;

    // Name
    if(name === ""){
        document.getElementById("nameError").innerText = "Full name is required";
        valid = false;
    }

    // Phone
    if(phone === ""){
        document.getElementById("phoneError").innerText = "Phone number is required";
        valid = false;
    }

    // Email
    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if(!email.includes("@")){
        document.getElementById("emailError").innerText = "Enter a valid email";
        valid = false;
    }

    // Product
    if(product === ""){
        document.getElementById("productError").innerText = "Please select a product";
        valid = false;
    }

    // Quantity
    if(quantity === "" || quantity <= 0){
        document.getElementById("quantityError").innerText = "Enter a valid quantity";
        valid = false;
    }

    // Success
    if(valid){
        document.getElementById("successMsg").style.display = "block";
        document.getElementById("orderForm").reset();
    }

});
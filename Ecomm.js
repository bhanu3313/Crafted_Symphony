let cart = document.getElementById("cart");
let shopCard = document.querySelectorAll(".shopCard");

cart.addEventListener("click", function() {
    document.querySelector(".container").innerHTML = "";
    document.querySelector("body").innerHTML = '<a class="empty" href="">Cart is Empty</a>';
});

shopCard.forEach(function(card) {
    card.addEventListener("click", function() {
        document.querySelector(".container").innerHTML = "";

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML = `
            <img src=${card.querySelector("img").src} alt="Product Image">
            <div>
                <h1>Product Name</h1>
                <h1>Special Offer: Up to 50% Off!</h1>
                <p>Discover the latest trends and enjoy up to 50% off on our new arrivals. Don't miss out on these exclusive deals!</p>
                <p>High-quality materials and the latest fashion designs to keep you stylish and comfortable.</p>
                <p>Available in multiple sizes and colors to fit your unique style.</p>
                <p>Free shipping on orders over 1999 Rs. Shop now and elevate your wardrobe!</p>
                <a href="">Shop Now</a>
            </div>
        `;
        console.log(card);
        document.querySelector("body").appendChild(div);
    });
});

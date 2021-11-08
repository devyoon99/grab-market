axios
  .get("https://75cf7c45-ec1c-4ed7-842f-6dbc10752ed1.mock.pstmn.io/products")
  .then(function (result) {
    console.log("통신 결과 :", result);
    const products = result.data.products;
    let productsHtml = "";
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      productsHtml +=
        '<div class="product-card">' +
        "<div>" +
        '<img class="product-img" src="' +
        product.imageUrl +
        '" alt="농구공"/>' +
        "</div>" +
        '<div class="product-contents">' +
        '<span class="product-name">' +
        product.name +
        "</span>" +
        '<span class="product-price">' +
        product.price +
        "원</span>" +
        '<div class="product-seller">' +
        '<img class= "product-avatar" src="images/icons/avatar.png" alt="" />' +
        "<span>" +
        product.seller +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
    }

    document.querySelector("#product-list").innerHTML = productsHtml;
  })
  .catch(function (error) {
    console.log("error 발생");
  });

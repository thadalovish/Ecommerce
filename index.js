let data = [
    {
        id: "1",
        catagory: "eye",
        productName: "Lash Slick",
        discription: "film from mascara",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
        price: 110,
        totalQuantity: 2,
        quantity: 1
    },
    {
        id: "2",
        catagory: "eye",
        productName: "Boy Brow",
        discription: "grooming pormade",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/002/829/portrait_normal/BoyBrow_0_Default_01_ShopGrid.jpg?1549325864",
        price: 150,
        totalQuantity: 4,
        quantity: 1
    },
    {
        id: "3",
        catagory: "eye",
        productName: "Pro Tip",
        discription: "brush point liquid eyeliner",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/003/872/portrait_normal/01_Shopgrid_Brow_Flick.jpg?1565206094",
        price: 80,
        totalQuantity: 3,
        quantity: 1
    },
    {
        id: "4",
        catagory: "eye",
        productName: "Brow Flick",
        discription: "microfine detailing pen",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/003/872/portrait_normal/01_Shopgrid_Brow_Flick.jpg?1565206094",
        price: 210,
        totalQuantity: 5,
        quantity: 1
    },
    {
        id: "5",
        catagory: "skin",
        productName: "Solution",
        discription: "exfoliating skin perfector",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://images-na.ssl-images-amazon.com/images/I/218YircFpgL.jpg",
        price: 275,
        totalQuantity: 3,
        quantity: 1
    },
    {
        id: "6",
        catagory: "skin",
        productName: "Balm Dot Com Trio",
        discription: "choose three balms",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://i.pinimg.com/originals/17/b3/bf/17b3bf200e95b5a13f3d1a6657762a79.png",
        price: 305,
        totalQuantity: 7,
        quantity: 1
    },
    {
        id: "7",
        catagory: "skin",
        productName: "Futuredew",
        discription: "oil serum hybrid",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/004/423/portrait_normal/futuredew-soloproduct_682_leftedge_copy.jpg?1569419908=&w=600&q=80",
        price: 120,
        totalQuantity: 1,
        quantity: 1
    },
    {
        id: "8",
        catagory: "skin",
        productName: "Milky Jelly Cleanser",
        discription: "conditioning face wash",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://s1.r29static.com/bin/product/e28/x,85/2236888/image.webp",
        price: 475,
        totalQuantity: 5,
        quantity: 1
    },
    {
        id: "9",
        catagory: "skin",
        productName: "Priming Moisturizer",
        discription: "buildable hydrating creme",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/003/377/portrait_normal/priming_moisturizer.jpg?1551586998",
        price: 395,
        totalQuantity: 4,
        quantity: 1
    },
    {
        id: "10",
        catagory: "skin",
        productName: "Super Bounce",
        discription: "acid face serum",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://images-na.ssl-images-amazon.com/images/I/41womR%2BecGL._SL1006_.jpg",
        price: 390,
        totalQuantity: 5,
        quantity: 1
    },
    {
        id: "11",
        catagory: "skin",
        productName: "Invisible Shield",
        discription: "sunscreen spf 30",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://images-na.ssl-images-amazon.com/images/I/31QePlAGRPL.jpg",
        price: 420,
        totalQuantity: 6,
        quantity: 1
    },
]

let cartArr = [];
let favArr = [];

function setData() {
    $('.insert-coloumn').empty();
    $('.insert-coloumn-second').empty();
    for (var i = 0; i < data.length; i++) {
        let favclass = data[i].isFavorite ? "fas fa-heart" : "far fa-heart"
        let addtext = data[i].isAdd ? "Remove From Cart" : "Add To Cart"
        if (data[i].catagory == "eye") {
            $('.insert-coloumn').append("<div class='col-md-4 mt-2'><div class='card-spacing'><img src='" + data[i].mainImage + "' id='row-pic'><span class='favourite-wrapper' onclick='addFavorite(" + data[i].id + ")'><i class='" + favclass + "'></i></span></br><p1>" + data[i].productName + " - $ " + data[i].price + " </p1><p>" + data[i].discription + "</p><button class='add-to-cart-button' onclick='addToCart(" + data[i].id + ")'>" + addtext + "</button></div></div>");
        }
        else if (data[i].catagory == "skin") {
            $('.insert-coloumn-second').append("<div class='col-md-4 mt-2'><div class='card-spacing'><img src='" + data[i].mainImage + "' id='row-pic'><span class='favourite-wrapper' onclick='addFavorite(" + data[i].id + ")'><i class='" + favclass + "'></i></span></br><p1>" + data[i].productName + " - $ " + data[i].price + " </p1><p>" + data[i].discription + "</p><button class='add-to-cart-button' onclick='addToCart(" + data[i].id + ")'>" + addtext + "</button></div></div>");
        }
    }
}

function updateCartArray() {
    cartArr = data.filter(cart => {
        if (cart.isAdd == true) {
            return { cart }
        }
    });
}

function updateWishlistArray() {
    favArr = data.filter(Fav => {
        if (Fav.isFavorite == true) {
            return { Fav }
        }
    });
}

setData()

function addToCart(id) {
    const updatedCartArr = data.map(cart => {
        if (cart.id == id) {
            return { ...cart, isAdd: !cart.isAdd, isFavorite: false, quantity: 1 }
        }
        return cart
    })
    data = updatedCartArr
    setData()
    updateCartArray()
    updateWishlistArray()
    // on add to cart from wishlist section
    setWishListData()
    // on delete from card section
    setCartData()
}

function addFavorite(id) {
    const updatedFavoriteArr = data.map(cart => {
        if (cart.id == id) {
            return { ...cart, isFavorite: !cart.isFavorite, isAdd: false }
        }
        return cart
    })
    data = updatedFavoriteArr
    setData()
    updateWishlistArray()
    updateCartArray()
    // on delete from wishlist section
    setWishListData()
    // on delete from card section
    setCartData()
}

function reduceQuantity(id) {
    var quantityUpdateArray = data.map(cart => {
        if (cart.id == id && cart.quantity > 1) {
            return { ...cart, quantity: cart.quantity - 1 }
        }
        return cart
    })
    data = quantityUpdateArray
    updateCartArray()
    setCartData()
}

function addQuantity(id) {
    var quantityUpdateArray = data.map(cart => {
        if (cart.id == id && cart.totalQuantity > cart.quantity) {
            return { ...cart, quantity: cart.quantity + 1 }
        }
        return cart
    })
    data = quantityUpdateArray
    updateCartArray()
    setCartData()
}

function setCartData() {
    $('.checkout-modal-wrapper').empty();
    $('.total-amount-show-in-cart').empty()
    $('.card-count-red-button').text(cartArr.length)
    let totalCartValue = 0;
    if (cartArr.length) {
        $('.checkout-modal-checkout-section-code').removeClass('d-none').addClass('d-block')
        $('.no-data-section-in-cart').removeClass('d-block').addClass('d-none')
        for (var i = 0; i < cartArr.length; i++) {
            $('.checkout-modal-wrapper').append("<div class='border w-100 rounded mb-2 mt-2 flex p-4 flex-wrap'><div class='row'><div class='col-md-2'><img src='" + cartArr[i].mainImage + "' class='w-3'></div><div class='col-md-7'><h4 class='text-lg font-medium'>" + cartArr[i].productName + "</h4><p class='text-gray-600 text-xs pl-0'>" + cartArr[i].discription + "</p></div><div class='col-md-3'><h4 class='text-3xl font-medium'>$-" + cartArr[i].price + "</h4></div><div class='col-md-12 mt-2'><div class='row'><div class='col-md-4'><button class='add-to-cart-button w-114' onclick='addToCart(" + cartArr[i].id + ")'><i class='fas fa-trash'></i>&ensp;Delete </button></div><div class='col-md-8'><div class='row'><div class='col-md-12 mt-md-0 mt-2 text-md-center text-left'><button class='add-to-cart-button w-35 d-inline-block' onclick='reduceQuantity(" + cartArr[i].id + ")'><i class='fas fa-minus-circle'></i></button><p class='d-inline-block mr-2'>" + cartArr[i].quantity + "</p><button class='add-to-cart-button w-35 d-inline-block' onclick='addQuantity(" + cartArr[i].id + ")'><i class='fas fa-plus-circle'></i></button></div></div></div></div></div></div></div>");
            totalCartValue += cartArr[i].quantity * cartArr[i].price;
            $('.total-amount-show-in-cart').text(totalCartValue)
        }
    } else {
        $('.checkout-modal-checkout-section-code').removeClass('d-block').addClass('d-none')
        $('.no-data-section-in-cart').removeClass('d-none').addClass('d-block')
    }
}

function setWishListData() {
    $('.wishlist-modal-wrapper').empty();
    $('.card-count-red-button').text(cartArr.length)
    if (favArr.length) {
        $('.no-wishlist-section-in-cart').removeClass('d-block').addClass('d-none')
        for (var i = 0; i < favArr.length; i++) {
            $('.wishlist-modal-wrapper').append("<div class='border w-100 rounded mb-2 mt-2 flex p-4 flex-wrap'><div class='row'><div class='col-md-2'><img src='" + favArr[i].mainImage + "' class='w-3'></div><div class='col-md-7'><h4 class='text-lg font-medium'>" + favArr[i].productName + "</h4><p class='text-gray-600 text-xs pl-0'>" + favArr[i].discription + "</p></div><div class='col-md-3'><h4 class='text-3xl font-medium'>$-" + favArr[i].price + "</h4></div><div class='col-md-12 mt-2'><div class='row'><div class='col-6'><button class='add-to-cart-button w-114' onclick='addFavorite(" + favArr[i].id + ")'><i class='fas fa-trash'></i>&ensp;Delete</button></div><div class='col-6'><button class='add-to-cart-button w-114' onclick='addToCart(" + favArr[i].id + ")'><i class='fas fa-plus-circle'></i>&ensp;Add To Cart</button></div></div></div></div></div>");
        }
    } else {
        $('.no-wishlist-section-in-cart').removeClass('d-none').addClass('d-block')
    }
}
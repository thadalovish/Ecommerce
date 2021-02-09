let data = [
    {
        id: "1",
        catagory: "eye",
        productName: "Lash Slick",
        discription: "film from mascara",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
        price: "110"
    },
    {
        id: "2",
        catagory: "eye",
        productName: "Boy Brow",
        discription: "grooming pormade",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/002/829/portrait_normal/BoyBrow_0_Default_01_ShopGrid.jpg?1549325864",
        price: "150"
    },
    {
        id: "3",
        catagory: "eye",
        productName: "Pro Tip",
        discription: "brush point liquid eyeliner",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/003/872/portrait_normal/01_Shopgrid_Brow_Flick.jpg?1565206094",
        price: "80"
    },
    {
        id: "4",
        catagory: "eye",
        productName: "Brow Flick",
        discription: "microfine detailing pen",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/003/872/portrait_normal/01_Shopgrid_Brow_Flick.jpg?1565206094",
        price: "210"
    },
    {
        id: "5",
        catagory: "skin",
        productName: "Solution",
        discription: "exfoliating skin perfector",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://images-na.ssl-images-amazon.com/images/I/218YircFpgL.jpg",
        price: "275"
    },
    {
        id: "6",
        catagory: "skin",
        productName: "Balm Dot Com Trio",
        discription: "choose three balms",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://i.pinimg.com/originals/17/b3/bf/17b3bf200e95b5a13f3d1a6657762a79.png",
        price: "305"
    },
    {
        id: "7",
        catagory: "skin",
        productName: "Futuredew",
        discription: "oil serum hybrid",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/004/423/portrait_normal/futuredew-soloproduct_682_leftedge_copy.jpg?1569419908=&w=600&q=80",
        price: "120"
    },
    {
        id: "8",
        catagory: "skin",
        productName: "Milky Jelly Cleanser",
        discription: "conditioning face wash",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://s1.r29static.com/bin/product/e28/x,85/2236888/image.webp",
        price: "475"
    },
    {
        id: "9",
        catagory: "skin",
        productName: "Priming Moisturizer",
        discription: "buildable hydrating creme",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://static-assets.glossier.com/production/spree/images/attachments/000/003/377/portrait_normal/priming_moisturizer.jpg?1551586998",
        price: "395"
    },
    {
        id: "10",
        catagory: "skin",
        productName: "Super Bounce",
        discription: "acid face serum",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://images-na.ssl-images-amazon.com/images/I/41womR%2BecGL._SL1006_.jpg",
        price: "390"
    },
    {
        id: "11",
        catagory: "skin",
        productName: "Invisible Shield",
        discription: "sunscreen spf 30",
        isFavorite: false,
        isAdd: false,
        mainImage: "https://images-na.ssl-images-amazon.com/images/I/31QePlAGRPL.jpg",
        price: "420"
    },

]

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

setData()

function addToCart(id) {
    console.log(id)
    const updatedCartArr = data.map(cart => {
        if (cart.id == id) {
            return { ...cart, isAdd: !cart.isAdd }
        }
        return cart
    })
    data = updatedCartArr
    setData()
    let cartArr = data.filter(cart => {
        if (cart.isAdd == true) {
            return { cart }
        }
    });

    console.log(data, cartArr)
}

function addFavorite(id) {
    console.log(id)
    const updatedFavoriteArr = data.map(cart => {
        if (cart.id == id) {
            return { ...cart, isFavorite: !cart.isFavorite }
        }
        return cart
    })
    data = updatedFavoriteArr
    setData()
    let favArr = data.filter(Fav => {
        if (Fav.isFavorite == true) {
            return { Fav }
        }
    });

    console.log(data, favArr)
}

/*Load more*/
$(document).ready(function(){ 

	var catBtns = $('button').not("[id='']");
    

    $.getJSON("wines.json", function(result){
		var proContainer = $('.product');    //The container for all kinds of products
		$.each(result, function(key, value){
			var gapLine=$('.style').eq(0).clone();//the division line between each product

				var discountItem = $(".discountItem").eq(0).clone();//get the hidden empty product frame 
				discountItem.find("img").attr("src",value.img);
				discountItem.find("h4").html(value.title);
				discountItem.find("strong").eq(1).html(value.category);
				discountItem.find("p").html(value.description);
				if(value.onsale==="Y"){
					discountItem.find(".price").eq(0).html("$"+(parseFloat(value.price)+10).toFixed(2));
				}
				discountItem.find(".price").eq(1).html("$"+value.price);
				
				discountItem.find(".add-button").data("name",value.title);
				discountItem.find(".add-button").data("price",value.price);
				discountItem.find(".add-button").data("image",value.img);
				discountItem.find(".add-button").data("id",value.id);
				proContainer.append(discountItem);
				proContainer.append(gapLine);
                //display products
				discountItem.css("display","block");
				gapLine.css("display","block");
        });

    });


    catBtns.on('click', sortByCat);
    
    function sortByCat(){
    	var category = $(this).attr('id'); //get category button's value

        $.getJSON("wines.json", function(result){
			
			if(result){
	            var items = new Array();//Store items in this array
				var proItem;

				if(category!=="allType"){
					$.each(result, function(key, value){
						var gapLine=$('.style').eq(0).clone();		
		                if(value.category===category){
							proItem = buildItems(value);
							items.push(proItem);
							gapLine.css("display","block");
							items.push(gapLine);
						}	
		            });
				}else{
					$.each(result, function(key,value){
						var gapLine=$('.style').eq(0).clone();
	                	proItem = buildItems(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					});
				}
			}
			displayType(items);
        });    	
    }
	
});

//Build product frame for on-sale product in product page
function buildItems(value){
	var discountItem_ = $(".discountItem").eq(0).clone();
	discountItem_.find("img").attr("src",value.img);
	discountItem_.find("h4").html(value.title);
	discountItem_.find("strong").eq(1).html(value.category);
	discountItem_.find("p").html(value.description);
	if(value.onsale==="Y"){
		discountItem_.find(".price").eq(0).html("$"+(parseFloat(value.price)+10).toFixed(2));
	}
	discountItem_.find(".price").eq(1).html("$"+value.price);
	
	discountItem_.find(".add-button").data("name",value.title);
	discountItem_.find(".add-button").data("price",value.price);
	discountItem_.find(".add-button").data("image",value.img);
	discountItem_.find(".add-button").data("id",value.id);
	discountItem_.css("display","flex");
	return discountItem_;
}


//Display items in array
function displayType(items){
	$("div.product").empty();
	$("div.product").append(items);
}


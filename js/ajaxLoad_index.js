/*Load more*/
$(document).ready(function(){
        $.getJSON("wines.json", function(result){
			var featuredNumber=0; //Count number of featured items that have been retrieved
			var onsaleNumber=0;  //Count number of on-sale items that have been retrieved
			
            //Get two containers for featured items and on-sale items
			var featureItemFrame = $(".items-area")[0];
			var onsaleItemFrame = $(".items-area")[1];
			
			$.each(result, function(key, value){
				//for feature item
				if(value.popularity=="high"&&featuredNumber<5){ //when 5 items loaded, stop
                    //Set up all required HTML and CSS attributes
					var featureItem = $(".featureItem").eq(0).clone();
					featureItem.find("img").attr("src",value.img);
					featureItem.find("h5").html(value.title);
					featureItem.find(".item_price").html("$"+value.price);
					
					featureItem.find(".add-button").data("name",value.title);
					featureItem.find(".add-button").data("price",value.price);
					featureItem.find(".add-button").data("image",value.img);
					featureItem.find(".add-button").data("id",value.id);
					featureItem.find(".add-button").html("Add To Cart");
					featureItemFrame.append(featureItem);
					featureItem.removeClass('template');
					featuredNumber++;  
				}
                //for on-sale items 
				if(value.onsale=="Y"&&onsaleNumber<5){  //when 5 items loaded, stop
                    //Set up all required HTML and CSS attributes
					var onsaleItem = $(".onsaleItem").eq(0).clone();
					onsaleItem.find("img").attr("src",value.img);
					onsaleItem.find("h5").html(value.title);
					onsaleItem.find(".item_price").html("$"+value.price);
					onsaleItem.find("label").html("$"+(parseFloat(value.price)+10).toFixed(2));
					onsaleItem.find(".add-button").data("name",value.title);
					onsaleItem.find(".add-button").data("price",value.price);
					onsaleItem.find(".add-button").data("image",value.img);
					onsaleItem.find(".add-button").data("id",value.id);
					onsaleItem.find(".add-button").html("Add to Cart");
					onsaleItemFrame.append(onsaleItem);
					onsaleItem.featureItem.removeClass('template');
					onsaleNumber++;
				}
            });

        });	
});





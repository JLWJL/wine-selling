/*Load more*/
$(document).ready(function(){ 
        $.getJSON("wines.json", function(result){
			var proContainer = $('.product');    //The container for all kinds of products
			$.each(result, function(key, value){
				var gapLine=$('.style').eq(0).clone();//the division line between each product

				if(value.onsale==="Y"){ //for on-sale product 
					var discountItem = $(".discountItem").eq(0).clone();//get the hidden empty product frame 
					discountItem.find("img").attr("src",value.img);
					discountItem.find("h4").html(value.title);
					discountItem.find("strong").eq(1).html(value.category);
					discountItem.find("p").html(value.description);
					discountItem.find(".price").eq(0).html("$"+(parseFloat(value.price)+10).toFixed(2));
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
				}else{
                    //for regular price product 
					var normalItem = $(".normalItem").eq(0).clone();   //get the hidden empty product frame 
					normalItem.find("img").attr("src",value.img);
					normalItem.find("h4").html(value.title);
					normalItem.find("strong").eq(1).html(value.category);
					normalItem.find("p").html(value.description);
					normalItem.find(".price").html("$"+value.price);
					
					normalItem.find(".add-button").data("name",value.title);
					normalItem.find(".add-button").data("price",value.price);
					normalItem.find(".add-button").data("image",value.img);
					normalItem.find(".add-button").data("id",value.id);
					proContainer.append(normalItem);
					proContainer.append(gapLine);
                    //display products
					normalItem.css("display","block");
					gapLine.css("display","block");
				}
            });

        });
	
    
	$("#Riesling").click(function(){
        $.getJSON("wines.json", function(result){
			
            var items = new Array();//Store items in this array
			var proItem;
			$.each(result, function(key, value){
				
				var gapLine=$('.style').eq(0).clone();
                
				if(value.category=="Riesling"){
					if(value.onsale=="Y"){
						proItem = buildOnSaleItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}else{
						proItem = buildNormalItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);

					}
				}	
            });
			displayType(items);
        });
    });
	
	$("#Merlot").click(function(){
        $.getJSON("wines.json", function(result){
			
            var items = new Array();
			var proItem;
			$.each(result, function(key, value){
				var gapLine=$('.style').eq(0).clone();

                if(value.category=="Merlot"){
					if(value.onsale=="Y"){
						proItem = buildOnSaleItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}else{
						proItem = buildNormalItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}
				}	
            });
			displayType(items);
        });
    });
	
	$("#Shiraz").click(function(){
        $.getJSON("wines.json", function(result){
			
            var items = new Array();
			var proItem;
			$.each(result, function(key, value){
				var gapLine=$('.style').eq(0).clone();
				
                if(value.category=="Shiraz"){
					if(value.onsale=="Y"){
						proItem = buildOnSaleItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}else{
						proItem = buildNormalItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}
				}	
            });
			displayType(items);
        });
    });
	
	$("#PinotNoir").click(function(){
        $.getJSON("wines.json", function(result){
			
            var items = new Array();
			var proItem;
			$.each(result, function(key, value){
				var gapLine=$('.style').eq(0).clone();
				
                if(value.category=="Pinot Noir"){
					if(value.onsale=="Y"){
						proItem = buildOnSaleItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}else{
						proItem = buildNormalItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}
				}	
            });
			displayType(items);
        });
    });
	
	
	$("#allType").click(function(){
        $.getJSON("wines.json", function(result){
			
            var items = new Array();
			var proItem;
			$.each(result, function(key, value){
				var gapLine=$('.style').eq(0).clone();
				
					if(value.onsale=="Y"){
						proItem = buildOnSaleItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}else{
						proItem = buildNormalItem(value);
						items.push(proItem);
						gapLine.css("display","block");
						items.push(gapLine);
					}
            });
			displayType(items);
        });
    });
	
});

//Build product frame for on-sale product in product page
function buildOnSaleItem(value){
	var discountItem_ = $(".discountItem").eq(0).clone();
	discountItem_.find("img").attr("src",value.img);
	discountItem_.find("h4").html(value.title);
	discountItem_.find("strong").eq(1).html(value.category);
	discountItem_.find("p").html(value.description);
	discountItem_.find(".price").eq(0).html("$"+(parseFloat(value.price)+10).toFixed(2));
	discountItem_.find(".price").eq(1).html("$"+value.price);
	
	discountItem_.find(".add-button").data("name",value.title);
	discountItem_.find(".add-button").data("price",value.price);
	discountItem_.find(".add-button").data("image",value.img);
	discountItem_.find(".add-button").data("id",value.id);
	discountItem_.css("display","block");
	return discountItem_;
}

//Build product frame for regular price product in product page
function buildNormalItem(value){
	var normalItem_ = $(".normalItem").eq(0).clone();
	normalItem_.find("img").attr("src",value.img);
	normalItem_.find("h4").html(value.title);
	normalItem_.find("strong").eq(1).html(value.category);
	normalItem_.find("p").html(value.description);
	normalItem_.find(".price").html("$"+value.price);
	normalItem_.find(".add-button").data("name",value.title);
	normalItem_.find(".add-button").data("price",value.price);
	normalItem_.find(".add-button").data("image",value.img);
	normalItem_.find(".add-button").data("id",value.id);
	normalItem_.css("display","block");
	return normalItem_;
}

//Display items in array
function displayType(items){
	$("div.product").empty();
	$("div.product").append(items);
}


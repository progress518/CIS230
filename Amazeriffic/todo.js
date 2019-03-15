"use strict";

$( function() {
	$(".tabs span").toArray().forEach( function(element) {
		
		var toDos = [
			"Get Groceries",
			"New List",
			"Play with dogs",
			"Fear for future of human race",
			"Worry about global warming",
			"Feeling of absurdity"
		];
		
		$(element).on( "click", function() {
			var $element = $(element),
				$content;
			
			$(".tabs span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			if ( $(element).parent().is(":nth-child(1)") ) {
				$content = $("<ul>");
				for (var i = toDos.length - 1; i >= 0; i--)
				{
					$content.append( $("<li>").text ( toDos[i] ));
				}; // end for toDos
				$("main .content").append( $content );
			}
			else if ( $(element).parent().is(":nth-child(2)") ) {
				$content = $("<ul>");
				toDos.forEach( function ( todo ) {
					$content.append( $("<li>").text ( todo ));
				}); // end for toDos
				$("main .content").append( $content );
				
				
			}
			
			else if ( $(element).parent().is(":nth-child(3)") ) {
				console.log("third tab clicked")
				// Create input field
				// Create button
				// Whatever's there, put it in the array
			}
			else {
				console.warn("You f**ked up")
			}
			
			return false;
			
			
			
		}); // end on element click
	}); // end for each .tabs function
	
	
	
	
}) // end doc ready
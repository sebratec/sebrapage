$(document).ready(function(){  
	console.log(template);
	var templateElement = document.createRange().createContextualFragment(template);
	var place = document.querySelector("#courses");
	var url = "http://localhost:8080/api/courses";
	$.getJSON(url, function(json) {
		var result = JSON.parse(json);
		result.courses.forEach(function (course, i){
			var data = {
				"name": course["name"] != null ? course['name'] : "",
				"subtitle": course["subtitle"] != null ? course['subtitle'] : "",
				"short_description": course["short_description"] != null ? course['short_description'] : "",
			}
			var clone = templateElement.cloneNode(true);
			clone.querySelector('section').id = "newcourse"+i;
			clone.querySelector('h1').innerHTML = course["name"];
			var idx = i%3+1;
		    var background = "assets/img/photos/showcase_bg0" + idx + ".jpg";
			if(!(i % 2)) {
				var attrClass = clone.querySelector('.image.animated').getAttribute('class');
				clone.querySelector('.image.animated').setAttribute('class', attrClass + ' col-md-push-6');
			} else {
				var attrClass = clone.querySelector('.content.animated').getAttribute('class');
				clone.querySelector('.content.animated').setAttribute('class', attrClass + ' col-md-push-6');
			}
			clone.querySelector('.bg-image').setAttribute('style','background-image: url("' + background + '")');
			clone.querySelector('.image img').src = course["image_url"];
			clone.querySelector('h1').innerHTML = data["name"];
			clone.querySelector('p.lead').innerHTML = data["subtitle"].substr(0, 150);
			clone.querySelector('p.description').innerHTML = data["short_description"].substr(0, 150);
			clone.querySelector('a.btn').href = course["course_url"];
			place.parentNode.insertBefore(clone, place.nextSibling);
		});
	}).fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus); });
});

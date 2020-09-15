$(document).ready(function(){
	const templateElement = document.createRange().createContextualFragment(template);
	const place = document.querySelector("#courses");
	const url = "https://academy.sebratec.com/api/courses";
	$.getJSON(url, function(json) {
		const result = JSON.parse(json);
		result.courses.map((course, i) =>{
			const data = {
				"name": course["name"] != null ? course['name'] : "",
				"subtitle": course["subtitle"] != null ? course['subtitle'] : "",
				"short_description": course["short_description"] != null ? course['short_description'] : "",
			}
			const clone = templateElement.cloneNode(true);
			clone.querySelector('section').id = "newcourse"+i;
			clone.querySelector('h1').innerHTML = course["name"];
			const idx = i%3+1;
		  const background = "assets/img/photos/showcase_bg0" + idx + ".jpg";
			if(!(i % 2)) {
				let attrClass = clone.querySelector('.image.animated').getAttribute('class');
				clone.querySelector('.image.animated').setAttribute('class', attrClass + ' col-md-push-6');
			} else {
				let attrClass = clone.querySelector('.content.animated').getAttribute('class');
				clone.querySelector('.content.animated').setAttribute('class', attrClass + ' col-md-push-6');
			}
			clone.querySelector('.bg-image').setAttribute('style','background-image: url("' + background + '")');
			clone.querySelector('.image img').src = course["image_url"];
			clone.querySelector('h1').innerHTML = data["name"].toUpperCase();
			clone.querySelector('h2').innerHTML = data["subtitle"];
			clone.querySelector('p.description').innerHTML = $('<div/>').html(data["short_description"]).text();
			clone.querySelector('a.btn').href = course["course_url"];
			place.parentNode.insertBefore(clone, place.nextSibling);
		});
    Okno.Basic.animations()
	}).fail(function(jqXHR, textStatus, errorThrown) { console.log('courses request failed! ' + textStatus); });
});

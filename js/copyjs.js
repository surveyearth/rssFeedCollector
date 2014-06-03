$(document).ready(function() {

	$.ajax({
	  'url': 'http://uptsearch.cloudapp.net/solr/rss/select',
	  'data': {'wt':'json', 'q':'Engadget RSS Feed'},
	  'dataType': 'jsonp',
	  'jsonp': 'json.wrf'
	}).done(function(data) {
		var docs = data.response && data.response.docs ? data.response.docs : [];
		
		$.each(docs, function() {
			this.timeStamp = new Date(this.date).getTime();
		});

		docs.sort(function(a, b) {
			return a.timeStamp > b.timeStamp ? -1 : 1;
			/*if (a.timeStamp > b.timeStamp) {
				return -1;
			} else if (a.timeStamp < b.timeStamp) {
				return 1;
			} else {
				return 0;
			}*/
		});
		
		docs = docs.splice(0, 3);

		var template = '<div class="col-md-4e"><p><a href=""></a></p></div>';
		var rows = [];
		
		$.each(docs, function() {
			var html = $(template).clone();
			html.find('a').attr('href', this.link).html(this.title);
			rows.push(html);
		});
		$("#engadget").empty().append(rows);
		
		setGridHeights();
		
		console.log(docs.length);
		console.log(docs);
		
	}).fail(function(a, b, c){
		console.log(a, b, c);
	});

	$.ajax({
	  'url': 'http://uptsearch.cloudapp.net/solr/rss/select',
	  'data': {'wt':'json', 'q':'Fast Company'},
	  'dataType': 'jsonp',
	  'jsonp': 'json.wrf'
	}).done(function(data) {
		var docs = data.response && data.response.docs ? data.response.docs : [];
		
		$.each(docs, function() {
			this.timeStamp = new Date(this.date).getTime();
		});

		docs.sort(function(a, b) {
			if (a.timeStamp > b.timeStamp) {
				return -1;
			} else if (a.timeStamp < b.timeStamp) {
				return 1;
			} else {
				return 0;
			}
		});
		
		docs = docs.splice(0, 3);

		var template = '<div class="col-md-4e"><p><a href=""></a></p></div>';
		var rows = [];
		
		$.each(docs, function() {
			var html = $(template).clone();
			html.find('a').attr('href', this.link).html(this.title);
			rows.push(html);
		});
		$("#fastCompany").empty().append(rows);
		
		setGridHeights();
		
		console.log(docs.length);
		console.log(docs);
		
	}).fail(function(a, b, c){
		console.log(a, b, c);
	});

	$.ajax({
	  'url': 'http://uptsearch.cloudapp.net/solr/rss/select',
	  'data': {'wt':'json', 'q':'Mashable'},
	  'dataType': 'jsonp',
	  'jsonp': 'json.wrf'
	}).done(function(data) {
		var docs = data.response && data.response.docs ? data.response.docs : [];
		
		$.each(docs, function() {
			this.timeStamp = new Date(this.date).getTime();
		});

		docs.sort(function(a, b) {
			
			if (a.timeStamp > b.timeStamp) {
				return -1;
			} else if (a.timeStamp < b.timeStamp) {
				return 1;
			} else {
				return 0;
			}
		});
		
		docs = docs.splice(0, 3);

		var template = '<div class="col-md-4e"><p><a href=""></a></p></div>';
		var rows = [];
		
		$.each(docs, function() {
			var html = $(template).clone();
			html.find('a').attr('href', this.link).html(this.title);
			rows.push(html);
		});
		$("#mashable").empty().append(rows);
		
		setGridHeights();
		
		console.log(docs.length);
		console.log(docs);
		
	}).fail(function(a, b, c){
		console.log(a, b, c);
	});


	$(window).resize(function() {
		setGridHeights();
	});

	function setGridHeights () {
		
		$(".content-block").children().css({height: 'auto'});
		var maxHeight = 0;
		$(".content-block").children().each(function() {
			var height = $(this).height();
			if (height > maxHeight) {
				maxHeight = height;
			}
		});
		$(".content-block").children().css({height: maxHeight});
	};
	

});
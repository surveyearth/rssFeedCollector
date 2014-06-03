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
		
	}).fail(function() {
	$("#engadget").empty().html('<div class="col-md-12" align="center"><p>Content can not be displayed.<br><a href="http://www.engadget.com/">Visit engadget.com</a></p></div>');
	});
	
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
		});
		
		docs = docs.splice(0, 9);

		var template = '<div class="col-md-4e"><p><a href=""></a></p></div>';
		var rows = [];
		
		$.each(docs, function() {
			var html = $(template).clone();
			html.find('a').attr('href', this.link).html(this.title);
			rows.push(html);
		});
		$("#engadgetMainPage").empty().append(rows);
		
		setGridHeights();
		
	}).fail(function(){
		$("#engadgetMainPage").empty().html('<div class="col-md-12"><p>Content can not be displayed.<br><a href="http://www.engadget.com/">Visit engadget.com</a></p></div>');
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
			return a.timeStamp > b.timeStamp ? -1 : 1;
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

		
	}).fail(function(){
		$("#fastCompanyMainPage").empty().html('<div class="col-md-12"><p>Content can not be displayed. <br><a href="http://www.fastcompany.com/">Visit fastcompany.com</a></p></div>');
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
			return a.timeStamp > b.timeStamp ? -1 : 1;
		});
		
		docs = docs.splice(0, 9);

		var template = '<div class="col-md-4e"><p><a href=""></a></p></div>';
		var rows = [];
		
		$.each(docs, function() {
			var html = $(template).clone();
			html.find('a').attr('href', this.link).html(this.title);
			rows.push(html);
		});
		$("#fastCompanyMainPage").empty().append(rows);
		
		setGridHeights();

		
	}).fail(function(){
		$("#fastCompanyMainPage").empty().html('<div class="col-md-12"><p>Content can not be displayed. <br><a href="http://www.fastcompany.com/">Visit fastcompany.com</a></p></div>');
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
			return a.timeStamp > b.timeStamp ? -1 : 1;
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

		
	}).fail(function(){
		$("#mashableMainPage").empty().html('<div class="col-md-12"><p>Content can not be displayed. <br><a href="http://mashable.com/">Visit mashable.com</a></p></div>');
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
			return a.timeStamp > b.timeStamp ? -1 : 1;
		});
		
		docs = docs.splice(0, 9);

		var template = '<div class="col-md-4e"><p><a href=""></a></p></div>';
		var rows = [];
		
		$.each(docs, function() {
			var html = $(template).clone();
			html.find('a').attr('href', this.link).html(this.title);
			rows.push(html);
		});
		$("#mashableMainPage").empty().append(rows);
		
		setGridHeights();

		
	}).fail(function(){
		$("#mashableMainPage").empty().html('<div class="col-md-12"><p>Content can not be displayed. <br><a href="http://mashable.com/">Visit mashable.com</a></p></div>');
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
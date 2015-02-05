/*
 * @hellocreation
 */
$(function() {
	/**
	 * Model
	 */
	Tour = Backbone.Model.extend({});

	/**
	 * Collection
	 */
	TourCollection = Backbone.Collection.extend({
		model: Tour,

		//If you define a comparator, it will be used to maintain the collection in sorted order.
		comparator: function(item) {
			return item.get('pid');
		}
	});

	//tour list view
	var TourListView = Backbone.View.extend({
		el: $('#tourListView'),
		tourListTemplate: $("#tourListTmpl").template(),
		render: function() {
			var self = this;
			this.el.fadeOut(0, function() {
				$('#tourList').empty();
				$.tmpl(self.tourListTemplate, self.model.toArray()).appendTo(self.el.find('#tourList'));
				self.el.fadeIn(500);
			});
			return this;
		},
	});

	//tour list view
	var TourDetailView = Backbone.View.extend({
		el: $('#tourDetailView'),
		events: {
			"click .contact": "contactBtnClick",
		},
		tourDetailTemplate: $("#tourDetailTmpl").template(),
		render: function() {
			var self = this;
			this.el.fadeOut(0, function() {
				self.el.empty();
				$.tmpl(self.tourDetailTemplate, self.model).appendTo(self.el);
				self.el.fadeIn(500);
			});
			return this;
		},
		contactBtnClick: function() {
			alert('Thank you for contacting us');
		}
	});

	//controller
	var Application = Backbone.Controller.extend({
		_tourListView: null,
		//store local tourlist object
		_tourDetailView: null,
		//store local tourdetail object
		_tours: null,
		//store local tours collection
		routes: {
			"": "tourList",
			"tourDetail/:id": "tourDetail",
		},

		/*
		 * Constructor
		 */
		initialize: function(options) {
			var self = this;
			if (this._tourListView === null) {
				$.ajax({
					url: 'data/data.json',
					dataType: 'json',
					data: {},
					success: function(data) {
						//create Tour collect and Set Data
						self._tours = new TourCollection(data);
						self.tourList();
					}
				});
				return this;
			}
			return this;
		},

		tourList: function() {
			this._tourListView = new TourListView({
				model: this._tours
			});
			this._tourListView.render();
		},

		tourDetail: function(id) {
			this._tourDetailView = new TourDetailView({
				model: this._tours.at(id)
			});
			this._tourDetailView.render();
		}
	});

	//instantiate Application object
	app = new Application();
	Backbone.history.start();
});

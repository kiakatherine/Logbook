import Ember from 'ember';

var Entry = Ember.Object.extend({});

export default Ember.Controller.extend({
	
	entries: [],
	
	workout: null,
	score: null,
	classTime: null,
	sleep: null,
	nutrition: null,
	stress: null,
	notes: null,
	
	actions: {
		addNewEntry: function() {
		  this.get('entries').pushObject(Entry.create({  
			workout: this.get('workout'),
			score: this.get('score'),
			classTime: this.get('classTime'),
			sleep: this.get('sleep'),
			nutrition: this.get('nutrition'),
			stress: this.get('stress'),
			notes: this.get('notes')
		  }));
		}
	}
});

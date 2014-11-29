/* jshint node: true */
'use strict';

var _ = require('lodash'),
	Viewport = require('../engine/Viewport.js'),
	Entity = require('../engine/Entity.js'),
	Layer = require('../engine/Layer.js'),
	Sprite = require('../engine/Sprite.js');

// Instances
// GameUI
// MenuUI
// PauseUI
var GameViewport = function (attributes) {
	Viewport.apply(this, attributes); // super()

	var sprites = {
		idle: new Sprite({
			url: 'img/sprites/s_idle.png'
		})
	};

	this.layers = [
		new Layer(), // sky
		new Layer(), // background -- landmarks
		new Layer()  // foreground -- player + obstacles
	];

	var ePlayer = new Entity({
			sprite: sprites.idle,
			position: { x: 0, y: 0 },
			scale: { x: 0.2, y: 0.2 }
		});
	
	this.layers[2].entities.push(ePlayer);
};

_.extend(GameViewport.prototype, Viewport.prototype);

module.exports = GameViewport;
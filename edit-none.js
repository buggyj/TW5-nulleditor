/*\
title: $:/core/modules/widgets/edit-none.js
type: application/javascript
module-type: widget



\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var nullWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
nullWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
nullWidget.prototype.render = function(parent,nextSibling) {

};

/*
Compute the internal state of the widget
*/
nullWidget.prototype.execute = function() {

};

/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
nullWidget.prototype.refresh = function(changedTiddlers) {

		return false;		

};

exports["edit-none"] = nullWidget;

})();

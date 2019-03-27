/*global QUnit*/

sap.ui.define([
	"cl/POReport/controller/POHeader.controller"
], function (Controller) {
	"use strict";

	QUnit.module("POHeader Controller");

	QUnit.test("I should test the POHeader controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
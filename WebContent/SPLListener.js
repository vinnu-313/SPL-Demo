// Generated from SPL.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SPLParser.
function SPLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SPLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SPLListener.prototype.constructor = SPLListener;

// Enter a parse tree produced by SPLParser#splg.
SPLListener.prototype.enterSplg = function(ctx) {
};

// Exit a parse tree produced by SPLParser#splg.
SPLListener.prototype.exitSplg = function(ctx) {
};


// Enter a parse tree produced by SPLParser#define.
SPLListener.prototype.enterDefine = function(ctx) {
};

// Exit a parse tree produced by SPLParser#define.
SPLListener.prototype.exitDefine = function(ctx) {
};


// Enter a parse tree produced by SPLParser#namespace_def.
SPLListener.prototype.enterNamespace_def = function(ctx) {
};

// Exit a parse tree produced by SPLParser#namespace_def.
SPLListener.prototype.exitNamespace_def = function(ctx) {
};


// Enter a parse tree produced by SPLParser#table_def.
SPLListener.prototype.enterTable_def = function(ctx) {
};

// Exit a parse tree produced by SPLParser#table_def.
SPLListener.prototype.exitTable_def = function(ctx) {
};


// Enter a parse tree produced by SPLParser#icon_def.
SPLListener.prototype.enterIcon_def = function(ctx) {
};

// Exit a parse tree produced by SPLParser#icon_def.
SPLListener.prototype.exitIcon_def = function(ctx) {
};


// Enter a parse tree produced by SPLParser#nv_pair_def.
SPLListener.prototype.enterNv_pair_def = function(ctx) {
};

// Exit a parse tree produced by SPLParser#nv_pair_def.
SPLListener.prototype.exitNv_pair_def = function(ctx) {
};


// Enter a parse tree produced by SPLParser#column_def.
SPLListener.prototype.enterColumn_def = function(ctx) {
};

// Exit a parse tree produced by SPLParser#column_def.
SPLListener.prototype.exitColumn_def = function(ctx) {
};


// Enter a parse tree produced by SPLParser#label_def.
SPLListener.prototype.enterLabel_def = function(ctx) {
};

// Exit a parse tree produced by SPLParser#label_def.
SPLListener.prototype.exitLabel_def = function(ctx) {
};


// Enter a parse tree produced by SPLParser#regex.
SPLListener.prototype.enterRegex = function(ctx) {
};

// Exit a parse tree produced by SPLParser#regex.
SPLListener.prototype.exitRegex = function(ctx) {
};



exports.SPLListener = SPLListener;
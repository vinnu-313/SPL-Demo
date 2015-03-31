// Generated from SPL.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SPLListener = require('./SPLListener').SPLListener;
var grammarFileName = "SPL.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\32_\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t",
    "\t\4\n\t\n\3\2\6\2\26\n\2\r\2\16\2\27\3\3\3\3\5\3\34\n\3\3\4\3\4\3\4",
    "\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4)\n\4\3\4\3\4\3\5\3\5\3\5\3\5\3",
    "\5\3\5\3\5\3\6\3\6\3\7\3\7\3\7\6\79\n\7\r\7\16\7:\3\7\5\7>\n\7\3\7\3",
    "\7\3\b\3\b\3\b\3\b\7\bF\n\b\f\b\16\bI\13\b\3\b\5\bL\n\b\3\b\3\b\3\b",
    "\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\6\nY\n\n\r\n\16\nZ\3\n\3\n\3\n\3G\2",
    "\13\2\4\6\b\n\f\16\20\22\2\3\3\2\24\24]\2\25\3\2\2\2\4\33\3\2\2\2\6",
    "\35\3\2\2\2\b,\3\2\2\2\n\63\3\2\2\2\f\65\3\2\2\2\16A\3\2\2\2\20P\3\2",
    "\2\2\22V\3\2\2\2\24\26\5\4\3\2\25\24\3\2\2\2\26\27\3\2\2\2\27\25\3\2",
    "\2\2\27\30\3\2\2\2\30\3\3\2\2\2\31\34\5\6\4\2\32\34\5\b\5\2\33\31\3",
    "\2\2\2\33\32\3\2\2\2\34\5\3\2\2\2\35\36\7\3\2\2\36\37\7\4\2\2\37 \7",
    "\25\2\2 !\7\5\2\2!\"\7\26\2\2\"#\7\6\2\2#$\7\7\2\2$(\5\22\n\2%&\7\b",
    "\2\2&\'\7\7\2\2\')\5\22\n\2(%\3\2\2\2()\3\2\2\2)*\3\2\2\2*+\7\t\2\2",
    "+\7\3\2\2\2,-\7\3\2\2-.\7\n\2\2./\7\25\2\2/\60\7\4\2\2\60\61\7\25\2",
    "\2\61\62\5\n\6\2\62\t\3\2\2\2\63\64\5\f\7\2\64\13\3\2\2\2\65\66\7\13",
    "\2\2\668\7\f\2\2\679\5\16\b\28\67\3\2\2\29:\3\2\2\2:8\3\2\2\2:;\3\2",
    "\2\2;=\3\2\2\2<>\7\r\2\2=<\3\2\2\2=>\3\2\2\2>?\3\2\2\2?@\7\t\2\2@\r",
    "\3\2\2\2AB\7\16\2\2BK\7\25\2\2CG\7\17\2\2DF\13\2\2\2ED\3\2\2\2FI\3\2",
    "\2\2GH\3\2\2\2GE\3\2\2\2HJ\3\2\2\2IG\3\2\2\2JL\7\20\2\2KC\3\2\2\2KL",
    "\3\2\2\2LM\3\2\2\2MN\7\27\2\2NO\5\20\t\2O\17\3\2\2\2PQ\7\21\2\2QR\7",
    "\26\2\2RS\7\22\2\2ST\7\23\2\2TU\7\26\2\2U\21\3\2\2\2VX\7\24\2\2WY\n",
    "\2\2\2XW\3\2\2\2YZ\3\2\2\2ZX\3\2\2\2Z[\3\2\2\2[\\\3\2\2\2\\]\7\24\2",
    "\2]\23\3\2\2\2\n\27\33(:=GKZ"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'DEFINE'", "'NAMESPACE'", "'DESCRIPTION'", 
                     "'BEGINS'", "'WITH'", "'ENDS'", "';'", "'TABLE'", "'ICON'", 
                     "'nvpair_basic'", "'CONSTRAIN()'", "'COLUMN'", "'('", 
                     "')'", "'<label='", "'>'", "'AS'", "'/'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', "COLNAME", 
                      "LABEL", "DATATYPE", "NULL_DEF", "INT", "WS" ];

var ruleNames =  [ "splg", "define", "namespace_def", "table_def", "icon_def", 
                   "nv_pair_def", "column_def", "label_def", "regex" ];

function SPLParser (input) {
	console.info(input);
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SPLParser.prototype = Object.create(antlr4.Parser.prototype);
SPLParser.prototype.constructor = SPLParser;

Object.defineProperty(SPLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SPLParser.EOF = antlr4.Token.EOF;
SPLParser.T__0 = 1;
SPLParser.T__1 = 2;
SPLParser.T__2 = 3;
SPLParser.T__3 = 4;
SPLParser.T__4 = 5;
SPLParser.T__5 = 6;
SPLParser.T__6 = 7;
SPLParser.T__7 = 8;
SPLParser.T__8 = 9;
SPLParser.T__9 = 10;
SPLParser.T__10 = 11;
SPLParser.T__11 = 12;
SPLParser.T__12 = 13;
SPLParser.T__13 = 14;
SPLParser.T__14 = 15;
SPLParser.T__15 = 16;
SPLParser.T__16 = 17;
SPLParser.T__17 = 18;
SPLParser.COLNAME = 19;
SPLParser.LABEL = 20;
SPLParser.DATATYPE = 21;
SPLParser.NULL_DEF = 22;
SPLParser.INT = 23;
SPLParser.WS = 24;

SPLParser.RULE_splg = 0;
SPLParser.RULE_define = 1;
SPLParser.RULE_namespace_def = 2;
SPLParser.RULE_table_def = 3;
SPLParser.RULE_icon_def = 4;
SPLParser.RULE_nv_pair_def = 5;
SPLParser.RULE_column_def = 6;
SPLParser.RULE_label_def = 7;
SPLParser.RULE_regex = 8;

function SplgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_splg;
    return this;
}

SplgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SplgContext.prototype.constructor = SplgContext;

SplgContext.prototype.define = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DefineContext);
    } else {
        return this.getTypedRuleContext(DefineContext,i);
    }
};

SplgContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterSplg(this);
	}
};

SplgContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitSplg(this);
	}
};




SPLParser.SplgContext = SplgContext;

SPLParser.prototype.splg = function() {

    var localctx = new SplgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SPLParser.RULE_splg);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 18;
            this.define();
            this.state = 21; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_define;
    return this;
}

DefineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineContext.prototype.constructor = DefineContext;

DefineContext.prototype.namespace_def = function() {
    return this.getTypedRuleContext(Namespace_defContext,0);
};

DefineContext.prototype.table_def = function() {
    return this.getTypedRuleContext(Table_defContext,0);
};

DefineContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterDefine(this);
	}
};

DefineContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitDefine(this);
	}
};




SPLParser.DefineContext = DefineContext;

SPLParser.prototype.define = function() {

    var localctx = new DefineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SPLParser.RULE_define);
    try {
        this.state = 25;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.namespace_def();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 24;
            this.table_def();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Namespace_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_namespace_def;
    return this;
}

Namespace_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Namespace_defContext.prototype.constructor = Namespace_defContext;

Namespace_defContext.prototype.COLNAME = function() {
    return this.getToken(SPLParser.COLNAME, 0);
};

Namespace_defContext.prototype.LABEL = function() {
    return this.getToken(SPLParser.LABEL, 0);
};

Namespace_defContext.prototype.regex = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RegexContext);
    } else {
        return this.getTypedRuleContext(RegexContext,i);
    }
};

Namespace_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterNamespace_def(this);
	}
};

Namespace_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitNamespace_def(this);
	}
};




SPLParser.Namespace_defContext = Namespace_defContext;

SPLParser.prototype.namespace_def = function() {

    var localctx = new Namespace_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SPLParser.RULE_namespace_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.match(SPLParser.T__0);
        this.state = 28;
        this.match(SPLParser.T__1);
        this.state = 29;
        this.match(SPLParser.COLNAME);
        this.state = 30;
        this.match(SPLParser.T__2);
        this.state = 31;
        this.match(SPLParser.LABEL);
        this.state = 32;
        this.match(SPLParser.T__3);
        this.state = 33;
        this.match(SPLParser.T__4);
        this.state = 34;
        this.regex();
        this.state = 38;
        _la = this._input.LA(1);
        if(_la===SPLParser.T__5) {
            this.state = 35;
            this.match(SPLParser.T__5);
            this.state = 36;
            this.match(SPLParser.T__4);
            this.state = 37;
            this.regex();
        }

        this.state = 40;
        this.match(SPLParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Table_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_table_def;
    return this;
}

Table_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_defContext.prototype.constructor = Table_defContext;

Table_defContext.prototype.COLNAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COLNAME);
    } else {
        return this.getToken(SPLParser.COLNAME, i);
    }
};


Table_defContext.prototype.icon_def = function() {
    return this.getTypedRuleContext(Icon_defContext,0);
};

Table_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterTable_def(this);
	}
};

Table_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitTable_def(this);
	}
};




SPLParser.Table_defContext = Table_defContext;

SPLParser.prototype.table_def = function() {

    var localctx = new Table_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SPLParser.RULE_table_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.match(SPLParser.T__0);
        this.state = 43;
        this.match(SPLParser.T__7);
        this.state = 44;
        this.match(SPLParser.COLNAME);
        this.state = 45;
        this.match(SPLParser.T__1);
        this.state = 46;
        this.match(SPLParser.COLNAME);
        this.state = 47;
        this.icon_def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_icon_def;
    return this;
}

Icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Icon_defContext.prototype.constructor = Icon_defContext;

Icon_defContext.prototype.nv_pair_def = function() {
    return this.getTypedRuleContext(Nv_pair_defContext,0);
};

Icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterIcon_def(this);
	}
};

Icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitIcon_def(this);
	}
};




SPLParser.Icon_defContext = Icon_defContext;

SPLParser.prototype.icon_def = function() {

    var localctx = new Icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SPLParser.RULE_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.nv_pair_def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Nv_pair_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_nv_pair_def;
    return this;
}

Nv_pair_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Nv_pair_defContext.prototype.constructor = Nv_pair_defContext;

Nv_pair_defContext.prototype.column_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Column_defContext);
    } else {
        return this.getTypedRuleContext(Column_defContext,i);
    }
};

Nv_pair_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterNv_pair_def(this);
	}
};

Nv_pair_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitNv_pair_def(this);
	}
};




SPLParser.Nv_pair_defContext = Nv_pair_defContext;

SPLParser.prototype.nv_pair_def = function() {

    var localctx = new Nv_pair_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SPLParser.RULE_nv_pair_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(SPLParser.T__8);
        this.state = 52;
        this.match(SPLParser.T__9);
        this.state = 54; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 53;
            this.column_def();
            this.state = 56; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.T__11);
        this.state = 59;
        _la = this._input.LA(1);
        if(_la===SPLParser.T__10) {
            this.state = 58;
            this.match(SPLParser.T__10);
        }

        this.state = 61;
        this.match(SPLParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Column_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_column_def;
    return this;
}

Column_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Column_defContext.prototype.constructor = Column_defContext;

Column_defContext.prototype.COLNAME = function() {
    return this.getToken(SPLParser.COLNAME, 0);
};

Column_defContext.prototype.DATATYPE = function() {
    return this.getToken(SPLParser.DATATYPE, 0);
};

Column_defContext.prototype.label_def = function() {
    return this.getTypedRuleContext(Label_defContext,0);
};

Column_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterColumn_def(this);
	}
};

Column_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitColumn_def(this);
	}
};




SPLParser.Column_defContext = Column_defContext;

SPLParser.prototype.column_def = function() {

    var localctx = new Column_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SPLParser.RULE_column_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(SPLParser.T__11);
        this.state = 64;
        this.match(SPLParser.COLNAME);
        this.state = 73;
        _la = this._input.LA(1);
        if(_la===SPLParser.T__12) {
            this.state = 65;
            this.match(SPLParser.T__12);
            this.state = 69;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1+1) {
                    this.state = 66;
                    this.matchWildcard(); 
                }
                this.state = 71;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
            }

            this.state = 72;
            this.match(SPLParser.T__13);
        }

        this.state = 75;
        this.match(SPLParser.DATATYPE);
        this.state = 76;
        this.label_def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Label_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_label_def;
    return this;
}

Label_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Label_defContext.prototype.constructor = Label_defContext;

Label_defContext.prototype.LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.LABEL);
    } else {
        return this.getToken(SPLParser.LABEL, i);
    }
};


Label_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterLabel_def(this);
	}
};

Label_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitLabel_def(this);
	}
};




SPLParser.Label_defContext = Label_defContext;

SPLParser.prototype.label_def = function() {

    var localctx = new Label_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SPLParser.RULE_label_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(SPLParser.T__14);
        this.state = 79;
        this.match(SPLParser.LABEL);
        this.state = 80;
        this.match(SPLParser.T__15);
        this.state = 81;
        this.match(SPLParser.T__16);
        this.state = 82;
        this.match(SPLParser.LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RegexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_regex;
    return this;
}

RegexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegexContext.prototype.constructor = RegexContext;


RegexContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.enterRegex(this);
	}
};

RegexContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLListener ) {
        listener.exitRegex(this);
	}
};




SPLParser.RegexContext = RegexContext;

SPLParser.prototype.regex = function() {

    var localctx = new RegexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SPLParser.RULE_regex);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(SPLParser.T__17);
        this.state = 86; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 85;
            _la = this._input.LA(1);
            if(_la<=0 || _la===SPLParser.T__17) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 88; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SPLParser.T__0) | (1 << SPLParser.T__1) | (1 << SPLParser.T__2) | (1 << SPLParser.T__3) | (1 << SPLParser.T__4) | (1 << SPLParser.T__5) | (1 << SPLParser.T__6) | (1 << SPLParser.T__7) | (1 << SPLParser.T__8) | (1 << SPLParser.T__9) | (1 << SPLParser.T__10) | (1 << SPLParser.T__11) | (1 << SPLParser.T__12) | (1 << SPLParser.T__13) | (1 << SPLParser.T__14) | (1 << SPLParser.T__15) | (1 << SPLParser.T__16) | (1 << SPLParser.COLNAME) | (1 << SPLParser.LABEL) | (1 << SPLParser.DATATYPE) | (1 << SPLParser.NULL_DEF) | (1 << SPLParser.INT) | (1 << SPLParser.WS))) !== 0));
        this.state = 90;
        this.match(SPLParser.T__17);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SPLParser = SPLParser;

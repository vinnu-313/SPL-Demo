<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>SPL Demo</title>
</head>
<body>
	<h1>Hey, SPL Demo</h1>
	<textarea rows="20" cols="100" id="spl"></textarea><br/><br/>
	<input type="button" id="validate" value="Validate"/>
	
	<script src="lib/require.js"></script>
	<script>
		document.querySelector('#validate').onclick = function(){
			var antlr4 = require('antlr4/index');
			var input = 'DEFINE NAMESPACE one.two DESCRIPTION "Vinayaka" BEGINS WITH / System name / ; DEFINE TABLE new_table NAMESPACE one.two ICON nvpair_basic	COLUMN col_one (one.ref) [s(128):nn] <label="Name"> AS "Name" COLUMN col_two [i(128):n] <label="Pin Code"> AS "Pin Code";';
			var chars = new antlr4.InputStream(input);
			var slexer = require('./SPLLexer');
			var lexer  = new slexer.SPLLexer(chars);
			var tokens  = new antlr4.CommonTokenStream(lexer);
			var sparser = require('./SPLParser');
			var parser = new sparser.SPLParser(tokens);
			console.info(parser);
			parser.buildParseTrees = true;
			var tree = parser.splg();
		};
		
	</script>
</body>
</html>
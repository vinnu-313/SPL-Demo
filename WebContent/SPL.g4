grammar SPL;

splg : define+ ;

define 	: namespace_def | table_def ;

namespace_def 	: 'DEFINE' 'NAMESPACE' COLNAME 'DESCRIPTION' LABEL 'BEGINS' 'WITH' regex ('ENDS' 'WITH' regex)? ';' ;

table_def 	: 'DEFINE' 'TABLE' COLNAME 'NAMESPACE' COLNAME icon_def ;

icon_def 	: nv_pair_def ; // Add more icons here later

nv_pair_def : 'ICON' 'nvpair_basic' column_def+ 'CONSTRAIN()'? ';' ;

column_def	: ('COLUMN' COLNAME ('('.*?')')? DATATYPE label_def) ;

label_def	: '<label='LABEL'>' 'AS' LABEL;

regex 	 	: '/' ~'/'+ '/';


COLNAME		: [a-zA-Z_.]+ ;
LABEL 		: '"' .*? '"' ;
DATATYPE	: '['[sir]'('INT'):'NULL_DEF']' ;
NULL_DEF	: 'n'|'nn' ;	
INT 	: DIGIT+ ; // references the DIGIT helper rule
fragment DIGIT : [0-9] ; // not a token by itself
WS 	: [ \r\t\n]+ -> skip ; 

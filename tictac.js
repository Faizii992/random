$("document").ready(()=>{
let options=document.getElementsByClassName("option");
//some random change
let ans=[
["0","1","2"],
["2","1","0"],
["2","0","1"],
["1","0","2"],
["1","2","0"],
["3","4","5"],
["6","7","8"],
["0","4","8"],
["2","4","6"],
["0","3","6"],
["1","4","7"],
["2","5","8"],
];
	var count=3;
	let userpath=[];
	let comppath=[];
document.getElementById("board").addEventListener('click',(e)=>{

	if(count>0){
	if(e.target.nodeName=="TD"){
		
		if(userpath.includes(e.target.id)||comppath.includes(e.target.id))
		{
		}else{
		
		
		count--;
		e.target.innerHTML="O";
		userpath.push(e.target.id);
		
		
		comp();
	}
	}
console.log(userpath);
console.log(comppath);
	}
	function checkduplicates(){
		
		var randindex=Math.floor(Math.random()*options.length);
		 var randomchoice=options[randindex].id;
		 console.log(randomchoice);
		
		if(comppath.includes(randomchoice)||userpath.includes(randomchoice)){
			
		
			return checkduplicates();
		}
		return randindex;
	}
	
	
	function comp(){
	var randindex=checkduplicates();

		 var randomchoice=options[randindex];
	
	 document.getElementById(randomchoice.id).innerHTML="X";
	 comppath.push(randomchoice.id);
	 
	 
	 
	
	 
	 
	 
	 
	 
	 
	 
	}
	
	
	
	
	
	var p;
	var l=0;
	var flag=0;
	for(p=0;p<ans.length;p++){
		for(j=0;j<2;j++){
			for(l=j;l<2;l++){
		if(ans[p][l].includes(userpath[j])){
			console.log('yes');
			flag=0;
			break;
		}
		else{
			
			flag=1;
			break;
		}
			}
		}
		
	}
	
	if(flag==0){
		
		alert("yes");
	}
	
});




});

var names=new Array();
names[0]="Parth";
names[1]="Yashvi";
names[2]="Devanshu";
names[3]="Yesha";
names[4]="Siddh";
names[5]="Mishva";
names[6]="Mishri";
names[7]="Riva";
names[8]="Pookie";
names[9]="YAshiii";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}

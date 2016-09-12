var serpentBody = function (x,y,dir,prec,suiv) {
	this.x=x;
	this.y=y;
	this.dir=dir;
	if(prec) prec.suiv = this;
	this.prec=prec;
	this.suiv = suiv;
	boardTab[x][y] = this;
	tailleSerpent++;
};

serpentBody.prototype = {
	testDir: function(dir) {return Boolean(this.dir&dir)},
	testH:function() {return Boolean(this.dir&5)},
	testV: function() {return Boolean(this.dir&10)},
	supp:function(){boardTab[this.x][this.y]=null;tailleSerpent--;return this.suiv;},
	setCoor:function(x,y) {boardTab[this.x][this.y]=null;
		boardTab[x][y]=this;
		this.x=x;
		this.y=y;}
}
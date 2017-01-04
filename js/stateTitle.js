var StateTitle = {

	preload:function()
	{
		game.load.image("logo","images/title/gameLogo.png");
        game.scale.forceOrientation(false, true);
	},


    create: function () 
    {
    	this.logo=game.add.sprite(game.world.centerX,180,"logo");
        this.logo.anchor.set(0.5, 0.5);
        this.setListeners();

    },

    setListeners:function()
    {
        game.scale.enterIncorrectOrientation.add(this.wrongWay,this);
        game.scale.leaveIncorrectOrientation.add(this.rightWay,this);
    },

    wrongWay:function()
    {
         document.getElementById("wrongWay").style.display = "block";
    },

    rightWay:function()
    {
        document.getElementById("wrongWay").style.display = "none";
    },

    update:function()
    {
    	//constant running loop
    }


}
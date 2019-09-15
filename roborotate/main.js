var config = {
    type: Phaser.AUTO,
    width: '100%',
    height: 400,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var bot;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bot', 'player.png');
}

function create ()
{
    bot = this.matter.add.image(175, 175, 'bot');

    bot.setFrictionAir(0.05);
    bot.setMass(15);
    bot.setFixedRotation();

    this.matter.world.setBounds(0, 0, 1280, 400);

    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    if (cursors.left.isDown)
    {
        bot.setAngularVelocity(-0.1);
    }
    else if (cursors.right.isDown)
    {
        bot.setAngularVelocity(0.1);
    }

    if (cursors.up.isDown)
    {
        bot.thrust(0.05);
    }
}

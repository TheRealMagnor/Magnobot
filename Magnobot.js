const Discord = require('discord.js');
const client = new Discord.Client();
const path = require("path");
const fs = require("fs");

const TOKEN_FILE = path.join(__dirname, "token.txt"); // The path to the token file, regardless of from where the program is executed

var autoAlex = false, defend = false, antiIcey = false;

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("-" + str); 
}

client.on('ready', () => {
    console.log('The bot is online');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
    if(message.content === '-hello'){
        message.channel.send('Hello there, ' + message.author.username);
    }
    else if(commandIs("preach", message)){
        if(args[1] === 'full'){
        message.channel.send('For most of its being, mankind did not know what things are made of, but could only guess. With the growth of worldken, we began to learn, and today we have a beholding of stuff and work that watching bears out, both in the workstead and in daily life.');
        message.channel.send('The underlying kinds of stuff are the *firststuffs*, which link together in sundry ways to give rise to the rest. Formerly we knew of ninety-two firststuffs, from waterstuff, the lightest and barest, to ymirstuff, the heaviest. Now we have made more, such as aegirstuff and helstuff.');
        message.channel.send('The firststuffs have their being as motes called *unclefts*. These are mightly small; one seedweight of waterstuff holds a tale of them like unto two followed by twenty-two naughts. Most unclefts link together to make what are called *bulkbits*. Thus, the waterstuff bulkbit bestands of two waterstuff unclefts, the sourstuff bulkbit of two sourstuff unclefts, and so on. (Some kinds, such as sunstuff, keep alone; others, such as iron, cling together in ices when in the fast standing; and there are yet more yokeways.) When unlike clefts link in a bulkbit, they make *bindings*. Thus, water is a binding of two waterstuff unclefts with one sourstuff uncleft, while a bulkbit of one of the forestuffs making up flesh may have a thousand thousand or more unclefts of these two firststuffs together with coalstuff and chokestuff.');
        message.channel.send('At first is was thought that the uncleft was a hard thing that could be split no further; hence the name. Now we know it is made up of lesser motes. There is a heavy *kernel* with a forward bernstonish lading, and around it one or more light motes with backward ladings. The least uncleft is that of ordinary waterstuff. Its kernel is a lone forwardladen mote called a *firstbit*. Outside it is a backwardladen mote called a *bernstonebit*. The firstbit has a heaviness about 1840-fold that of the bernstonebit. Early worldken folk thought bernstonebits swing around the kernel like the earth around the sun, but now we understand they are more like waves or clouds.');
        message.channel.send('In all other unclefts are found other motes as well, about as heavy as the firstbit but with no lading, known as *neitherbits*. We know a kind of waterstuff with one neitherbit in the kernel along with the firstbit; another kind has two neitherbits. Both kinds are seldom.');
        message.channel.send('The next greatest firststuff is sunstuff, which has two firstbits and two bernstonebits. The everyday sort also has two neitherbits in the kernel. If there are more or less, the uncleft will soon break asunder. More about this later.');
        message.channel.send('The third firststuff is stonestuff, with three firstbits, three bernstonebits, and its own share of neitherbits. And so it goes, on through such everyday stuffs as coalstuff (six firstbits) or iron (26) to ones more lately found. Ymirstuff (92) was the last until men began to make some higher still.');
        message.channel.send('It is the bernstonebits that link, and so their tale fastsets how a firststuff behaves and what kinds of bulkbits it can help make. The worldken of this behaving, in all its manifold ways, is called *minglingken*. Minglingers have found that as the uncleftish tale of the firststuffs (that is, the tale of firststuffs in their kernels) waxes, after a while they begin to show ownships not unlike those of others that went before them. So, for a showdeal, stonestuff (3), glasswortstuff (11), potashstuff (19), redstuff (37), and bluegraystuff (55) can each link with only one uncleft of waterstuff, while coalstuff (6), flintstuff (14), germanstuff (22), tin (50), and lead (82) can each link with four. This is readily seen when all are set forth in what is called the *roundaround board of the firststuffs*.');
        message.channel.send('When an uncleft or a bulkbit wins one or more bernstonebits above its own, it takes on a backward lading. When it loses one or more, it takes on a forward lading. Such a mote is called a *farer*, for that the drag between unlike ladings flits it. When bernstonebits flit by themselves, it may be as a bolt of lightning, a spark off some faststanding chunk, or the everyday flow of bernstoneness through wires.');
        message.channel.send('Coming back to the uncleft itself, the heavier it is, the more neitherbits as well as firstbits in its kernel. Indeed, soon the tale of neitherbits is the greater. Unclefts with the same tale of firstbits but unlike tales of neitherbits are called *samesteads*. Thus, everyday sourstuff has eight neitherbits with its eight firstbits, but there are also kinds with five, six, seven, nine, ten, and eleven neitherbits. A samestead is known by the tale of both kernel motes, so that we have sourstuff-13, sourstuff-14, and so on, with sourstuff-16 being by far the most found. Having the same number of bernstonebits, the samesteads of a firststuff behave almost alike minglingly. They do show some unlikenesses, outstandingly among the heavier ones, and these can be worked to sunder samesteads from each other.');
        message.channel.send('Most samesteads of every firststuff are unabiding. Their kernels break up, each at its own speed. This speed is written as the *half-life*, which is how long it takes half of any deal of the samestead thus to shift itself. The doing is known as *lightrotting*. It may happen fast or slowly, and in any of sundry ways, offhanging on the makeup of the kernel. A kernel may spit out two firstbits with two neitherbits, that is, a sunstuff kernel, thus leaping two steads back in the roundaround board and four weights back in heaviness. It may give off a bernstonebit from a neitherbit, which thereby becomes a firstbit and thrusts the uncleft one stead up in the board while keeping the same weight. It may give off a *forwardbit*, which is a mote with the same weight as a bernstonebit but a forward lading, and thereby spring one stead down in the board while keeping the same weight. Often, too, a mote is given off with neither lading nor heaviness, called the *weeneitherbit*. In much lightrotting, a mote of light with most short wavelength comes out as well.');
        message.channel.send('For although light oftenest behaves as a wave, it can be looked on as a mote, the *lightbit*. We have already said by the way that a mote of stuff can behave not only as a chunk, but as a wave. Down among the unclefts, things do not happen in steady flowings, but in leaps between bestandings that are forbidden. The knowledge-hunt of this is called *lump beholding*.');
        message.channel.send('Nor are stuff and work unakin. Rather, they are groundwise the same, and one can be shifted into the other. The kinship between them is that work is like unto weight manifolded by the fourside of the haste of light.');
        message.channel.send('By shooting motes into kernels, worldken folk have shifted samesteads of one firststuff into samesteads of another. Thus did they make ymirstuff into aegirstuff and helstuff, and they have afterward gone beyond these. The heavier firststuffs are all highly lightrottish and therefore are not found in the greenworld.');
        message.channel.send('Some of the higher samesteads are *splitly*. That is, when a neitherbit strikes the kernel of one, as for a showdeal ymirstuff-235, it bursts into lesser kernels and free neitherbits; the latter can then split more ymirstuff-235. When this happens, weight shifts into work. It is not much of the whole, but nevertheless it is awesome.');
        message.channel.send('With enough strength, lightweight unclefts can be made to togethermelt. In the sun, through a row of strikings and lightrottings, four unclefts of waterstuff in this wise become one of sunstuff. Again some weight is lost as work, and again this is greatly big when set beside the work gotten from a minglingish doing such as fire.');
        message.channel.send('Today we wield both kind of uncleftish doings in weapons, and kernelish splitting gives us heat and bernstoneness. We hope to do likewise with togethermelting, which would yield an unhemmed wellspring of work for mankindish goodgain.');
        message.channel.send('Soothly we live in mighty years!');
        }
        else{
        message.channel.send('The firststuffs have their being as motes called *unclefts*. These are mightly small; one seedweight of waterstuff holds a tale of them like unto two followed by twenty-two naughts. Most unclefts link together to make what are called *bulkbits*. Thus, the waterstuff bulkbit bestands of two waterstuff unclefts, the sourstuff bulkbit of two sourstuff unclefts, and so on. (Some kinds, such as sunstuff, keep alone; others, such as iron, cling together in ices when in the fast standing; and there are yet more yokeways.) When unlike clefts link in a bulkbit, they make *bindings*. Thus, water is a binding of two waterstuff unclefts with one sourstuff uncleft, while a bulkbit of one of the forestuffs making up flesh may have a thousand thousand or more unclefts of these two firststuffs together with coalstuff and chokestuff.');
        }
    }
    else if(commandIs("die", message)){
        if(message.author.username === 'Magnor' || !defend){
            message.channel.send('Gosh, I am killed!')
            client.destroy();
        }
        else{
            message.channel.send(message.author.username + ' used kill!');
            message.channel.send('It\'s not very effective...')
        }
    }
    else if(commandIs("defend", message) && message.author.username === 'Magnor'){
        if(defend){
            defend = false;
            message.channel.send('Magnobot\'s defense lowered!');
        }
        else{
            defend = true;
            message.channel.send('Magnobot used Harden!')
        }
    }
    else if(commandIs("defend", message)){
        message.channel.send('You\'re not my master, buddy');
    }
    else if(commandIs("help", message)){
        message.channel.send('```-hello: Greets you \n-preach: Sends a bit from a work most wholesome and loreful \n-die: Kills me \n-AutoAlex: Toggles AutoAlex on and off, you can also do "-AutoAlex on" and "-AutoAlex off"\nHide: fills the screen with yiff warnings \n-help: Does ^this^ ```')
    }
    else if(commandIs("autoalex", message)){
        if(args[1] === "on"){
            autoAlex = true;
            message.channel.send('AutoAlex activated');
        }
        else if(args[1] === "off"){
            autoAlex = false;
            message.channel.send('AutoAlex deactivated');
        }
        else{
            if(autoAlex){
                autoAlex = false;
                message.channel.send('AutoAlex deactivated');
            }
            else{
                autoAlex = true;
                message.channel.send('Autoalex activated');
            }
        }
    }
    else if(commandIs("antiicey", message)){
        if(args[1] === "on"){
            antiIcey = true;
            message.channel.send('AntiIcey activated');
        }
        else if(args[1] === "off"){
            antiIcey = false;
            message.channel.send('AntiIcey deactivated');
        }
        else{
            if(antiIcey){
                antiIcey = false;
                message.channel.send('AntiIcey deactivated');
            }
            else{
                antiIcey = true;
                message.channel.send('AntiIcey activated');
            }
        }
    }
    else if(commandIs("hide", message)){
        message.channel.send('WARNING YIFF AHEAD\n\n\n\n\n\n\n\n\n\n WARNING YIFF AHEAD\n\n\n\n\n\n\n\n\n\n WARNING YIFF AHEAD\n\n\n\n\n\n\n\n\n\nWARNING YIFF AHEAD\n\n\n\n\n\n\n\n\n\n WARNING YIFF AHEAD\n\n\n\n\n\n\n\n\n\n WARNING YIFF AHEAD\n\n\n\n\n\n\n\n\n\nWARNING YIFF AHEAD');
    }


    else if(message.author.username === "iceybot" && antiIcey && message.content.search("blows raspberry") !== -1){
        message.channel.send(';e6 order:score rating:s humor bone'); // Recommend caching file to reduce congestion of Iceybot (E621 api is rate limited) 
    }

    //Magnoria Ellipsis Emoji code: <:Ellipsis:281169089781694467>
    //HáMA Ellipsis Emoji code: <:Ellipsis:281169893544427520>      
    else if(message.author.username === 'Ice' && autoAlex){
        message.channel.send('<:Ellipsis:281169893544427520>');
    }
});

fs.readFile(TOKEN_FILE, (err, dat) => {
    if (err){ // Handles errors on file read
        console.log(err); 
        throw err
    } else {
        client.login(dat.toString().replace(" ", "")) // Attempts to log in with the discord API
              .then(() => {console.log("Logged in successfully")},
                    () => {console.log("Could not log in")})
    }
})

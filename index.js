const Discord = require("discord.js")
const clc = require("cli-color")
const config = require('./config.json');
const setTitle = require('node-bash-title');
let begNumber = 0
let fishNumber = 0
let huntNumber = 0

const client = new Discord.Client({disableEveryone: true})


setTitle('zJackk Dank Memer Tool')

client.on("ready", async () =>{
    console.log(clc.green('zJackk Dank Memer Tool is Online and Connected to ' + (config.accID) + '!\n'));

    console.log(clc.greenBright('BEGGING'))
    console.log(clc.redBright('autoBeg => [' + (config.autoBeg) + ']' ))
    console.log(clc.redBright('autoCandy => [' + (config.autoCandy) + ']' ))
    console.log(clc.redBright('autoBankNote => [' + (config.autoBankNote) + ']\n' ))

    console.log(clc.greenBright('FISHING'))
    console.log(clc.redBright('autoFish => [' + (config.autoFish) + ']' ))
    console.log(clc.redBright('autoSellFish => [' + (config.autoSellFish) + ']\n' ))

    console.log(clc.greenBright('HUNTING'))
    console.log(clc.redBright('autoHunt => [' + (config.autoHunt) + ']' ))
    console.log(clc.redBright('autoSellDeer => [' + (config.autoSellDeer) + ']' ))
    console.log(clc.redBright('autoSellBoar => [' + (config.autoSellBoar) + ']' ))
    console.log(clc.redBright('autoSellDuck => [' + (config.autoSellDuck) + ']' ))
    console.log(clc.redBright('autoSellRabbit => [' + (config.autoSellRabbit) + ']' ))
    console.log(clc.redBright('autoSellSkunk => [' + (config.autoSellSkunk) + ']\n' ))

    console.log(clc.greenBright('GAMBLING'))
    console.log(clc.redBright('autoBetHalf => [' + (config.autoBetHalf) + '] <= Will bet every ' + (config.autoBetHelfIntervalMilliseconds) + ' milliseconds if enabled!\n' ))
    console.log(clc.redBright('autoBlackJackHalf => [COMING SOON]\n'))
    console.log(clc.greenBright('OTHER'))
    console.log(clc.redBright('autoDepositAll => [' + (config.autoDepositAll) + ']'))
    console.log(clc.redBright('autoDaily => [' + (config.autoDaily) + ']\n' ))
    

    console.log(clc.blueBright('Type $startdankgen in any server to begin generating!'));
    console.log(';+discord.gg/Mr5QH7VXRT+;');
    
})

client.on("message", async message => 
{

    if(message.author.id === config.accID) 
    {
        if (message.content === "$startdankgen")
        {
            message.delete('$startdankgen')
            
            if(config.autoBeg === "enabled") 
            { 
                autoBeg()
            }

            if(config.autoFish === "enabled") 
            {
                autoFish()
            }

            if(config.autoHunt === "enabled") 
            {
                autoHunt()
            }

            if(config.autoDaily === "enabled") 
            {
                autoDaily()
            }

            if(config.autoSellFish === "enabled")
            {
                autoSellFish()
            }

            if(config.autoCandy === "enabled")
            {
                autoCandy()
            }

            if(config.autoBetHalf === "enabled")
            {
                autoBetHalf()
            }

            if(config.autoSellDeer === "enabled")
            {
                autoSellDeer()
            }

            if(config.autoSellBoar === "enabled")
            {
                autoSellBoar()
            }

            if(config.autoSellDuck === "enabled")
            {
                autoSellDuck()
            }

            if(config.autoSellRabbit === "enabled")
            {
                autoSellRabbit()
            }

            if(config.autoSellSkunk === "enabled")
            {
                autoSellSkunk()
            }

            if(config.autoBankNote === "enabled")
            {
                autoBankNote()
            }

            if(config.autoDepositAll === "enabled")
            {
                autoDepositAll()
            }



            

        }   

        
        
    

    function autoBeg() 
    {
        message.channel.send('pls beg')
        setTimeout(autoBeg, 47000)
        begNumber += 1
        console.log(clc.red('Begged ' + begNumber + ' Times!\n'))
    }

    function autoFish() 
    {
        message.channel.send('pls fish')
        setTimeout(autoFish, 62000)
        fishNumber +=1
        console.log(clc.red('Fished ' + fishNumber + ' Times!\n'))

    }

    function autoHunt()
    {
        message.channel.send('pls hunt')
        setTimeout(autoHunt, 65000)
        huntNumber +=1
        console.log(clc.red('Hunted ' + huntNumber + ' Times!\n'))
    }

    function autoDaily()
    {
        message.channel.send('pls daily')
        setTimeout(autoDaily, 86400000)
        console.log(clc.red('Daily Claimed!\n'))
    }

    function autoSellFish()
    {
        message.channel.send('pls sell fish all')
        setTimeout(autoSellFish, 1200000)
        console.log(clc.red('Automatically Sold All Fish!\n'))
    }

    function autoCandy()
    {
        message.channel.send('pls use candy all')
        setTimeout(autoCandy, 136000)
        console.log(clc.red('Automatically Used All Candy!\n'))
    }

    function autoBetHalf()
    {
        message.channel.send('pls bet half')
        setTimeout(autoBetHalf, congig.autoBetHelfIntervalMilliseconds)
        console.log(clc.red('Automatically Bet Half Of Wallet!'))
    }

    function autoSellDeer()
    {
        message.channel.send('pls sell deer all')
        setTimeout(autoSellDeer, 1260000)
        console.log(clc.red('Automatically Sold all Deer!'))
    }

    function autoSellBoar()
    {
        message.channel.send('pls sell boar all')
        setTimeout(autoSellBoar, 1290000)
        console.log(clc.red('Automatically Sold all Boar!'))
    }

    function autoSellDuck()
    {
        message.channel.send('pls sell duck all')
        setTimeout(autoSellBoar, 1190000)
        console.log(clc.red('Automatically Sold all Ducks!'))
    }

    function autoSellRabbit()
    {
        message.channel.send('pls sell rabbit all')
        setTimeout(autoSellBoar, 1100000)
        console.log(clc.red('Automatically Sold all Rabbit!'))
    }

    function autoSellSkunk()
    {
        message.channel.send('pls sell skunk all')
        setTimeout(autoSellSkunk, 1000000)
        console.log(clc.red('Automatically Sold all Skunks!'))
    }

    function autoBankNote()
    {
        message.channel.send('pls use banknote all')
        setTimeout(autoSellSkunk, 1060000)
        console.log(clc.red('Automatically Used all BankNotes'))
    }

    function autoDepositAll()
    {
        message.channel.send('pls dep all')
        setTimeout(autoSellSkunk, 120000)
        console.log(clc.red('Automatically Deposited all Money'))
    }

    







    
    
}})



client.login(config.token)
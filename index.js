const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const keepAlive = require("./server");
const PREFIX = '-'
const util = require('minecraft-server-util');
const { badword_vi, badword_en } = require('./badwords.json')

client.on("ready", ()=> console.log("READY"));

const jointocreate = require("./jointocreate");
jointocreate(client);

client.on('message', message => {
	if(message.author.id === client.user.id) return
	let foundInText = false;
  for (var i in badword_vi) {
    if (message.content.toLowerCase().includes(badword_vi[i].toLowerCase())) {
			foundInText = true;
		}
  }
  for (var i in badword_en) {
    if (message.content.toLowerCase().includes(badword_en[i].toLowerCase())) {
			foundInText = true;
		}
  }
	if (foundInText) {
    message.delete({ timeout: 100 });
		message.reply("no swearing!").then(msg=>msg.delete({timeout: '3000'}))
	}

	if(!message.content.startsWith("-")) return
  if (message.content === '-c status') {
    util.status('YOUR_IP', { port: parseInt("YOUR_PORT"), enableSRV: true, timeout: 5000 })
    .then((response) => {
				let playerls = ""
				for(let i = 0; i < response.samplePlayers.size; i++) {
					playerls += `${response.samplePlayers[i].name}, `
				}

        const embed = new Discord.MessageEmbed()
        embed.setTitle('Server Status - SMP')
        embed.setThumbnail('https://cdn.discordapp.com/attachments/868425557136781313/906101394686242816/final_612c2e6f81209a011c41543c_660978.gif.gif')
        embed.addFields(
            { name: 'Server IP', value: "circussmp.xyz", inline: true },
            { name: 'Server Version', value: response.version, inline: true },
            { name: 'Playercount', value: response.onlinePlayers + "/" + response.maxPlayers, inline: true },
						{ name: 'Playerlist', value: `${playerls || "Private owo"}` }
        )

				embed.setFooter("Rạp xiếc SMP", "https://cdn.discordapp.com/avatars/896455916839395358/39e17c0e1c3cf7d6671c963b2faff179.png")
				embed.setColor('7e53c1')
        message.channel.send(embed)
    })
    .catch((error) => {
        console.log(error)
    })
		util.status('YOUR_IP', { port: parseInt("YOUR_PORT"), enableSRV: true, timeout: 5000 })
    .then((response) => {
				let playerls = ""
				for(let i = 0; i < response.samplePlayers.size; i++) {
					playerls += `${response.samplePlayers[i].name}, `
				}

        const embed = new Discord.MessageEmbed()
        embed.setTitle('Server Status - Lifesteal')
        embed.setThumbnail('https://cdn.discordapp.com/attachments/868425557136781313/906101394686242816/final_612c2e6f81209a011c41543c_660978.gif.gif')
        embed.addFields(
            { name: 'Server IP', value: "circussmp.xyz", inline: true },
            { name: 'Server Version', value: response.version, inline: true },
            { name: 'Playercount', value: response.onlinePlayers + "/" + response.maxPlayers, inline: true },
						{ name: 'Playerlist', value: `${playerls || "Private owo"}` }
        )

				embed.setFooter("Rạp xiếc SMP", "https://cdn.discordapp.com/avatars/896455916839395358/39e17c0e1c3cf7d6671c963b2faff179.png")
				embed.setColor('7e53c1')
        message.channel.send(embed)
    })
    .catch((error) => {
        console.log(error)
    })
  }
  
	if (message.content === '-c ping') { 
    const embed = new Discord.MessageEmbed()
    embed.setTitle('CircusUltilities Ping') 
    embed.setThumbnail('https://media.discordapp.net/attachments/868425557136781313/911533165280120842/with_bg_1.png?width=498&height=498')
    embed.addFields(
      { name: 'Bot Latency', value: Date.now() - message.createdTimestamp + " ms" },
      { name: 'API Latency', value: client.ws.ping + " ms" } //Math.round(cli) + " t."
		)
		message.channel.send(embed)
  }
	if (message.content === '-c pls wait') { 
    message.delete() 
    message.channel.send(`https://media.discordapp.net/attachments/909816773447135273/912536480067489833/5v6hhw.png?width=661&height=450`) 
  }
  if (message.content === '-c plugins') {  
    message.react("🚫")
    message.reply("Có cái nịt 😏")
  }
	if (message.content === 'ben gae') {  
    message.channel.send(`fact`)     
  }
	if (message.content === 'blender là') {  
    message.channel.send(`https://media.discordapp.net/attachments/868425557136781313/918318594155229254/unknown.png?width=583&height=328`) 
  }
	if (message.content === 'tommy') {  
    message.channel.send(`<@840894286992113665> có người kêu kìa`) 
  }
	if (message.content === 'tummy') {  
    message.channel.send(`<@840894286992113665> dậy nào bro`) 
  }
	if (message.content === 'mitsmp') {
    message.channel.send("p2w rác") 
  }
	if (message.content === 'tumy') {  
    message.channel.send(`có người nhắc kìa <@840894286992113665>`) 
  }
	if (message.content === 'sv cho xray ko') {  
    message.channel.send(`thử đi hjhj`) 
  }
	if (message.content === '-c randompic') {
    const messages = ["https://media.discordapp.net/attachments/909816773447135273/918015708401664090/video_image-JTkYk461p_.png?width=374&height=497", "https://media.discordapp.net/attachments/909816773447135273/917658631774806036/Khong_Co_Tieu_e30_20211207130409.png?width=456&height=498", "https://media.discordapp.net/attachments/909816773447135273/915419415477112892/unknown.png?width=416&height=270", "https://media.discordapp.net/attachments/909816773447135273/914876079154528296/IMG_5073.png?width=721&height=497", "https://media.discordapp.net/attachments/909816773447135273/913028993781993482/chung_ta_khong_cung_ang_cap.png?width=270&height=386","https://media.discordapp.net/attachments/909816773447135273/912668660173262888/1637638972074.jpg?width=342&height=498", "https://media.discordapp.net/attachments/909816773447135273/912536480067489833/5v6hhw.png?width=661&height=450", "https://media.discordapp.net/attachments/909816773447135273/912512511889264660/oithongbao.png?width=450&height=450", "https://media.discordapp.net/attachments/909816773447135273/912512090604978236/5v671n.png?width=453&height=446", "https://media.discordapp.net/attachments/909816773447135273/912192812320165906/unknown.png?width=493&height=498", "https://media.discordapp.net/attachments/909816773447135273/913041619224231956/unknown.png?width=450&height=236", "https://media.discordapp.net/attachments/909816773447135273/913050447936372746/unknown.png?width=980&height=498", "https://media.discordapp.net/attachments/909816773447135273/914793951825891348/unknown.png?width=603&height=402", "https://media.discordapp.net/attachments/909816773447135273/915813783732092988/unknown.png?width=377&height=174", "https://media.discordapp.net/attachments/868425557136781313/914856347835707462/Thiet_ke_khong_ten_7.png?width=450&height=450", "https://images-ext-2.discordapp.net/external/vAaSn4xIxv0AN0ibEmPc2S5ncLH7eP9JZdopContpqs/https/media.discordapp.net/attachments/903465881479295038/911270844259504208/unknown.png?width=879&height=497", "https://images-ext-2.discordapp.net/external/NMUypxEoRRGyfV6JngP1Zdy9EGRfc_a6Hx6NQMAfZwM/%3Fwidth%3D664%26height%3D498/https/media.discordapp.net/attachments/880420232513064990/912509999408902144/20211123_011653.jpg?width=598&height=448", "https://images-ext-1.discordapp.net/external/GXdAdXWyM-BVJ1dS2zOJOBYn6QgdzxJ4bHeLDfZSahQ/https/media.discordapp.net/attachments/903465881479295038/916158267519033404/standard-2.gif?width=421&height=54", "https://media.discordapp.net/attachments/903465881479295038/918381906393985074/FB_IMG_1639029691636.jpg?width=373&height=498", "https://media.discordapp.net/attachments/909816773447135273/912517073077436476/5454be867af9b6db37cf7a83d50d7cb2.png?width=328&height=497", "https://media.discordapp.net/attachments/909816773447135273/912668660173262888/1637638972074.jpg?width=342&height=498"]
  
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.delete()
    message.channel.send(randomMessage)
  }
	if(message.content.toLowerCase() === "-c help") {
    const dmuser = message.client.guilds.resolve(message.guild.id).members.resolve(message.author.id).user
    
    const embed = new Discord.MessageEmbed()
    embed.setTitle("Lucy Help")
    embed.setDescription("**__Các lệnh cơ bản của Lucy:__**")
    embed.addFields(			
      { name: 'Xem ip', value: '`-c ip`', inline: true },
      { name: 'Xem hệ thống', value: '`-c system`', inline: true },
      { name: 'Xem các lệnh', value: '`-c help`', inline: true },
      { name: 'Xem thông tin', value: '`-c info`', inline: true },
      { name: 'Xem link mời', value: '`-c invite`', inline: true },
      { name: 'Random Pics', value: '`-c randompic`', inline: true },
      { name: 'SMP Status', value: '`-c status`', inlne: false }
		)
    embed.setColor('#0099ff')
    embed.setThumbnail('https://media.discordapp.net/attachments/896619903048626246/915548326882082837/logo.png?width=498&height=498')
    embed.addField('__Lưu ý:__', 'Bạn cần đọc những thứ sau trước khi tham gia Circus:')
    embed.setTimestamp()
    embed.setFooter('Rạp xiếc SMP', 'https://media.discordapp.net/attachments/868425557136781313/917331696209256468/Capture_1.png?width=498&height=498');
    embed.addFields(
      { name: 'Luật', value: '<#869216099282087987>', inline: true },      
			{ name: 'Thông tin', value: '<#880519496312434698>', inline: true },
      { name: 'Hướng dẫn', value: '<#916927147812208670>', inline: true }  
    )
		message.react("✅")
		dmuser.send(embed).catch(() => message.reply("Can't send DMs! Please check your privacy settings."));
	}
	if(message.content.toLowerCase() === "-c ip") {
    const embed = new Discord.MessageEmbed()
    embed.setTitle("Circus SMP")
    embed.setDescription("**__IP, Port, Version phù hợp với Circus SMP__**")
    embed.setColor('#0099ff')
    embed.setThumbnail('https://media.discordapp.net/attachments/868425557136781313/906101394686242816/final_612c2e6f81209a011c41543c_660978.gif.gif?width=58&height=58')
    embed.addFields(
      { name: '**Main-Ip**', value: 'circussmp.xyz', inline: true },
      { name: 'Bedrock Port', value: '19132', inline: true },
      { name: 'Version', value: '1.17-1.17.1 | Latest Version on Bedrock', inline: false }
      
    )

    embed.setFooter('Rạp Xiếc SMP', 'https://media.discordapp.net/attachments/868425557136781313/917331696209256468/Capture_1.png?width=498&height=498');
    embed.setTimestamp()
    embed.setFooter('Rạp xiếc SMP', 'https://media.discordapp.net/attachments/868425557136781313/917331696209256468/Capture_1.png?width=498&height=498');
    message.delete()
    message.channel.send({embed})
	}
	if(message.content.toLowerCase() === "-c invite") {


    const embed = new Discord.MessageEmbed()
    embed.setTitle("__Circus Invite Link:__")
    embed.setColor('#0099ff')
    embed.setDescription("https://discord.tumy.fun")
    message.delete()
    message.channel.send({embed})
	}
	if(message.content.toLowerCase() === "-c info") {
    const dmuser = message.client.guilds.resolve(message.guild.id).members.resolve(message.author.id).user

    const embed = new Discord.MessageEmbed()
    embed.setTitle("Các thông tin về Circus SMP")
    embed.setImage('https://media.discordapp.net/attachments/910440019649511466/917345570333556736/CIRCUS_SMP.png?width=995&height=498')
    embed.setColor('#0099ff')
    embed.addField('**Circus SMP là gì ?**', '> **Circus SMP** là một server sinh tồn, lúc đầu được gọi là **Mquan SMP** và theo hướng cho mọi người có war với nhau. Nhưng sau này đã chuyển sang tiêu chí thân thiện. Được thành lập vào ngày 24/7/2021.')
    embed.addField('**Mục đích của Circus SMP**', '> Để giúp cho mọi người thư giãn sau những giờ học online và làm việc mệt mỏi. Giúp mọi người tìm niềm vui trong mùa dịch Covid-19 căng thẳng')
    embed.addField('**Phần mềm máy chủ của Circus SMP**', '> chúng mình dùng **AlynaaMC**- Fork của jettpack ( từ Thicc SMP ) giúp cho server chạy ổn định hơn, vượt trội hơn so với những server khác.\n*Link tải AlynaaMC*: https://qtpc.tech/alynaamc')
    embed.addFields(
      { name: 'Website', value: 'https://circussmp.tumy.fun', inline: false },
		  { name: 'Discord Invite link', value: 'https://discord.tumy.fun', inline: false },    
		)
  	message.react("✅")
  	dmuser.send(embed)
	}
});
  

  
keepAlive();
client.login(process.env.TOKEN);
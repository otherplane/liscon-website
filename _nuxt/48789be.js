(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{282:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return S}));var o=n(8),r=(n(31),n(66),n(54),n(377)),m=n(378),l=n(376),d=n(380);function c(e){var t=e.split(" "),n=Object(o.a)(t,2),time=n[0],r=n[1],m=time.split(":"),l=Object(o.a)(m,2),d=l[0],c=l[1];return"12"===d&&(d="00"),"PM"===r&&(d=parseInt(d,10)+12),"".concat(d,":").concat(c)}function y(e,time){var t=time.split(":"),n=Object(o.a)(t,2),m=n[0],d=n[1],c=new Date(2021,9,e,parseInt(m)+2,parseInt(d)).getTime(),y=Object(l.a)(c,"Europe/Lisbon");return Object(r.a)(y)}function S(e){var title=e.title,t=e.startTime,n=e.endTime,o=e.room,r=e.fullSpeaker,l=y(parseInt(e.day),c(t)),S=y(parseInt(e.day),c(n)),h=Object(m.a)(Object(d.a)(l,"Europe/Lisbon"),{format:"basic"}),M=Object(m.a)(Object(d.a)(S,"Europe/Lisbon"),{format:"basic"});return"https://www.google.com/calendar/render?action=TEMPLATE&text=".concat(title,"&location=").concat("LxFactory, R. Rodrigues de Faria 103, 1300-501 Lisboa, Portugal","&dates=").concat(h,"%2F").concat(M,"&details=Speaker: ").concat(r,"%0AStage: ").concat(o)}},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o={20:{key:"20",name:"Wed"},21:{key:"21",name:"Thur"}},r=[{url:"https://1inch.io/",name:"1 inch",img:"1inch-logo.svg",type:"platinum"},{url:"https://thegraph.com/",name:"The graph",img:"thegraph-logo.svg",type:"platinum"},{url:"https://www.orchid.com/",name:"Orchid",img:"orchid-logo.svg",type:"gold"},{url:"https://paraswap.io/",name:"Paraswap",img:"paraswap.jpeg",type:"gold round"},{url:"https://zerion.io/",name:"Zerion",img:"zerion-logo.png",type:"gold"},{url:"https://centrifuge.io/",name:"Centrifuge",img:"centrifuge-logo.png",type:"silver"},{url:"https://chainsafe.io/",name:"Chain safe",img:"chainsafe-logo.png",type:"silver"},{url:"https://debridge.finance/",name:"De Bridge",img:"debridge-logo.svg",type:"silver"},{url:"https://ethereum.foundation/",name:"Ethereum Foundation",img:"ethereumfoundation-logo.svg",type:"silver"},{url:"https://cowswap.exchange/",name:"CowSwap",img:"gnosis-logo.svg",type:"silver"},{url:"https://www.spectral.finance/",name:"Spectral finance",img:"spectral-logo.svg",type:"silver"},{url:"https://yapglobal.com/",name:"Yap global",img:"yapglobal-logo.png",type:"silver"},{url:"https://witnet.io/",name:"Witnet",img:"witnet-logo.svg",type:"partner"},{url:"https://agora.space/",name:"Agora Space",img:"agoraspace-logo.svg",type:"partner"},{url:"https://arcadiamgroup.com/",name:"Arcadia",img:"arcadia-logo.png",type:"partner"},{url:"https://aztec.network/",name:"Aztec",img:"aztec-logo.jpeg",type:"partner round"},{url:"https://dappnode.io/",name:"DAppNode",img:"dappnode-logo.png",type:"partner round"},{url:"https://degate.com/",name:"De Gate",img:"degate-logo.svg",type:"partner"},{url:"https://dxdao.eth.link/#/",name:"DXdao",img:"dxdao-logo.svg",type:"partner"},{url:"https://medium.com/celoorg/announcing-optics-a-gas-efficient-interoperability-standard-for-cross-chain-communication-e597163b2",name:"Optics",img:"optics-logo.svg",type:"partner"},{url:"https://www.metis.io/",name:"Metis",img:"metis-logo.png",type:"partner"},{url:"https://www.pillar.fi/",name:"Pillar",img:"pillar-logo.svg",type:"partner"},{url:"https://www.rekt.news/",name:"Rekt",img:"rekt-logo.svg",type:"partner"},{url:"https://simplefi.finance/",name:"SimpleFi",img:"simplefi-logo.png",type:"partner"},{url:"https://spacemesh.io/",name:"Spacemesh",img:"spacemesh-logo.svg",type:"partner"},{url:"https://stakewise.io/",name:"Stakewise",img:"stakewise.png",type:"partner"},{url:"https://www.withtally.com/",name:"Tally",img:"tally-logo.png",type:"partner round"},{url:"https://www.ethichub.com",name:"EthicHub",img:"ethichub.png",type:"partner"},{url:"https://figment.io/",name:"Figment",img:"figment.svg",type:"partner"},{url:"https://www.harmony.one",name:"Harmony",img:"harmony.svg",type:"partner"},{url:"https://lido.fi",name:"Lido",img:"lido.svg",type:"partner"},{url:"https://near.org",name:"Near",img:"near.png",type:"partner"},{url:"https://www.mai.finance",name:"QiDao",img:"qidao.svg",type:"partner"}]},294:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("63f54e12",content,!0,{sourceMap:!1})},320:function(e){e.exports=JSON.parse('[{"title":"Welcome to LISCON","speaker":"Org team","company":"","day":"20","startTime":"9:30 AM","endTime":"9:40 AM","type":"talk","miniSummit":"INTRO","length":10,"topic":"ORG TEAM","room":"Main Stage"},{"miniSummit":"INTRO","day":"20","startTime":"9:40 AM","endTime":"9:50 AM","length":10,"topic":"ORG TEAM","title":"NFT Gallery","type":"talk","speaker":"Graham de Barra","company":"Org team","room":"Main Stage"},{"miniSummit":"INTRO","day":"20","startTime":"9:50 AM","endTime":"10:00 AM","length":10,"topic":"ORG TEAM","title":"LisCon House Rules","type":"talk","speaker":"Org team","company":"","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"10:00 AM","endTime":"10:20 AM","length":20,"topic":"Layers, Future, Vibes","title":"Are we there yet? How long to web3","type":"talk","speaker":"Yaniv Tal","company":"The Graph","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"10:20 AM","endTime":"10:40 AM","length":20,"topic":"Layers, Future, Vibes","title":"WalletConnect 2.0 - To interchain and beyond!","type":"talk","speaker":"Pedro Gomes","company":"WalletConnect","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"10:40 AM","endTime":"11:00 AM","length":20,"topic":"Layers, Future, Vibes","title":"The game of reorgs in PoS Ethereum","type":"talk","speaker":"Caspar Schwarz-Schilling","company":"EF","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"11:00 AM","endTime":"11:20 AM","length":20,"topic":"Layers, Future, Vibes","title":"ENS as your web3 username and more","type":"talk","speaker":"Makoto Inoue","company":"ENS","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"11:20 AM","endTime":"11:40 AM","length":20,"topic":"Layers, Future, Vibes","title":"Education in web3 - history, trends, the future","type":"talk","speaker":"Aditi Sriram","company":"Edge & Node","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"11:40 AM","endTime":"12:00 PM","length":20,"topic":"Layers, Future, Vibes","title":"Why are the Bridges Burning?","type":"talk","speaker":"James Prestwich","company":"Optics","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"12:00 PM","endTime":"12:20 PM","length":20,"topic":"Layers, Future, Vibes","title":"Development of The Merge","type":"talk","speaker":"Proto & Alex Stokes","company":"EF","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"12:20 PM","endTime":"12:40 PM","length":20,"topic":"Layers, Future, Vibes","title":"The Prysm Problem: exploring the spectrum of client diversity","type":"talk","speaker":"Carl Beekhuisen","company":"EF","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"1:00 PM","endTime":"1:20 PM","length":20,"topic":"Layers, Future, Vibes","title":"The Internet\'s User Table","type":"talk","speaker":"Joel Thorstensson","company":"3box","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"1:20 PM","endTime":"1:40 PM","length":20,"topic":"Layers, Future, Vibes","title":"How Ethereum Is Giving Sovereignty to Natural Resources","type":"talk","speaker":"James Beck","company":"ConsenSys","room":"Main Stage"},{"miniSummit":"","day":"20","startTime":"1:20 PM","endTime":"1:40 PM","length":20,"topic":"Layers, Future, Vibes","title":"The Future is Multi-chain","type":"talk","speaker":"Alex Smirnov","company":"deBridge Finance","room":"Side Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"1:40 PM","endTime":"2:10 PM","length":30,"topic":"Layers, Future, Vibes","title":"Education in web3","type":"panel","speaker":"Aditi Sriram - The Graph, Abbey Titcombe - Radicle, Bryan Flynn - Rabbithole, Simona Pop - Status","company":"Mix","room":"Main Stage"},{"miniSummit":"Layers, Future, Vibes","day":"20","startTime":"2:10 PM","endTime":"2:30 PM","length":20,"topic":"Layers, Future, Vibes","title":"The Cryptopunk Ethos and the Future of Freedom","type":"talk","speaker":"Seven Waterhouse","company":"Orchid","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"2:30 PM","endTime":"2:50 PM","length":20,"topic":"Coordination & Digital Orgs","title":"A Prehistory of DAOs","type":"talk","speaker":"Kei Kreutler","company":"Gnosis","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"2:50 PM","endTime":"3:10 PM","length":20,"topic":"Coordination & Digital Orgs","title":"The Greatest LARP","type":"talk","speaker":"Kevin Owocki","company":"Gitcoin","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"3:10 PM","endTime":"3:30 PM","length":20,"topic":"Coordination & Digital Orgs","title":"How to scale a DAO","type":"talk","speaker":"Juan Guillen","company":"SES MakerDAO","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"3:30 PM","endTime":"3:50 PM","length":20,"topic":"Coordination & Digital Orgs","title":"The Social Infrastructure of Off-Chain Governance","type":"talk","speaker":"Toby Shorin & Laura Lotti","company":"Other Internet","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"3:50 PM","endTime":"4:10 PM","length":20,"topic":"Coordination & Digital Orgs","title":"PFPs, DAOs and Public Goods","type":"talk","speaker":"Manu Alzuru","company":"DoinGud","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"4:10 PM","endTime":"4:40 PM","length":30,"topic":"Coordination & Digital Orgs","title":"Launching & coordinating decentralised governance","type":"panel","speaker":"James Waugh - 🔥_🔥, Kain Warwick - Synthetix, Yaniv Tal - The Graph, Nadia Alvarez - MakerDAO","company":"Mix","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"4:40 PM","endTime":"5:00 PM","length":20,"topic":"Coordination & Digital Orgs","title":"Magic Internet Society","type":"talk","speaker":"Dennison Bertram","company":"Tally","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"5:00 PM","endTime":"5:30 PM","length":30,"topic":"Coordination & Digital Orgs","title":"Venture 3.0 for Web 3.0","type":"panel","speaker":"Nima Ashgari - SeedClub Ventures, Julia Lipton - Awesome People Ventures, Mona El Isa - Enzyme, Manasi Vora - Komorebi Fund","company":"","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"5:30 PM","endTime":"5:50 PM","length":20,"topic":"Coordination & Digital Orgs","title":"Collaborative Defiance - A vision for DAO\'s reshaping of the meaning of Leadership on the global stage","type":"talk","speaker":"Felipe Duarte","company":"Daoist","room":"Main Stage"},{"miniSummit":"Coordination & Digital Orgs","day":"20","startTime":"5:50 PM","endTime":"6:10 PM","length":20,"topic":"Coordination & Digital Orgs","title":"One Council to Rule them all","type":"talk","speaker":"Charles St Louis","company":"Element Fi","room":"Main Stage"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"10:00 AM","endTime":"10:20 AM","length":20,"topic":"DeFi & Value Flows","title":"The future of decentralized liquidity aggregation","type":"talk","speaker":"Mounir Benchemled","room":"Main Stage","company":"ParaSwap"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"10:20 AM","endTime":"10:40 AM","length":20,"topic":"DeFi & Value Flows","title":"Streaming Money, a new primitive for Crypto","type":"talk","speaker":"Francesco Renzi","room":"Main Stage","company":"SuperFluid"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"10:40 AM","endTime":"11:00 AM","length":20,"topic":"DeFi & Value Flows","title":"The (R)evolution of Social Media in Web3","type":"talk","speaker":"Stani Kulechov","room":"Main Stage","company":"Aave"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"11:00 AM","endTime":"11:20 AM","length":20,"topic":"Coordination & Digital Orgs","title":"Endogenous Stable Coins - a stable digital currency generated through commerce rather than existing capital","type":"talk","speaker":"Ashley Taylor","room":"Main Stage","company":"Resource Network"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"11:20 AM","endTime":"11:50 AM","length":30,"topic":"DeFi & Value Flows","title":"DeFi UX: Where are we?","type":"panel","speaker":"Hester Bruikham - Status, Evgeny Yurtaev - Zerion, Seb Audet @ Zapper, Sergej Kunz @ 1inch, Soren Peter Nielsen @ Oasis","room":"Main Stage","company":"Mix"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"11:50 AM","endTime":"12:10 PM","length":20,"topic":"DeFi & Value Flows","title":"DeFi-reum","type":"talk","speaker":"Anton Bukov","room":"Main Stage","company":"1inch"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"12:10 PM","endTime":"12:30 PM","length":20,"topic":"DeFi & Value Flows","title":"Scaling PoolTogether: Unlimited Prizes Across Chains","type":"talk","speaker":"Brendan Asselstine","room":"Main Stage","company":"Pooltogether"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"12:30 PM","endTime":"12:40 PM","length":10,"topic":"DeFi & Value Flows","title":"Balancer Protocol Product Announcement: Surprise!","type":"talk","speaker":"Jeremy Musighi","room":"Main Stage","company":"Balancer"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"12:40 PM","endTime":"1:00 PM","length":20,"topic":"Layers, Future, Vibes","title":"DarkFi - The Coming Storm","type":"talk","speaker":"Amir Taaki, Rose O\'Leary, Ivan Jelincic","room":"Main Stage","company":""},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"1:00 PM","endTime":"1:20 PM","length":20,"topic":"DeFi & Value Flows","title":"Gnosis Safe beyond Multisig","type":"talk","speaker":"Richard Meissner","room":"Main Stage","company":"Gnosis"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"1:20 PM","endTime":"1:40 PM","length":20,"topic":"DeFi & Value Flows","title":"Virtual communities in a physical world","type":"talk","speaker":"David Mihal, Gonçalo Magalhães","room":"Main Stage","company":"Offchain.city"},{"miniSummit":"DeFi & Value Flows","day":"21","startTime":"1:40 PM","endTime":"2:00 PM","length":20,"topic":"DeFi & Value Flows","title":"NFT Financialization : a raising giant at the intersection of DeFi and NFTs","type":"talk","speaker":"Rochaix Théo","room":"Main Stage","company":"Bunchy"},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"2:00 PM","endTime":"2:30 PM","length":30,"topic":"NFTs & Creator Economy","title":"The future of Play to Earn","type":"panel","speaker":"Loren Roosendaal - Ember Sword, Jarrell James - Celo, Andrew Campbell - Axie Infinity, Simone Conti - Dialectic, Jose Maria Macedo - Delphi Digital","room":"Main Stage","company":"Mix"},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"2:30 PM","endTime":"3:00 PM","length":30,"topic":"NFTs & Creator Economy","title":"The Evolution of NFTs","type":"panel","speaker":"Lili Feyerabend, Will Papper, Santiago R Santos, Pplplsr","room":"Main Stage","company":"Mix"},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"3:00 PM","endTime":"3:20 PM","length":20,"topic":"NFTs & Creator Economy","title":"Midsummer DAO: a decentralized platform and protocol for filmmakers and film curators","type":"talk","speaker":"Mia von Steinkirch","room":"Main Stage","company":"Shopify"},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"3:20 PM","endTime":"3:40 PM","length":20,"topic":"NFTs & Creator Economy","title":"Looks Rare: The NFT Hypemachine and Community Value","type":"talk","speaker":"Alexander Guy","room":"Main Stage","company":"Zerion"},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"3:40 PM","endTime":"4:10 PM","length":30,"topic":"NFTs & Creator Economy","title":"The Art of Social Impact","type":"panel","speaker":"Carolin Wend - Mintbase (mod), Numan Khan (artist), Oficinas TK (Nft artist), Graham de Barra (gallery)","room":"Main Stage","company":""},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"4:10 PM","endTime":"4:35 PM","length":20,"topic":"NFTs & Creator Economy","title":"Lost In The Metaverse","type":"talk","speaker":"Ix Shells & Rahilla Zafar","room":"Main Stage","company":""},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"4:55 PM","endTime":"5:20 PM","length":30,"topic":"NFTs & Creator Economy","title":"Art in conversation","type":"panel","speaker":"Mattia Cuttini & Oficinas TK","company":"","room":"Main Stage"},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"5:40 PM","endTime":"6:00 PM","length":20,"topic":"CLOSING","title":"Closing ceremony","type":"","speaker":"Org team","company":"","room":"Main Stage"},{"miniSummit":"","day":"20","startTime":"10:00 AM","endTime":"10:20 AM","length":20,"topic":"Side Stage","title":"The power of the hive mind in DAOs","type":"Workshop","speaker":"Chris Cable - Flamingo Member, Fabian Wetekamp - LAO Member","company":"","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"10:20 AM","endTime":"10:40 AM","length":20,"topic":"Side Stage","title":"Building a DAO in 2021, lessons learned with PrimeDAO","type":"Workshop","speaker":"Arseny Akinfiev","company":"Curve labs","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"10:40 AM","endTime":"11:00 AM","length":20,"topic":"Side Stage","title":"Private Governance and the Self Regulation of the DeFi Ecosystem","type":"Workshop","speaker":"Federico Ast","company":"Kleros","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"11:00 AM","endTime":"11:20 AM","length":20,"topic":"Side Stage","title":"Bringing Ethereum Compatibility to the Polkadot/Kusama Ecosystem","type":"Workshop","speaker":"Alberto Viera","company":"Pure Stake","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"11:20 AM","endTime":"11:40 AM","length":20,"topic":"Side Stage","title":"Blitzscaling DAOs: Rethinking spending for decentralized organizations","type":"Workshop","speaker":"Jack Purdy","company":"Messari","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"11:40 AM","endTime":"12:00 PM","length":20,"topic":"Side Stage","title":"Evolution of Tornado.cash protocol","type":"Workshop","speaker":"Roman Storm & Roman Semenov","company":"Tornado Cash","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"12:00 PM","endTime":"12:20 PM","length":20,"topic":"Side Stage","title":"Building a better social web with memberships!","type":"Workshop","speaker":"Julien Genestoux","company":"Unlock","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"12:20 PM","endTime":"12:40 PM","length":20,"topic":"Side Stage","title":"Building Infrastructure for the Web3 Ecosystem","type":"Workshop","speaker":"Liesl Eichholz","company":"ChainSafe","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"12:40 PM","endTime":"1:00 PM","length":20,"topic":"Side Stage","title":"Developing a fully compatible zkEVM","type":"Workshop","speaker":"Jordi Baylina","company":"Polygon Hermez","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"1:00 PM","endTime":"1:20 PM","length":20,"topic":"Layers, Future, Vibes","title":"Realizing the Light-client dream in Eth2.0","type":"talk","speaker":"Lion Dapplion","company":"ChainSafe","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"2:00 PM","endTime":"2:20 PM","length":20,"topic":"Side Stage","title":"Institutional Crypto & DeFi","type":"Workshop","speaker":"Pablo Villalba","company":"Kimchi Fund","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"2:40 PM","endTime":"3:00 PM","length":20,"topic":"Layers, Future, Vibes","title":"Moving from governance 1.5 to 2.0","type":"talk","speaker":"Eylon Aviv","company":"Collider VC","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"3:00 PM","endTime":"3:20 PM","length":20,"topic":"Side Stage","title":"Making Ethereum accessible to all with Layer 2","type":"Workshop","speaker":"Itamar Lesuisse","company":"Argent","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"3:20 PM","endTime":"3:40 PM","length":20,"topic":"Side Stage","title":"Mobile Key Management and dApp Interaction - The Good, the Bad, the Ugly","type":"Workshop","speaker":"Dmitry Bespalov, Andrey Scherbovich","company":"Gnosis","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"3:40 PM","endTime":"4:00 PM","length":20,"topic":"Side Stage","title":"Mortgages for crypto-natives","type":"Workshop","speaker":"Josef Je","company":"PWN FInance","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"4:00 PM","endTime":"4:20 PM","length":20,"topic":"Side Stage","title":"NFTs and Real World IP: Using NFTs and DAOs to finance Medical Research","type":"Workshop","speaker":"Paul Kohlhaas","company":"Molecule","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"4:20 PM","endTime":"4:40 PM","length":20,"topic":"Side Stage","title":"When to pay - The economics and psychology of community building","type":"Workshop","speaker":"Clayton Roche","company":"Uma Protocol","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"4:40 PM","endTime":"5:00 PM","length":20,"topic":"Side Stage","title":"Designing a Sustainable Ecosystem Liquidity Program","type":"Workshop","speaker":"Kendall Cole","company":"Near","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"5:00 PM","endTime":"5:20 PM","length":20,"topic":"Side Stage","title":"Decentralized Asset Custody","type":"Workshop","speaker":"Tux Pacific","company":"Entropy","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"5:20 PM","endTime":"5:40 PM","length":20,"topic":"Side Stage","title":"Building local-first, opensource tools with rotki","type":"Workshop","speaker":"Yábir García Benchakhtir","company":"Rotki","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"5:40 PM","endTime":"6:00 PM","length":20,"topic":"Side Stage","title":"Building decentralized social media apps with Streamr","type":"workshop","speaker":"Bernat Canal","company":"Streamr","room":"Side Stage"},{"miniSummit":"","day":"21","startTime":"9:00 AM","endTime":"9:20 AM","length":20,"topic":"Side Stage","title":"Helping Communities go DAO - by Aragon","type":"workshop","speaker":"Ivan Fortunov","room":"Side Stage","company":"Aragon"},{"miniSummit":"","day":"21","startTime":"9:20 AM","endTime":"9:45 AM","length":25,"topic":"Side Stage","title":"DECENTRALIZED SCIENCE","type":"panel","speaker":"Bianca Trovò - Ants Review, Juri Stricker - Signature Ventures, Tyler Golato - VitaDAO","room":"Side Stage","company":"Mix"},{"miniSummit":"","day":"21","startTime":"10:00 AM","endTime":"10:20 AM","length":20,"topic":"Side Stage","title":"Mobile First = Dragon Energy. Periodt.","type":"workshop","speaker":"Jarrell James","room":"Side Stage","company":"Celo"},{"miniSummit":"","day":"21","startTime":"10:20 AM","endTime":"10:40 AM","length":20,"topic":"Layers, Future, Vibes","title":"Goodbye YOLO-Signing","type":"talk","speaker":"Franziska Heintel","room":"Side Stage","company":"EF"},{"miniSummit":"","day":"21","startTime":"10:40 AM","endTime":"11:00 AM","length":20,"topic":"Side Stage","title":"Applications for the developing world","type":"Workshop","speaker":"Mark Pereira","room":"Side Stage","company":"Zed Labs"},{"miniSummit":"","day":"21","startTime":"11:00 AM","endTime":"11:20 AM","length":20,"topic":"Side Stage","title":"DAOs and the Future of work","type":"Workshop","speaker":"Bill Warren","room":"Side Stage","company":"Opolis"},{"miniSummit":"","day":"21","startTime":"11:20 AM","endTime":"11:40 AM","length":20,"topic":"Side Stage","title":"The Interoperability Trilemma: Why bridging is so damn difficult","type":"Workshop","speaker":"Layne Haber","room":"Side Stage","company":"Connext"},{"miniSummit":"","day":"21","startTime":"11:40 AM","endTime":"12:00 PM","length":20,"topic":"Side Stage","title":"Building New Societies with Ethereum","type":"Workshop","speaker":"Peter Jursic","room":"Side Stage","company":"Meta Game"},{"miniSummit":"","day":"21","startTime":"12:00 PM","endTime":"12:30 PM","length":30,"topic":"Side Stage","title":"DIDs: An ongoing conversation","type":"panel","speaker":"Pelle Brændgaard - Nota Bene, Lauren Feld - 3Box, Oliver Terbu - Consensys Mesh","room":"Side Stage","company":"Mix"},{"miniSummit":"","day":"21","startTime":"12:30 PM","endTime":"12:50 PM","length":20,"topic":"Side Stage","title":"How to leverage scalability and privacy on mainnet","type":"workshop","speaker":"Zac Williamson","room":"Side Stage","company":"Aztec"},{"miniSummit":"","day":"21","startTime":"12:50 PM","endTime":"1:10 PM","length":20,"topic":"Side Stage","title":"Connecting DEFI to real world economy","type":"workshop","speaker":"Jori Armbruster","room":"Side Stage","company":"Ethic Hub"},{"miniSummit":"","day":"21","startTime":"2:20 PM","endTime":"2:40 PM","length":20,"topic":"Side Stage","title":"Challenges for Ethereum Staking Protocols in the Post-Merge World","type":"workshop","speaker":"Isidoros Passadis","room":"Side Stage","company":"Lido"},{"miniSummit":"","day":"20","startTime":"2:20 PM","endTime":"2:40 PM","length":20,"topic":"Side Stage","title":"N2B: Bringing Ethereum to real use cases","type":"workshop","speaker":"Antoni Martin","room":"Side Stage","company":"Polygon Hermez"},{"miniSummit":"","day":"21","startTime":"3:00 PM","endTime":"3:20 PM","length":20,"topic":"Side Stage","title":"Building the communication middleware for Web3","type":"workshop","speaker":"Harsh Rajat","room":"Side Stage","company":"EPNS"},{"miniSummit":"","day":"21","startTime":"3:20 PM","endTime":"3:40 PM","length":20,"topic":"Side Stage","title":"Shutter - Preventing malicious MEV and Frontrunning","type":"Workshop","speaker":"Ulrich Petri","room":"Side Stage","company":"Shutter"},{"miniSummit":"","day":"21","startTime":"3:40 PM","endTime":"4:00 PM","length":20,"topic":"Side Stage","title":"How to make VCs ape into your project","type":"workshop","speaker":"Steven Waterhouse and Richard Muirhead","room":"Side Stage","company":"Fabric Ventures"},{"miniSummit":"","day":"21","startTime":"4:00 PM","endTime":"4:20 PM","length":20,"topic":"Side Stage","title":"How zkSNARKs can provide value: an example with ZEXE","type":"Workshop","speaker":"Errol Drummond","room":"Side Stage","company":"Aleo"},{"miniSummit":"","day":"21","startTime":"4:20 PM","endTime":"4:45 PM","length":25,"topic":"Side Stage","title":"Challenges Of Running A DAO","type":"workshop","speaker":"Juri Mailbaum - DeFi Times (mod), Matteo Pandolfi - Idle Finance, Denis Devcic - Idle Finance","room":"Side Stage","company":"Mix"},{"miniSummit":"","day":"21","startTime":"4:45 PM","endTime":"5:05 PM","length":20,"topic":"Side Stage","title":"Spacetime, Meshing, and Poets, Oh My!","type":"workshop","speaker":"Lane Rettig","room":"Side Stage","company":"Spacemesh"},{"miniSummit":"","day":"21","startTime":"1:10 PM","endTime":"1:40 PM","length":20,"topic":"Side Stage","title":"History and Future of EVM","type":"Workshop","speaker":"Paweł Bylica & Alex Beregszaszi","room":"Side Stage","company":"EF"},{"miniSummit":"","day":"21","startTime":"5:05 PM","endTime":"5:25 PM","length":20,"topic":"Side Stage","title":"DeFi porn: rewinding the data","type":"Workshop","speaker":"Raphaël Mazet","room":"Side Stage","company":"SimpleFi"},{"miniSummit":"","day":"21","startTime":"5:25 PM","endTime":"5:45 PM","length":20,"topic":"Side Stage","title":"Future of the decentralized web","type":"Workshop","speaker":"Bogdan Gusiev","company":"Unstoppable Domains","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"1:40 PM","endTime":"2:00 PM","length":20,"topic":"Side Stage","title":"Urban Planning as a Community Design Framework","type":"Workshop","speaker":"Alex Zhang","company":"FwB","room":"Side Stage"},{"miniSummit":"","day":"21","startTime":"1:40 PM","endTime":"2:00 PM","length":20,"topic":"Side Stage","title":"How developers can build automated dapps","type":"Workshop","speaker":"Hilmar Maximilian Orth","company":"Gelato","room":"Side Stage"},{"miniSummit":"","day":"21","startTime":"2:00 PM","endTime":"2:20 PM","length":20,"topic":"Side Stage","title":"Real World DeFi","type":"Workshop","speaker":"Lea Schmitt & Jeroen Offerjins","company":"Centrifuge","room":"Side Stage"},{"miniSummit":"","day":"21","startTime":"2:40 PM","endTime":"3:00 PM","length":20,"topic":"Side Stage","title":"The Age of NFT Capitalism","type":"Workshop","speaker":"Jérôme de Tychey","company":"Cometh","room":"Side Stage"},{"miniSummit":"","day":"20","startTime":"12:40 PM","endTime":"1:00 PM","length":20,"topic":"","title":"Lunch","type":"","speaker":"","company":"","room":"Main Stage"},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"5:20 PM","endTime":"5:40 PM","length":20,"topic":"","title":"Building Virality in Web3","type":"talk","speaker":"Pplpleasr","company":"","room":"Main Stage"},{"miniSummit":"","day":"20","startTime":"6:10 PM","endTime":"9:10 PM","length":180,"topic":"","title":"LisCon Networking Event powered by Figment","type":"drinks","speaker":"","company":"","room":"Main Stage"},{"miniSummit":"","day":"21","startTime":"9:45 AM","endTime":"10:00 PM","length":15,"topic":"","title":"How to launch sentient NFTs and lvl up DeFi","type":"Workshop","speaker":"James Key","company":"Autonomy","room":"Side Stage"},{"miniSummit":"NFTs & the Creator Economy","day":"21","startTime":"4:35 PM","endTime":"4:55 PM","length":15,"topic":"","title":"Fireside Chat with Blockade Games","type":"Workshop","speaker":"Coin Artist, Kyle Chivers","company":"Blockade Games","room":"Main Stage"}]')},321:function(e,t,n){"use strict";n(294)},322:function(e,t,n){var o=n(52)(!1);o.push([e.i,'h1[data-v-f59b4224]{font-size:4rem;font-weight:700;font-family:"RousseauDeco",sans-serif}p[data-v-f59b4224]{font-size:1.4rem;font-family:"NeueMachina-Regular",sans-serif}.appear-enter-active[data-v-f59b4224],.appear-leave-active[data-v-f59b4224]{transition:all .3s ease-in-out}.appear-enter[data-v-f59b4224],.appear-leave-to[data-v-f59b4224]{transform:translate(-50%,-50%);opacity:0}.current[data-v-f59b4224]{color:#025099}.current.label[data-v-f59b4224]{border:1px solid #025099}.agenda[data-v-f59b4224]{margin-top:48px;display:grid;grid-template:-webkit-max-content 1fr/1fr;grid-template:max-content 1fr/1fr;grid-row-gap:34px;width:80%;justify-content:center}.agenda .header[data-v-f59b4224]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #cbc2bb;padding:34px 0}.agenda .content[data-v-f59b4224]{display:grid;grid-template:-webkit-max-content 1fr/1fr;grid-template:max-content 1fr/1fr;grid-row-gap:34px}.agenda .content .day-switch[data-v-f59b4224]{display:flex;justify-content:space-around}.agenda .content .stage[data-v-f59b4224]{margin-bottom:1rem}.agenda .content .day[data-v-f59b4224]{margin:16px;font-size:24px;cursor:pointer;text-align:center}@media (max-width:930px){.agenda[data-v-f59b4224]{justify-content:flex-start}.agenda .header[data-v-f59b4224]{display:flex;flex-direction:column;align-items:flex-start}.agenda .header .select[data-v-f59b4224]{align-self:flex-end;margin-top:24px}.agenda .content[data-v-f59b4224]{display:flex;flex-direction:column}}',""]),e.exports=o},384:function(e,t,n){"use strict";n.r(t);n(33),n(22),n(55),n(32),n(56);var o=n(18),r=(n(41),n(54),n(31),n(68),n(185),n(38),n(282)),m=n(320),l=n(284);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={data:function(){return{days:l.a,selected:{label:"All"},filteredEvents:{mainStage:[],sideStage:[]},currentDay:21===(new Date).getUTCDate()?"21":"20",currentEvent:null,isModalVisible:!1,events:m.map((function(e){var t="";return"panel"===e.type?t=e.speaker:e.speaker&&e.company?t="".concat(e.speaker," - ").concat(e.company):e.company?e.speaker||(t="".concat(e.company)):t="".concat(e.speaker),c(c({},e),{},{fullSpeaker:t})}))}},watch:{currentDay:function(){this.filterEvents()}},mounted:function(){this.filterEvents()},methods:{setCurrentDay:function(e){this.currentDay=e},showModal:function(e){var t=this;document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.position="fixed",this.$nextTick((function(){t.currentEvent=e}))},closeModal:function(){this.currentEvent=null,this.$nextTick((function(){var e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}))},filterEvents:function(){var e=this,t=function(e){return parseInt(Object(r.a)(e).replace(":",""))};this.filteredEvents=this.events.filter((function(t){return t.day===e.currentDay})).sort((function(e,n){return t(e.startTime)-t(n.startTime)})).reduce((function(e,t){return"main stage"===t.room.toLowerCase()?e.mainStage.push(t):e.sideStage.push(t),e}),{mainStage:[],sideStage:[]})}}},S=(n(321),n(58)),component=Object(S.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"agenda"},[n("div",{staticClass:"content"},[n("div",{staticClass:"day-switch"},e._l(e.days,(function(t){return n("div",{key:t.key,staticClass:"day",class:{current:e.currentDay===t.key},on:{click:function(n){return e.setCurrentDay(t.key)}}},[n("p",[e._v(e._s(t.name))]),e._v(" "),n("p",[e._v(e._s(t.key))])])})),0),e._v(" "),e.filteredEvents.mainStage.length?n("CalendarStage",{staticClass:"stage",attrs:{events:e.filteredEvents.mainStage,stage:"Main stage"}}):e._e(),e._v(" "),e.filteredEvents.sideStage.length?n("CalendarStage",{staticClass:"stage",attrs:{events:e.filteredEvents.sideStage,stage:"Side stage"}}):e._e()],1)])}),[],!1,null,"f59b4224",null);t.default=component.exports;installComponents(component,{CalendarStage:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,385)).then((function(e){return e.default||e}))}})}}]);
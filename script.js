const warStories = [
  {id:'haldig', title:'Haldighati', type:'battle', typeLabel:'BATTLE', tag:'HISTORICAL RECORD + LATER FOLK MEMORY', badge:'mixed', region:'Mewar • 1576', summary:'A major 16th-century confrontation remembered through battlefield history, heroic narratives and the enduring Chetak tradition.', details:{'Date':'18 June 1576','Region':'Mewar, near Haldighati','Figures':'Maharana Pratap • Raja Man Singh I','Lore':'Chetak • Jhala Man • heroic ballads','Note':'Separate documented events from later oral and popular retellings.'}},
  {id:'pabuji', title:'Pabuji Ri Phad', type:'ballad', typeLabel:'PHAD EPIC', tag:'ORAL FOLKLORE', badge:'oral', region:'Western Rajasthan', summary:'A heroic oral epic performed with a painted phad and ravanhattho, connecting warrior memory, vows, cattle and devotion.', details:{'Tradition':'Bhopa/Bhopi performance','Region':'Western Rajasthan','Form':'Painted scroll + oral narration + music','Associated object':'Phad','Related':'Ravanhattho • folk deity tradition'}},
  {id:'devnarayan', title:'Devnarayan / Bagadawat', type:'hero', typeLabel:'HEROIC EPIC', tag:'ORAL EPIC', badge:'oral', region:'Eastern / Central Rajasthan', summary:'A long oral narrative around the Bagadawat brothers and Devnarayan, with extensive battle episodes and divine elements.', details:{'Tradition':'Bhopa performance','Form':'Long oral epic','Themes':'War • clan conflict • devotion • heroism','Associated object':'Painted scroll tradition','Note':'Multiple performance versions exist.'}},
  {id:'goga', title:'Goga Gatha', type:'hero', typeLabel:'WARRIOR / FOLK DEITY', tag:'MIXED TRADITION', badge:'oral', region:'Northwestern Rajasthan', summary:'The warrior and folk-deity tradition surrounding Gogaji, remembered through songs, pilgrimage and serpent lore.', details:{'Figure':'Gogaji / Goga Pir','Themes':'Warrior memory • devotion • serpent lore','Tradition':'Oral and devotional performance','Region':'Northwestern Rajasthan'}},
  {id:'ranth', title:'Ranthambore Siege Lore', type:'siege', typeLabel:'SIEGE', tag:'HISTORICAL + TRADITION', badge:'mixed', region:'Sawai Madhopur', summary:'Fort-centered traditions preserve memories of siege, resistance and the dramatic final phases of medieval warfare.', details:{'Place':'Ranthambore Fort','Themes':'Siege • fort defense • resistance','Period':'Medieval Rajasthan','Archive note':'Compare later tradition with contemporary historical sources.'}},
  {id:'durgadas', title:'Durgadas Rathore', type:'hero', typeLabel:'HEROIC FIGURE', tag:'HISTORICAL + FOLK MEMORY', badge:'mixed', region:'Marwar • 17th century', summary:'A major Marwar figure whose resistance became part of later heroic memory and oral tradition.', details:{'Region':'Marwar','Century':'17th century','Themes':'Resistance • diplomacy • mobility','Tradition':'Heroic literature and folk memory'}},
  {id:'deewair', title:'Dewair', type:'battle', typeLabel:'BATTLE', tag:'HISTORICAL RECORD', badge:'verified', region:'Mewar • 1582', summary:'A later Mewar campaign associated with the recovery of positions and remembered in narratives of sustained resistance.', details:{'Date':'1582','Region':'Mewar','Associated figure':'Maharana Pratap','Type':'Military campaign','Archive note':'Historical accounts vary in detail and emphasis.'}},
  {id:'chittor', title:'Chittorgarh Siege Traditions', type:'siege', typeLabel:'SIEGE CYCLE', tag:'HISTORY + ORAL MEMORY', badge:'mixed', region:'Chittorgarh', summary:'Three major siege traditions—1303, 1535 and 1567–68—form one of Rajasthan’s most influential cycles of war memory.', details:{'Place':'Chittorgarh Fort','Siege cycle':'1303 • 1535 • 1567–68','Themes':'Siege • resistance • jauhar/saka traditions','Related':'Gora • Badal • Jaimal • Patta'}}
];

const folklore = [
  {title:'Dhola–Maru',type:'LOVE LEGEND',badge:'oral',region:'Western Rajasthan',summary:'A celebrated romance of separation, travel, loyalty and reunion that travelled widely through song.'},
  {title:'Moomal–Mahendra',type:'LOVE LEGEND',badge:'oral',region:'Western Rajasthan',summary:'A famous story of love, disguise, misunderstanding and loss in the cultural landscape of the Thar.'},
  {title:'Tejaji Gatha',type:'FOLK DEITY / HERO',badge:'oral',region:'Central & Eastern Rajasthan',summary:'A tradition centred on Tejaji, remembered for promises, protection, sacrifice and worship.'},
  {title:'Ramdevji Lore',type:'DEVOTIONAL TRADITION',badge:'mixed',region:'Western Rajasthan',summary:'Stories, songs and pilgrimage traditions around Ramdevji, blending devotion and social memory.'},
  {title:'Nagji–Nagwanti',type:'ROMANTIC EPIC',badge:'oral',region:'Rajasthan',summary:'An oral romance shaped by separation, travel and dramatic obstacles.'},
  {title:'Jasma–Odan',type:'TRAGIC LEGEND',badge:'oral',region:'Rajasthan / wider western tradition',summary:'A woman-centred narrative associated with labour, love, honour and tragedy.'},
  {title:'Gopichand–Bharthari',type:'DEVOTIONAL EPIC',badge:'oral',region:'Northwestern India',summary:'A renunciation and spiritual quest tradition transmitted through song and performance.'},
  {title:'Gavari Stories',type:'TRIBAL THEATRE',badge:'oral',region:'Mewar • Bhil communities',summary:'Narratives performed within the long Gavari theatre season, combining ritual, humour, mythology and community memory.'},
  {title:'Kala-Gora Ro Bharat',type:'WAR-ORIENTED EPIC',badge:'oral',region:'Rajasthan',summary:'A “Bharat” narrative in the heroic tradition, representing the war-oriented side of oral epic.'},
  {title:'Bankidas & Chetavani',type:'RESISTANCE SONG',badge:'mixed',region:'Marwar / Bharatpur context',summary:'Poetic traditions connected with anti-British sentiment and political events of the early nineteenth century.'},
  {title:'Bhil Sacred Landscape Tales',type:'PLACE-BASED ORAL TRADITION',badge:'oral',region:'Udaipur region',summary:'Stories tied to sacred hills, ancestors, deities and community memory.'},
  {title:'Batan Ri Phulwari',type:'FOLKTALE COLLECTION',badge:'oral',region:'Marwar / Thar',summary:'A vast modern literary collection rooted in the oral storytelling culture of Rajasthan.'}
];

const dynasties = [
  ['Mewar','Guhila / Sisodia','Chittorgarh • Udaipur'],['Marwar','Rathore','Mandore • Jodhpur'],['Amber / Jaipur','Kachwaha','Amber • Jaipur'],['Bikaner','Rathore','Bikaner'],['Jaisalmer','Bhati','Jaisalmer'],['Bundi','Hada Chauhan','Bundi'],['Kota','Hada Chauhan','Kota'],['Karauli','Yaduvanshi tradition','Karauli']
];

const places = [
  ['Jaisalmer',77,35,'Bhati tradition • Jaisalmer Fort • desert trade'],['Bikaner',48,27,'Bikaner state • Junagarh Fort • camel culture'],['Jodhpur',55,44,'Marwar • Rathore history • Mehrangarh'],['Jaipur',76,45,'Amber/Jaipur • Kachwaha state • Jantar Mantar'],['Ajmer',67,56,'Chauhans • pilgrimage • imperial encounters'],['Chittorgarh',65,73,'Mewar • sieges • fort traditions'],['Udaipur',52,82,'Mewar • lakes • court culture'],['Kota',82,73,'Hadoti • Kota state • Chambal region']
];

const allItems = [
  ...warStories.map(x=>({title:x.title,type:x.typeLabel,region:x.region,source:x.badge,id:x.id,collection:'War Lore'})),
  ...folklore.map((x,i)=>({title:x.title,type:x.type,region:x.region,source:x.badge,id:'f'+i,collection:'Folklore'})),
  ...dynasties.map((x,i)=>({title:x[0],type:'DYNASTY',region:x[2],source:'mixed',id:'d'+i,collection:'Dynasties'}))
];

function badgeClass(b){return ['verified','mixed','oral','legend'].includes(b)?b:'oral'}
function renderWar(filter='all'){
  const data=filter==='all'?warStories:warStories.filter(x=>x.type===filter);
  document.getElementById('warGrid').innerHTML=data.map(x=>`<article class="story-card" data-open="${x.id}">
    <div><div class="story-top"><span class="story-type">${x.typeLabel}</span><span class="source-badge ${badgeClass(x.badge)}">${x.tag}</span></div>
    <h3>${x.title}</h3><p>${x.summary}</p></div><div class="story-meta"><span>${x.region}</span><span>Open story ↗</span></div></article>`).join('');
}
function renderFolklore(){document.getElementById('folkloreGrid').innerHTML=folklore.map((x,i)=>`<article class="story-card" data-folklore="${i}"><div><div class="story-top"><span class="story-type">${x.type}</span><span class="source-badge ${badgeClass(x.badge)}">${x.badge.toUpperCase()}</span></div><h3>${x.title}</h3><p>${x.summary}</p></div><div class="story-meta"><span>${x.region}</span><span>Read tale ↗</span></div></article>`).join('')}
function renderDynasties(){document.getElementById('dynastyGrid').innerHTML=dynasties.map(x=>`<article class="dynasty-card"><span class="dynasty-era">${x[1]}</span><h3>${x[0]}</h3><p>${x[2]}</p><span class="card-link">Explore lineage →</span></article>`).join('')}
function renderPlaces(){
  const map=document.getElementById('placeMap');
  map.innerHTML=places.map((p,i)=>`<button class="place-marker" style="left:${p[1]}%;top:${p[2]}%" data-place="${i}" aria-label="${p[0]}"><span>${p[0]}</span></button>`).join('');
}
function openModal(title, kicker, body, rows=[]){
  document.getElementById('modalBody').innerHTML=`<span class="modal-kicker">${kicker}</span><h2>${title}</h2><p>${body}</p>${rows.map(r=>`<div class="detail-row"><strong>${r[0]}</strong><span>${r[1]}</span></div>`).join('')}`;
  document.getElementById('detailModal').classList.add('open');document.getElementById('detailModal').setAttribute('aria-hidden','false');
}
function closeModal(){document.getElementById('detailModal').classList.remove('open');document.getElementById('detailModal').setAttribute('aria-hidden','true')}
function openSearch(){document.getElementById('searchOverlay').classList.add('open');document.getElementById('searchOverlay').setAttribute('aria-hidden','false');setTimeout(()=>document.getElementById('searchInput').focus(),50)}
function closeSearch(){document.getElementById('searchOverlay').classList.remove('open');document.getElementById('searchOverlay').setAttribute('aria-hidden','true')}
function doSearch(q){
  const res=allItems.filter(x=>`${x.title} ${x.type} ${x.region}`.toLowerCase().includes(q.toLowerCase())).slice(0,9);
  document.getElementById('searchResults').innerHTML=q.trim()?res.map(x=>`<button class="search-result" data-search-id="${x.id}" data-collection="${x.collection}"><small>${x.collection} • ${x.type}</small><strong>${x.title}</strong><div>${x.region}</div></button>`).join(''):`<div class="search-result"><small>Try a place, person or story</small><strong>Haldighati • Pabuji • Mewar • Jodhpur</strong></div>`;
}

renderWar();renderFolklore();renderDynasties();renderPlaces();doSearch('');

document.addEventListener('click',e=>{
  const warCard=e.target.closest('[data-open]');
  if(warCard){const x=warStories.find(s=>s.id===warCard.dataset.open);openModal(x.title,x.typeLabel,x.summary,Object.entries(x.details));}
  const folCard=e.target.closest('[data-folklore]');
  if(folCard){const x=folklore[Number(folCard.dataset.folklore)];openModal(x.title,x.type,x.summary,[['Region',x.region],['Source label',x.badge],['Project handling','Present alongside evidence and alternative versions where relevant.']]);}
  const marker=e.target.closest('.place-marker');
  if(marker){const p=places[Number(marker.dataset.place)];document.getElementById('mapDetail').innerHTML=`<strong>${p[0]}</strong><p>${p[3]}</p>`;}
  const searchItem=e.target.closest('[data-search-id]');
  if(searchItem){const item=allItems.find(x=>x.id===searchItem.dataset.searchId);if(item){openModal(item.title,item.collection,item.region,[['Category',item.type],['Archive label',item.source],['Next step','Connect this item to related people, places, events and sources in the full database.']]);closeSearch();}}
});

document.querySelectorAll('[data-war-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-war-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderWar(btn.dataset.warFilter)}));
document.querySelectorAll('.explore-card').forEach(card=>card.addEventListener('click',()=>{const target=card.dataset.filter==='war'?'#war':card.dataset.filter==='folklore'?'#folklore':card.dataset.filter==='heritage'?'#heritage':'#timeline';document.querySelector(target).scrollIntoView({behavior:'smooth'})}));
document.getElementById('searchToggle').addEventListener('click',openSearch);document.getElementById('openSearch').addEventListener('click',openSearch);document.getElementById('searchClose').addEventListener('click',closeSearch);document.getElementById('searchOverlay').addEventListener('click',e=>{if(e.target.id==='searchOverlay')closeSearch()});document.getElementById('searchInput').addEventListener('input',e=>doSearch(e.target.value));document.getElementById('modalClose').addEventListener('click',closeModal);document.getElementById('detailModal').addEventListener('click',e=>{if(e.target.id==='detailModal')closeModal()});

document.querySelectorAll('.timeline-item').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.timeline-item').forEach(i=>i.classList.remove('active'));item.classList.add('active')}));
document.getElementById('languageToggle').addEventListener('click',()=>{document.documentElement.lang=document.documentElement.lang==='en'?'hi':'en';document.getElementById('languageToggle').textContent=document.documentElement.lang==='en'?'HI':'EN';document.querySelector('.hero-text').textContent=document.documentElement.lang==='hi'?'राजस्थान के इतिहास, युद्ध-कथाओं, लोकगाथाओं, दुर्गों और जीवित परंपराओं को एक इंटरैक्टिव डिजिटल संग्रह में खोजें।':'Explore kingdoms, battles, heroic ballads, folk epics, forts, traditions and the people who carried Rajasthan\'s stories across generations.'});
document.getElementById('tryLanguage').addEventListener('click',()=>document.getElementById('languageToggle').click());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSearch();closeModal()}});

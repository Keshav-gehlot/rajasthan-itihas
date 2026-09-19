const warStories = [
  {id:"haldig",title:"Haldighati",type:"battle",typeLabel:"BATTLE",tag:"HISTORICAL RECORD + LATER FOLK MEMORY",badge:"mixed",region:"Mewar • 1576",summary:"A major 16th-century confrontation remembered through battlefield history, heroic narratives and the enduring Chetak tradition.",details:[["Date","18 June 1576"],["Region","Mewar, near Haldighati"],["Figures","Maharana Pratap • Raja Man Singh I"],["Lore","Chetak • Jhala Man • heroic ballads"],["Research note","Separate documented events from later oral and popular retellings."]]},
  {id:"pabuji",title:"Pabuji Ri Phad",type:"ballad",typeLabel:"PHAD EPIC",tag:"ORAL FOLKLORE",badge:"oral",region:"Western Rajasthan",summary:"A heroic oral epic performed with a painted phad and ravanhattho, connecting warrior memory, vows, cattle and devotion.",details:[["Tradition","Bhopa/Bhopi performance"],["Region","Western Rajasthan"],["Form","Painted scroll + oral narration + music"],["Associated object","Phad"],["Related","Ravanhattho • folk deity tradition"]]},
  {id:"devnarayan",title:"Devnarayan / Bagadawat",type:"hero",typeLabel:"HEROIC EPIC",tag:"ORAL EPIC",badge:"oral",region:"Eastern & Central Rajasthan",summary:"A long oral narrative around the Bagadawat brothers and Devnarayan, with extensive battle episodes and divine elements.",details:[["Tradition","Bhopa performance"],["Form","Long oral epic"],["Themes","War • clan conflict • devotion • heroism"],["Associated form","Painted-scroll narration"],["Research note","Performance versions can differ by region and narrator."]]},
  {id:"goga",title:"Goga Gatha",type:"hero",typeLabel:"WARRIOR / FOLK DEITY",tag:"ORAL TRADITION",badge:"oral",region:"Northwestern Rajasthan",summary:"The warrior and folk-deity tradition surrounding Gogaji, remembered through songs, pilgrimage and serpent lore.",details:[["Figure","Gogaji / Goga Pir"],["Themes","Warrior memory • devotion • serpent lore"],["Tradition","Oral and devotional performance"],["Region","Northwestern Rajasthan"]]},
  {id:"ranth",title:"Ranthambore Siege Lore",type:"siege",typeLabel:"SIEGE",tag:"HISTORICAL + TRADITION",badge:"mixed",region:"Sawai Madhopur",summary:"Fort-centered traditions preserve memories of siege, resistance and the dramatic final phases of medieval warfare.",details:[["Place","Ranthambore Fort"],["Themes","Siege • fort defense • resistance"],["Period","Medieval Rajasthan"],["Research note","Compare later tradition with contemporary historical sources."]]},
  {id:"chittor",title:"Chittorgarh Siege Cycle",type:"siege",typeLabel:"SIEGE CYCLE",tag:"HISTORY + ORAL MEMORY",badge:"mixed",region:"Chittorgarh",summary:"The 1303, 1535 and 1567–68 siege traditions form one of Rajasthan’s most influential cycles of war memory.",details:[["Place","Chittorgarh Fort"],["Siege cycle","1303 • 1535 • 1567–68"],["Themes","Siege • resistance • jauhar/saka traditions"],["Related","Gora • Badal • Jaimal • Patta"]]},
  {id:"durgadas",title:"Durgadas Rathore",type:"hero",typeLabel:"HEROIC FIGURE",tag:"HISTORY + FOLK MEMORY",badge:"mixed",region:"Marwar • 17th century",summary:"A major Marwar figure whose resistance became part of later heroic memory and oral tradition.",details:[["Region","Marwar"],["Period","17th century"],["Themes","Resistance • diplomacy • mobility"],["Tradition","Heroic literature and folk memory"]]},
  {id:"deewair",title:"Dewair",type:"battle",typeLabel:"BATTLE",tag:"HISTORICAL RECORD",badge:"verified",region:"Mewar • 1582",summary:"A later Mewar campaign associated with sustained resistance and remembered in narratives of recovering positions.",details:[["Date","1582"],["Region","Mewar"],["Associated figure","Maharana Pratap"],["Type","Military campaign"],["Research note","Accounts differ in emphasis and detail."]]},
  {id:"khanwa",title:"Khanwa",type:"battle",typeLabel:"BATTLE",tag:"HISTORICAL RECORD",badge:"verified",region:"Near Bharatpur • 1527",summary:"A major early-sixteenth-century battle remembered in accounts of Rana Sanga, Babur and the political landscape of north India.",details:[["Date","1527"],["Figures","Rana Sanga • Babur"],["Region","Khanwa area"],["Archive use","Connect to Mewar, Rajput polities and Mughal expansion."]]},
  {id:"tarain",title:"Tarain Traditions",type:"battle",typeLabel:"BATTLE CYCLE",tag:"HISTORICAL + LITERARY MEMORY",badge:"mixed",region:"Chahamana context • 1191–1192",summary:"The battles of Tarain became central to later literary and heroic traditions around Prithviraj Chauhan.",details:[["Dates","1191 and 1192"],["Associated figure","Prithviraj Chauhan"],["Tradition","Historical accounts + later heroic literature"],["Research note","Later literary narratives should not be treated as direct battlefield transcripts."]]},
  {id:"giri",title:"Giri-Sumel",type:"battle",typeLabel:"BATTLE",tag:"HISTORICAL + HERALDIC MEMORY",badge:"mixed",region:"Marwar • 1544",summary:"A battle remembered in Marwar's political and visual tradition, including the later bajra motif associated with the campaign.",details:[["Date","1544"],["Associated figure","Rao Maldeo"],["Opposing ruler","Sher Shah Suri"],["Visual memory","Bajra / millet motif in later heraldic tradition"]]},
  {id:"kushal",title:"Auwa Resistance",type:"ballad",typeLabel:"RESISTANCE MEMORY",tag:"19TH-CENTURY HISTORY + FOLK MEMORY",badge:"mixed",region:"Marwar • 1857–58",summary:"Resistance around Auwa entered regional political memory alongside songs and narratives of the 1857 upheaval.",details:[["Period","1857–58"],["Place","Auwa"],["Themes","Resistance • princely politics • colonial conflict"],["Archive note","Use official and historical records alongside local memory."]]}
];

const folklore = [
  {title:"Dhola–Maru",type:"LOVE LEGEND",badge:"oral",region:"Western Rajasthan",summary:"A celebrated romance of separation, travel, loyalty and reunion that travelled through song."},
  {title:"Moomal–Mahendra",type:"LOVE LEGEND",badge:"oral",region:"Western Rajasthan",summary:"A famous story of love, disguise, misunderstanding and loss in the cultural landscape of the Thar."},
  {title:"Tejaji Gatha",type:"FOLK DEITY / HERO",badge:"oral",region:"Central & Eastern Rajasthan",summary:"A tradition centred on Tejaji, remembered for promises, protection, sacrifice and worship."},
  {title:"Ramdevji Lore",type:"DEVOTIONAL TRADITION",badge:"mixed",region:"Western Rajasthan",summary:"Stories, songs and pilgrimage traditions around Ramdevji, blending devotion and social memory."},
  {title:"Nagji–Nagwanti",type:"ROMANTIC EPIC",badge:"oral",region:"Rajasthan",summary:"An oral romance shaped by separation, travel and dramatic obstacles."},
  {title:"Jasma–Odan",type:"TRAGIC LEGEND",badge:"oral",region:"Rajasthan / wider western tradition",summary:"A woman-centred narrative associated with labour, love, honour and tragedy."},
  {title:"Gopichand–Bharthari",type:"DEVOTIONAL EPIC",badge:"oral",region:"Northwestern India",summary:"A renunciation and spiritual quest tradition transmitted through song and performance."},
  {title:"Gavari Stories",type:"TRIBAL THEATRE",badge:"oral",region:"Mewar • Bhil communities",summary:"Narratives performed during the Gavari theatre season, combining ritual, humour, mythology and community memory."},
  {title:"Kala-Gora Ro Bharat",type:"WAR-ORIENTED EPIC",badge:"oral",region:"Rajasthan",summary:"A “Bharat” narrative in the heroic tradition, representing the war-oriented side of oral epic."},
  {title:"Bhil Sacred Landscape Tales",type:"PLACE-BASED ORAL TRADITION",badge:"oral",region:"Udaipur region",summary:"Stories tied to sacred hills, ancestors, deities and community memory."},
  {title:"Batan Ri Phulwari",type:"FOLKTALE COLLECTION",badge:"oral",region:"Marwar / Thar",summary:"A vast modern literary collection rooted in the oral storytelling culture of Rajasthan."},
  {title:"Pabuji Tradition",type:"HEROIC FOLK EPIC",badge:"oral",region:"Western Rajasthan",summary:"A performance tradition connecting a heroic figure, cattle, vows, warfare, painted scrolls and music."}
];

const dynasties = [
  {name:"Mewar",house:"Guhila / Sisodia",capital:"Chittorgarh → Udaipur",symbol:"☼",context:"Solar lineage tradition • major fort network • Mewar resistance memory"},
  {name:"Marwar",house:"Rathore",capital:"Mandore → Jodhpur",symbol:"𓅃",context:"Desert kingdom • cavalry • trade routes • Rathore heroic traditions"},
  {name:"Amber / Jaipur",house:"Kachhwaha",capital:"Amber → Jaipur",symbol:"◉",context:"Kachhwaha court • astronomical heritage • Mughal-era diplomacy"},
  {name:"Bikaner",house:"Rathore",capital:"Bikaner",symbol:"✦",context:"Desert frontier • camel culture • Rathore state history"},
  {name:"Jaisalmer",house:"Bhati",capital:"Jaisalmer",symbol:"◇",context:"Fortified desert city • caravan trade • Bhati lineage"},
  {name:"Bundi",house:"Hada Chauhan",capital:"Bundi",symbol:"⌁",context:"Hadoti • hill fort landscape • miniature painting tradition"},
  {name:"Kota",house:"Hada Chauhan",capital:"Kota",symbol:"◈",context:"Hadoti • Chambal region • courtly arts"},
  {name:"Karauli",house:"Yaduvanshi tradition",capital:"Karauli",symbol:"✥",context:"Temple patronage • regional princely-state history"}
];

const places = [
  {name:"Jaisalmer",lat:26.9157,lng:70.9083,summary:"Bhati tradition • Jaisalmer Fort • desert trade",era:"Medieval",fort:"Jaisalmer Fort"},
  {name:"Bikaner",lat:28.0229,lng:73.3119,summary:"Bikaner state • Junagarh Fort • desert ecology",era:"Medieval",fort:"Junagarh Fort"},
  {name:"Jodhpur",lat:26.2389,lng:73.0243,summary:"Marwar • Rathore history • Mehrangarh",era:"Medieval–Modern",fort:"Mehrangarh Fort"},
  {name:"Jaipur",lat:26.9124,lng:75.7873,summary:"Amber/Jaipur • Kachhwaha state • Jantar Mantar",era:"Early Modern–Modern",fort:"Amber Fort / Jaigarh"},
  {name:"Ajmer",lat:26.4499,lng:74.6399,summary:"Chahamana history • pilgrimage • imperial encounters",era:"Medieval–Modern",fort:"Taragarh Fort"},
  {name:"Chittorgarh",lat:24.8887,lng:74.6269,summary:"Mewar • siege cycle • Chittorgarh Fort",era:"Medieval–Early Modern",fort:"Chittorgarh Fort"},
  {name:"Udaipur",lat:24.5854,lng:73.7125,summary:"Mewar • lakes • court culture • later capital",era:"Early Modern–Modern",fort:"Kumbhalgarh region"},
  {name:"Kota",lat:25.2138,lng:75.8648,summary:"Hadoti • Kota state • Chambal region",era:"Early Modern–Modern",fort:"Kota Garh"}
];

const aravalli = [
  [24.63,72.78],[24.92,73.12],[25.18,73.45],[25.46,73.68],[25.78,73.92],[26.12,74.26],
  [26.42,74.52],[26.67,74.84],[26.79,75.14],[26.83,75.48],[26.96,75.82],[27.18,76.13],
  [27.42,76.42],[27.72,76.62],[27.98,76.78]
];

const allItems = [
  ...warStories.map(x=>({title:x.title,type:x.typeLabel,region:x.region,source:x.badge,id:x.id,collection:"War Lore"})),
  ...folklore.map((x,i)=>({title:x.title,type:x.type,region:x.region,source:x.badge,id:"f"+i,collection:"Folklore"})),
  ...dynasties.map((x,i)=>({title:x.name,type:"DYNASTY",region:x.capital,source:"mixed",id:"d"+i,collection:"Dynasties"})),
  ...places.map((x,i)=>({title:x.name,type:"PLACE",region:x.summary,source:"map",id:"p"+i,collection:"Places"}))
];

const detailModal = document.getElementById("detailModal");
const searchOverlay = document.getElementById("searchOverlay");

function badgeClass(b){return ["verified","mixed","oral","legend"].includes(b)?b:"oral"}

function renderWar(filter="all"){
  const data=filter==="all"?warStories:warStories.filter(x=>x.type===filter);
  document.getElementById("warCount").textContent=data.length+" archive entries";
  document.getElementById("warGrid").innerHTML=data.map(x=>`
    <article class="story-card" data-open="${x.id}" tabindex="0" role="button" aria-label="Open ${x.title}">
      <div><div class="story-top"><span class="story-type">${x.typeLabel}</span><span class="source-badge ${badgeClass(x.badge)}">${x.tag}</span></div>
      <h3>${x.title}</h3><p>${x.summary}</p></div>
      <div class="story-meta"><span>${x.region}</span><span>Open story ↗</span></div>
    </article>`).join("");
}

function renderFolklore(){
  document.getElementById("folkloreGrid").innerHTML=folklore.map((x,i)=>`
    <article class="story-card" data-folklore="${i}" tabindex="0" role="button" aria-label="Open ${x.title}">
      <div><div class="story-top"><span class="story-type">${x.type}</span><span class="source-badge ${badgeClass(x.badge)}">${x.badge.toUpperCase()}</span></div>
      <h3>${x.title}</h3><p>${x.summary}</p></div>
      <div class="story-meta"><span>${x.region}</span><span>Read tale ↗</span></div>
    </article>`).join("");
}

function renderDynasties(){
  document.getElementById("dynastyGrid").innerHTML=dynasties.map((x,i)=>`
    <article class="dynasty-card" data-dynasty="${i}" tabindex="0" role="button" aria-label="Open ${x.name}">
      <span class="dynasty-symbol">${x.symbol}</span><span class="dynasty-era">${x.house}</span>
      <h3>${x.name}</h3><p>${x.capital}</p><span class="card-link">Explore lineage →</span>
    </article>`).join("");
}

function openModal(title,kicker,body,rows=[]){
  document.getElementById("modalBody").innerHTML=`<span class="modal-kicker">${kicker}</span><h2>${title}</h2><p>${body}</p>${rows.map(r=>`<div class="detail-row"><strong>${r[0]}</strong><span>${r[1]}</span></div>`).join("")}`;
  detailModal.classList.add("open");detailModal.setAttribute("aria-hidden","false");document.body.classList.add("modal-lock");
}
function closeModal(){detailModal.classList.remove("open");detailModal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-lock")}
function openSearch(){searchOverlay.classList.add("open");searchOverlay.setAttribute("aria-hidden","false");document.body.classList.add("modal-lock");setTimeout(()=>document.getElementById("searchInput").focus(),50)}
function closeSearch(){searchOverlay.classList.remove("open");searchOverlay.setAttribute("aria-hidden","true");document.body.classList.remove("modal-lock")}
function doSearch(q){
  const res=allItems.filter(x=>`${x.title} ${x.type} ${x.region}`.toLowerCase().includes(q.toLowerCase())).slice(0,9);
  document.getElementById("searchResults").innerHTML=q.trim()?res.map(x=>`<button class="search-result" data-search-id="${x.id}"><small>${x.collection} • ${x.type}</small><strong>${x.title}</strong><div>${x.region}</div></button>`).join(""):`<div class="search-empty"><small>Popular searches</small><strong>Haldighati • Pabuji • Mewar • Jodhpur</strong></div>`;
}

renderWar();renderFolklore();renderDynasties();doSearch("");

document.addEventListener("click",e=>{
  const warCard=e.target.closest("[data-open]");
  if(warCard){const x=warStories.find(s=>s.id===warCard.dataset.open);if(x)openModal(x.title,x.typeLabel,x.summary,x.details)}
  const folCard=e.target.closest("[data-folklore]");
  if(folCard){const x=folklore[Number(folCard.dataset.folklore)];if(x)openModal(x.title,x.type,x.summary,[["Region",x.region],["Source label",x.badge],["Archive note","Use alongside documented sources and local variants where available."]])}
  const dynCard=e.target.closest("[data-dynasty]");
  if(dynCard){const x=dynasties[Number(dynCard.dataset.dynasty)];if(x)openModal(x.name,"DYNASTY • "+x.house,x.context,[["Capital / centres",x.capital],["Visual symbol",x.symbol],["Project use","Connect dynasty to rulers, battles, forts, artwork, flags and sources."]])}
  const searchItem=e.target.closest("[data-search-id]");
  if(searchItem){const item=allItems.find(x=>x.id===searchItem.dataset.searchId);if(item)openModal(item.title,item.collection,item.region,[["Category",item.type],["Archive label",item.source]]);closeSearch()}
  const hint=e.target.closest("[data-query]");
  if(hint){const q=hint.dataset.query;document.getElementById("searchInput").value=q;doSearch(q)}
  const navLink=e.target.closest("#mobileNav a");if(navLink)document.getElementById("mobileNav").classList.remove("open");
});

document.querySelectorAll("[data-war-filter]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-war-filter]").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderWar(btn.dataset.warFilter)}));
document.querySelectorAll(".explore-card").forEach(card=>card.addEventListener("click",()=>{const target={history:"#timeline",war:"#war",folklore:"#folklore",heritage:"#map"}[card.dataset.filter]||"#timeline";document.querySelector(target).scrollIntoView({behavior:"smooth"})}));
document.getElementById("searchToggle").addEventListener("click",openSearch);
document.getElementById("openSearch").addEventListener("click",openSearch);
document.getElementById("searchClose").addEventListener("click",closeSearch);
document.getElementById("searchOverlay").addEventListener("click",e=>{if(e.target.id==="searchOverlay")closeSearch()});
document.getElementById("searchInput").addEventListener("input",e=>doSearch(e.target.value));
document.getElementById("modalClose").addEventListener("click",closeModal);
document.getElementById("detailModal").addEventListener("click",e=>{if(e.target.id==="detailModal")closeModal()});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mobileNav").classList.toggle("open"));
document.getElementById("allTimeline").addEventListener("click",()=>document.querySelector("#timeline .timeline-wrap").classList.toggle("expanded"));
document.getElementById("warInfo").addEventListener("click",()=>openModal("How the archive labels lore","SOURCE METHOD","The site keeps historical record, oral tradition, later literary memory and legendary material visibly distinct so a visitor can explore without confusing a story's cultural importance with the type of evidence behind it.",[["Green","Documented history / stronger documentary support"],["Ochre","Multiple or traditional accounts"],["Terracotta","Oral folklore / performance tradition"],["Purple","Legendary or supernatural material"]]));
document.getElementById("dynastyAll").addEventListener("click",()=>openModal("Kingdoms & dynasties","DYNASTY ARCHIVE","The full data model is designed to connect each polity with its rulers, capitals, forts, battles, visual identity, literature and source trail.",dynasties.map(x=>[x.name,x.house+" • "+x.capital])));
document.querySelectorAll(".timeline-item").forEach(item=>item.addEventListener("click",()=>{document.querySelectorAll(".timeline-item").forEach(i=>i.classList.remove("active"));item.classList.add("active")}));
document.documentElement.lang="en";
document.getElementById("languageToggle").addEventListener("click",()=>{
  const hi=document.documentElement.lang!=="hi";document.documentElement.lang=hi?"hi":"en";document.getElementById("languageToggle").textContent=hi?"EN":"HI";
  const text=hi?"राजस्थान के इतिहास, युद्ध-कथाओं, लोकगाथाओं, दुर्गों और जीवित परंपराओं को एक इंटरैक्टिव डिजिटल संग्रह में खोजें।":"Explore kingdoms, battles, heroic ballads, folk epics, forts, traditions and the people who carried Rajasthan's stories across generations.";
  document.querySelector(".hero-text").textContent=text;
});
document.getElementById("tryLanguage").addEventListener("click",()=>document.getElementById("languageToggle").click());

let map, baseLayers={};let stateGeoLayer, ridgeLayer;
async function initMap(){
  const el=document.getElementById("historyMap");if(!el||typeof L==="undefined")return;
  map=L.map(el,{zoomControl:false,scrollWheelZoom:true,minZoom:6,maxZoom:10}).setView([26.3,74.8],7);
  L.control.zoom({position:"bottomright"}).addTo(map);
  baseLayers.state=L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19});
  baseLayers.terrain=L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors © OpenTopoMap",maxZoom:17});
  baseLayers.satellite=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles © Esri",maxZoom:18});
  baseLayers.state.addTo(map);
  try{
    const res=await fetch("https://raw.githubusercontent.com/shuklaneerajdev/IndiaStateTopojsonFiles/master/Rajasthan.geojson");
    if(!res.ok)throw new Error("boundary request failed");
    const geo=await res.json();
    stateGeoLayer=L.geoJSON(geo,{style:{color:"#7a241c",weight:1.2,fillColor:"#d5ad72",fillOpacity:.22},onEachFeature:(feature,layer)=>{
      const name=feature.properties?.Dist_Name||"Rajasthan district";
      layer.bindTooltip(name,{sticky:true,opacity:.9});
      layer.on({mouseover:ev=>ev.target.setStyle({fillOpacity:.36,weight:2}),mouseout:ev=>stateGeoLayer.resetStyle(ev.target),click:()=>document.getElementById("mapDetail").innerHTML=`<strong>${name}</strong><p>District geometry loaded from a public Rajasthan state boundary dataset. Connect this district to your historical records in the next data layer.</p>`});
    }}).addTo(map);
    map.fitBounds(stateGeoLayer.getBounds(),{padding:[20,20]});
    document.getElementById("mapStatus").textContent="BOUNDARY LOADED";
  }catch(err){
    document.getElementById("mapStatus").textContent="BASEMAP READY";
    console.warn("Boundary layer unavailable",err);
  }
  ridgeLayer=L.polyline(aravalli,{color:"#8b3e2c",weight:3,opacity:.78,dashArray:"5 6"}).addTo(map);
  ridgeLayer.bindTooltip("Approximate Aravalli ridge alignment",{sticky:true});
  places.forEach(p=>{
    const icon=L.divIcon({className:"history-pin",html:`<span></span><b>${p.name}</b>`,iconSize:[20,20],iconAnchor:[10,10]});
    L.marker([p.lat,p.lng],{icon}).addTo(map).on("click",()=>document.getElementById("mapDetail").innerHTML=`<strong>${p.name}</strong><p>${p.summary}</p><div class="map-tags"><span>${p.era}</span><span>${p.fort}</span></div>`);
  });
}
function swapBase(key){Object.values(baseLayers).forEach(x=>map.hasLayer(x)&&map.removeLayer(x));baseLayers[key].addTo(map);document.querySelectorAll(".map-control").forEach(b=>b.classList.remove("active"));const id={state:"stateView",terrain:"terrainView",satellite:"satelliteView"}[key];document.getElementById(id)?.classList.add("active")}

document.getElementById("stateView").addEventListener("click",()=>map&&swapBase("state"));
document.getElementById("terrainView").addEventListener("click",()=>map&&swapBase("terrain"));
document.getElementById("satelliteView").addEventListener("click",()=>map&&swapBase("satellite"));
initMap();

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){closeSearch();closeModal()}
  if(e.key==="/" && document.activeElement.tagName!=="INPUT" && document.activeElement.tagName!=="TEXTAREA"){e.preventDefault();openSearch()}
  if(e.key==="Enter"){const target=document.activeElement.closest("[data-open],[data-folklore],[data-dynasty]");if(target)target.click()}
});

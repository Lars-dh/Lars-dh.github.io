const terms = [
    ["Desktop", "Persoonlijke computer voor algemeen dagelijks gebruik. Heeft een CPU, RAM, GPU, opslag en randapparatuur. Relatief goedkoop, flexibel uitbreidbaar maar beperkt in schaalbaarheid."],
    ["Server", "Computer die diensten levert aan tientallen tot duizende clients (gebruikers) tegelijk. Moet betrouwbaar zijn 24/7 gebruik, vaak met redundante voedingen, ECC-geheugen en RAID opslag."],
    ["Mainframe", "Zeer krachtige betrouwbare systemen voor massale transactie-verwerkingen. Duizendene gelijktijdigen gebruikers. Denk aan banken, verzekeringen luchtvaar, sectoren waar betrouwbaarheid en schaalbaarheid essentieel zijn. Mainframes zijn extreem robuust en hebben een beschikbaarheid tot 99,999%."],
    ["Supercomputer", "Bestaat uit clusters met duizenden tot miljoenen cores. Worden gebruikt voor wetenschappelijk onderzoek zoals klimaatmodellen, AI-training en kernfysica. Prestaties worden gemeten in FLOP, Floating Point Operations per Second"],
    ["Kwantumcomputer", "Gebasseerd op qubits (kan 0, 1 of beide zijn) ipv bits, gebruikt superpositie en verstengeling wat bepaalde berekeningen exponentieel kan versnellen. Wordt gebruikt om complexe problemen op te lossen die de klassieke computers niet kunnen, cryptografie, optimalisatie, molecuulsimulaties. Momenteel nog in de experimentele fase, maar veelbelovend voor onderzoek en toekomstige toepassingen."],
    ["Minicomputer", "Minicomputer ofwel midrange computer. Tussen een desktop en mainframe in qua rekenkracht. Ontworpen om meerdere gelijktijdige gebruikers aan te kunnen. Was vooral vroeger meer een ding, is intussen grotendeels vervangen door servers."],
    ["CPU", "Zijn de hersenen van de computer. Taken: Instructies ophalen &rarr; Decoderen &rarr; Uitvoeren &rarr; Resultaat wegschrijven.<br>Belangrijke onderdelen: ALU (rekenkundige & logische bewerkingen), CU (coördineert de uitvoering) en Registers (snelle tijdelijke opslag)"],
    ["Registers - CPU", "Snelle tijdelijke opslag;<ul><li>MAR</li><li>MDR</li><li>ACC</li><li>PC</li><li>CIR</li></ul>"],
    ["Ontwikkeling - CPU", "Jaren '90 single core, hogere kloksnelheden.<br>Late jaren '90 superscalar &rarr; meerdere instructies per klokcyclus.<br>2000 hyperthreading (Intel), eerste dual-core CPU's.<br>2010 veel cores, verbeterde out-of-order execution.<br>2020 AI-geoptimaliseerde multi-core CPU."],
    ["Pipelining", "Overlappende instructieverwerking &rarr; hogere efficiëntie."],
    ["Superscalar", "Meerdere instructies parallel uitvoeren."],
    ["Hyperthreading", "1 Fysieke kern werkt als 2 logische cores."],
    ["Multi-core", "Meerdere kernen op één chip."],
    ["Out-of-Order Execution", "Instructies uitvoeren zodra resources beschikbaar zijn."],
    ["Intel", "+: Hyperthreading, energiezuinig, sterke single-core prestaties.<br>-: Hoge prijzen, stagnatie rond 2015.<br>Focus: Efficiëntie, geïntegreerde GPU's."],
    ["AMD", "+: Meer cores/threads, top prijs-prestatie (Ryzen).<br>-: Vroeger zwakke single-thread prestaties (later verbeterd).<br>Focus: Multi-core kracht, open-source support."],
    ["ARM voordelen (long awnser)", `Energiezuinig, ideaal voor smartphones, tablets, laptops en datacenters die efficiëntie nodig hebben.<br>
        Hoge prestaties per watt, moderne ARM-chips halen prestaties die concurreren met Intel/AMD, maar met minder energie.<br>
        Sterke schaalbaarheid, geschikt voor kleine IoT-chips tot supercomputers.<br>
        Integratie (SoC-ontwerp), CPU, GPU, AI-engine, modem en geheugencontroller vaak op één chip &rarr; compact en efficiënt.<br>
        Brede ondersteuning in mobile en cloud, dominant in smartphones en steeds vaker in laptops en servers.<br>
        Licentiemodel, ARM levert IP en fabrikanten kunnen eigen varianten maken &rarr; veel innovatie en diversiteit.`],
    ["ARM voordelen (short awnser)", "Energiezuinig<br>Hoge prestatie pet watt<br>Sterke schaalbaarheid<br>Compact en efficiënt<br>Het licentiemodel zorgt voor veel innovatie en diversiteit"],
    ["ARM nadelen (long awnser)", `Software-compabiliteit, niet alle applicaties draaien native op ARM, zeker in Windows ecosysteem, vaak is er een emulatie nodig wat ten kosten gaat van de prestaties.<br>
        Lagere single-thread performance, Intel en AMD hebebn vaak nog de snelste individuele cores, wat relevant is voor bepaalde legacy-apps en games.<br>
        Minder flexibel voor upgrades, veel ARM chips zijn SoC's (vast geheugen & GPU) en dus niet los uitbreidbaar of vervangbaar.<br>
        Minder ecosysteem in high-end desktops/gaming, x86 (Intel/AMD) blijft dominant in klassieke pc's en veel professionele software.<br>
        Afhankelijk van TSMC/Samsung, de productie van krachtige ARM-chips is sterk gebonden aan geavanceerde nodes, wat leveringsrisico's geeft.`],
    ["ARM nadelen (short awnser)", "Niet alle applicaties draaien native op ARM<br>Lagere single-thread, wat nog relevant is voor legacy apps en games<br>Upgraden gaat minder flexibel<br>Minder ecosysteem, x86 blijf dominant.<br>Gebonden aan geavanceerde node &rarr; leveringsrisico"],
    ["Voorbeelden ARM-processors", "M1, M2, M4 van Apple. Qualcomm Snapdragon series voor servers en datacenters. Exynos-chips van Samsung voor mobile. Nvidia Tegra-processors voor machinelearning."],
    ["Voorbeelden AMD-processors", "Ryzen series voor desktop. EPYC voor servers en datacenters."],
    ["Voorbeelden Intel-processors", "Core iX-reeks, Intel cpu's zijn voornamelijk voor desktop."],
    ["SoC", "System-on-a-chip"],
    ["Thread", "Kleinste uitvoereenheid binnen een proces."],
    ["Multithreading", "Softwermatig meerdere threads per proces."],
    ["Hyperthreading", "Hardwarematig meerdere threads per kern."],
    ["Throughput", "Is de hoeveelheid instructies per tijdseenheid. Hangt af van een aantal factoren:<br>Kloksnelheid<br>Aantal cores<br>Architectuur (OOE, superscalar, etc.)<br>Bottlenecks: geheugen en opslag!"],
    ["Koeling", `Kan op 2 manieren: passief en actief.<br>
        Passieve koeling kan met heatsinks en thermal paste.<br>
        <br>
        Actieve koeling kan op verschillende manier:<br>
        Standaard met luchtkoeling en ventilatoren. (sinds 1990)<br>
        Efficiënter, stiller en populair in high-end systemen is vloeistofkoeling. (vanaf de 2000s en AIO-waterkoeling vanaf de jaren 2010s)<br>
        Peltier, niche en hoog in energieverbruik.<br>
        LN2 extreem enkel voor overklokken.`],
    ["Wet van Moore", "De Wet van Moore stelt dat transistoren verdubbelen elke ±2 jaar. Maar vandaag zit daar vertraging op door de focus op energieberheer en parallelle verwerking. Hogere kloksnelheden zorgen namelijk voor warmte en meer energieverbruik, de oplossing ligt hem in het multi-core architectuur ipv in de kloksnelheden."],
    ["TDP", "Thermal Design Power, maximale warmte 'W' die CPU kan afgeven bij belasting. Dit bepaalt de koelingsvereisten. Hogere TDP is vaak hogere prestaties maar meer koeling is vereist.<br>Niet gelijk aan stroomverbruik! CPU kan meer gebruiken met boost-technologie (voorbeeld Intel i7-12700K heeft 125W en AMD Ryzen 9 heeft 105W maar kan toch hoger pieken)."],
    ["RAM", "Random Acces Memory, werkgeheugen van een computer. Slaat tijdelijk gegevens en programmma's op die de processor actief gebruikt."],
    ["Eigenschappen RAM", "Volatiliteit, Ram is vluchtig geheugen, alle gegevens gaan verloren bij het uitschakelen.<br>Snelheid, RAM is veel sneller dan SSD's of harde schijven.<br>Random acces, directe toegang tot elke geheugencel zonder sequentieel lezen."],
    ["Werking RAM", "Bestaat uit een transistor en een condensator (bij DRAM) = geheugencel. Elke geheugencel bevat 1bit. Data schrijven of lezen gebeurt door een specifieke rij en kolom van het geheugen te selecteren."],
    ["Soorten RAM", "Dynamic RAM (DRAM)<br>Static RAM (SRAM)<br>Synchronous DRAM (SDRAM)<br>Double Data Rate SDRAM (DDR SDRAM)<br>Videao RAM (VRAM)<br>Non-Volatile RAM (NVRAM)"],
    ["DRAM", `Basis RAM voor opslag het hoofdwerkgeheugen. De condensator moet regelmatig ververst worden.<br>
        +: Grootte per chip, goedkoop<br>
        -: Langzamer dan SRAM`],
    ["SRAM", "Wordt gebruikt voor snelle CPU-caching (L1, L2, L3). Flip-flops slaan de data op, geen verversing nodig.<br>+: Zeer snel en stabiel<br>-: Duur, neemt meer ruimte in"],
    ["SDRAM", `Synchroon met CPU-klok. Wordt gebruikt in moderne computers.<br>
        +: Sneller dan de gewone DRAM<br>
        -: Toch nog langzamer dan SRAM`],
    ["DDR SDRAM", "Verbeteren de snelheid en efficiëntie door overdrachtsnelheid te verdubbelen door data op op- en neergaande klokflank te versturen. Versies: DDR2, DDR3, DDR4 en DDR5 (huidige versie)."],
    ["VRAM", "Speciaal RAM voor grafische kaarten (GPU) en is dual-ported. Wordt vooral gebruikt voor 3D-modellering, grafische verwerking en gaming."],
    ["NVRAM", "Voor permanente opslag, behoudt data zonder stroom. Wordt gebruikt in BIOS-instellingen en embedded systemen."],
    ["Interne opslag", "Het geheugen van een computer dat permanent data bewaard. Belangrijke eigenschappen;<br>Niet vluchtig, gegevens blijven bewaard.<br>Capaciteit, opslag is meestal veel groter dan RAM.<br>Snelheid, afhankelijk van het type opslagmedium."],
    ["PATA", "Parallel ATA, oude standaard voor harde schijven en CD-rom's die gebruik maakt van brede lintkabel voor dataoverdracht. Vooral bij oude desktops en laptops voor HDD.<br>Snelheid: tot 133MB/s<br>+: Was goedkoop en breed ondersteund.<br>-: Langzaam, weinig flexibel en grote kabels."],
    ["SATA", `Serial ATA, moderne interface voor harde schijven en SSD's gebruikt smallere kabels en seriële overdracht. Wordt gebruikt bij HDD's, SSD's en optische schijven.<br>
        Snelheid: SATAI 1.5Gb/s, SATA II 3Gb/s, SATA III 6Gb/s<br>
        +: Sneller dan PATA, kleinere kabels, hot-swappable<br>
        -: Beperkt door SATA-brandbreedte`],
    ["SSD", "Solid State Drive, wordt gebruikt voor besturingsystemen, progromma's en high-performance opslag. Maakt gebruik van flashgeheugen, NAND, in plaats van draaiende schijven.<br>+: Zeer snel, stil en geen bewegende delen<br>-: Duurder per GB dan HDD's, slijtage na veel schrijfcycli"],
    ["M.2 SSD", `Fysieke vormfactor voor SSD's, kan SATA of NVMe ondersteunen. Snelle opslag in laptops en desktops, gaming en werkstations.<br>
        +: Zeer compact, hoge snelheden (vooral NVMe)<br>
        -: Duur, sommige moederborden hebben beperkte M.2-poorten`],
    ["NVMe", "Non-Volatile Memory express, Interface voor SSD's die PCIe-bus gebruikt. Speciaal ontworpen voor flashgeheugen. High-performance opslag, professionele en gaming toepassing.<br>+: Veel sneller dan SATA-SSD en lage latency<br>-: Duurder dan SATA-SSD, voor compabiliteit is PCIe/M.2-slot vereist"],
    ["SSHD", `Hybrid Drives, combinatie van HDD en een kleine SSD-cache. Consumentencomputers die snelheid en capaciteit willen combineren.<br>
        +: Snellere toegang tot veelgebruikte data, grotere opslagcapaciteit tegen lagere prijs<br>
        -: Nog steeds beperkt door de mechanische HDD voor grote data`],
    ["GPU", "Graphics Processing Unit, Grafische kaart, hardwarecomponent die beelden, video en 3D-grafiek verwerkt en naar het beeldscherm stuurt.<br>Belangrijke functies:<br>Renderen van 2D en 4D graphics.<br>Afhandelen van grafisch intensieve taken zoals games, CAD-software en videoverwerking.<br>Ontlast de CPU bij grafische berekeningen.<br><br>Belangrijke onderdelen:<br>GPU Chip, het hart van de kaart, verwerkt grafische data en berekeningen.<br>VRAM, slaat tijdelijke grafische data op zoals texturen en framebuffers.<br>Koeling, ventilator of heatsink om oververhitting te voorkomen.<br>PCIe-interface, verbindt de kaart met het moederbord.<br>Uitgangen, HDMI, DisplayPort, DVI, VGA voor monitoren."],
    ["Geïntegreerde GPU", `GPU geïntegreerd in CPU of chipset. Gebruikt bij kantoorcomputers, laptops, licht multimedia-gebruik.<br>
        +: Goedkoop, energiezuinig, geschikt voor standaargebruik<br>
        -: Beperkte prestaties, gedeeld geheugen met RAM`],
    ["Dedicated GPU", `Discrete GPU, zelfstandige kaart met eigen RAM, gebruitk bij gaming pc's, werkstations, video- en 3D-bewerking.<br>
        +: Hoge prestaties, grote VRAM capaciteit en geschikt voor gamin en professionele software<br>
        -: Duurder, verbruikt meer stroom, extra koeling nodig`],
    ["Workstation GPU", `Professionele GPU's (zoals NVIDIA Quadro of AMD Radeon Pro) geoptimaliseerd voor CAD, 3D-modellering en wetenschappelijke berekeningen (AI, simulaties).<br>
        +: Precisie, stabiliteit, gecertificeerde drivers voor professionele software<br>
        -: Zeer duur, niet optimaal voor games`],
    ["VRAM types", `GDDR5/GDDR5X, veelgebruikt, geschikt voor gaming en stadaard grafische taken.<br>
        GDDR6.GDDR6X, sneller, energie-efficienter, gebruikt in moderne high-end kaarten.<br>
        HBM/HMB2, High Bandwidth Memory, zeer hoge bandbreedte, gebruikt in high-performance en professionele kaarten.`],
    ["Grafische interfaces", `De meest moderne kaarten gebruiken PCI Express (PCIe) voor aansluiting op het moederbord.<br>
        PCIe x16, standaard voor grafische kaarten biedt maximale bandbreedte<br>
        Bandbreedte, PCIe 3.0 x16: 16GB/s, PCIe 4.0 x16: 32GB/s, PCIe 5.0 x16: 64GB/s<br>
        Op afbeelding met meerdere PCIe is de PCIe x16 de tweede langste.`],
    ["Uitgangen", "Van laagste naar hoogste ondersteunende resolutie:<br>VGA tot 2048x1536 verouderd werkt nog analoog<br>DVI tot 2560x1600 monitoren en projectoren<br>HDMI (ook audio) 4K/60Hz+ TV's en monitoren<br>DisplayPort 8K/60Hz+ gaming en professionele monitoren"],
    ["Snellheidsfactoren van een GPU", "CUDA/ Stream Processors, hoeveel kleine verwerkingsuints de GPU heeft.<br>Kloksnelheid, hoe snel de GPU berekeningen uitvoert (vb MHz of GHz).<br>VRAM-capaciteit en snelheid, hoeveel grafische data tegelijk opgeslagen kan worden.<br>Busbreedte, breedte van de interface tussen GPU en VRAM (vb 256-bit, 512-bit)."],
    ["Moederbord", "Het centrale circuitbord van een computer. Het verbindt alle componenten zodat ze met elkaar kunnen communiceren.<br>Belangrijke functies:<br>Fysieke basis en voedingsvoorziening voor componenten<br>Communicatie via bussen en interfaces<br>Bevat sloten en poorten voor uitbreidingen"],
    ["Moederbordformaten", `Mini-ITX 170 x 170 zeer compact, 1 PCIe-slot, gebruikt bij HTPC, kleine systemen.<br>
        Micro-ATX 244 x 244 compact, minderuitbreidingsslots, gebruikt bij kleine desktop-PC's.<br>
        ATX 305 x 244 standaar, veel uitbreidingsslots, gebruikt bij desktop en workstations.<br>
        E-ATX 305 x 330 extra groot, veel RAM- en PCIe-slots, gebruikt bij high-end workstations, servers.`],
    ["Front-Side Bus", "FSB verbindt CPU met Northbridge (ouderwetse architecturen). Wordt vervangen door moderne point-to-point verbindingen zoals QuickPath of Direct Media Interface.<br>Snelheid: Afhankelijk van CPU en chipset, typisch 400-1600 MHz."],
    ["PCI", "Peripheral Component Interconect is voor universele uitbreiding voor kaarten (geluid, netwerk, grafische kaarten). Verouderd, wordt vaak vervangen door PCIe.<br>Snelheid: 33-66 MHz, 32-bit of 64-bit busbreedte."],
    ["PCIe", "PCI Express, seriële point-to-point bus voor hoge-snelheid uitbreidingen. Gebruikt voor grafische kaarten, NVME adapters, netwerkkaarten.<br>Snelheid: Van 250 MB/s tot > 64GB/s (van PCIe 1.0 t/m PCIe 5.0 x16)"],
    ["AGP", "Accelerated Graphics Port, specifieke bus voor grafische kaarten, ouder dan PCIe en bijna volledig vervangen door PCIe.<br>Snelheid: Tot 2.1 GB/s (AGP 8x)"],
    ["Memory bus", "Verbindt RAM met CPU of Northbridge. Snelheid afhankelijk van RAM-type en generatie: DDR, DDR4, DDR5."],
    ["SATA bus", "Verbindt de opslag (HDD en SSD) met chipset. Seriële verbinding en hot-swapable.<br>Snelheid: 1.5-6G b/s (SATA III)"],
    ["Externe apparaten met moederbord verbinden", "Kan via USB, Thunderbolt en andere I/O buses. Hot-plug, externe data en voeding.<br> Snelheid afhankelijk van type:<br>USB 2.0; 480 Mb/s<br>USB 3.x; 5-20Gb/s<br>Thunderbolt 3/4; 40Gb/s"],
    ["Chipsets", "Bepalen welke CPU's, RAM, opslag en sloten worden ondersteund. Ze verdelen de functies tussen:<br>Northbridge, CPU, RAM en grafische bus (ouder).<br>Southbridge, I/O apparaten, opslag, PCI en USB.<br>Modern, vaak geïntegreerd in één PCH (Platform Controller Hub)"],
    ["Slottypes", "<ul><li>PCI, Oude netwerk- en geluidskaarten</li><li>PCIe x1, Netwerk- en geluidskaarten</li><li>PCIe x4, Snellere uitbreidingen</li><li>PCIe x8, RAID-kaarten, netwerkkaarten</li><li>PCIe x16, Grafische kaarten</li><li>M.2, SSD's en WiFi-kaarten</li></ul>"]
];

terms.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
});

const elList = document.getElementById('term-list');
const counterE = document.getElementById('teller');
const elUitleg = document.getElementById('uitleg');
const elTerm = document.getElementById('term');

var term = terms[0];
var usedIndexes = [];
var clicks = 0;
var isExplanationVisible = false;

var currentIndex = 0;

const isDrawn = i => {
    var index = 0;
    var found = false;
    while (index < usedIndexes.length && !found) {
        if (usedIndexes[index] === i) {
            found = true;
        }
        index++;
    }
    return found;
};

const generateTerm = () => {
    let newIndex;
    if (clicks === terms.length) {
        clicks = 0;
        usedIndexes = [];
        counterE.textContent = `(${clicks} / ${terms.length})`;
    }
    do {
        newIndex = Math.floor(Math.random() * terms.length);
    } while (isDrawn(newIndex));
    currentIndex = newIndex;
    usedIndexes.push(currentIndex);
    clicks++;
    renderCard();
};

const showAnswer = () => {
    const answer = term[1];
    elUitleg.innerHTML = answer;
    isExplanationVisible = true
};

const emptyAll = () => {
    elTerm.textContent = "Term:";
    elUitleg.textContent = "";
};

const reset = () => {
    clicks = 0;
    usedIndexes = [];
    // emptyAll();
    counterE.textContent = `(${clicks} / ${terms.length})`;
    generateTerm();
};

const renderList = () => {
    elList.innerHTML = '';
    terms.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-item'; //nog een class voor opmaak toekennen
        li.textContent = item[0];
        li.dataset.index = index;

        li.addEventListener('click', () => {
            currentIndex = index;
            isExplanationVisible = false;
            renderCard();
            updateActiveListState();
            showAnswer();
        });

        elList.appendChild(li);
    });
    updateActiveListState()
};

const renderCard = () => {
    term = terms[currentIndex];
    emptyAll();
    const vraag = term[0];
    elTerm.textContent = "Term: " + vraag;
    counterE.textContent = `(${clicks} / ${terms.length})`;
    isExplanationVisible = false;
};

const updateActiveListState = () => {
    const items = elList.querySelectorAll('li');
    items.forEach((li) => {
        const idx = parseInt(li.dataset.index);
        if (idx === currentIndex) {
            li.classList.add('active');
            li.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            li.classList.remove('active');
        }
    });
};

//Initialiseren
counterE.textContent = `(${clicks} / ${terms.length})`;
renderList();
generateTerm();
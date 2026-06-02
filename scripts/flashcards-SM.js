const termsHW = [
    ["Desktop", "Persoonlijke computer voor algemeen dagelijks gebruik. Heeft een CPU, RAM, GPU, opslag en randapparatuur. Relatief goedkoop, flexibel uitbreidbaar maar beperkt in schaalbaarheid."],
    ["Server", "Computer die diensten levert aan tientallen tot duizende clients (gebruikers) tegelijk. Moet betrouwbaar zijn 24/7 gebruik, vaak met redundante voedingen, ECC-geheugen en RAID opslag."],
    ["Mainframe", "Zeer krachtige betrouwbare systemen voor massale transactie-verwerkingen. Duizendene gelijktijdigen gebruikers. Denk aan banken, verzekeringen luchtvaar, sectoren waar betrouwbaarheid en schaalbaarheid essentieel zijn. Mainframes zijn extreem robuust en hebben een beschikbaarheid tot 99,999%."],
    ["Supercomputer", "Bestaat uit clusters met duizenden tot miljoenen cores. Worden gebruikt voor wetenschappelijk onderzoek zoals klimaatmodellen, AI-training en kernfysica. Prestaties worden gemeten in FLOP, Floating Point Operations per Second"],
    ["Kwantumcomputer", "Gebasseerd op qubits (kan 0, 1 of beide zijn) ipv bits, gebruikt superpositie en verstengeling wat bepaalde berekeningen exponentieel kan versnellen. Wordt gebruikt om complexe problemen op te lossen die de klassieke computers niet kunnen, cryptografie, optimalisatie, molecuulsimulaties. Momenteel nog in de experimentele fase, maar veelbelovend voor onderzoek en toekomstige toepassingen."],
    ["Minicomputer", "Minicomputer ofwel midrange computer. Tussen een desktop en mainframe in qua rekenkracht. Ontworpen om meerdere gelijktijdige gebruikers aan te kunnen. Was vooral vroeger meer een ding, is intussen grotendeels vervangen door servers."],
    ["CPU", "Zijn de hersenen van de computer. Taken: Instructies ophalen &rarr; Decoderen &rarr; Uitvoeren &rarr; Resultaat wegschrijven.<br>Belangrijke onderdelen: ALU (rekenkundige & logische bewerkingen), CU (coördineert de uitvoering) en Registers (snelle tijdelijke opslag)"],
    ["Registers - CPU", "Snelle tijdelijke opslag;<ul><li>MAR</li><li>MDR</li><li>ACC</li><li>PC</li><li>CIR</li></ul>"],
    ["Ontwikkeling - CPU", "Jaren '90 single core, hogere kloksnelheden.<br>Late jaren '90 superscalar &rarr; meerdere instructies per klokcyclus.<br>2000 hyperthreading (Intel), eerste dual-core CPU's.<br>2010 veel cores, verbeterde out-of-order execution.<br>2020 AI-geoptimaliseerde multi-core CPU."],
    ["Pipelining - CPU", "Overlappende instructieverwerking &rarr; hogere efficiëntie."],
    ["Superscalar - CPU", "Meerdere instructies parallel uitvoeren."],
    ["Hyperthreading - CPU", "1 Fysieke kern werkt als 2 logische cores."],
    ["Multi-core - CPU", "Meerdere kernen op één chip."],
    ["Out-of-Order Execution - CPU", "Instructies uitvoeren zodra resources beschikbaar zijn."],
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
    ["Thread - CPU", "Kleinste uitvoereenheid binnen een proces."],
    ["Multithreading - CPU", "Softwermatig meerdere threads per proces."],
    ["Hyperthreading - CPU", "Hardwarematig meerdere threads per kern."],
    ["Throughput - CPU", "Is de hoeveelheid instructies per tijdseenheid. Hangt af van een aantal factoren:<br>Kloksnelheid<br>Aantal cores<br>Architectuur (OOE, superscalar, etc.)<br>Bottlenecks: geheugen en opslag!"],
    ["Koeling - CPU", `Kan op 2 manieren: passief en actief.<br>
        Passieve koeling kan met heatsinks en thermal paste.<br>
        <br>
        Actieve koeling kan op verschillende manier:<br>
        Standaard met luchtkoeling en ventilatoren. (sinds 1990)<br>
        Efficiënter, stiller en populair in high-end systemen is vloeistofkoeling. (vanaf de 2000s en AIO-waterkoeling vanaf de jaren 2010s)<br>
        Peltier, niche en hoog in energieverbruik.<br>
        LN2 extreem enkel voor overklokken.`],
    ["Wet van Moore - CPU", "De Wet van Moore stelt dat transistoren verdubbelen elke ±2 jaar. Maar vandaag zit daar vertraging op door de focus op energieberheer en parallelle verwerking. Hogere kloksnelheden zorgen namelijk voor warmte en meer energieverbruik, de oplossing ligt hem in het multi-core architectuur ipv in de kloksnelheden."],
    ["TDP - CPU", "Thermal Design Power, maximale warmte 'W' die CPU kan afgeven bij belasting. Dit bepaalt de koelingsvereisten. Hogere TDP is vaak hogere prestaties maar meer koeling is vereist.<br>Niet gelijk aan stroomverbruik! CPU kan meer gebruiken met boost-technologie (voorbeeld Intel i7-12700K heeft 125W en AMD Ryzen 9 heeft 105W maar kan toch hoger pieken)."],
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
    ["PATA - Opslag", "Parallel ATA, oude standaard voor harde schijven en CD-rom's die gebruik maakt van brede lintkabel voor dataoverdracht. Vooral bij oude desktops en laptops voor HDD.<br>Snelheid: tot 133MB/s<br>+: Was goedkoop en breed ondersteund.<br>-: Langzaam, weinig flexibel en grote kabels."],
    ["SATA - Opslag", `Serial ATA, moderne interface voor harde schijven en SSD's gebruikt smallere kabels en seriële overdracht. Wordt gebruikt bij HDD's, SSD's en optische schijven.<br>
        Snelheid: SATAI 1.5Gb/s, SATA II 3Gb/s, SATA III 6Gb/s<br>
        +: Sneller dan PATA, kleinere kabels, hot-swappable<br>
        -: Beperkt door SATA-brandbreedte`],
    ["SSD - Opslag", "Solid State Drive, wordt gebruikt voor besturingsystemen, progromma's en high-performance opslag. Maakt gebruik van flashgeheugen, NAND, in plaats van draaiende schijven.<br>+: Zeer snel, stil en geen bewegende delen<br>-: Duurder per GB dan HDD's, slijtage na veel schrijfcycli"],
    ["M.2 SSD - Opslag", `Fysieke vormfactor voor SSD's, kan SATA of NVMe ondersteunen. Snelle opslag in laptops en desktops, gaming en werkstations.<br>
        +: Zeer compact, hoge snelheden (vooral NVMe)<br>
        -: Duur, sommige moederborden hebben beperkte M.2-poorten`],
    ["NVMe - Opslag", "Non-Volatile Memory express, Interface voor SSD's die PCIe-bus gebruikt. Speciaal ontworpen voor flashgeheugen. High-performance opslag, professionele en gaming toepassing.<br>+: Veel sneller dan SATA-SSD en lage latency<br>-: Duurder dan SATA-SSD, voor compabiliteit is PCIe/M.2-slot vereist"],
    ["SSHD - Opslag", `Hybrid Drives, combinatie van HDD en een kleine SSD-cache. Consumentencomputers die snelheid en capaciteit willen combineren.<br>
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
    ["Uitgangen - GPU", "Van laagste naar hoogste ondersteunende resolutie:<br>VGA tot 2048x1536 verouderd werkt nog analoog<br>DVI tot 2560x1600 monitoren en projectoren<br>HDMI (ook audio) 4K/60Hz+ TV's en monitoren<br>DisplayPort 8K/60Hz+ gaming en professionele monitoren"],
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
    ["Slottypes", "<ul><li>PCI, Oude netwerk- en geluidskaarten</li><li>PCIe x1, Netwerk- en geluidskaarten</li><li>PCIe x4, Snellere uitbreidingen</li><li>PCIe x8, RAID-kaarten, netwerkkaarten</li><li>PCIe x16, Grafische kaarten</li><li>M.2, SSD's en WiFi-kaarten</li></ul>"],
    ["BIOS", "Basic Input Output System"],
    ["UEFI", "Unified Extensible Firmware Interface"]
];

const termsWin = [
    ["OS ", "Operating System, besturingsysteem. Het is de software die als eerste wordt geladen na het opstarten van de computer. (Op de firmware na). Het beheert de hardware en software resources van een computersysteem. Het fungeert als een brug tussen de hardware en de gebruikersapplicaties."],
    ["Belangrijke taken OS", "<ul><li>Hardwarebeheer</li><li>Process Management</li><li>File Management</li><li>Beveiliging</li><li>Gebruikersinterface</li><li>Netwerkbeheer</li></ul>"],
    ["Hardware Management - OS", `<ul><li><b>CPU Management</b>, scheduling. Toewijzen van processortijd aan verschillende taken en processen.</li><li><b>Memory Management</b>, memory allocation. Toewijzen en vrijgeven van geheugen aan programma's en het beschermen van geheugenruimte tegen conflicten.</li><li><b>Device Management</b>, device drivers. Beheren van in- en uitvoerapparaten zoals printers, toetsenborden, muizen en harde schijven.</li><li><b>Storage Management</b>, file systems. Organiseren en beheren van bestanden en mappen op opslagapparaten.</li></ul>`],
    ["Process Management - OS", `<ul><li><b>Creëren</b> en <b>beëindigen</b> van <b>processen</b> (programma's in uitvoering).</li><li>Plannen van de <b>volgorde</b> waarin processen worden uitgevoerd.</li><li>Synchroniseren en communiceren tussen processen. (=Inter-Process Communication).</li></ul>`],
    ["File Management", `<ul><li>Organiseren van bestanden en mappen in een <b>hiërarchische</b> structuur.</li><li>Toegang verlenen tot bestanden en mappen op basis van <b>gebruikersrechten</b>.</li><li>Beheren van de opslagruimte op de harde schijf.</li></ul>`],
    ["Beveiliging - OS", `<ul><li>Authenticatie van gebruikers (wachtwoorden, bimetrie).</li><li>Autorisatie van toegang tot resources (bestanden, mappen, applicaties).</li><li>Bescherming tegen malware en andere bedreigingen (Firewall, antivirus).</li></ul>`],
    ["Gebruikersinterface - OS", `Een interface waarmee de gebruikers kunnen communiceren met de computer (GUI of Command Line).`],
    ["Netwerkbeheer - OS", `<ul><li>Ondersteuning voor netwerkprotocollen (TCP/IP, DNS, DHCP).</li><li>Delen van resources over het netwerk (bestanden, printers).</li></ul>`],
    ["Belangrijke besturingssystemen", `<ul><li>Windows</li><li>Linux</li><li>MacOS</li><li>Android</li><li>iOS</li><li>Chome OS</li><li>Unix</li><li>FreeBSD</li><li>Embedded Operating Systems</li></ul>`],
    ["Windows - OS", "Geschiedenis:<br><ul><li><b>1985: Windows 1.0</b>: Een grafische schil op <b>MS-DOS</b>.</li><li><b>1990: Windows 3.0</b>: Verbeterde GUI, multitasking en geheugenbeheer.</li><li><b>1995: Windows 95</b>: Volledig 32-bit OS met nieuwe GUI en Plug-and-Play.</li><li><b>1998: Windows 98</b>: Verbeterde internetintegratie en hardware-ondersteuning.</li><li><b>2000: Windows 2000</b>: Gebaseerd op de NT-kernel, gericht op zakelijke gebruikers.</li><li><b>2001: Windows XP</b>: Een stabiel en populair OS voor zowel thuisgebruikers als bedrijven.</li><li><b>2006: Windows Vista</b>: Nieuwe GUI (Aero) en verbeterde beveiliging, maar minder populair vanwege prestatieproblemen.</li><li><b>2009: Windows 7</b>: Verbeterde prestaties en gebruikerservoaring ten opzichte van Vista.</li><li><b>2012: Windows 8</b>: Nieuwe interface gericht op touchscreens, wisselend ontvangen.</li><li><b>2015: Windows 10</b>: Universeel OS voor desktops, laptops, tablets en smartphones met continue updates.</li><li><b>2021: Windows 11</b>: Nieuwe gebruikersinterface, verbeterde prestaties en focus op gaming en productiviteit.</li></ul>"],
    ["Linux - OS", "Ontwikkeld door <b>Linux Torvalds</b> als een open-source alternatief voor <b>MINIX</b>. De Linux Kernel gecombineerd met <b>GNU tools en libraries</b> om een compleet OS te vormen (=GNU project). Verschillende distro's die gekend zijn: Debian, Ubuntu, Fedora, Red Hat en SUSE.<br>Kenmerken van Linux: <ul><li><b>Open-source</b>, de broncode is vrij beschikbaar en kan worden aangepast.</li><li><b>Flexibel</b>, kan worden gebruikt als desktop, server, embedded systemen en supercomputers.</li><li><b>Stabiel en veilig</b>, bekend om zijn stabiliteit en beveiliging.</li></ul>"],
    ["MacOS - OS", "Geschiedenis:<br><ul><li><b>1984: Macintosh OS (system1)</b>: De eerste GUI-gebaseerde OS voor personal computers.</li><li><b>1997: Mac OS 8</b>: Verbeterde stabiliteit en prestaties.</li><li><b>1999: Mac OS 9</b>: Laatste versie van het klassieke Mac OS.</li><li><b>2001: Mac OS X 10.0 (Cheetah)</b>: Gebaseerd op NeXTSTEP, met een moderne GUI en Unix-basis.</li><li><b>2007: MacOS 10.5 (Leopard)</b>: Verbeterde beveiliging en nieuwe functies zoals Time Machine.</li><li><b>2011: MacOS 10.7 (Lion)</b>: Integratie van functies van iOS (het OS voor iPhones en iPads).</li><li><b>2016: MacOS 10.12 (Sierra)</b>: Verbeterde Integratie met Siri en iCloud.</li><li><b>2020: MacOS 11 (Big Sur)</b>: Nieuwe interface en ondersteuning voor Apple Silicon (eigen processors).</li></ul><br>Kenmerken: <ul><li><b>Gebruiksvriendelijke</b> interface, bekend om zijn eenvoud en intuïtiviteit.</li><li><b>Stabiliteit</b>, gebouwd op een Unix-basis voor stabiliteit.</li><li><b>Integratie</b>, naadloze integratie met Apple hardware en services.</li><li><b>Beveiliging</b>, sterke beveiligingsfuncties.</li></ul>"],
    ["Android - OS", "Een mobiel besturingssysteem gebaseerd op de Linux kernel, ontwikkeld door Google. Gebruikt op smartpohones, tablets, smartwatches en andere apparaten."],
    ["iOS - OS", "Het mobiele OS van Apple voor iPhones, iPads en iPod Touch. Bekend voor gebruiksvriendelijkheid en integratie met het Apple ecosysteem."],
    ["Chrome OS - OS", "Een lichtgewicht OS van Google ook gebaseerd op de Linux kernel. Vooral voor Chromebooks en webapps."],
    ["Unix - OS", "Een familie van OS die bekend staan voor <b>stabiliteit</b> en <b>flexibiliteit</b>. Vb: Solaris, HP-UX, AIX."],
    ["FreeBSD - OS", "Open-source Unix-achtig OS. Stabiel en uitgebreide netwerkfuncties."],
    ["Embedded OS - OS", "OS ontworpen voor specifieke hardeware-apparaten, zoals auto's, huishoudelijke apparaten en industriële machines. Vb: VxWorks, QNX en FreeRTOS."],
    ["Bootprocedure", "<ol><li><b>POST</b>, Power-On Self-Test</li><li><b>Opstartapparaten</b> initialiseren</li><li><b>Bootloader</b> laden</li><li><b>OS</b> laden</li><li><b>Windows</b> initialisatie</li><li>Windows 11 is <b>geladen</b></li></ol>"],
    ["POST", "Stappen van de POST:<ol><li><b>Start</b> het moederbord krijgt stroom door indrukken aan-/uit-knop.</li><li><b>BIOS</b> of <b>UEFI initialisatie</b>, de chipset van het moederbord activeert de BIOS of UEFI.</li><li><b>POST</b>, de BIOS/UEFI voert een reeks test uit om te controleren of de hardware correct functioneert: <ul><li>Controle van CPU</li><li>Controle van RAM</li><li>Controle van GPU</li><li>Controle van andere essentiële hardware-componenten</li><li>Initialisatie hardware</li></ul></li><li><b>Foutafhandeling</b>, detectie van fouten &rarr; weergeven of opstartproces stoppen.</li><li><b>Succes POST</b>, alle test succesvol &rarr; volgende stap.</li></ol>"],
    ["Opstartapparaten initialiseren", "<ul><li><b>Detectie</b> van opstartapparaten, de BIOS/UEFI zoekt naar opstartapparaten (harde schijven, SSD's, USB-sticks of netwerklocaties).</li><li><b>Boot order</b>, de opstartvolgorde, vooraf ingesteld zodat de BIOS/UEFI kan bepalen vanaf welk apparaat moet worden opgestart. Boot order kan gewijzigd worden in BIOS/UEFI-instellingen.</li><li><b>Selctie</b> opstartapparaat, het eerste opstartapparaat in de volgorde wordt geselecteerd.</li></ul>"],
    ["Boatloader laden", "<ul><li>MBR of GPT:<ul><li><b>MBR</b>, Master Boot Record, zijn de eerste 512 bytes die de BIOS inleest van de schijf. Deze bevat de boatloader en de partitietabel.</li><li><b>GPT</b>, GUID Partition Table, zorgt ervoor dat de EUFI naar de ESP, EFI System Partition, zoekt. Deze bevat de boatloaders, drivers en andere hulpprogramma's.</li></ul></li><li><b>Bootloader</b> is een klein programma dat verantwoordelijk si voor het laden van het OS. <b>Windows Boot Manager</b> (bootmgr) is de bootloader van Windows, deze bevindt zich in de ESP van de GPT of de MBR op de schijf.</li><li>De bootloader wordt in het <b>geheugen</b> geladen en <b>uitgevoerd</b>.</li></ul>"],
    ["Besturingssysteem laden", "<ul><li><b>Bootmgr</b> verschijnt of keuzemenu indien meerdere OS geïnstalleerd.</li><li><b>Kernel</b> (Windows) laden door bootloader en essentiële systeemdrivers in het geheugen. Windows-kernel = <b>ntoskrnl.exe</b>.</li><li><b>Hardware</b> initialisatie door de kernel en die creëert de basisstructuren die nodig zijn voor het besturingssysteem.</li></ul>"],
    ["Windows initialisatie", "<ul><li><b>Windows Services</b> worden gestart door de kernel, die leveren essentiële functies (netwerkbeheer, apparaatbeheer en beveiliging).</li><li>De <b>aanmeldingsprompt</b> verschijnt, de gebruiker voert gebruikersnaam en wachtwoord in (= <b>gebruikersaanmelding</b>).</li><li> <b>Gebruikersprofiel</b> wordt gelanden inclusief instellingen, bureaublad en applicaties.</li>Windows 11 is nu geladen, het bureaublad wordt weergegeven en de gebruiker kan beginnen met het gebruik van de computer.</ul>"],
    ["MBR VS GPT", "<table><thead><tr><th>Kenmerk</th><th>BIOS</th><th>UEFI</th></tr></thead><tbody><tr><td>Interface</td><td>Tekstgebaseerd</td><td>Grafisch</td></tr><tr><td>Opstartmethode</td><td>MBR</td><td>GPT</td></tr><tr><td>Ondersteuning</td><td>Beperkte ondersteuning voor grote schijven</td><td>Ondersteuning voor grote schijven</td></tr><tr><td>Beveiliging</td><td>Geen ingebouwde beveiligingsfuncties</td><td>Secure Boot</td></tr><tr><td>Snelheid</td><td>Langzamer</td><td>Sneller</td></tr><tr><td>Drivers</td><td>BIOS-interrupts</td><td>EUFI-drivers</td></tr></tbody></table>"],
    ["Legacy Mode", "CSM, <b>Compatibility Support Module</b>, Emuleert de BIOS-functionaliteit op een UEFI-systeem. Ondersteunt oudere besturingssystemen of hardware die geen UEFI ondersteunen."],
    ["Security Mode", "<b>Secure Boot</b> is een beveiligingsfunctie van UEFI die ervoor zorgt dat alleen vertrouwde software tijdens het opstartproces wordt geladen. Vereist dat de hardware, firmware en het OS Secure Boot ondersteunen (ondertekend door vertrouwde autoriteit). Het helpt beschermen tegen malware en rootkits."],
    ["Opstartprocedure in MBR", "De opstartprocedure in Legacy Mode:<ol><li><b>POST</b> initialisatie.</li><li><b>MBR</b> laden van de opstartschijf door de BIOS.</li><li><b>Bootloader</b> wordt uitgevoerd (meestal NTLDR voor oudere Windows-versies of bootmgr voor nieuwe versies).</li><li><b>Besturingssysteem</b> laden, de bootloader laadt de <b>Windows-kernel</b> en <b>systeemdrives</b>.</li><li><b>Windows</b> wordt <b>geïnitialiseerd</b> en de gebruiker kan zich aanmelden.</li></ol>"],
    ["Opstartprocedure in GPT", "De opstartprocedure in UEFI Mode met Secure Boot<ol><li><b>POST</b> initialisatie.</li><li>De <b>UEFI Firmware</b> wordt geïnitialiseerd.</li><li><b>Secure Boot</b> laat de UEFI firmware de bootloader controleren of die ondertekend is door vertrouwde autoriteit.</li><li>De UEFI firmware laadt <b>EFI System Partition (ESP)</b> van de opstartschijf.</li><li>De <b>Windows Boot Manager</b> (bootmgr.efi) wordt geladen vanuit de ESP.</li><li><b>Besturingssysteem</b> laden, de bootloader laadt de <b>Windows-kernel</b> en <b>systeemdrives</b>.</li><li><b>Windows</b> wordt <b>geïnitialiseerd</b> en de gebruiker kan zich aanmelden.</li></ol>"],
    ["WinRE", "Windows Recovery Environment, Windows Herstelomgeving. Voor het oplossen van algemen opstartproblemen kan gebruik gemaakt worden van de WinRE.<br>Toegang:<ul><li>Start de computer op vanaf een Windows installatiemedium (USB of DVD).</li><li><u>OF</u> Forceer een herstart, door de computer uit te zetten tijdens het opstarten, als de computer niet normaal opstart (mogelijks 3x uit te voeren).</li><li>Klik door naar 'Troubleshoot' &rarr; 'Advanced Options'.</li></ul><br>Opties:<ul><li><b>Opstartherstel/ Startup Repair:</b><ul><li>Commando: Selecteer \"Startup Repair\" in WinRE.</li><li>Functie: Analyseert en herstelt Automatisch opstartproblemen. Vb: ontbrekende of beschadigde systeembestanden, bootsectorproblemen en MBR/GPT-corruptie.</li></ul></li><li><b>Systeemherstel/ System Restore:</b><ul><li>Commando: Selecteer \"System Restore\" in WinRE.</li><li>Functie: Zet de computer terug naar een eerder tijdstip (een herstelpunt) waarop de computer correct werkte. Vereist dat systeemherstelpunten zijn ingeschakeld.</li></ul></li><li><b>Opdrachtenprompt/ Command prompt:</b><ul><li>Commando: Selecteer \"Command Prompt\" in WinRE</li><li>Functie: Biedt toegang tot verschillende commando's om handmatig opstartproblemen op te lossen.</li></ul></li><li><b>Starup Settings:</b><ul><li>Commando: Selecteer \"Starup Settings\" in WinRE</li><li>Functie: Biedt toegang tot verschillende opties zoals 'Enable Safe Mode' om Windows te starten met minimale drivers en services. Andere opties zoals 'Debugging Mode', 'Boot Logging' en 'Directory Service Restore Mode' kunnen hier ook ingeschakeld worden. </li></ul></li></ul>"],
    ["BIOS/UEFI instellingen", "Om de BIOS of UEFI instellingen te openen:<ul><li>Druk tijdens het opstarten op de juiste toets (meestal DEL, F2, F10, F12 of ESC).</li></ul><br>Opties:<ul><li><b>Bootvolgorde</b> aanpassen, zorg ervoor dat de juiste opstartschijf is geselecteerd als eerste opstartapparaat.</li><li><b>UEFI/Legacy Mode</b> aanpassen, controleer of de juiste opstartmodus is ingeschakeld afhankelijk van het OS en de hardware.</li><li><b>Secure Boot</b> uitschakelen als dit problemen veroorzaakt. Vb: Bij het opstarten van een ander OS of herstelmedium.</li></ul>"],
    ["Command Prompt - bootrec.exe", "Tool voor het herstellen van de bootsector, MBR en <b>Boot Configuration Data</b> (BCD).<br>Commando's:<ul><li><b>bootrec /FixMBR</b>: schrijft een nieuwe MBR naar de systeemschijf. Handig bij MBR-corruptie fo virusinfectie.</li><li><b>bootrec /FixBoot</b>: schrijft een nieuwe bootsector naar de systeempartitie. Handig als de bootsector beschadigd is.</li><li><b>bootrec /ScanOS</b>: scant alle schijven op geïnstalleerde Windows besturingssystemen en geeft een lijst weer.</li><li><b>bootrec /RebuildBcd</b>: bouwt de BCD opnieuw op. Handig als de BCD beschadigd is of ontbrekende vermeldingen bevat.</li></ul>"],
    ["Command Prompt - bcdedit.exe", "Tool voor het bewerken van de <b>Boot Configuration Data</b>, BCD.<br>Commando's:<ul><li><b>bcdedit /export C:\\bcdbackup</b>: Maakt een back-up van de BCD naar een bestand (hier: C:\\bcdbackup).</li><li><b>bcdedit /import C:\\bcdbackup</b>: Herstelt de BCD vanuit een back-upbestand.</li><li><b>bcdedit /delete {GUID}</b>: Verwijdert een specifieke BCD-vermelding. Vereist de GUID van de vermelding.</li><li><b>bcdedit /create /d \"Windows 11\" /application osloader</b>: Maakt een nieuwe BCD-vermelding voor een Windows-OS.</li><li><b>bcdedit /set {GUID} device partition=C:</b>: Stelt het apparaat in voor de BCD-vermelding (hier partitie C:)/</li><li><b>bcdedit /set {GUID} osdevice partition=C:</b>: Stelt de OS-apparaat in voor de BCD-vermelding (hier partitie C:).</li><li><b>bcdedit /set {GUID} systemroot \\Windows</b>: Stelt de systeemroot in voor de BCD-vermelding (hier \\Windows).</li></ul>"],
    ["Command Prompt - diskpart.exe", "Tool voor het beheren van schijven en partities.<br>Commando's:<ul><li><b>diskpart</b>: Start de diskpart-tool.</li><li><b>list disk</b>: Geeft een lijst van alle schijven.</li><li><b>select disk <nummer></b>: Selecteert een schijf.</li><li><b>list partition</b>: Geeft een lijst van alle partities op de geselcteerde schijf.</li><li><b>select partition <nummer></b>: Selecteert een partitie.</li><li><b>active</b>: Markeert de geselecteerde partitie als actief (enkel MBR-schijven).</li><li><b>assign letter =[LETTER]</b>: Wijst een stationletter toe aan de geselcteerde partitie.</li><li><b>exit</b>: Sluit de diskpart-tool.</li></ul>"],
    ["Command Prompt - chkdsk.exe", "Tool voor het controleren en repareren van schijffouten.<br>Commando: <ul><li><b>chkdsk C: /f /r</b>: Controleert en repareert de C:-schijf. De parameter 'f' repareert fouten. De parameter 'r' zoekt naar beschadigde sectoren en herstelt leesbare informatie.</li></ul>"],
    ["Scenario - Computer start niet op na een Windows update", "Gebruik <b>Systeemherstel</b> in WinRE om terug te keren naar een herstelpunt voor de update.<br>Als dat niet werkt: gebruik <b>Opstartherstel</b> in WinRE."],
    ["Scenario - Operating System Not Found", "Controleer de <b>bootvolgorde</b> in de <b>BIOS/UEFI instellingen</b>.<br>Als dat niet werkt: gebruik <b>bootrec /FixMBR</b>, <b>bootrec /FixBoot</b> of <b>bootrec /RebuildBcd</b> in Command Prompt van WinRE."],
    ["Scenario - Missing Operating System", "Zie scenario - Operating System Not Found."],
    ["Scenario - Blue Screen Of Death BSOD", "Start op in <b>Safe Mode</b> via de <b>Startup Settings</b>, verwijder of update drivers die mogelijke problemen veroorzaken.<br>Als dat niet werkt: gebruik <b>Systeemherstel</b> in WinRE."],
    ["Scenario - Problemen met Secure Boot", "Schakel <b>Secure Boot</b> tijdelijk uit in de <b>BIOS/UEFI</b> instellingen om te controleren of dit het probleem veroorzaakt.<br>Als dat niet werkt: onderzoek de compabiliteit van de hardware en software met <b>Secure Boot</b>"],
    ["Scenario - GPT-schijf start niet op", "Zorg ervoor dat de computer in <b>UEFI-modus</b> opstart. Controleer of de <b>EFI-partitie</b> aanwezig en correct is.<br>Als dat niet werkt: gebruik <b>bootrec /RebuildBCD</b> in de <b>Command Prompt</b> van WinRE."],
    ["VMware Workstation pro 17 - Stappenplan aanmaken VM met Windows 11 ISO", `Virutele Machine, of VM, aanmaken. Voorbereidingen en stappenplan:<br>Virtualisatie aanzetten in UEFI:<ul><li>Zoek naar de optie '<b>Virtualization Technology</b>' en schakel deze in ('enabled'). Deze staat meestal onder 'Advanced options'.</li></ul>Bereid de ISO-file voor:<ul><li><a href="https://www.microsoft.com/nl-nl/software-download/windows11">Download Windows11 ISO</a>.</li><li>Deze ISO vereist minstens <b>16 Gb RAM</b> en <b>40GB vrije opslagruimt</b>!</li><li>Het is aangeraden om op de C:-schijf een map voor alle ISO's aan te maken. Vb: VIRTUAL_ISO.</li></ul>Installeer de VM-software:<ul><li><a href="https://support.broadcom.com/group/ecx/productdownloads?subfamily=VMware%20Workstation%20Pro&freeDownloads=true">Download Workstation Pro 17</a>, kies jouw besturingssysteem. Deze link vereist een login, als Vives student kan je de software via de <a href="https://www.academicsoftware.eu/login">Academic Software</a> (inloggen met vives e-mail) verkrijgen door in de tab 'Software' te zoeken naar 'VMware Workstation Pro' en de stappen te volgen.</li></ul>Aanmaken van de Virutele Machine:<ol><li>Creëer mappen op de C:-schijf waar je de VM's en virtuele opslag zal opslaan. Vb: VIRTUAL_MACHINES en VIRTUAL_HARDDISKS.</li><li>Ga naar 'Edit' &rAarr; 'Preferences', pas hier de standaard map aan waar de virtuele machines bewaard worden.</li><li>Open de VMware Workstation Pro software en klik op '<b>Create a New Virtual Machine</b>'.</li><li>Kies voor '<b>Custom (advanced)</b>' in de Wizard, klik op 'Next'.</li>
        <li>Laat de standaard keuze staan in het volgende scherm, <b>klik op 'Next'</b>.</li>
        <li><b>Geef</b> de virtuele machine een passende <b>naam</b>. Vb: PARENT_VM (om later te clonen en alle settings die we moeten doorlopen niet steeds te herhalen).</li>
        <li>Klik op '<b>Browse...</b>', navigeer naar en selecteer de ISO-file, klik op 'Next'.</li>
        <li>Indien stap 2 niet uitgevoerd werd, klik op '<b>Browse...</b>' en navigeer naar de gewenste map, klik op 'Next'.</li>
        <li>Laat de standaard keuze staan en <b>kies</b> een wachtwoord van minstens 8 tekens, klik op 'Next'.</li>
        <li>Vink '<b>Secure Boot</b>' aan, klik op 'Next'.</li>
        <li><b>Verhoog</b> het aantal cores per processor naar 4, klik op 'Next'.</li>
        <li>We <b>behouden</b> de huidige selectie voor RAM geheugen, klik op 'Next'.</li>
        <li>Bij '<b>Network Type</b>' kiezen we voor '<b>bridged</b> networking', klik op 'Next'.</li>
        <li>In het volgende scherm ga door, klik op 'Next'.</li>
        <li>Kies '<b>NVMe</b>' als Disk Type, klik op 'Next'.</li>
        <li>Kies voor '<b>Create a new virtual disk</b>', klik op 'Next'.</li>
        <li>Selecteer de gewenste virtual disk grootte.</li>
        <li>Vink '<b>Allocate all disk space now</b>' ook aan (dit staat niet zo in de cursus). Indien dit niet aangevinkt staat kan dit later voor problemen zorgen:
        <ul><li>Stel je vinkt dit niet aan en je hebt nog 80GB vrij op schijfruimte van de host. Je stelt de disk space van de VM in op 64GB.</li>
        <li>Je gebruikt de VM en neemt met deze VM 30GB aan schijfruimte in. Je host heeft nu maar 50GB meer.</li>
        <li>Je gebruikt de host en de beschikbare schijfruimte daalt naar 5GB.</li>
        <li>Je VM denkt nog steeds dat er 34GB vrij is, maar dit is niet zo. Als je nu op de VM bestanden plaatst die meer dan 5GB innemen, zal je in de problemen komen.</li>
        <li>Vink daarom dit dus aan!</li></ul></li>
        <li>Selecteer ook de optie '<b>Store virtual disk as single file</b>', klik op 'Next'.</li>
        <li>Klik op <b>Browse...</b> en navigeer naar de map die we in stap 1 gemaakt hebben om de virtual disk te bewaren, klik op 'Next'.</li>
        <li>Finale stap, laatste kans om hardware nog te wijzigen, klik op 'Finish'.</li></ol>`],
    ["VMware Workstation pro 17 - Windows installatie", `Windows11 installeren op de VM:
        <ol>
        <li><b>Start</b> de virtuele machine op en open de console. (Deze stap volgt meteen op het aanmaken van de VM en kan genegeerd worden.)</li>
        <li><b>Klik</b> snel in het scherm en druk op een toest wanneer dit geprompt wordt.</li>
        <li><b>Kies</b> de gewenste taal instellingen, let op: indien hier engels qwerty gekozen wordt kan dit aangepast worden tot op het bureaublad.</li>
        <li><b>Wacht</b> tot Windows begint met de installatie wizard.</li>
        <li><b>Druk</b> shift+F10 om de command prompt te openen.</li>
        <li><b>Geef</b> het commando <b>oobe\BypassNRO</b> (hoofdletters!) in.</li>
        <li>Terwijl de VM restart, <b>rechtermuis-klik</b> in het Workstation op de VM en kies '<b>Settings</b>'.</li>
        <li><b>Navigeer</b> naar 'networkadapter' en vink 'connected' uit.</li>
        <li><b>Volg</b> de installatie wizard en kies voor 'ik heb geen internet' bij de netwerkopties.</li>
        <li><b>Geef</b> de gebruiker een naam.</li>
        <li>Windows11 is gebruiksklaar.</li>
        </ol>
        Het is aangeraden om de VMware Tools te downloaden. Dit kan door in het Workstation te rechtermuis-klikken op de VM en te kiezen voor 'Install VMware Tools...'. Nadien open je de Verkenner in de VM en klik je op 'Deze PC'. Dubbelkik dan op de VMware Tools (D: schijf) en volg de installatie-wizard, kies voor 'Complete'. Na installatie verdwijnt de VMware Tools installer als D: schijf.`],
    ["Soorten Windows Updates", `Elke soort update heeft een doel. Ze worden beheerd via 'Windows Updates', hier kunnen voorkeuren beheerd worden en hoe en wanneer updates worden uitgevoerd ingesteld.
        <ul>
        <li><b>Kwaliteitsupdates</b>: Maandelijkse updates die verbeteringen brengen in de beveiliging, betrouwbaarheid en prestaties van het OS. Ze bevatten vaak beveilingspatches en bugfixes.</li>
        <li><b>Functie-updates</b>: Jaarlijkse updates die nieuwe functies, verbeteringen en wijzigingen in de GUI bevatten. Ze verrijken de gebruikservaring door nieuwe mogelijkheden toe te voegen.</li>
        <li><b>Dirverupdates</b>: Verbeteren compabiliteit met hardware door de stuurprogramma's voor verschillende apparaten op een systeem bij te werken. Dit kan prestaties en stabiliteit van apparaten verbeteren.</li>
        <li><b>Definitie-updates</b>: Houdt de virusdefinities van Windows Defender Antivirus up-to-date. Ze zorgen ervoor dat de pc bescherm is tegen de nieuwste dreigingen.</li>
        <li><b>Optionele updates</b>: Niet cruciale verbeteringen of nieuwe functies die de gebruiker naar eigen wil kan installeren.</li>
        </ul>`],
    ["Windows Update raadplegen", `De Windows Update kan op volgende manier geraadpleegd worden:
        <ul>
        <li><b>Ga</b> naar '<b>Instellingen</b>' ( <kbd style="font-family: marlett; ">W</kbd> + <kbd>i</kbd>)</li>
        <li><b>Update & Beveiliging</b></li>
        <li><b>Windows Update</b></li>
        </ul>`],
    ["Drivers updaten", `Drivers updaten kan doormiddel van de ingebouwde Windows-tools:
        <ul>
        <li>Open <b>Apparaatbeheer</b> via het Start-menu.</li>
        <li>OF rechtermuis-klik op het windows-icoon en kies '<b>Apparaatbeheer</b>'</li>
        <li>OF in 'run' type het commando: <b>devmgmt.msc</b></li>
        </ul>
        Of via Fabrikant Tools zoals:
        <ul>
        <li>Dell Support Assist</li>
        <li>HP Support Assistant</li>
        </ul>
        Alternatieve Tools:
        <ul>
        <li>GPU-Z</li>
        <li>CPU-Z</li>
        <li>Unkown Device Identifier</li>
        <li>Everest home</li>
        </ul>
        <b>Controleer</b> de drivers; Vouw elke hoofdcategorie uit zoals <b>Display adapters</b> en <b>Network adapters</b>.<br>
        Uitleg icoontjes bij de apparaten:
        <ul>
        <li>⚠️: Een fout bij de hardware of driver van apparaat. Afkomstig door een ontbrekende driver, resource conflict of een installatie error.</li>
        <li>⬇️: Het apparaat is manueel uitgeschakeld. Het apparaat zal terug in werking treden na het inschakelen via het context menu.</li>
        <li>ℹ️: Geeft weer dat de resources manueel werden toegewezen. Het indiceert dat het 'Use automatic settings' onderdeel niet is geselecteerd.</li>
        <li>❓: Verschijnt wanneer Windows het apparaat detecteert, maar het apparaat niet kan identificeren of de driver ervan installeren. Vereist de juiste driver te installeren.</li>
        </ul>`]    
];

let terms = [];

const elList = document.getElementById('term-list');
const counterE = document.getElementById('teller');
const elUitleg = document.getElementById('uitleg');
const elTerm = document.getElementById('term');
const eChkHW = document.getElementById('chk-HW');
const eChkWin = document.getElementById('chk-Win');

const laatsteKeuze = localStorage.getItem('laatsteKeuze');

var term = terms[0];
var usedIndexes = [];
var clicks = 0;
var isExplanationVisible = false;

var currentIndex = 0;

const updateTerms = () => {
    const hwChecked = document.getElementById('chk-HW').checked;
    const winChecked = document.getElementById('chk-Win').checked;

    localStorage.setItem('laatsteKeuze', winChecked ? 'win' : 'hw');

    terms = [
        ...(hwChecked ? termsHW : []),
        ...(winChecked ? termsWin : [])
    ];

    // De array terms sorteren op basis van de eerste string in de subarrays.
    // terms.sort((a, b) => {
    //     if (a[0] < b[0]) return -1;
    //     if (a[0] > b[0]) return 1;
    //     return 0;
    // }); op deze manier komt A B C ... Z eerst en dan pas a b c ... z.
    // Op volgende manier komt a en A tezamen.
    terms.sort((a, b) => a[0].localeCompare(b[0], undefined, { sensitivity: 'base', caseFirst: 'upper', numeric: true }));

    reset();
    renderList();
};

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
        reset();
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

const reset = () => {
    clicks = 0;
    usedIndexes = [];
    emptyAll();
    counterE.textContent = `(${clicks} / ${terms.length})`;
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

const emptyAll = () => {
    elTerm.textContent = "Term:";
    elUitleg.textContent = "";
};

eChkHW.addEventListener('change', () => {
    if (eChkHW.checked) {
        eChkWin.checked = false;
    }
    emptyAll();
    updateTerms();
});

eChkWin.addEventListener('change', () => {
    if (eChkWin.checked) {
        eChkHW.checked = false;
    }
    emptyAll();
    updateTerms();
});

const updateActiveListState = () => {
    const items = elList.querySelectorAll('li');
    items.forEach((li) => {
        const idx = parseInt(li.dataset.index);
        if (idx === currentIndex) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });
};

//Initialiseren
counterE.textContent = `(${clicks} / ${terms.length})`;
eChkHW.checked = laatsteKeuze !== 'win';
eChkWin.checked = laatsteKeuze === 'win';
updateTerms();
generateTerm();
// renderList();
// generateTerm();
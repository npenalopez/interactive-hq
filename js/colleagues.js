const colleagues = [
  {
    "id":"path9214",
    "name": "Daniel Heutschi",
    "position": "CEO",
    "department": "Executive Board",
    "pictureUrl": "./pics/executive-board/daniel-heutschi.jpg"
  },
  {
    "id":"path16100",
    "name": "Olivier Boucaud",
    "position": "CCO",
    "department": "Executive Board",
    "pictureUrl": "./pics/executive-board/olivier-boucaud.jpg"
  },
  {
    "id": "path15352",
    "name": "Laurent Freléchoux",
    "position": "CTO",
    "department": "Executive Board",
    "pictureUrl": "./pics/executive-board/laurent-frelechoux.jpg"
  },
  {
    "id": "path15726",
    "name": "Roberto Lima",
    "position": "COO",
    "department": "Executive Board",
    "pictureUrl": "./pics/executive-board/roberto-lima.jpg"
  },
  {
    "id":"path14978",
    "name": "Marc Stadelmann",
    "position": "CDO",
    "department": "Executive Board",
    "pictureUrl": "./pics/executive-board/marc-stadelmann.jpg"
  },
  {
    "id":"path60144",
    "name": "Michael Zulauf",
    "position": "General Counsel",
    "department": "CEO Staff",
    "pictureUrl": "./pics/ceo-staff/michael-zulauf.jpg"
  },
  {
    "id": "path59792",
    "name": "Markus Bigler",
    "position": "Senior Product Manager",
    "department": "CEO Staff",
    "pictureUrl": "./pics/ceo-staff/markus-bigler.jpg"
  },
  {
    "id": "none",
    "name": "Jürg Räber",
    "position": "Accountant/Controller Hotel Balsthal",
    "department": "CEO Staff",
    "pictureUrl": "./pics/ceo-staff/jurg-reber.jpg"
  },
  {
    "id":"path60900",
    "name": "Stefan Aemmer",
    "position": "CFO",
    "department": "Finance, Accounting & Controlling",
    "pictureUrl": "./pics/finance-accounting-controlling/stefan-aemmer.jpg"
  },
  {
    "id":"path59408",
    "name": "Elisa Dauvé",
    "position": "Financial Services Assistant",
    "department": "Finance, Accounting & Controlling",
    "pictureUrl": "./pics/finance-accounting-controlling/elisa-dauve.jpg"
  },
  {
    "id":"path59056",
    "name": "Daniel Mader",
    "position": "Director Revenue Assurance",
    "department": "Finance, Accounting & Controlling",
    "pictureUrl": "./pics/finance-accounting-controlling/daniel-mader.jpg"
  },
  {
    "id":"path61616",
    "name": "Silvia Wenger",
    "position": "Accountant / Controller",
    "department": "Finance, Accounting & Controlling",
    "pictureUrl": "./pics/finance-accounting-controlling/silvia-wenger.jpg"
  },
  {
    "id":"path61264",
    "name": "Maggie Boger",
    "position": "Financial Administrator",
    "department": "Finance, Accounting & Controlling",
    "pictureUrl": "./pics/finance-accounting-controlling/maggie-boger.jpg"
  },
  {
    "id": "path4892",
    "name": "Sarah Seibt",
    "position": "Head of Human Resources & Internal Services",
    "department": "Human Resources",
    "pictureUrl": "./pics/hr/sarah-seibt.jpg"
  },
  {
    "id": "path5240",
    "name": "Ruth Schürch",
    "position": "HR Specialist",
    "department": "Human Resources",
    "pictureUrl": "./pics/hr/ruth-schurch.jpg"
  },
  {
    "id": "none",
    "name": "Anita Gränicher",
    "position": "Cleaning",
    "department": "Human Resources - Internal Services",
    "pictureUrl": "./pics/hr-internal/anita-graenicher.jpg"
  },
  {
    "id": "none",
    "name": "Klaudia Schüpbach",
    "position": "Cleaning",
    "department": "Human Resources - Internal Services",
    "pictureUrl": "./pics/hr-internal/klaudia-schupbach.jpg"
  },
  {
    "id": "path65296",
    "name": "Martin Solenthaler",
    "position": "Key Account Manager",
    "department": "Sales",
    "pictureUrl": "./pics/sales/martin-solenthaler.jpg"
  },
  {
    "id": "none",
    "name": "Luiz Melo",
    "position": "VP Sales Latin America",
    "department": "Sales",
    "pictureUrl": "./pics/sales/luiz-melo.jpg"
  },
  {
    "id": "none",
    "name": "Daniel Gontijo",
    "position": "Sales Director Latin America",
    "department": "Sales",
    "pictureUrl": "./pics/sales/daniel-gontijo.jpg"
  },
  {
    "id": "none",
    "name": "John Dubois",
    "position": "VP Sales North America and Caribbean",
    "department": "Sales",
    "pictureUrl": "./pics/sales/john-dubois.jpg"
  },
  {
    "id": "none",
    "name": "Luis J. Forteza",
    "position": "Sales Director North America and Caribbean",
    "department": "Sales",
    "pictureUrl": "./pics/sales/luis-fortenza.jpg"
  },
  {
    "id": "none",
    "name": "Randy Petterson",
    "position": "Sales Director North America and Caribbean",
    "department": "Sales",
    "pictureUrl": "./pics/sales/randy-petterson.jpg"
  },
  {
    "id": "path64576",
    "name": "David Roth",
    "position": "VP Sales Asia and Pacific",
    "department": "Sales",
    "pictureUrl": "./pics/sales/david-roth.jpg"
  },
  {
    "id": "none",
    "name": "Pinchawee Rasmidatta",
    "position": "Sales Director Asia and Pacific",
    "department": "Sales",
    "pictureUrl": "./pics/sales/pinchawee-rasmidatta.jpg"
  },
  {
    "id": "path57584",
    "name": "Rodney Gaines",
    "position": "VP Sales Western Europe",
    "department": "Sales",
    "pictureUrl": "./pics/sales/rodney-gaines.jpg"
  },
  {
    "id": "path57936",
    "name": "Jeannette Gerard",
    "position": "Sales Director Western Europe",
    "department": "Sales",
    "pictureUrl": "./pics/sales/jeannette-gerard.jpg"
  },
  {
    "id": "path64944",
    "name": "Giovanni Russiniello",
    "position": "VP Sales Africa and Middle East",
    "department": "Sales",
    "pictureUrl": "./pics/sales/giovanni-russiniello.jpg"
  },
  {
    "id": "path66416",
    "name": "Iryna Bernadska",
    "position": "VP Sales Eastern and Central Europe",
    "department": "Sales",
    "pictureUrl": "./pics/sales/iryna-bernadska.jpg"
  },
  {
    "id": "path66768",
    "name": "Dmitriy Brussintsov",
    "position": "Sales Director Eastern Europe and Central Asia",
    "department": "Sales",
    "pictureUrl": "./pics/sales/dmitriy-brussintsov.jpg"
  },
  {
    "id": "path62016",
    "name": "Sandrine Ayer",
    "position": "Head of Marketing & Sales Operations",
    "department": "Marketing & Sales Operations",
    "pictureUrl": "./pics/marketing-sales-operation/sandrine-ayer.jpg"
  },
  {
    "id": "path63092",
    "name": "Mario Ortega Perez",
    "position": "Sales Operations",
    "department": "Marketing & Sales Operations",
    "pictureUrl": "./pics/marketing-sales-operation/mario-ortega.png"
  },
  {
    "id": "path62736",
    "name": "Hattie Boggis",
    "position": "Marketing Coordinator",
    "department": "Marketing & Sales Operations",
    "pictureUrl": "./pics/marketing-sales-operation/hattie-boggis.jpg"
  },
  {
    "id": "path48676",
    "name": "Piotr Szymonski",
    "position": "Signalling Routing & Quality Director",
    "department": "Signalling Engineering",
    "pictureUrl": "./pics/signalling-engineering/piotr-szymonski.jpg"
  },
  {
    "id": "path48324",
    "name": "Philippe Bulliard",
    "position": "Senior Operations Engineer",
    "department": "Signalling Engineering",
    "pictureUrl": "./pics/signalling-engineering/philippe-bulliard.jpg"
  },
  {
    "id": "path47604",
    "name": "Janusz Sadownik",
    "position": "Senior Operations Engineer",
    "department": "Signalling Engineering",
    "pictureUrl": "./pics/signalling-engineering/janusz-sadownik.jpg"
  },
  {
    "id": "path49796",
    "name": "Leonardo Arraez",
    "position": "Senior Operations Engineer",
    "department": "Signalling Engineering",
    "pictureUrl": "./pics/signalling-engineering/leonardo-arraez.jpg"
  },
  {
    "id": "path49076",
    "name": "Antonio Ros",
    "position": "Senior Operations Engineer",
    "department": "Signalling Engineering",
    "pictureUrl": "./pics/signalling-engineering/antonio-ros.jpg"
  },
  {
    "id": "path51268",
    "name": "Martin Hruby",
    "position": "Head of IP Engineering",
    "department": "IP Engineering",
    "pictureUrl": "./pics/ip-engineering/martin-hruby.jpg"
  },
  {
    "id": "path50548",
    "name": "Xavier Duran",
    "position": "Senior Operations Engineer",
    "department": "IP Engineering",
    "pictureUrl": "./pics/ip-engineering/xavier-duran.jpg"
  },
  {
    "id": "path51620",
    "name": "Marcel Finger",
    "position": "Senior Operations Engineer",
    "department": "IP Engineering",
    "pictureUrl": "./pics/ip-engineering/marcel-finger.jpg"
  },
  {
    "id": "path50900",
    "name": "Thilan Ekanayake",
    "position": "Senior Operations Engineer",
    "department": "IP Engineering",
    "pictureUrl": "./pics/ip-engineering/thilan-ekanayake.jpg"
  },
  {
    "id": "path56036",
    "name": "Sergej Pypin",
    "position": "Head of ICT-OP Systems",
    "department": "ICT Engineering",
    "pictureUrl": "./pics/ict-engineering/sergej-pypin.jpg"
  },
  {
    "id": "path54212",
    "name": "Urs Schmid",
    "position": "ICT-System Engineer",
    "department": "ICT Engineering",
    "pictureUrl": "./pics/ict-engineering/urs-schmid.jpg"
  },
  {
    "id": "path53092",
    "name": "Alessandro Catale",
    "position": "CI/CD and Data Engineer",
    "department": "ICT Engineering",
    "pictureUrl": "./pics/ict-engineering/alessandro-catale.jpg"
  },
  {
    "id": "path54964",
    "name": "Dany Tarabey",
    "position": "Junior ICT System Administrator",
    "department": "ICT Engineering",
    "pictureUrl": "./pics/ict-engineering/dany-tarabey.jpg"
  },
  {
    "id": "path54562",
    "name": "Thomas Steiner",
    "position": "Senior System Engineer",
    "department": "ICT Engineering",
    "pictureUrl": "./pics/ict-engineering/thomas-steiner.jpg"
  },
  {
    "id": "path55688",
    "name": "Darren Seiler",
    "position": "Junior System Engineer",
    "department": "ICT Engineering",
    "pictureUrl": "./pics/ict-engineering/darren-seiler.jpg"
  },
  {
    "id": "path52372",
    "name": "Reto Botta",
    "position": "System Engineer Virtual Infrastructure",
    "department": "ICT Engineering",
    "pictureUrl": "./pics/ict-engineering/reto-botta.jpg"
  },
  {
    "id": "path53844",
    "name": "Sven Abegglen",
    "position": "Apprentice ICT",
    "department": "ICT Engineering",
    "pictureUrl": "./pics/ict-engineering/sven-abegglen.jpg"
  },
  {
    "id": "path40870",
    "name": "Mauro Mele",
    "position": "Director Clearing Services",
    "department": "Products",
    "pictureUrl": "./pics/products/mauro-mele.jpg"
  },
  {
    "id": "path40518",
    "name": "Antonia Gabler",
    "position": "Clearing Services Client Manager",
    "department": "Products",
    "pictureUrl": "./pics/products/antonia-gabler.jpg"
  },
  {
    "id": "path37206",
    "name": "Trevor Kandasamy",
    "position": "IPX Service Manager",
    "department": "Products",
    "pictureUrl": "./pics/products/trevor-kandasamy.jpg"
  },
  {
    "id": "path36854",
    "name": "Derek Moser",
    "position": "VP Business Development",
    "department": "Products",
    "pictureUrl": "./pics/products/derek-moser.jpg"
  },
  {
    "id": "path37574",
    "name": "Joanna Lawniczek Vulliens",
    "position": "Senior Product Manager",
    "department": "Products",
    "pictureUrl": "./pics/products/joanna-lawniczek.jpg"
  },
  {
    "id": "path37926",
    "name": "Pedro Sebastião",
    "position": "Director Hubbing Services",
    "department": "Products",
    "pictureUrl": "./pics/products/pedro-sebastiao.jpg"
  },
  {
    "id": "path39046",
    "name": "Florian Hulliger",
    "position": "Service Manager Pulse",
    "department": "Products",
    "pictureUrl": "./pics/products/florian-hulliger.jpg"
  },
  {
    "id": "path39402",
    "name": "Rui Ribeiro",
    "position": "Head of DMS",
    "department": "Products",
    "pictureUrl": "./pics/products/rui-ribeiro.jpg"
  },
  {
    "id": "path38678",
    "name": "Joaquin Sari Kauzal",
    "position": "Big Data Analytics Specialist",
    "department": "Products",
    "pictureUrl": "./pics/products/joaquin-sari-kauzal.jpg"
  },
  {
    "id": "path46406",
    "name": "Helena Bertovic",
    "position": "Head of Clearing Operations",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/helena-bertovic.jpg"
  },
  {
    "id": "path44934",
    "name": "Daniel Zuppinger",
    "position": "Senior Business and Data Analyst",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/daniel-zuppinger.jpg"
  },
  {
    "id": "path41990",
    "name": "Bervely Kaufmann",
    "position": "FC Manager",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/bervely-kaufmann.jpg"
  },
  {
    "id": "none",
    "name": "Julio Medina",
    "position": "FC Manager",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/julio-medina.jpg"
  },
  {
    "id": "none",
    "name": "Cristina Florea",
    "position": "Clearing Manager",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/cristina-florea.jpg"
  },
  {
    "id": "path43466",
    "name": "Nina Minasyan",
    "position": "FC Manager and AMLA Compliance Deputy Officer",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/nina-minasyan.jpg"
  },
  {
    "id": "path42342",
    "name": "Kateryna Okhrushchak",
    "position": "FC & Implementation Manager",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/kateryna-okhrushchak.jpg"
  },
  {
    "id": "none",
    "name": "Maria Isabel Reyna",
    "position": "FC & Implementation Manager",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/maria-reyna.jpg"
  },
  {
    "id": "path42746",
    "name": "Florian Jost",
    "position": "FC Manager and AMLA Compliance Officer",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/florian-jost.jpg"
  },
  {
    "id": "path46758",
    "name": "Mirela Damjanovic",
    "position": "FC & Implementation Manager",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/mirela-damjanovic.jpg"
  },
  {
    "id": "none",
    "name": "Teerapat Tarugsa",
    "position": "Clearing Manager",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/teerapat-tarugsa.jpg"
  },
  {
    "id": "none",
    "name": "Jean Wong",
    "position": "FC Coordinator",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/jean-wong.jpg"
  },
  {
    "id": "path41270",
    "name": "Tiina Haarala",
    "position": "FC Coordinator",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/tiina-haarala.jpg"
  },
  {
    "id": "path43814",
    "name": "Elizaveta Blaser",
    "position": "Clearing Coordinator",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/elizaveta-blaser.jpg"
  },
  {
    "id": "path41626",
    "name": "Domagoj Frančišković",
    "position": "FC Manager",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/domagoj-franciskovic.jpg"
  },
  {
    "id": "path43094",
    "name": "Carmen Draghici",
    "position": "Clearing Coordinator",
    "department": "Clearing Operations",
    "pictureUrl": "./pics/clearing-operations/carmen-draghici.jpg"
  },
  {
    "id": "path45686",
    "name": "Bosko Mihajlovic",
    "position": "FC & Implementation Manager / Back Office Team Leader",
    "department": "Clearing Operations - Back Office",
    "pictureUrl": "./pics/clearing-operations-backoffice/bosko-mihajlovic.jpg"
  },
  {
    "id": "path44566",
    "name": "Fiona McLeod",
    "position": "Back Office Executive",
    "department": "Clearing Operations - Back Office",
    "pictureUrl": "./pics/clearing-operations-backoffice/fiona-mcleod.jpg"
  },
  {
    "id": "path44214",
    "name": "Ruxandra Kekedi",
    "position": "Back Office Executive",
    "department": "Clearing Operations - Back Office",
    "pictureUrl": "./pics/clearing-operations-backoffice/ruxandra-kekedi.jpg"
  },
  {
    "id": "none",
    "name": "Suzana Zakman",
    "position": "Back Office Executive",
    "department": "Clearing Operations - Back Office",
    "pictureUrl": "./pics/clearing-operations-backoffice/suzana-zakman.jpg"
  },
  {
    "id": "path45290",
    "name": "Laura Vallejo Lazaro",
    "position": "Back Office Executive - Technical support",
    "department": "Clearing Operations - Back Office",
    "pictureUrl": "./pics/clearing-operations-backoffice/laura-vallejo.jpg"
  },
  {
    "id": "none",
    "name": "Shayal Prasad",
    "position": "Back Office Executive",
    "department": "Clearing Operations - Back Office",
    "pictureUrl": "./pics/clearing-operations-backoffice/shayal-prasad.jpg"
  },
  {
    "id": "path36102",
    "name": "Marcondes Lenuzza",
    "position": "Head of Hubbing Operations",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/marcondes-lenuzza.jpg"
  },
  {
    "id": "path36454",
    "name": "Maja Queiroz",
    "position": "Roaming Manager",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/maja-queiroz.jpg"
  },
  {
    "id": "path35382",
    "name": "Katherine Buschang",
    "position": "Roaming Manager",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/katherine-buschang.jpg"
  },
  {
    "id": "path35734",
    "name": "Yulia Vollmar",
    "position": "Roaming Manager",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/yulia-vollmar.jpg"
  },
  {
    "id": "path34630",
    "name": "Florian Bossert",
    "position": "Roaming Manager",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/florian-bossert.jpg"
  },
  {
    "id": "none",
    "name": "Sylvia Junqueira de Melo",
    "position": "Roaming Manager",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/sylvia-junqueira.jpg"
  },
  {
    "id": "none",
    "name": "Bunyapa Sunondharom",
    "position": "Roaming Manager",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/bunyapa-sunondharom.jpg"
  },
  {
    "id": "none",
    "name": "Evie Gazi",
    "position": "Roaming Manager",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/evie-gazi.jpg"
  },
  {
    "id": "none",
    "name": "Nemanja Bilbija",
    "position": "Back Office Executive",
    "department": "Senior IREG Engineer",
    "pictureUrl": "./pics/hubbing-operations/nemanja-bilbija.jpg"
  },
  {
    "id": "none",
    "name": "Liliana Udovenco",
    "position": "Back Office Executive",
    "department": "IREG Engineer",
    "pictureUrl": "./pics/hubbing-operations/liliana-udovenco.jpg"
  },
  {
    "id": "none",
    "name": "Astrid Garcia",
    "position": "IREG Engineer",
    "department": "Hubbing Operations",
    "pictureUrl": "./pics/hubbing-operations/astrid-garcia.jpg"
  },
  {
    "id": "path33510",
    "name": "Pedro da Silva",
    "position": "IREG Engineer",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/pedro-dasilva.jpg"
  },
  {
    "id": "path33158",
    "name": "Regina Oertli",
    "position": "IPX Services Administrator",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/regina-oertli.jpg"
  },
  {
    "id": "none",
    "name": "Edward McKenzie",
    "position": "NOC Engineer",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/edward-mckenzie.jpg"
  },
  {
    "id": "none",
    "name": "Joko Pri Hartono",
    "position": "NOC Engineer",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/yoko-pri-hartono.jpg"
  },
  {
    "id": "path32794",
    "name": "Carlos Miranda",
    "position": "NOC Engineer",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/carlos-miranda.jpg"
  },
  {
    "id": "none",
    "name": "Ioannis Andromidas",
    "position": "NOC Engineer",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/ioannis-andromidas.jpg"
  },
  {
    "id": "path32438",
    "name": "Karin Gerber",
    "position": "IPX Services Administrator",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/karin-gerber.jpg"
  },
  {
    "id": "none",
    "name": "Ilija Kuzmanovski",
    "position": "NOC Engineer",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/ilija-kuzmanovski.jpg"
  },
  {
    "id": "none",
    "name": "Alen Durakovic",
    "position": "NOC Engineer",
    "department": "Network Operation Centre",
    "pictureUrl": "./pics/network-operation-centre/alen-durakovic.jpg"
  },
  {
    "id": "path71112",
    "name": "Hermann Jaun",
    "position": "Chief Architect Software Development",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/hermann-jaun.jpg"
  },
  {
    "id": "path73028",
    "name": "Bernd Bach",
    "position": "Senior Development Engineer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/bernd-bach.jpg"
  },
  {
    "id": "path76800",
    "name": "Livio Righetti",
    "position": "Senior Development Engineer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/livio-righetti.jpg"
  },
  {
    "id": "path76080",
    "name": "Jaya Varghese",
    "position": "Senior Java Engineer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/jaya-varghese.jpg"
  },
  {
    "id": "path69640",
    "name": "Andreas Kessler",
    "position": "Senior Development Engineer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/andreas-kessler.jpg"
  },
  {
    "id": "path73764",
    "name": "Nancy Ortiz",
    "position": "Senior Development Engineer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/nancy-ortiz.jpg"
  },
  {
    "id": "path72680",
    "name": "Vitor Rocha",
    "position": "Senior Development Engineer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/vitor-rocha.jpg"
  },
  {
    "id": "path71464",
    "name": "Renze Struiksma",
    "position": "Senior Data Scientist",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/renze-struiksma.jpg"
  },
  {
    "id": "path69992",
    "name": "Christof Flück",
    "position": "Software Developer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/christof-fluck.jpg"
  },
  {
    "id": "path71956",
    "name": "Jennifer Henzen",
    "position": "Web Developer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/jennifer-henzen.jpg"
  },
  {
    "id": "path76452",
    "name": "Joshua Lehmann",
    "position": "Web Developer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/joshua-lehmann.jpg"
  },
  {
    "id": "path72308",
    "name": "Anamaria Parvu",
    "position": "Fullstack Developer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/anamaria-parvu.jpg"
  },
  {
    "id": "path73416",
    "name": "Maik Kellerhals",
    "position": "Web Developer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/maik-kellerhals.jpg"
  },
  {
    "id": "path68168",
    "name": "Hung Nguyen",
    "position": "Senior Software Developer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/hung-nguyen.jpg"
  },
  {
    "id": "path68520",
    "name": "Nestor Peña Lopez",
    "position": "Web Developer",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/nestor-pena.jpg"
  },
  {
    "id": "path69272",
    "name": "Amir Mohamed",
    "position": "Apprentice",
    "department": "Software Development",
    "pictureUrl": "./pics/software-development/amir-mohamed.jpg"
  },
  {
    "id": "path74884",
    "name": "Evgeny Solovei",
    "position": "Head of Service Delivery",
    "department": "Service Delivery",
    "pictureUrl": "./pics/service-delivery/evgeny-solovei.jpg"
  },
  {
    "id": "path75236",
    "name": "Maya Tchernycheva",
    "position": "Service Delivery Manager",
    "department": "Service Delivery",
    "pictureUrl": "./pics/service-delivery/maya-tchernycheva.jpg"
  },
  {
    "id": "path70744",
    "name": "Amelie Nordström",
    "position": "Service Delivery Manager",
    "department": "Service Delivery",
    "pictureUrl": "./pics/service-delivery/amelie-nordstrom.jpg"
  }
];
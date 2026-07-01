const QUESTIONS = [
  {
    "id": "dep-001",
    "category": "Deponie",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum ist Deponiegas problematisch?",
    "answer": "Deponiegas enthält vor allem Methan und Kohlendioxid. Methan ist in Luft bei ca. 5–15 % explosionsfähig und ab etwa 15 % brennbar. CO₂ kann ab ca. 20–25 % toxisch wirken. Zusätzlich können Spurengase toxisch sein."
  },
  {
    "id": "dep-002",
    "category": "Deponie",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum ist Sickerwasser aus Deponien problematisch?",
    "answer": "Sickerwasser kann organische und anorganische Stoffe aus dem Abfall lösen und dadurch Grundwasser verunreinigen. Deshalb braucht eine Deponie Abdichtung, Drainage und kontrollierte Sickerwasserfassung."
  },
  {
    "id": "dep-003",
    "category": "Deponie",
    "level": "Klausur",
    "type": "Zusammenhang",
    "question": "Was beschreibt das Multibarrieren-Konzept bei Deponien?",
    "answer": "Mehrere voneinander unabhängige Barrieren sollen Umweltgefährdungen vermindern: Abfallbehandlung, stabiler Deponiekörper, geeigneter Standort, Basis- und Oberflächenabdichtung, Sickerwasserdrainage, Gasfassung sowie Kontrolle und Nachsorge."
  },
  {
    "id": "dep-004",
    "category": "Deponie",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne die Barrieren des Multibarrieren-Konzepts.",
    "answer": "Abfallbehandlung, Deponiekörper, Standort/Geologie/Hydrogeologie, Basisabdichtung, Oberflächenabdichtung, Sickerwasserdrainage, Gasfassungssysteme sowie Kontrolle und Nachsorge."
  },
  {
    "id": "dep-005",
    "category": "Deponie",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum müssen die Barrieren einer Deponie unabhängig voneinander wirksam sein?",
    "answer": "Damit beim Versagen einer Barriere nicht direkt Schadstoffe in die Umwelt gelangen. Jede Barriere reduziert für sich ein Risiko, zum Beispiel Stoffmobilität, Sickerwasseraustritt, Gasaustritt oder fehlende Überwachung."
  },
  {
    "id": "dep-006",
    "category": "Deponie",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Wie lange muss man bei Siedlungsabfalldeponien ungefähr mit problematischem Sickerwasser und Deponiegas rechnen?",
    "answer": "Sickerwasser kann etwa 300 Jahre problematisch sein, Deponiegas etwa 100 Jahre."
  },
  {
    "id": "dep-007",
    "category": "Deponie",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche Phasen durchläuft eine Siedlungsabfalldeponie?",
    "answer": "Aerober Abbau, anaerobe saure Gärung, instabile Methangärung, stabile Methangärung und langfristiger Endzustand."
  },
  {
    "id": "dep-008",
    "category": "Deponie",
    "level": "Klausur",
    "type": "Zahl",
    "question": "Was änderte sich am Stichtag 01.06.2005 für organische Abfälle?",
    "answer": "Organisches Abfallmaterial durfte nicht mehr unbehandelt abgelagert werden. Dadurch wurden Behandlungsanlagen wie MVA und MBA notwendig."
  },
  {
    "id": "dep-009",
    "category": "Deponie",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Welche Probleme treten bei der Deponierung grundsätzlich auf?",
    "answer": "Sickerwasser mit Gefahr für das Grundwasser, Deponiegas mit Brand-, Explosions- und Toxizitätsrisiko sowie Setzungserscheinungen durch biologische und chemische Abbauprozesse."
  },
  {
    "id": "dep-010",
    "category": "Deponie",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum braucht eine Deponie eine Oberflächenabdichtung?",
    "answer": "Sie reduziert das Eindringen von Niederschlagswasser, begrenzt Sickerwasserbildung, verhindert unkontrollierten Gasaustritt und schützt den Deponiekörper langfristig."
  },
  {
    "id": "dep-011",
    "category": "Deponie",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum braucht eine Deponie eine Basisabdichtung?",
    "answer": "Sie schützt den Untergrund und das Grundwasser, leitet Sickerwasser kontrolliert ab und bildet eine technische Barriere zwischen Abfallkörper und Umwelt."
  },
  {
    "id": "dep-012",
    "category": "Deponie",
    "level": "Grundlagen",
    "type": "Begriff",
    "question": "Was bedeutet Landfill Mining bzw. Urban Mining im Zusammenhang mit Deponien?",
    "answer": "Deponien werden als mögliche Rohstofflager der Zukunft betrachtet. Abgelagerte Stoffe könnten später zurückgewonnen und verwertet werden."
  },
  {
    "id": "mba-001",
    "category": "MBA",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was bedeutet MBA?",
    "answer": "Mechanisch-biologische Abfallbehandlungsanlage: Eine Anlage zur Aufbereitung oder Umwandlung von Siedlungsabfällen durch mechanische/physikalische Verfahren und biologische Verfahren wie Rotte oder Vergärung."
  },
  {
    "id": "mba-002",
    "category": "MBA",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum wurde die MBA als Verfahren wichtig?",
    "answer": "Weil organische Abfälle nicht mehr unbehandelt abgelagert werden durften. Die MBA reduziert Organik, Deponiegasbildung, Sickerwasserbelastung und Setzungen."
  },
  {
    "id": "mba-003",
    "category": "MBA",
    "level": "Klausur",
    "type": "Zusammenhang",
    "question": "Was ist das Ziel der mechanischen Behandlung in einer MBA?",
    "answer": "Wertstoffe mit Erlös werden abgetrennt, zum Beispiel Schrott. Außerdem werden Stoffe entfernt, die nicht abgelagert werden dürfen oder biologisch nicht inertisiert werden können, zum Beispiel Kunststoffe."
  },
  {
    "id": "mba-004",
    "category": "MBA",
    "level": "Klausur",
    "type": "Zusammenhang",
    "question": "Was ist das Ziel der biologischen Behandlung in einer MBA?",
    "answer": "Der nativ-organische Anteil im Restmüll wird aerob oder anaerob abgebaut. Ziel ist ein möglichst inerter Abfall, der legal abgelagert werden kann."
  },
  {
    "id": "mba-005",
    "category": "MBA",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche Stoffströme entstehen typischerweise aus einer MBA?",
    "answer": "Wertstoffe, Störstoffe, heizwertreiche Fraktion, Abluft/CO₂/H₂O und ein biologisch behandelter Rest für die Deponie."
  },
  {
    "id": "mba-006",
    "category": "MBA",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Welche Massenreduktion kann eine MBA ungefähr erreichen?",
    "answer": "Etwa 30–40 % Massenreduktion."
  },
  {
    "id": "mba-007",
    "category": "MBA",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Wie stark können Sickerwasser- und Gasbelastungen durch MBA vermindert werden?",
    "answer": "Um etwa 90 %. Klimarelevante Methanemissionen können ebenfalls um über 90 % reduziert werden."
  },
  {
    "id": "mba-008",
    "category": "MBA",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Vorteile der MBA.",
    "answer": "Flexible Systeme, relativ unempfindlich gegenüber Änderungen der Abfallmenge, geringerer Investitionsbedarf und auch bei kleineren Durchsätzen von etwa 30.000–100.000 t/a rentabel."
  },
  {
    "id": "mba-009",
    "category": "MBA",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Nachteile der MBA.",
    "answer": "Deponienachsorge bleibt notwendig, höhere Betriebskosten, bei aerober Behandlung keine Nutzung der enthaltenen Energie und ein unsicherer Markt für Ersatzbrennstoffe."
  },
  {
    "id": "mba-010",
    "category": "MBA",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum reicht eine rein mechanische Behandlung von Restmüll nicht aus?",
    "answer": "Weil der organische Anteil weiterhin biologisch aktiv bleibt. Ohne biologische Stabilisierung entstehen weiterhin Deponiegas, belastetes Sickerwasser und Setzungen."
  },
  {
    "id": "mba-011",
    "category": "MBA",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum kann eine heizwertreiche Fraktion aus der MBA energetisch verwertet werden?",
    "answer": "Weil kunststoffreiche und trockene, brennbare Anteile einen hohen Heizwert besitzen. Sie können zum Beispiel in Zementwerken, Kraftwerken oder Ersatzbrennstoff-Heizkraftwerken genutzt werden."
  },
  {
    "id": "bio-001",
    "category": "Biologische Behandlung",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche zwei Grundverfahren gibt es für organische Abfälle?",
    "answer": "Anaerobe Vergärung/Fermentation und aerobe Kompostierung."
  },
  {
    "id": "bio-002",
    "category": "Biologische Behandlung",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Was ist der Hauptunterschied zwischen Vergärung und Kompostierung?",
    "answer": "Bei der anaeroben Vergärung bleibt ein Teil der Energie als Biogas nutzbar. Bei der aeroben Kompostierung wird die Energie im Prozess weitgehend verbraucht."
  },
  {
    "id": "bio-003",
    "category": "Biogas",
    "level": "Grundlagen",
    "type": "Ablauf",
    "question": "Beschreibe den groben Aufbau einer Biogasanlage.",
    "answer": "Anlieferung, Waage/Sichtkontrolle/Probenahme, Zerkleinerung und Anmaischen fester Stoffe, Störstoffentfernung, Homogenisierung, ggf. Hygienisierung, Fermentation, Biogasreinigung, Gasspeicher, BHKW und Verwertung des Gärrückstands."
  },
  {
    "id": "bio-004",
    "category": "Biogas",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Welche Hygienisierung kann bei einer Biogasanlage stattfinden?",
    "answer": "Hygienisierung bei 70 °C für 1 Stunde, falls erforderlich bzw. vorhanden."
  },
  {
    "id": "bio-005",
    "category": "Biogas",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Wie lange beträgt die Verweilzeit in Biogasreaktoren ungefähr?",
    "answer": "Etwa 15–20 Tage."
  },
  {
    "id": "bio-006",
    "category": "Biogas",
    "level": "Grundlagen",
    "type": "Verständnis",
    "question": "Wie wird Biogas typischerweise genutzt?",
    "answer": "Es wird gereinigt, zwischengespeichert und meist in einem Blockheizkraftwerk verstromt. Die Wärme kann prozessintern genutzt werden."
  },
  {
    "id": "bio-007",
    "category": "Biogas",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche Bestandteile enthält Biogas hauptsächlich?",
    "answer": "Vor allem Methan und Kohlendioxid, außerdem Spurengase wie Schwefelwasserstoff, Wasserstoff, Sauerstoff oder Stickstoff."
  },
  {
    "id": "bio-008",
    "category": "Biogas",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum muss Biogas entschwefelt werden?",
    "answer": "Schwefelwasserstoff ist giftig, riecht stark und verbrennt zu Schwefeldioxid. SO₂ ist korrosiv und umweltbelastend. Deshalb ist Entschwefelung zwingend erforderlich."
  },
  {
    "id": "bio-009",
    "category": "Biogas",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Verfahren zur Entschwefelung von Biogas.",
    "answer": "Entschwefelung mit Raseneisenerz, Adsorption an Aktivkohle, Gaswäsche oder mikrobielle Oxidation im Rieselfilmreaktor."
  },
  {
    "id": "bio-010",
    "category": "Biogas",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche weiteren Schritte gehören zur Biogasaufbereitung?",
    "answer": "Polizeifilter über Aktivkohle, Trocknung zur Korrosionsminderung und Methananreicherung durch CO₂-Abtrennung."
  },
  {
    "id": "bio-011",
    "category": "Biogas",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Verfahren zur Methananreicherung.",
    "answer": "Membranverfahren, Druckwechsel-Adsorptionsverfahren und Wäsche mit Monoethylamin."
  },
  {
    "id": "bio-012",
    "category": "Mikrobiologie",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Welche Organismengruppe ist für die Biogasbildung besonders wichtig?",
    "answer": "Methanogene Archaeen. Sie bilden Methan und sind das letzte Glied der anaeroben Nahrungskette."
  },
  {
    "id": "bio-013",
    "category": "Mikrobiologie",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum sind methanogene Archaeen empfindlich bei der Inbetriebnahme einer Biogasanlage?",
    "answer": "Sie regenerieren langsam und haben eine Verdopplungszeit von etwa 14 Tagen. Außerdem sind sie strikt anaerob und reagieren empfindlich auf Sauerstoff."
  },
  {
    "id": "bio-014",
    "category": "Mikrobiologie",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne wichtige Merkmale methanogener Archaeen.",
    "answer": "Methanogener Stoffwechsel, strikt anaerob, geringerer Stoffumsatz als Aerobier, langsame Regeneration und letztes Glied einer anaeroben Nahrungskette."
  },
  {
    "id": "bio-015",
    "category": "Kompostierung",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Welche Organismengruppe ist bei der Kompostierung besonders wichtig?",
    "answer": "Actinomyceten, besonders Streptomyces als wichtiger Eigenname."
  },
  {
    "id": "bio-016",
    "category": "Kompostierung",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum sind Actinomyceten für die Kompostierung wichtig?",
    "answer": "Sie können Antibiotika bilden, was zur Hygienisierung beiträgt, und schwer zersetzbare Stoffe wie Chitin, Cellulose, Lignin, Paraffin und Gummi abbauen."
  },
  {
    "id": "bio-017",
    "category": "Kompostierung",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche drei Phasen hat der Rotteprozess?",
    "answer": "Abbauphase, Umbauphase und Aufbauphase bzw. Reifephase/Nachrotte."
  },
  {
    "id": "bio-018",
    "category": "Kompostierung",
    "level": "Klausur",
    "type": "Ablauf",
    "question": "Was passiert in der Abbauphase der Rotte?",
    "answer": "Mikroorganismen vermehren sich, es kommt zur Selbsterhitzung bis etwa 45 °C, thermophile Organismen übernehmen, die Intensivrotte beginnt und Temperaturen bis ca. 70 °C können erreicht werden."
  },
  {
    "id": "bio-019",
    "category": "Kompostierung",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Wann wird beim Rotteprozess ungefähr die Maximaltemperatur erreicht?",
    "answer": "Nach etwa 3–5 Tagen."
  },
  {
    "id": "bio-020",
    "category": "Kompostierung",
    "level": "Klausur",
    "type": "Ablauf",
    "question": "Was passiert in der Umbauphase der Rotte?",
    "answer": "Schwer zersetzbare Stoffe werden zu leichter abbaubaren Untereinheiten umgebaut, weitere Substanzen werden mineralisiert, Pilze werden wichtiger und die Temperatur sinkt."
  },
  {
    "id": "bio-021",
    "category": "Kompostierung",
    "level": "Klausur",
    "type": "Ablauf",
    "question": "Was passiert in der Aufbauphase der Rotte?",
    "answer": "Der Kompost kühlt ab, Actinomyceten vermehren sich stark, schwer abbaubare Verbindungen wie Lignin werden zu Huminstoffen umgebaut und die wertgebende Kompoststruktur entsteht."
  },
  {
    "id": "bio-022",
    "category": "Kompostierung",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Wie lange dauert der Rotteprozess ungefähr?",
    "answer": "16–25 Wochen bei unbehandelten Mieten, 12–16 Wochen bei künstlicher Belüftung, 9–12 Wochen bei regelmäßigem Umsetzen und Belüften."
  },
  {
    "id": "abw-001",
    "category": "Abwasser",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche grundsätzlichen Reinigungsverfahren gibt es in der Abwasserreinigung?",
    "answer": "Mechanisch/physikalische, biologische und chemische Reinigungsverfahren."
  },
  {
    "id": "abw-002",
    "category": "Abwasser",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne vier Arten von Abwasserinhaltsstoffen.",
    "answer": "Zehrstoffe, Nährstoffe, Schadstoffe und Störstoffe."
  },
  {
    "id": "abw-003",
    "category": "Abwasser",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum sind Zehrstoffe im Abwasser problematisch?",
    "answer": "Sie sind biologisch abbaubar, verbrauchen beim Abbau Sauerstoff und können dadurch Sauerstoffmangel im Gewässer verursachen, bis hin zu Fischsterben."
  },
  {
    "id": "abw-004",
    "category": "Abwasser",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum sind Nährstoffe im Abwasser problematisch?",
    "answer": "Stickstoff- und Phosphorverbindungen fördern übermäßiges Pflanzen- und Algenwachstum. Das führt zur Eutrophierung, besonders in stehenden Gewässern."
  },
  {
    "id": "abw-005",
    "category": "Kläranlage",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Wozu dient die Rechenanlage einer Kläranlage?",
    "answer": "Sie entfernt grobe Verunreinigungen und schützt nachfolgende Pumpen und Anlagenteile vor Verstopfung."
  },
  {
    "id": "abw-006",
    "category": "Kläranlage",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Wozu dient der Sandfang?",
    "answer": "Er entfernt absetzbare mineralische Stoffe wie Sand, um Verstopfungen und Verschleiß zu minimieren."
  },
  {
    "id": "abw-007",
    "category": "Kläranlage",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Wozu dient das Vorklärbecken?",
    "answer": "Ungelöste Stoffe setzen sich ab oder schwimmen auf. Etwa ein Drittel der organischen Stoffe wird entfernt. Primärschlamm geht zum Voreindicker."
  },
  {
    "id": "abw-008",
    "category": "Kläranlage",
    "level": "Ablauf",
    "type": "Ablauf",
    "question": "Beschreibe den Weg des Schlamms in einer Kläranlage.",
    "answer": "Primärschlamm und Überschussschlamm gehen in den Voreindicker, dann in den Faulturm, anschließend in den Nacheindicker, danach zur Schlammpresse und schließlich zur Verwertung oder Entsorgung."
  },
  {
    "id": "abw-009",
    "category": "Kläranlage",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche biologischen Reinigungsverfahren gibt es?",
    "answer": "Belebtschlammverfahren, Tropfkörperverfahren, Tauchkörperverfahren und Festbettreaktorverfahren."
  },
  {
    "id": "abw-010",
    "category": "Kläranlage",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Was ist bei biologischen Reinigungsstufen grundsätzlich essentiell?",
    "answer": "Gute Durchmischung und ausreichende Belüftung, damit Mikroorganismen die organischen Stoffe abbauen können."
  },
  {
    "id": "abw-011",
    "category": "Kläranlage",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Wozu dient der Faulturm?",
    "answer": "Organik im Schlamm wird unter anaeroben Bedingungen abgebaut. Dabei entstehen Faulgas und Faulschlamm."
  },
  {
    "id": "abw-012",
    "category": "Kläranlage",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was bedeuten BSB₅ und CSB grundsätzlich?",
    "answer": "BSB₅ beschreibt den biologischen Sauerstoffbedarf innerhalb von 5 Tagen. CSB beschreibt den chemischen Sauerstoffbedarf. Beide geben Hinweise auf die organische Belastung des Wassers."
  },
  {
    "id": "th-001",
    "category": "Thermische Behandlung",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Ziele der thermischen Abfallbehandlung.",
    "answer": "Hygienisierung, Volumenreduktion, Energiegewinnung, Schadstoffvernichtung, Inertisierung, Erzeugung verwertbarer Reststoffe und Reduzierung von Umweltbelastungen."
  },
  {
    "id": "th-002",
    "category": "Thermische Behandlung",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Ordne die Brennstoffe nach Heizwert.",
    "answer": "Erdgas > Heizöl > Steinkohle > trockenes Holz > Hausmüll > Braunkohle."
  },
  {
    "id": "th-003",
    "category": "Thermische Behandlung",
    "level": "Grundlagen",
    "type": "Zuordnung",
    "question": "Wozu dienen Bunker, Verbrennungsofen, Kessel/Turbine und Rauchgasreinigung in einer MVA?",
    "answer": "Bunker: Lagerung. Verbrennungsofen: thermische Umsetzung. Kessel/Turbine: Energienutzung. Rauchgasreinigung: Schadstoffabtrennung."
  },
  {
    "id": "th-004",
    "category": "Thermische Behandlung",
    "level": "Grundlagen",
    "type": "Zuordnung",
    "question": "Welche Feuerungssysteme gibt es und wofür eignen sie sich?",
    "answer": "Rostfeuerung für inhomogenen Hausmüll, Wirbelschichtfeuerung für aufbereiteten/homogenen Abfall, Drehrohrofen häufig für Sondermüll."
  },
  {
    "id": "th-005",
    "category": "Thermische Behandlung",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum eignet sich die Rostfeuerung besonders für Hausmüll?",
    "answer": "Hausmüll ist inhomogen. Die Rostfeuerung kann unterschiedliche Stückgrößen und Zusammensetzungen relativ robust verbrennen."
  },
  {
    "id": "th-006",
    "category": "Thermische Behandlung",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche Arten von Verbrennungsluft gibt es?",
    "answer": "Primärluft, Sekundärluft und Tertiärluft."
  },
  {
    "id": "th-007",
    "category": "Thermische Behandlung",
    "level": "Klausur",
    "type": "Definition",
    "question": "Wofür wird Primärluft bei der Verbrennung eingesetzt?",
    "answer": "Sie strömt von unten durch den Rost und bringt Sauerstoff in die Müllschicht für die Primärverbrennung."
  },
  {
    "id": "th-008",
    "category": "Thermische Behandlung",
    "level": "Klausur",
    "type": "Definition",
    "question": "Wofür wird Sekundärluft eingesetzt?",
    "answer": "Sie wird oberhalb der Flamme seitlich eingeblasen, verwirbelt Verbrennungsgase und unterstützt die Sekundärverbrennung unverbrannter Gase."
  },
  {
    "id": "th-009",
    "category": "MVA Emissionen",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Gruppen potentieller MVA-Emissionen.",
    "answer": "Flugstaub/Salze, Schwefeloxide, Halogenverbindungen, Stickoxide, Kohlenstoffverbindungen, Schwermetalle, Dioxine/Furane und Wasserdampf."
  },
  {
    "id": "th-010",
    "category": "MVA Emissionen",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Verfahren zur Abscheidung partikelförmiger Verunreinigungen.",
    "answer": "Zyklon, Gewebefilter und Elektrofilter."
  },
  {
    "id": "th-011",
    "category": "MVA Emissionen",
    "level": "Klausur",
    "type": "Definition",
    "question": "Nach welchem Prinzip arbeitet ein Zyklon?",
    "answer": "Er nutzt die Trägheit der Staubpartikel, die durch die Strömung abgeschieden werden."
  },
  {
    "id": "th-012",
    "category": "MVA Emissionen",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Wie können saure gasförmige Schadstoffe und Schwermetallverbindungen abgeschieden werden?",
    "answer": "Durch Adsorption an oberflächenaktiven Stoffen wie Aktivkohle oder Kalk."
  },
  {
    "id": "th-013",
    "category": "MVA Emissionen",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Welche Verfahren gibt es zur Rauchgas-Entstickung?",
    "answer": "SNCR bei etwa 900–1000 °C und SCR bei etwa 180–350 °C. NOx wird zu N₂ und H₂O reduziert."
  },
  {
    "id": "rec-001",
    "category": "Abfallvermeidung",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Wie ist die Abfallhierarchie aufgebaut?",
    "answer": "Vermeidung, Vorbereitung zur Wiederverwendung, Recycling, sonstige Verwertung und Beseitigung."
  },
  {
    "id": "rec-002",
    "category": "Abfallvermeidung",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Welche zwei Arten von Abfallvermeidung gibt es?",
    "answer": "Qualitative Abfallvermeidung, zum Beispiel Substitution problematischer Stoffe, und quantitative Abfallvermeidung, zum Beispiel Verringerung der Materialmasse."
  },
  {
    "id": "rec-003",
    "category": "Abfallvermeidung",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Wie viel wird ungefähr in der Produktentwicklung festgelegt?",
    "answer": "Etwa 95 % der Werkstoffe und Verfahren sowie etwa 80 % der Kosten."
  },
  {
    "id": "rec-004",
    "category": "Abfallvermeidung",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Kriterien für die Werkstoffauswahl.",
    "answer": "Schadstoffarme Werkstoffe, Werkstoffminimierung, Lebensdauererhöhung, Demontagefreundlichkeit, Kennzeichnung, Wiederverwendung, Recyclingfreundlichkeit und geringe Werkstoffvielfalt."
  },
  {
    "id": "rec-005",
    "category": "Recycling",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Wozu dient die Ökodesign-Richtlinie?",
    "answer": "Sie schafft einen Rahmen für Anforderungen an die umweltgerechte Gestaltung energieverbrauchsrelevanter Produkte."
  },
  {
    "id": "rec-006",
    "category": "Recycling",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was bedeutet die CE-Kennzeichnung in diesem Zusammenhang?",
    "answer": "Das Produkt erfüllt die Anforderungen und darf in der EU verkauft, betrieben oder importiert werden."
  },
  {
    "id": "rec-007",
    "category": "Recycling",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Vorschläge für demontagegerechte Konstruktion.",
    "answer": "Wenige Bauteile, leicht lösbare Verbindungen, einfache Trennung von Materialien, wirtschaftliche Demontage und effizientes Rücknahmesystem."
  },
  {
    "id": "rec-008",
    "category": "E-Schrott",
    "level": "Grundlagen",
    "type": "Verständnis",
    "question": "Warum wird E-Schrott getrennt erfasst?",
    "answer": "Wegen kritischer Bestandteile wie Quecksilber, FCKW, Blei- und Cadmium-haltigen Bildröhren, PCB-haltigen Kondensatoren und flammschutzmittelbehandelten Teilen."
  },
  {
    "id": "rec-009",
    "category": "E-Schrott",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche wertgebenden Bestandteile enthält E-Schrott?",
    "answer": "Gold, Silber, Platin, seltene Erden, Kupfer, Aluminium, Eisen, Stahl und hochwertige Kunststoffe."
  },
  {
    "id": "rec-010",
    "category": "E-Schrott",
    "level": "Ablauf",
    "type": "Ablauf",
    "question": "Nenne die vier Schritte der E-Schrottverwertung.",
    "answer": "Schadstoffentfrachtung, Vordemontage, Demontage, Schreddern und Trennen."
  },
  {
    "id": "rec-011",
    "category": "E-Schrott",
    "level": "Grundlagen",
    "type": "Verständnis",
    "question": "Wie müssen Energiesparlampen entsorgt werden?",
    "answer": "Sie müssen bei kommunalen oder gewerblichen Sammelstellen abgegeben werden, weil sie Quecksilber enthalten. Glüh- und Halogenlampen gehören in den Restmüll, nicht ins Altglas."
  },
  {
    "id": "rec-012",
    "category": "Batterien",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche umweltgefährdenden Bestandteile können Batterien enthalten?",
    "answer": "Cadmium, Quecksilber und Blei."
  },
  {
    "id": "rec-013",
    "category": "Batterien",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Wie viel Wasser kann eine einzige Knopfzelle durch Quecksilber belasten?",
    "answer": "Etwa 800.000 Liter Wasser über den Trinkwassergrenzwert hinaus."
  },
  {
    "id": "rec-014",
    "category": "Altautos",
    "level": "Zahlen",
    "type": "Zahl",
    "question": "Welche Verwertungsquoten gelten für Altautos ab 2015?",
    "answer": "85 % Wiederverwendung und Recycling, 95 % Verwertung insgesamt, 10 % energetische Verwertung und weniger als 5 % Beseitigung."
  },
  {
    "id": "rec-015",
    "category": "Altautos",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne umweltgefährdende Bestandteile von Altfahrzeugen.",
    "answer": "Ölfilter, Batterie, quecksilberhaltige Schalter und asbesthaltige Bauteile."
  },
  {
    "id": "rec-016",
    "category": "Altautos",
    "level": "Ablauf",
    "type": "Ablauf",
    "question": "Was passiert mit der Restkarosse im Schredderbetrieb?",
    "answer": "Sie wird geschreddert. Eisenmetalle werden magnetisch abgetrennt, NE-Metalle sortiert, Schredderabfälle aufbereitet und eine energiereiche Restfraktion gewonnen."
  },
  {
    "id": "alt-001",
    "category": "Altlasten",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was ist eine altlastverdächtige Fläche?",
    "answer": "Eine Altablagerung oder ein Altstandort, bei dem der Verdacht schädlicher Bodenveränderungen oder sonstiger Gefahren besteht."
  },
  {
    "id": "alt-002",
    "category": "Altlasten",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was ist eine Altablagerung?",
    "answer": "Eine stillgelegte Abfallbeseitigungsanlage oder ein Grundstück, auf dem Abfälle behandelt, gelagert oder abgelagert wurden."
  },
  {
    "id": "alt-003",
    "category": "Altlasten",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was ist ein Altstandort?",
    "answer": "Ein Grundstück stillgelegter Anlagen oder eine Fläche, auf der mit umweltgefährdenden Stoffen umgegangen wurde."
  },
  {
    "id": "alt-004",
    "category": "Altlasten",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne häufige Kontaminanten auf Altlastflächen.",
    "answer": "MKW, BTXE, Schwermetallsalze, LCKW/FCKW und sonstige organische Chlorverbindungen."
  },
  {
    "id": "alt-005",
    "category": "Altlasten",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Welche Sanierungsmaßnahmen gibt es?",
    "answer": "Verwaltungsmaßnahmen, Sicherungsmaßnahmen, Umlagerung, Dekontamination oder Selbstreinigung mit Überwachung."
  },
  {
    "id": "alt-006",
    "category": "Altlasten",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Verfahren zur Bodenreinigung.",
    "answer": "Elektrokinetische Sanierung, thermische Verfahren, chemisch-physikalische Verfahren, Bodenwaschverfahren, Bodenluftabsaugung, Immobilisierung und mikrobiologische Verfahren."
  },
  {
    "id": "luft-001",
    "category": "Luft",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne wichtige Luftschadstoffe.",
    "answer": "Schwefel- und Stickstoffverbindungen, Schwefeloxide, Salzsäure, Kohlendioxid, Methan, SF₆, NF₃ und Dioxine."
  },
  {
    "id": "luft-002",
    "category": "Luft",
    "level": "Klausur",
    "type": "Verständnis",
    "question": "Warum sind Stickstoffverbindungen als Luftschadstoffe problematisch?",
    "answer": "Sie können Eutrophierung verursachen, Nährstoffverhältnisse verändern und die Biodiversität verringern."
  },
  {
    "id": "luft-003",
    "category": "Abgasreinigung",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was ist Absorption?",
    "answer": "Das Aufnehmen von Gasen durch feste oder flüssige Sorptionsmittel, wobei sich die Gase im Mittel lösen."
  },
  {
    "id": "luft-004",
    "category": "Abgasreinigung",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was ist Adsorption?",
    "answer": "Die Anreicherung von Stoffen aus Gasen oder Flüssigkeiten an der Oberfläche eines Festkörpers."
  },
  {
    "id": "luft-005",
    "category": "Abgasreinigung",
    "level": "Klausur",
    "type": "Vergleich",
    "question": "Unterschied zwischen thermischer und katalytischer Nachverbrennung?",
    "answer": "Thermische Nachverbrennung läuft bei etwa 750–1000 °C, katalytische bei etwa 250–650 °C. Die katalytische Variante spart Energie."
  },
  {
    "id": "recht-001",
    "category": "Recht",
    "level": "Grundlagen",
    "type": "Definition",
    "question": "Was bedeutet Basler Übereinkommen?",
    "answer": "Übereinkommen über die Kontrolle der grenzüberschreitenden Verbringung gefährlicher Abfälle und ihrer Entsorgung."
  },
  {
    "id": "recht-002",
    "category": "Recht",
    "level": "Grundlagen",
    "type": "Vergleich",
    "question": "Unterschied zwischen EU-Verordnung und EU-Richtlinie?",
    "answer": "Eine EU-Verordnung gilt unmittelbar. Eine EU-Richtlinie muss in nationales Recht umgesetzt werden."
  },
  {
    "id": "recht-003",
    "category": "Recht",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Gesetz und Verordnung der Wasserreinhaltung.",
    "answer": "Wasserhaushaltsgesetz WHG und Abwasserverordnung AbwV."
  },
  {
    "id": "recht-004",
    "category": "Recht",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Gesetz der Luftreinhaltung.",
    "answer": "Bundes-Immissionsschutzgesetz BImSchG und dazugehörige Bundes-Immissionsschutzverordnungen."
  },
  {
    "id": "recht-005",
    "category": "Recht",
    "level": "Grundlagen",
    "type": "Aufzählung",
    "question": "Nenne Gesetz und Verordnung der Bodenreinhaltung.",
    "answer": "Bundes-Bodenschutzgesetz BBodSchG und Bundes-Bodenschutz- und Altlastenverordnung."
  }
];

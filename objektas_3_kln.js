'use-strict';

let klientas = {
    vardas: 'vardas',
    pavarde: 'pavarde',
    asmensKodas: 'asmensKodas',
    prisijungimoData: '2022-07-11',
    adresas: 'adresas',
    elPastas: 'pastas@pastas.lt',  

    pakeisk:function(sarasoNumeris) {
        this.vardas = 'vardas'+sarasoNumeris;
        this.pavarde='pavarde'+sarasoNumeris;
        this.asmensKodas='asmensKodas'+sarasoNumeris;
        this.prisijungimoData= '2022-07-11'+sarasoNumeris;
        this.adresas= 'adresas'+sarasoNumeris;
        this.elPastas= 'pastas@pastas.lt'+sarasoNumeris;
    }
};

let masyvasKlientai = [];

for(let i=0; i<200; i++) {
    let klientas = {
        vardas: 'vardas',
        pavarde: 'pavarde',
        asmensKodas: 'asmensKodas',
        prisijungimoData: '2022-07-11',
        adresas: 'adresas',
        elPastas: 'pastas@pastas.lt',  
    
        pakeisk:function(sarasoNumeris) {
            this.vardas = 'vardas'+sarasoNumeris;
            this.pavarde='pavarde'+sarasoNumeris;
            this.asmensKodas='asmensKodas'+sarasoNumeris;
            this.prisijungimoData= '2022-07-11'+sarasoNumeris;
            this.adresas= 'adresas'+sarasoNumeris;
            this.elPastas= 'pastas@pastas.lt'+sarasoNumeris;
        }
    }

    masyvasKlientai.push(klientas);
    klientas.pakeisk(i);
};

console.log(masyvasKlientai);

for(let i=0; i<masyvasKlientai.length; i++) {
    let tr;

    tr = document.createElement('tr');
    
    let td;
    td = document.createElement('td');
    
    tr.appendChild(td);
    
    document.querySelector('.klientai').appendChild(tr);
};


function Calculadora() {

    this.display = document.getElementById('display-p');
    this.recent = document.getElementById('recent');
    this.historico = [];

    this.inicia = () => {
        this.historicoSalvo = localStorage.getItem('historico');

        if(this.historicoSalvo) {
            this.historico = JSON.parse(this.historicoSalvo);
            this.imprimeHistorico(this.historico);
        }

       this.capturaTeclas();
       this.cliqueBotoes();
       this.cliqueHist();
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {

            const el = e.target.closest('button');

            if(el.classList.contains('btn-num')) {
                this.btnParaDipslay(el.textContent);
            }; 

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            };

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            };

            if(el.classList.contains('btn-del')) {
                this.apagaUm();
            };

            if(el.classList.contains('recent-btn')) {
                this.abreFechaistorico();
            }

            if(el.classList.contains('parenteses')) {
                const txt = this.display.textContent;
                const abertos = this.parAtual(txt);

                if(abertos === 0) {
                    this.display.textContent += '(';
                } else {
                    this.display.textContent += ')';
                }
            }

        });
    };

    this.realizaConta = function() {

        this.conta = this.display.textContent;

        try {
            if (!/^[0-9+\-*/().\s]+$/.test(this.conta)) {
                return alert('Invalido');  
            }

            this.resultado = eval(this.conta);

            if(!this.resultado === undefined || isNaN(this.resultado)) {
                alert('Conta Invalida');
                return;
            }
    
            this.resultado = parseFloat(this.resultado.toFixed(2));
            this.formatado = String(this.resultado);

            this.addHistorico(this.formataOperador(this.conta), this.formatado)
            this.display.textContent = this.formatado;

        } catch(e) {
            alert('Conta invalida! ' + e);
            return
        }

    };

    this.cliqueHist = () => {
        this.recent.addEventListener('click', (e) => {
            if(e.target.classList.contains('item')) {
                const conta = e.target.textContent;
                const resultado = conta.split('=').pop().trim();
                this.display.textContent = resultado;
            }
        });
    };

    this.parAtual = txt => {
        const abertos = (txt.match(/\(/g) || []).length;
        const fechados = (txt.match(/\)/g) || []).length;

        return abertos - fechados;
    };

    this.addHistorico = (conta, resultado) => {

        const linha = `${conta} = ${resultado}`;
        this.historico.unshift(linha);

        localStorage.setItem('historico', JSON.stringify(this.historico));

        const li = document.createElement('li');
        li.textContent = linha;
        li.classList.add('item');
        this.recent.prepend(li);
    }

    this.imprimeHistorico = lista => {

        this.recent.innerHTML = '';

        for (const conta of lista) {
            const li = document.createElement('li');
            li.textContent = conta;
            li.classList.add('item');
            this.recent.appendChild(li);
        }
    };

        this.capturaTeclas = () => {
        document.addEventListener('keyup', (e) => {
            const tecla = e.key;


            if(tecla === 'Enter' || tecla === '=') { 
                this.realizaConta();
            } else if(tecla === 'Backspace') {
                this.apagaUm();
            } else if (tecla.toUpperCase() === 'C') {
                this.clearDisplay();
            } else if (tecla.toUpperCase() === 'R') {
                this.abreFechaistorico();
            } else if (tecla.toUpperCase() === 'X') {
                localStorage.clear();
            }
            else {
                const permitidos = '0123456789+-*/().';
                if(permitidos.includes(tecla)) {
                    this.btnParaDipslay(tecla);
                }
            }

        })
    }

    this.formataOperador = str => str.replace(/([+\-*/])/g, " $1 ");
    this.abreFechaistorico = () => this.recent.classList.toggle('active');
    this.btnParaDipslay = valor => this.display.textContent += valor + ' ';
    this.clearDisplay = () => this.display.textContent = '';
    this.apagaUm= () => this.display.textContent = this.display.textContent.slice(0, -1);


}

const CALC = new Calculadora();
CALC.inicia();

console.log(CALC);

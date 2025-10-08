function criaCalculadora() {

    return {
        display: document.getElementById('display-p'),
        recent: document.getElementById('recent'),
        historico: [],

        inicia() {
            
            const historicoSalvo = localStorage.getItem('historico');
            
            if(historicoSalvo) {
                this.historico = JSON.parse(historicoSalvo);
                this.imprimeHistorico(this.historico);
            }
            
            this.cliqueBotoes();
        },

        realizaConta() {
            let conta = this.display.textContent;
            let resultado = '';

            try {

                 if (!/^[0-9+\-*/().\s]+$/.test(conta)) {
                    return alert('paia mano');   
                }
                
                resultado = eval(conta);
                
                if(!resultado) {
                    alert('Conta Invalida');
                    return;
                }

                let formatado = Number(resultado.toFixed(2));

                this.addHistorico(this.formataOperador(conta), formatado);
                this.display.textContent = String(formatado);
                console.log(this.historico);
                

            } catch(e) {
                alert('Conta Invalida!');
                return;
            } 

        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el =  e.target.closest('button');
                
                if(el.classList.contains('btn-num')) {
                    this.btnParaDipslay(el.textContent);
                }   

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                if(el.classList.contains('recent-btn')) {
                    this.abreFechaHistorico();
                    this.imprimeHistorico(this.historico);
                }

            }.bind(this));
        },

        btnParaDipslay(valor) {
            this.display.textContent += valor;
        },

        abreFechaHistorico() {
             this.recent.classList.toggle('active');
        },

        formataOperador(str) {
            
            // const operadores = ['+', '-', '*', '/'];
            // const operador = operadores.find(op => str.includes(op));

            // if(operador) {
            //     return str.replace(operador, ` ${operador} `);
            // };

            return str.replace(/([+\-*/])/g, " $1 ");
        },

        imprimeHistorico(lista) {

            this.recent.innerHTML = '';
            
            for (const conta of lista) {
                const li = document.createElement('li');
                li.textContent = conta;
                this.recent.appendChild(li);
            }

        },

        addHistorico(str, resultado) {

            let conta = `${str} = ${resultado}`;

            this.historico.unshift(conta);

            localStorage.setItem('historico', JSON.stringify(this.historico));
        },

        clearDisplay() {
            this.display.textContent = '';
        },

        apagaUm() {
            this.display.textContent = this.display.textContent.slice(0, -1);
        },

    };


}

const calculadora = criaCalculadora();

calculadora.inicia();
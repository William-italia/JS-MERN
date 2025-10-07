function criaCalculadora() {

    return {
        display: document.getElementById('display-p'),

        inicia() {
            this.cliqueBotoes();
        },

        realizaConta() {
            let conta = this.display.textContent;

            try {

                 if (!/^[0-9+\-*/().\s]+$/.test(conta)) {
                    return alert('paia mano');   
                }
                
                conta = eval(conta);
                console.log(conta);
                
                if(!conta) {
                    alert('Conta Invalida');
                    return;
                }

                this.display.textContent = String(conta);

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

            }.bind(this));
        },

        btnParaDipslay(valor) {
            this.display.textContent += valor;
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
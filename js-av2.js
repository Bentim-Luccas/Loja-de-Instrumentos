
class InstrumentoMusical {
    constructor(nome, marca, tipo, cor, quantidadeEmEstoque) {
        this.nome = nome;                // Ex: "Guitarra Les Paul"
        this.marca = marca;              // Ex: "Gibson"
        this.tipo = tipo;                // Ex: "Corda"
        this.cor = cor;                  // Ex: "Vermelha"
        this.quantidadeEmEstoque = quantidadeEmEstoque; // Atributo numérico
    }

    adicionarEstoque(valor) {
        if (typeof valor === 'number' && valor >= 0) {
            this.quantidadeEmEstoque += valor;
            return { sucesso: true, mensagem: "Estoque atualizado com sucesso." };
        }
        return { sucesso: false, mensagem: "Valor inválido para adicionar ao estoque." };
    }

    removerEstoque(valor) {
        if (typeof valor === 'number' && valor >= 0) {
            if (this.quantidadeEmEstoque - valor >= 0) {
                this.quantidadeEmEstoque -= valor;
                return { sucesso: true, mensagem: "Estoque atualizado com sucesso." };
            } else {
                return { sucesso: false, mensagem: "Não é possível ter estoque negativo." };
            }
        }
        return { sucesso: false, mensagem: "Valor inválido para reduzir o estoque." };
    }
}
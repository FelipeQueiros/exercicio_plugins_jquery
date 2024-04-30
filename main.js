$(document).ready(function() {
    $('input[name="telef"]').mask("(00) 00000-0000");
    $('input[name="cepp"]').mask('00000-000');
    $('input[name="cpf"]').mask('000.000.000-00');

});

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                number: true
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                number: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                number: "Por favor, insira apenas números."
            },
            cpf: {
                required: "Por favor, insira seu CPF.",
                number: "Por favor, insira apenas números."
            },
            endereco: {
                required: "Por favor, insira seu endereço."
            },
            cep: {
                required: "Por favor, insira seu CEP.",
                number: "Por favor, insira apenas números."
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

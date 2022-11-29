import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User } from "../../@types/user";

export function useAuth() {

    // QUANDO CARREGAR A PÁGINA, IRÁ RODAR O USEEFFECT
    useEffect(()=> {
        setName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    }, [])

    // CRIANDO AS VARIÁVEIS DE ESTADO
    const [first_name, setName] = useState('');
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    // ESTADO DAS VALIDAÇÕES:
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    // REALIZAR A VALIDAÇÃO DOS DADOS ANTES DE CADASTRAR
    function validarDadosCadastro() {
        if (first_name.length > 0 && email.length > 12){
            if (password !== confPassword){
                notifyErrors('As senhas não estão iguais!!');
                return false;
            }
            else if (
                lowerValidated == true &&
                upperValidated == true &&
                numberValidated == true &&
                specialValidated == true &&
                lengthValidated == true
            ){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    // FUNÇÃO QUE IRÁ REALIZAR A VALIDAÇÃO DA SENHA
    function handleValidation(password: string) {
        // REGEX
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})');
    
        // LOWER CASE VALIDATION
        if (lower.test(password)){
            setLowerValidated(true);
        } else {
            setLowerValidated(false);
        }
        // UPPER CASE VALIDATION
        if (upper.test(password)){
            setUpperValidated(true);
        } else {
            setUpperValidated(false);
        }
        // NUMBER VALIDATION
        if (number.test(password)){
            setNumberValidated(true);
        } else {
            setNumberValidated(false);
        }
        // SPECIAL VALIDATION
        if (special.test(password)){
            setSpecialValidated(true);
        } else {
            setSpecialValidated(false);
        }
        // LENGTH VALIDATION
        if (length.test(password)){
            setLengthValidated(true);
        } else {
            setLengthValidated(false);
        }
    }

    // FUNÇÃO QUE IRÁ LIMPAR O FORMULÁRIO 
    function limparForm() {
        setName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    }

    // EXIBIR MENSAGEM DO TOASTIFY
    function notifySucces(value: string) {
        toast.success(value, {position: toast.POSITION.TOP_RIGHT})
    }

    function notifyErrors(value: string) {
        toast.error(value, {position: toast.POSITION.TOP_RIGHT})
    }

    // FUNÇÃO QUE REALIZARÁ O POST COM O CADASTRO DO USUÁRIO
    async function cadastrarUser(userInput : User){
        if (validarDadosCadastro()) {
            const response = await api.post('/users/', {
                ...userInput
            }).then(()=>{
                notifySucces('Cadastrado com sucesso!!');
                notifySucces('Enviamos um email para ativar sua conta.');
                console.log('Cadastrado usuário '+ email);
                limparForm();
            }).catch((error) =>{
                console.log('Deu erro :'+error.response?.data?.message);
                notifyErrors('Erro interno no sistema');
            })
        } else {
            notifyErrors("Preencha os dados corretamente!!!");
        }
    }


    // TODO: CRIAR CHAMADA DE API DE LOGIN E ESQUECER SENHA, 















    return {
        // username,
        // setUsername,
        first_name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confPassword,
        setConfPassword,
        lowerValidated,
        upperValidated,
        numberValidated,
        specialValidated,
        lengthValidated,
        handleValidation,
        limparForm,
        cadastrarUser,
    }
}

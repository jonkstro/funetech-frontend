import { useEffect, useState } from "react";

export function useAuth() {

    // QUANDO CARREGAR A PÁGINA, IRÁ RODAR O USEEFFECT
    useEffect(()=> {
        setNome('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    }, [])

    // CRIANDO AS VARIÁVEIS DE ESTADO
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    // ESTADO DAS VALIDAÇÕES:
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    function validarDados() {
        if (nome.length > 0 && email.length > 12 && password.length > 8){
            if (password === confPassword){

            }
        }
    }

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
















    return {
        nome,
        setNome,
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
        handleValidation
    }
}

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ActivateUser,
  Forgot,
  Login,
  ResetPassword,
  User,
} from "../../@types/user";
import { useRouter } from "next/router";

export function useAuth() {
  const router = useRouter();

  // QUANDO CARREGAR A PÁGINA, IRÁ RODAR O USEEFFECT
  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
    setConfPassword("");
  }, []);

  // CRIANDO AS VARIÁVEIS DE ESTADO
  const [first_name, setName] = useState("");
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [id, setId] = useState('');
  // ESTADO DAS VALIDAÇÕES:
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);

  // REALIZAR A VALIDAÇÃO DOS DADOS ANTES DE CADASTRAR
  function validarDadosCadastro() {
    if (first_name.length > 0 && email.length > 12) {
      if (password !== confPassword) {
        notifyErrors("As senhas não estão iguais!!");
        return false;
      } else if (
        lowerValidated == true &&
        upperValidated == true &&
        numberValidated == true &&
        specialValidated == true &&
        lengthValidated == true
      ) {
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
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    // LOWER CASE VALIDATION
    if (lower.test(password)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    // UPPER CASE VALIDATION
    if (upper.test(password)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    // NUMBER VALIDATION
    if (number.test(password)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    // SPECIAL VALIDATION
    if (special.test(password)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    // LENGTH VALIDATION
    if (length.test(password)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  }

  // FUNÇÃO QUE IRÁ LIMPAR O FORMULÁRIO
  function limparForm() {
    setName("");
    setEmail("");
    setPassword("");
    setConfPassword("");
  }

  // EXIBIR MENSAGEM DO TOASTIFY
  function notifySucces(value: string) {
    toast.success(value, { position: toast.POSITION.TOP_RIGHT });
  }

  function notifyErrors(value: string) {
    toast.error(value, { position: toast.POSITION.TOP_RIGHT });
  }

  // FUNÇÃO QUE REALIZARÁ O POST COM O CADASTRO DO USUÁRIO
  async function cadastrarUser(userInput: User) {
    if (validarDadosCadastro()) {
      await api
        .post("/auth/users/", {
          ...userInput,
        })
        .then((response) => {
          notifySucces("Cadastrado com sucesso!!");
          notifySucces("Enviamos um email para ativar sua conta.");
          console.log("Cadastrado usuário " + response.data);
          limparForm();
          router.push("/auth");
        })
        .catch((error) => {
          if (error.response?.status == 500) {
            console.log("Error", error);
            notifyErrors("Email já está sendo usado");
          } else {
            notifyErrors("Erro interno do sistema");
            console.log(error);
          }
        });
    } else {
      notifyErrors("Preencha os dados corretamente!!!");
    }
  }

  // FUNÇÃO QUE IRÁ ATIVAR A CONTA DO USUÁRIO
  async function activateUser(activateInput: ActivateUser) {
    await api
      .post("/auth/users/activation/", {
        ...activateInput,
      })
      .then((response) => {
        notifySucces("Ativado com sucesso!!");
        router.push("/auth");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // FUNÇÃO QUE IRÁ PEGAR O TOKEN DO USUÁRIO
  async function loginUser(loginInput: Login) {
    await api
      .post("/auth/token/login/", {
        ...loginInput,
      })
      .then((response) => {
        // notifySucces('Logado com sucesso!!!');
        // ARMAZENAR A TOKEN NO LOCALSTORAGE:
        localStorage.setItem("token", response.data.auth_token);
        router.push("/plataforma");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.non_field_errors[0]) {
          notifyErrors("Email ou Senha incorretos.");
        } else {
          notifyErrors("Erro interno do sistema.");
        }
      });
  }

  // FUNÇÃO DE LOGOUT -> USEPLATAFORMA
  async function logoutUser() {
    await api
      .post("/auth/token/logout/", localStorage.getItem("token"), {
        headers: {
          "Content-Type": "application/json",
          'Authorization': "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // notifySucces('Deslogado com sucesso!!!');
        // REMOVER A TOKEN NO LOCALSTORAGE:
        localStorage.removeItem("token");
        router.push("/auth");
      })
      .catch((error) => {
        notifyErrors("Erro interno do sistema");
        console.log(error);
        console.log("Token localstorage " + localStorage.getItem("token"));
        // console.log("Token usestate "+token);
      });
  }

  // FUNÇÃO DE ENVIAR EMAIL COM LINK PARA MUDAR SENHA
  async function forgotPassword(emailInput: Forgot) {
    if (email.length > 6) {
      await api
        .post("/auth/users/reset_password/", {
          ...emailInput,
        })
        .then((response) => {
          notifySucces("Enviamos um email com o link de alteração de senha");
        })
        .catch((error) => {
          console.log(error);
          notifyErrors("Erro interno do sistema");
        });
    } else {
      notifyErrors("Preencha seus dados corretamente");
    }
  }

  // CRIAR FUNÇÃO QUE IRÁ ENVIAR A SENHA NOVA POST E ATUALIZAR A MESMA
  async function resetPassword(resetInput: ResetPassword) {
    if (
      lowerValidated == true &&
      upperValidated == true &&
      numberValidated == true &&
      specialValidated == true &&
      lengthValidated == true &&
      password == confPassword
    ) {
      await api
        .post("/auth/users/reset_password_confirm/", {
          ...resetInput,
        })
        .then((response) => {
          notifySucces("Alterado a senha com sucesso");
          router.push("/auth");
        })
        .catch((error) => {
          console.log(error);
          notifyErrors("Erro interno do sistema");
        });
    } else {
      notifyErrors("Preencha seus dados corretamente");
    }
  }

  // FUNÇÃO QUE IRÁ RETORNAR OS DADOS DO USUÁRIO LOGADO
  async function getUserData() {
    await api
      .get("/auth/users/me/", {
        headers: {
          'Authorization': "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // console.log(response.data.id);
        setId(response.data.id);
      });
  }

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
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    activateUser,
    getUserData,
    id
  };
}

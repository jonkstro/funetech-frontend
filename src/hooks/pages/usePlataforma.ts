import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Homenagem, ListaHomenagem } from "../../@types/homenagem";
import { api } from "../../services/api";

export function usePlataforma() {
  const router = useRouter();

  // QUANDO CARREGAR A PÁGINA, IRÁ RODAR O USEEFFECT
  useEffect(() => {
    setNome("");
    setDataNasc("");
    setCidadeNasc("");
    setDataFalec("");
    setCidadeFalec("");
    setMemoria("");
    setBiografia("");
    setFoto(null);
    // listarHomenagens();
  }, []);

  // CRIANDO AS VARIÁVEIS DE ESTADO
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [cidadeNasc, setCidadeNasc] = useState("");
  const [dataFalec, setDataFalec] = useState("");
  const [cidadeFalec, setCidadeFalec] = useState("");
  const [memoria, setMemoria] = useState("");
  const [biografia, setBiografia] = useState("");
  const [foto, setFoto] = useState<File | string | null>();
  const [listaHomenagens, setListaHomenagens] = useState<ListaHomenagem[]>([]);
  const [homenagem, setHomenagem] = useState<Homenagem>()

  // CRIAR FUNÇÃO DE VALIDAÇÃO DOS DADOS DO CADASTRO
  function validarDadosCadastro() {
    if (
      nome.length > 0 &&
      dataNasc.length > 0 &&
      cidadeNasc.length > 0 &&
      dataFalec.length > 0 &&
      cidadeFalec.length > 0 &&
      memoria.length > 0 &&
      biografia.length > 0 &&
      foto != null
    ) {
      return true;
    } else {
      return false;
    }
  }

  // EXIBIR MENSAGEM DO TOASTIFY
  function notifySucces(value: string) {
    toast.success(value, { position: toast.POSITION.TOP_RIGHT });
  }

  function notifyErrors(value: string) {
    toast.error(value, { position: toast.POSITION.TOP_RIGHT });
  }

  // FUNÇÃO QUE IRÁ LIMPAR O FORMULÁRIO
  function limparForm() {
    setNome("");
    setDataNasc("");
    setCidadeNasc("");
    setDataFalec("");
    setCidadeFalec("");
    setMemoria("");
    setBiografia("");
    setFoto(null);
  }

  // CRIAR FUNÇÃO QUE REALIZARÁ O CADASTRO DAS HOMENAGENS
  async function cadastrarHomenagem(homenagemInput: Homenagem) {
    if (validarDadosCadastro()) {
      await api
        .post(
          "/homenagens/",
          {
            ...homenagemInput,
          },
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          notifySucces("Cadastrado com sucesso!!");
          // console.log("Cadastrado homenagem " + response.data);
          router.push("/plataforma/");
        })
        .catch((error) => {
          notifyErrors("Erro interno do sistema");
          console.log(error);
        });
    }
  }
  // CRIAR FUNÇÃO QUE IRÁ LISTAR AS HOMENAGENS DO USUÁRIO
  async function listarHomenagens() {
    await api
      .get("/homenagens/", {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setListaHomenagens(response.data);
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
        router.push("/auth");
      });
  }
  // CRIAR FUNÇÃO QUE IRÁ MOSTRAR OS DADOS NO CAROUSEL
  async function getHomenagemData(id: number) {
    await api
      .get("/homenagens/" + id, {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setHomenagem(response.data);
      })
      .catch((error) => {
        console.log(error);
        // localStorage.removeItem("token");
        // router.push("/auth");
      });
  }

  return {
    nome,
    setNome,
    dataNasc,
    setDataNasc,
    cidadeNasc,
    setCidadeNasc,
    dataFalec,
    setDataFalec,
    cidadeFalec,
    setCidadeFalec,
    memoria,
    setMemoria,
    biografia,
    setBiografia,
    foto,
    setFoto,
    cadastrarHomenagem,
    listarHomenagens,
    listaHomenagens,
    getHomenagemData,
    homenagem
  };
}

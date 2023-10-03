import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

import { useForm } from './hooks/useForm'
import { useFetch } from './hooks/useFetch';
import { useState } from 'react'

import './App.css'

//template
const formTemplate = {
  name: "",
  email: "",
  date: "",
  type: "",
  review1: "",
  review2: "",
  review3: "",
  review4: "",
  comment: "",
}

const url = "http://localhost:3000/users" //link do servidor

function App() {

  const [data, setData] = useState(formTemplate) //iniciliza o data com o template de strings vazias

  const updateFieldHandler = (key, value) => { //funcao para atualizar o campo
    setData((prev) => { //funcao que pega o input que queremos alterar (key), e altera para o valor que queremos que fique (value)
      return { ...prev, [key]: value }; {/* retorna um novo objeto com todos os itens do previous state (estado anterior) alterando a chave para o valor de value */ }
    });
  }

  const{data:items} = useFetch(url)

  const handleClick =  async (e) =>{
    e.preventDefault();

    console.log("Enviando form");       
    console.log(data.name, data.email, data.date, data.type);
    
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  }
  
  
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ] /* LISTA CONTENDO TODOS OS COMPONENTES */
  /* vamos usar essa lista para acessar cada componente pelo seu indice para assim sabermos qual a etapa o usuario esta do formulario */

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents) //inicializando o hook useForm
  return (
    <>
      <div className='app'>
        <img src="/ccm-logo-blue.svg" alt="Logo CCM" className='logo' draggable="false" />
        <div className='body-design-image'>
          <img src="/2.png" draggable="false"/>
          <div className="body-design">
            <div className="header">
              <h2>Deixe sua avaliação</h2>
              <p>Ficamos felizes com a sua presença,
                utilize o formulário abaixo para avaliar o curso</p>
            </div>

            <div className="form-container">

              <Steps currentStep={currentStep} />

              <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                {/* ao enviar formulario chama a funcao de mudar etapa passando o indice da etapa atual + 1 */}
                <div className="inputs-container">
                  {currentComponent} {/*acessando o componente da lista, vai ser extraido pela funcao do hook*/}
                </div>

                <div className="actions">
                  {!isFirstStep && ( //caso nao seja a primeira etapa o botao de voltar aparece
                    <button type='button' onClick={() => changeStep(currentStep - 1)}>
                      {/* no clique chama a funcao de mudar etapa passando o indice da etapa atual - 1 */}
                      <GrFormPrevious />
                      <span>Voltar</span>
                    </button>
                  )}

                  {!isLastStep ? ( //caso nao seja a ultima etapa
                    <button type='submit'>
                      <span>Avançar</span>
                      <GrFormNext />
                    </button>
                  ) : ( //caso seja a ultima etapa, muda o botao para enviar
                    <button onClick={handleClick}>
                      <span>Enviar</span>
                      <FiSend />
                    </button>
                  )}
                </div>

              </form>
            </div>
          </div>
          <img src="1.png" draggable="false"/>
        </div>
      </div>
    </>
  )
}

export default App

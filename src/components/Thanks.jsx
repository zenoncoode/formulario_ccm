import './Thanks.css'


import{BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const emojiData = { //mostrar o emoji correspondente ao valor do checked, atraves de chave e valor
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>
}



const Thanks = ({data}) => { // os inputs vao começar com os valores que ja foram preenchidos (data)
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, ao final do curso você receberá o certificado de conclusão!</p>
      <p>Para concluir sua avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo do seu formulário {data.name}:</h3> {/* acessa o valor de name do objeto data */}
      
      <p className="review-data">
        <span>Data da aula: </span>
        {data.date}
      </p>

      <p className="review-data">
        <span>Formato de treinamento: </span>
        {data.type} {/* exibe o valor do emoji data buscando pela chave trazida do data (satisfied, unsatisfied, etc.)*/}
      </p>

      {data.comment != "" ? (<p className="review-data">
        <span>Comentário: </span>
        {data.comment} {/* acessa o valor de comment do objeto data */}
      </p>) : (<p className='review-data'><span>Nenhum comentário adicionado</span></p>)}
      
    </div>
  )
}

export default Thanks
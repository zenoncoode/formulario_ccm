
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import './ReviewForm.css'

const ReviewForm = ({ data, updateFieldHandler }) => { // os inputs vao começar com os valores que ja foram preenchidos (data)
  return (
    <div className="review-form">

      <div className="form">
        <p className='title'>Como você avalia a contribuição do seu conteúdo pra o seu dia a dia?</p>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" value="unsatisfied" name='review1' required
              checked={data.review1 === "unsatisfied"}
              onChange={(e) => updateFieldHandler("review1", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiFrownFill />
            <p>Insatisfeito</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="neutral" name='review1' required
              checked={data.review1 === "neutral"}
              onChange={(e) => updateFieldHandler("review1", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiNeutralFill />
            <p>Poderia ser melhor</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="satisfied" name='review1' required
              checked={data.review1 === "satisfied"}
              onChange={(e) => updateFieldHandler("review1", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiSmileFill />
            <p>Satisfeito</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="very_satisfied" name='review1' required
              checked={data.review1 === "very_satisfied"}
              onChange={(e) => updateFieldHandler("review1", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiHeartEyesFill />
            <p>Muito satisfeito</p>
          </label>
        </div>
      </div>


      <div className="form">
        <p className='title'>Qual  relevância do conteúdo para o seu crescimento pessoal e/ou profissional?</p>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" value="unsatisfied" name='review2' required
              checked={data.review2 === "unsatisfied"}
              onChange={(e) => updateFieldHandler("review2", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiFrownFill />
            <p>Insatisfeito</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="neutral" name='review2' required
              checked={data.review2 === "neutral"}
              onChange={(e) => updateFieldHandler("review2", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiNeutralFill />
            <p>Poderia ser melhor</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="satisfied" name='review2' required
              checked={data.review2 === "satisfied"}
              onChange={(e) => updateFieldHandler("review2", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiSmileFill />
            <p>Satisfeito</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="very_satisfied" name='review2' required
              checked={data.review2 === "very_satisfied"}
              onChange={(e) => updateFieldHandler("review2", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiHeartEyesFill />
            <p>Muito satisfeito</p>
          </label>
        </div>
      </div>


      <div className="form">
        <p className='title'>Como você avalia o domínio do instrutor em relação ao conteúdo abordado?</p>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" value="unsatisfied" name='review3' required
              checked={data.review3 === "unsatisfied"}
              onChange={(e) => updateFieldHandler("review3", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiFrownFill />
            <p>Insatisfeito</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="neutral" name='review3' required
              checked={data.review3 === "neutral"}
              onChange={(e) => updateFieldHandler("review3", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiNeutralFill />
            <p>Poderia ser melhor</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="satisfied" name='review3' required
              checked={data.review3 === "satisfied"}
              onChange={(e) => updateFieldHandler("review3", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiSmileFill />
            <p>Satisfeito</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="very_satisfied" name='review3' required
              checked={data.review3 === "very_satisfied"}
              onChange={(e) => updateFieldHandler("review3", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiHeartEyesFill />
            <p>Muito satisfeito</p>
          </label>
        </div>
      </div>

      <div className="form">
        <p className='title'>Como você avalia a habilidade do instrutor na condução do treinamento?</p>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" value="unsatisfied" name='review4' required
              checked={data.review4 === "unsatisfied"}
              onChange={(e) => updateFieldHandler("review4", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiFrownFill />
            <p>Insatisfeito</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="neutral" name='review4' required
              checked={data.review4 === "neutral"}
              onChange={(e) => updateFieldHandler("review4", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiNeutralFill />
            <p>Poderia ser melhor</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="satisfied" name='review4' required
              checked={data.review4 === "satisfied"}
              onChange={(e) => updateFieldHandler("review4", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiSmileFill />
            <p>Satisfeito</p>
          </label>

          <label className="radio-container">
            <input type="radio" value="very_satisfied" name='review4' required
              checked={data.review4 === "very_satisfied"}
              onChange={(e) => updateFieldHandler("review4", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <BsFillEmojiHeartEyesFill />
            <p>Muito satisfeito</p>
          </label>
        </div>
      </div>


      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea name="coment" id="comment" placeholder='Conte-nos sua experiência frequentando o curso...'
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)} //quando o campo for alterado, passa a key e o valor digitado para a funcao de atualizar o data
        ></textarea>
      </div>

    </div>
  )
}

export default ReviewForm
import React from 'react'

const UserForm = ({ data, updateFieldHandler }) => { // os inputs vao começar com os valores que ja foram preenchidos (data)
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name='text' id='name' placeholder='Digite seu nome' required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)} //quando o campo for alterado, passa a key e o valor digitado para a funcao de atualizar o data
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type="email" name='email' id='email' placeholder='Digite seu email' required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)} //quando o campo for alterado, passa a key e o valor digitado para a funcao de atualizar o data
        />
      </div>

      <div>
        <p className="data-aula">Data da aula: </p>
        <div className="form-control">
          <label className="radio-button">
            <input type="radio" value="16/09/2023" name='date' required
              checked={data.date === "16/09/2023"}
              onChange={(e) => updateFieldHandler("date", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <p className='light'>16/09/2023</p>
          </label>
        </div>

        <div className="form-control">
          <label className="radio-button">
            <input type="radio" value="23/09/2023" name='date' required
              checked={data.date === "23/09/2023"}
              onChange={(e) => updateFieldHandler("date", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <p className='light'>23/09/2023</p>
          </label>
        </div>

        <div className="form-control">
          <label className="radio-button">
            <input type="radio" value="30/09/2023" name='date' required
              checked={data.date === "30/09/2023"}
              onChange={(e) => updateFieldHandler("date", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <p className='light'>30/09/2023</p>
          </label>
        </div>

        <div className="form-control">
          <label className="radio-button">
            <input type="radio" value="07/10/2023" name='date' required
              checked={data.date === "07/10/2023"}
              onChange={(e) => updateFieldHandler("date", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <p className='light'>07/10/2023</p>
          </label>
        </div>
      </div>


      <div className='type'>
        <p className="forma-treinamento">Forma de treinamento: </p>

        <div className="form-control">
          <label className="radio-button">
            <input type="radio" value="Presencial" name='type' required
              checked={data.type === "Presencial"}
              onChange={(e) => updateFieldHandler("type", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <p className='light'>Presencial</p>
          </label>
        </div>

        <div className="form-control">
          <label className="radio-button">
            <input type="radio" value="Híbrido" name='type' required
              checked={data.type === "Híbrido"}
              onChange={(e) => updateFieldHandler("type", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <p className='light'>Híbrido</p>
          </label>
        </div>

        <div className="form-control">
          <label className="radio-button">
            <input type="radio" value="Online" name='type' required
              checked={data.type === "Online"}
              onChange={(e) => updateFieldHandler("type", e.target.value)} //quando estiver checked, passa a key e o valor que esta o check para a funcao de atualizar o data
            />
            <p className='light'>Online</p>
          </label>
        </div>

      </div>


    </div>
  )
}

export default UserForm
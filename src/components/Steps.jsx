import React from 'react'
import './Steps.css'
import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

const Steps = ({currentStep}) => { //atraves da prop currentStep saberemos qual a etapa atual
  return (
    <div className="steps">
        <div className="step active"> {/* a primeira etapa sempre vai ter classe active */}
            <AiOutlineUser/>
            <p>Identifição</p>
        </div>

        <div className={`step ${currentStep >= 1 ? "active" : " " }`}> {/* se a etapa atual for maior ou igual ao index dessa etapa, a etapa vai ter a classe active */}
            <AiOutlineStar/>
            <p>Avaliação</p>
        </div>

        <div className={`step ${currentStep >= 2 ? "active" : " " }`}> {/* se a etapa atual for maior ou igual ao index dessa etapa, a etapa vai ter a classe active */}
            <FiSend/>
            <p>Envio</p>
        </div>
    </div>
  )
}

export default Steps
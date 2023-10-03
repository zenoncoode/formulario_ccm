import { useState } from "react";

export function useForm(steps){ /* usamos steps como argumento para enviar o passo correto */
    const [currentStep, setCurrentStep ] = useState(0) //a etapa atual vai iniciar em 0 (primeira etapa)
    
    function changeStep(i, e){ //funcao para mudar etapa
        if(e) e.preventDefault(); //vai ser usado para quando avançarmos, nao enviar o formulario necessariamente

        if(i < 0 || i>= steps.length) return //controle de erro, caso a etapa nao exista

        setCurrentStep(i) //muda a etapa para o i (etapa que vem após o clique)
    }

    return{
        currentStep, //indice da etapa atual
        currentComponent: steps[currentStep], //retorna o componente atual (acessa a lista no index atual)
        changeStep, //exporta funcao
        isLastStep: currentStep + 1 === steps.length ? true : false, //caso a etapa atual + 1 seja igual ao tamanho da lista, IsLastStep será true
        isFirstStep: currentStep === 0 ? true : false, //caso a etapa atual seja igual a 0, IsFirstStep será true
        
    }
}
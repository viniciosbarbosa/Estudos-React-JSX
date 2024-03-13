const Events = () =>{
    
    
    const HandleNewEvent = (e) =>{
        console.log(e)

        console.log("ativou o evento")
    }

    const renderSomething = (param) =>{
        if(param == true){
            return (
                <p>verdadeiro</p>
            )
        }else{
            return (
                <p>falso</p>
            )
        }
    } 

    return (
        <div>
            <div>
                <button onClick={HandleNewEvent}>
                    Clique aqui
                </button>
            </div>

            <div>
                <button onClick={() => console.log("Clicou aqui funcao inline")}>
                    Clique Aqui tbm !
                </button>
            </div>

            {renderSomething(true)}
            {renderSomething()}
        </div>
    )
}

export default Events
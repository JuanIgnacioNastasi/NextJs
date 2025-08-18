"use client"

export default function ContadorPage(){

    const [cuenta,setCuenta] = useState(0);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (cuenta == 20){
            setCuenta(0)
        }
    }, [cuenta])

    
    function incrementar(){
        setCuenta = (cuenta + 1) 
    }

    function decrementar(){
        setCuenta = (cuenta - 1) 
    }

    function funcionalidad(event){
        setChecked(event.target.checked)
    }


    function subeobaja(){
        if (checked == true){
            incrementar()
        } else{
            decrementar()
        }
    }


    return(
        <>
        <Title title= "Página del contador"></Title>
        <h3>Presione lo que desee</h3>
        <Input type={"checkBox"} onChange={funcionalidad}></Input>
        <Button text={"subir/bajar"} onClick={subeobaja}></Button>
        </>
    )
}

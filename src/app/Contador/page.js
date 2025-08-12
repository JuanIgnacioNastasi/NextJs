"use client"

export default function ContadorPage(){

    const [cuenta,setCuenta] = useState(0);
    const [checked, setChecked] = useState(false);

    function incrementar(){
        setCuenta = (cuenta + 1) 
    }

    function decrementar(){
        setCuenta = (cuenta - 1) 
    }

  return (
    <>
        <Title title="Página del contador"></Title>
        <Button onClick={} text={} >  </Button>
        <Input type={checkbox} onChange={}></Input>
    </>
  )
}
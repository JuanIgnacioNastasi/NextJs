"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { useEffect, useState } from "react";

export default function ContadorPage(){
    const [cuenta,setCuenta] = useState(0);
    const [nombre, setNombre] = useState("");
    const [checked, setChecked] = useState(false);
    const [color, setColor] = useState("rojo")

    useEffect(() => {
        if (cuenta === 20 || cuenta === -20){
            setCuenta(0)
        }
    }, [cuenta])

    
    function incrementar(){
        setCuenta (cuenta + 1) 
    }

    function ver(event) {
        setNombre(event.target.value)
    }

    function decrementar(){
        setCuenta (cuenta - 1) 
    }

    function funcionalidad(event){
        setChecked(event.target.checked)
        if (checked == true) {
            setColor("verde")
        } else {
            setColor("rojo")
        }
    }


    function subeobaja(){
        if (checked == true) {
            incrementar()
        } else{
            decrementar()
        }
    }

    return(
        <>
        <Title title= "Página del contador"></Title>
        <h2>Contador: {cuenta}</h2>
        <h3>Presione lo que desee</h3>
        <Input type={"checkBox"} onChange={funcionalidad}></Input>
        <Button text={"subir/bajar"} onClick={subeobaja} color={color}></Button>
        <br></br>
        <h2>Ingrese su nombre</h2>
        <Input onChange={ver}></Input>
        {nombre != "" &&
        <h2>Hola: {nombre}</h2>
        }
        </>
    )
}

"use client"

import Button from "./Button"
import Input from "./Input"

export default function Form(props) {
    return (
        <>
            <h3>Username:</h3>
            <Input type={props.type}></Input>
            <h3>Mail:</h3>
            <Input type={props.type}></Input>
            <h3>Password:</h3>
            <Input type={props.type2}></Input>
            <Button onClick={props.onClick} text={"Nastasi"}></Button>
        </>
    )
}
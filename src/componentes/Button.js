"use client"

export default function Button(props){

    return(
        <>
            <button onCLick ={props.onCLick}>{props.text}</button>
        </>
    )

}
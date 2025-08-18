"use client"
import styles from "@/components/Button.module.css"
import clsx from "clsx"


export default function Button(props){

    return(
        <>
            <button className={
                clsx(
                    {
                

                    }
                )
            }
            
            
            onClick ={props.onClick}>{props.text}</button>
        </>
    )

}
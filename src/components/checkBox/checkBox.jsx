
import { useState } from "react";
import './checkBox.css'
  export  default function CheckBox(){

     const  [checkBox, setCheckBox] = useState(true)

      return(
      <div className="ConteinerPai">
       <div>
        <h2>Membros Ativos</h2>
        <input type="checkbox" checked={checkBox}
         onChange={() => setCheckBox(false)}
         />
        </div>

          <div>
        <h2>Membros Inativos</h2>
        <input type="checkbox" checked={!checkBox}
         onChange={() => setCheckBox(true)}
         />
        </div>
      
      </div>

      )
    }
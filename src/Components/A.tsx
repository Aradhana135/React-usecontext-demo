import React from 'react'
import {render} from 'react-dom'
import { MarksContextConsumer } from './MarkContext';
import { MarksContextProvider } from './MarkContext';
import { MarksContext } from './MarkContext';
const sample:MarksContext={
  name:"Aradhana",
  marks:450
}
export const A=()=>
  (
<MarksContextProvider value={sample}>
  <B/>
</MarksContextProvider>
  )

const B=()=>(
  <div>
  <h2>Student info</h2>
  <C/>
  </div>
)
 const C=()=>(
<MarksContextConsumer>
{appContext =>
      appContext && (
        <div>
          Name: {appContext.name} <br />
          Marks: {appContext.marks} <br />
        </div>
      )
    }
</MarksContextConsumer>
 )

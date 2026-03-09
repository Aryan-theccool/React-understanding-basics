import React from 'react'

const App = () => {
  return (

    //1
    // <div id='parent'>
    //   <h3 id='name'>aryan</h3>
    //   <h2 id='tag'>thecool</h2>
    // </div>
    //2
    <>
    {/* //wrapper component */}
      <div id='parent'>
        <h3 id='name'>aryan</h3>
        <h2 id='tag'>thecool</h2>
      </div>
      <div id='parent'>
        <h3 id='name'>pro</h3>
        <h2 id='tag'>player</h2>
      </div>
    </>
  )
}

export default App

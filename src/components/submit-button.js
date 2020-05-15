import React, { useState } from 'react';
import Loader from 'react-loader-spinner';


export function SubmitButton(props) {
  // const [loading, setLoading] = useState(props.passedLoading)

  const handleSubmit = () => {
    props.passedFunction()
  }

  return (
    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-700 disabled:cursor-not-allowed text-white font-bold py-2 px-12 rounded-full cursor-pointer transition ease-in duration-200" disabled={props.passedLoading}>
      { props.passedLoading ?
        <Loader
          type="Oval"
          color="white"
          height={25}
          width={25}
        />
        :
        'Submit'
      }
    </button>
  )
}

export default SubmitButton;
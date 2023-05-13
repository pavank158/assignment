import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8 flex justify-center items-center mt-20">
      <p className="text-sm">
        Click here to see my Portfolio{' '}
        <a
          href="https://pavankusampalli.netlify.app"
          className="font-medium hover:text-gray-400 transition duration-150 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pavan Kusampalli
        </a>
      </p>
    </footer>
  )
}

export default Footer

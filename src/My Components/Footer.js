import React from 'react'



export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top:"70vh",
    width:"100%",
    border  : "2px solid cyan"


}

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com

      </p>
    </footer>
  )
}

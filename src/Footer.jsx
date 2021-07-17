import React from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  )
}
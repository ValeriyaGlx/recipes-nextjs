import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-400 bottom-0 w-full">
      <div className="container mt-3 bg-white p-5">
        <p className="text-base w-full max-w-5xl mx-auto">
          &copy; {new Date().getFullYear()} Кушать будешь - Все рецепты для правильного питания
        </p>
      </div>
    </footer>
  );
};

export default Footer;

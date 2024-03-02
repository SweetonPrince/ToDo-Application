import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
const HeaderComponent = () => {
  const navigator = useNavigate();
  function home() {
    navigator('/home');
  }
  return (
    <div>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">ToDo</a>
</nav>

    </div>
    
  )
}

export default HeaderComponent
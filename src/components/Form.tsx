import React from 'react'
import './form.css'
const Form = () => {
  return (
    <>
        <div className="form__section mb-4">
            <form className='forms flex justify-between'>
                <input type="text" placeholder='Ф.И.О.' />
                <input type="text" placeholder='Номер телефона' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Теги' />
                <button className='contact_add-btn'>Добавить</button>
            </form>
        </div>
    </>
  )
}

export default Form
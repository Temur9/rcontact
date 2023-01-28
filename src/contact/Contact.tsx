import React from 'react'
import Form from '../components/Form'
import Table from '../components/table/Table'
import './contact.css'
const Contact = () => {
  return (
    <>
        <div className="contact p-4">
            <div className="container mx-auto w-9/12">
                <div className="contact__section">
                    <Form/>
                    <Table/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
import React, { useState } from 'react'

function FormDataDisplay() {
        const [form , setForm]=useState({
            name:"",
            email:"",
        })
        const [submit,setSubmit]=useState(null);

        function handleSubmit(e){
            e.preventDefault()
            setSubmit(form)
        }

    return (
        <div className=' flex items-center mx-auto justify-center h-screen p-10'>
            <form action="" className='mx-auto p-4'>
                <div className=''>
                <label htmlFor="name">Enter your name </label>
                    <input type="text" placeholder='Name ?'  onChange={ e=>setForm({ ...form, name:e.target.value})}/>
                    
                </div>
                    
                    <label   htmlFor="email"> Email</label>
                    <input type="email"  placeholder='enter your email' onChange={ e=>setForm({ ...form, email:e.target.value})}/>
                <div>

                </div>
                <div>
                    <button onClick={handleSubmit}>submit</button>
                    
                </div>

                {
                    submit ? (
                        <div>
                            <h2>Name : {submit.name}</h2>
                            <h2>Mail : {submit.email}</h2>
                        </div>
                    ): null}
            </form>
           

        </div>
    )
}

export default FormDataDisplay

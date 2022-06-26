import React from 'react'

import axios from 'axios'

const LoginAdmin = (email , password , setErrors) => {
  try{
    axios.post('/api/Login' , {
      adminEmail: email,
      adminPassword: password,
    }).then((res) => {
      if(res.data.code == '101') setErrors({email : res.data.message})
      else if (res.data.code == '102') setErrors({password : res.data.message})
      else if(res.status == 500) setErrors({serverMessages : res.data.message})
      else {
        window.location.href = '/'
      }
    })
  }catch(err) {
    console.log(err)
  }
}

export default LoginAdmin
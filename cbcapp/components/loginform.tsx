import { FormGroup, FormControl, TextField, Typography, Button, Link } from '@mui/material'
import Paper from '@mui/material/Paper'
import React from 'react'

const LoginForm = () => {
  return (
    <Paper elevation={5} sx = {{p: 5, width: '40%', mx: 'auto', mt: 10}}>
        <Typography variant='h4' textAlign={'center'} mb={3}>
            Login
        </Typography>
        <form action="https://improved-fortnight-5959r6vpr4x3vqjw-3000.app.github.dev/api/authenticate/login" method="post">
            <FormGroup sx = {{mb : 3}}>
                <FormControl sx = {{mb : 3}}>
                    <TextField fullWidth type = "email" label = "email" name = "email"/>
                </FormControl>
                <FormControl sx = {{mb : 3}}>
                    <TextField fullWidth type = "password" label = "password" name = "password" />
                </FormControl>
                <Button variant = "contained" type = "submit">Submit</Button>
            </FormGroup>
        </form>
        <Typography variant = "body2" textAlign={'center'}>
            No Account? Request one <Link href = "/signup">here</Link>
        </Typography>
    </Paper>
  )
}

export default LoginForm
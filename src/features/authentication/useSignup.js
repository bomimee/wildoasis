import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { signup as signupApi} from '../../services/apiAuth'
import toast from 'react-hot-toast'

export function useSignup() {
 const {mutate:signup, isLoading} = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => toast.success('Account Successfully created')
 })

 return {signup, isLoading}
}

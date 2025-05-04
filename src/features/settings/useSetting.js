import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getSettings } from '../../services/apiSettings'

export default function useSetting() {
const {isFetching, error, data: settings} = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
})
return {isFetching, error, settings}
}

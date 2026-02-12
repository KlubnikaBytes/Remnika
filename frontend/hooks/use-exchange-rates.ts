import { useState, useEffect } from 'react'

const API_KEY = '353c731b58651c6b3719aa86'
const BASE_URL = 'https://v6.exchangerate-api.com/v6'

interface ExchangeRatesResponse {
    result: string
    base_code: string
    conversion_rates: Record<string, number>
}

export function useExchangeRates(baseCurrency: string) {
    const [rates, setRates] = useState<Record<string, number> | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!baseCurrency) return

        const fetchRates = async () => {
            setIsLoading(true)
            setError(null)

            // Check session storage cache
            const cacheKey = `exchange_rates_${baseCurrency}`
            const cachedData = sessionStorage.getItem(cacheKey)
            if (cachedData) {
                const { timestamp, data } = JSON.parse(cachedData)
                // Cache for 1 hour
                if (Date.now() - timestamp < 3600000) {
                    setRates(data)
                    setIsLoading(false)
                    return
                }
            }

            try {
                const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`)
                const data: ExchangeRatesResponse = await response.json()

                if (data.result === 'success') {
                    setRates(data.conversion_rates)
                    // Update cache
                    sessionStorage.setItem(cacheKey, JSON.stringify({
                        timestamp: Date.now(),
                        data: data.conversion_rates
                    }))
                } else {
                    setError('Failed to fetch rates')
                }
            } catch (err) {
                console.error(err)
                setError('Network error fetching rates')
            } finally {
                setIsLoading(false)
            }
        }

        fetchRates()
    }, [baseCurrency])

    return { rates, isLoading, error }
}

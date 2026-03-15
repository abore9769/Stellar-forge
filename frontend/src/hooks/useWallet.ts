import { useState, useEffect } from 'react'
import { walletService } from '../services/wallet'

interface WalletState {
  address: string | null
  isConnected: boolean
}

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({ address: null, isConnected: false })
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connect = async () => {
    setIsConnecting(true)
    setError(null)
    try {
      const address = await walletService.connect()
      setWallet({ address, isConnected: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect wallet')
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnect = () => {
    walletService.disconnect()
    setWallet({ address: null, isConnected: false })
  }

  useEffect(() => {
    // Check if already connected on mount
    if (walletService.isInstalled()) {
      // Mock check
    }
  }, [])

  return {
    wallet,
    connect,
    disconnect,
    isConnecting,
    error
  }
}
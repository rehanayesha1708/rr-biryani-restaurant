'use client'

import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex items-center justify-center min-h-screen bg-primary-dark px-4">
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="text-red-500" size={40} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-text-primary mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-text-secondary mb-8">
              We encountered an unexpected error. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <RefreshCw size={18} />
              <span>Refresh Page</span>
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-secondary-dark rounded-lg p-4 gold-border">
                <summary className="cursor-pointer text-accent-gold font-semibold mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-red-400 text-sm overflow-auto">
                  {this.state.error.toString()}
                  {'\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

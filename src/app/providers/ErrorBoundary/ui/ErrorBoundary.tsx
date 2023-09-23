import { ErrorInfo } from 'react'
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from './errorBounary.inteface'
import React from 'react'

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  public static componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundary

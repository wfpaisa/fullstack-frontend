import React, { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h1 style={{ color: "#9f0000" }}>Error rendering components</h1>
          <p>error handle (pages/errors/ErrorBoundary.)</p>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

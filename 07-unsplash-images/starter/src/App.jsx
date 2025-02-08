import './index.css'
import { useState } from 'react'
import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import ThemeToggle from './components/ThemeToggle'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false)
  const body = document.querySelector('body')
  body.classList.toggle('dark-theme', isDarkTheme)
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeToggle toggle={setDarkTheme} />
        <SearchForm />
        <Gallery />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  )
}
export default App

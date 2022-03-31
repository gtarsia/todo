import type { NextPage } from 'next'
import Head from 'next/head'
import { TodoApp } from 'app/TodoApp'

const Home: NextPage = () => {
  return (<>
    <TodoApp />
  </>)
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { loginAction, logoutAction } from '../redux/actions/login';
import { addCounter, removeCounter } from '../redux/actions/ui';
import styles from '../styles/Home.module.css'

export default function Home() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginAction)
  }
  const handleLogout = () => {
    dispatch(logoutAction)
  }
  const handleAddCounter = () => {
    dispatch(addCounter)
  }
  const handleRemoveCounter = () => {
    dispatch(removeCounter)
  }

  return (
    <div className={styles.container}>
      <Link href="/nosotros">
        <a href="">Nosotros</a>
      </Link>
      <button onClick={handleAddCounter}>+1</button>
      <button onClick={handleRemoveCounter}>-1</button>
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}

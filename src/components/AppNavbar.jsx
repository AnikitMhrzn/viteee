import { Menubar } from 'primereact/menubar'
import { useNavigate } from 'react-router-dom'

export default function AppNavbar() {
  const navigate = useNavigate()

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => navigate('/')
    },
    {
      label: 'Login',
      icon: 'pi pi-sign-in',
      command: () => navigate('/login')
    },
      {
      label: 'Counter',
      icon: 'pi pi-plus-circle',
      command: () => navigate('/counter')
    }
  ]

  return <Menubar model={items} />
}

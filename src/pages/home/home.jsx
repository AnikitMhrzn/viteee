import { Card } from 'primereact/card'

export default function Home() {
  return (
    <div className="flex justify-content-center p-4">
      <Card title="Home" className="w-full md:w-6">
        <p>Welcome!</p>
        <p>You are successfully logged in.</p>
      </Card>
    </div>
  )
}

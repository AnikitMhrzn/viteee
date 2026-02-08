import { useReducer } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }

    case 'DECREMENT':
      return { count: state.count - 1 }

    case 'RESET':
      return initialState

    default:
      return state
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="flex justify-content-center p-4">
      <Card title="Counter" className="w-full md:w-6 text-center">
        <h2 className="mb-4">Count: {state.count}</h2>

        <div className="flex justify-content-center gap-3">
          <Button
            label="Increment"
            icon="pi pi-plus"
            onClick={() => dispatch({ type: 'INCREMENT' })}
          />

          <Button
            label="Decrement"
            icon="pi pi-minus"
            severity="secondary"
            onClick={() => dispatch({ type: 'DECREMENT' })}
          />

          <Button
            label="Reset"
            icon="pi pi-refresh"
            severity="danger"
            onClick={() => dispatch({ type: 'RESET' })}
          />
        </div>
      </Card>
    </div>
  )
}

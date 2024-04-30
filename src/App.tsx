import Button from "./components/atoms/button"

const App = () => {
  const test = () => {
    console.log("HOla Mundo")
  }

  return (
    <>
      <Button
        size="md"
        onClick={test}
        color="Primary"
        disabled={false}>
        Hola Mundo
      </Button>
    </>
  )
}

export default App

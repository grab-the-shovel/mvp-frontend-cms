import Button from "./components/atoms/Button"

const App = () => {
  const test = () => {
    console.log("HOla Mundo")
  }

  return (
    <>
      <Button
        size="md"
        onClick={test}
        color="primary"
        type="submit">
        Hola Mundo
      </Button>
    </>
  )
}

export default App

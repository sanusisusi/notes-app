import './styles/global.css'
import styles from './styles/App.module.css'

import { Button } from './components/Button'
import { Note } from './components/Note'
import { Form } from './components/Form'

import { NoteProvider } from './contexts/NoteContext'

function App() {
  return (
    <NoteProvider>
      <div className={styles.app}>
        <h1>Welcome To SUSI Notes</h1>
        <h1>React Notes App</h1>
        <Form>
          <Button />
        </Form>
        <Note />
        <footer>developed by: Sanusi Abdulkadir &copy; 2022</footer>
      </div>
    </NoteProvider>
  )
}

export default App

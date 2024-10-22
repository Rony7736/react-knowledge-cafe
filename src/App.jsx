
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  // bookmark er jonno state declare
  const [bookmarks, setBookmarks] = useState([])

  // reading er jonno state declare
  const [readingTime, setReadingTime] = useState(0)

  // event handler
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  // event handler reading time
  const handleMarkAsRead = (id, time) => {
    // console.log('mark as read', time);
    // setReadingTime(readingTime + time)
    // or
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)

    // remove the read blog from bookmark
    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
    
    
  }

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>

        {/* props sent to blogs components */}
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App

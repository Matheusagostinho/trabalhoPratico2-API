import { useState, useEffect } from 'react'
import axios from 'axios'
import Images from '../../components/Images'
import './styles.css'
import Loading from '../../components/Loading'
import Header from '../../components/Header'

function Photos() {
  const [photos, setPhotos] = useState(null)
  const data = []
  useEffect(() => {
    async function pegarDados() {
      for (let i = 1; i <= 30; i++) {
        const response = await axios.get(
          'https://picsum.photos/200/300?random=1',
        )
        data.push(response.request.responseURL)
      }
      setPhotos(data)
      console.log(data)
    }
    pegarDados()
  }, [])
  if (photos === null) {
    return <Loading></Loading>
  }

  function gerar() {
    setPhotos(null)
  }

  return (
    <>
      <Header radom={gerar}></Header>
      <div className="container">
        {photos.map((item) => (
          <Images key={item} src={item}></Images>
        ))}
      </div>
    </>
  )
}

export default Photos

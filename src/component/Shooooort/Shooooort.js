import React, {useEffect, useState} from 'react'
import Actions from '../../Actions/Actions'
import useRefresh from '../../Actions/Refres'
import '../../assets/Style/Style.css'

const defaultValue = {
  id:1,
  shortUrl:'shooooort.com/',
  shortCode:'f2ks4js',
  url:'',
  followUp:{
      visited:'1234',
      lastVisited:' days ago'
    }
}

export const Shooooort = () => {
  const [getData,setGetData]= useState([])
  const [dataUrl,setDataUrl] = useState(defaultValue)
  const [refreshKey, setRefresh] = useRefresh(0)
  const enabled = defaultValue.url.length > 0  ;

  const onChange = (e) => {
    dataUrl.id = new Date().getTime()
    dataUrl[e.target.name] = e.target.value
    setDataUrl({ ...dataUrl })
  }
  useEffect(() => {
    Actions.getUrlData().then((res) => setGetData(res.data))
  }, [refreshKey]);

  const onClick = () =>{
    Actions.postUrlData(dataUrl).then(res => {
      alert('success',res)
      setRefresh()
    })
  }

  const copyUrl = () => {
  }
  return (    
    <div className='mx-2 min-h-screen flex flex-col'>
      <div className='flex justify-between max-w-mx w-full mx-auto mt-4 p-8'>
        <div>
          <p className='logo_text'>Shooooort</p>
          <hr/>
        </div>
        <p className='unimportan_text pt-7'>The Link Shortener with a long name</p>
      </div>
      <div className='flex max-w-mx w-full mx-auto mt-4 bg-white p-8'>
        <input
          className='url_input w-full p-2 focus:outline-none'
          type="text"
          name="url"
          onChange={onChange}
          placeholder="Plase the link you want to shorten here"
        />
        <button 
          className='stl_button ml-8 focus:outline-none'
          disabled={!enabled}
          onClick={onClick}
        >
          Shorten This link
        </button>
      </div>
      <div className='max-w-mx w-full mx-auto mt-4 bg-white p-8'>
        <div className='flex mb-7'>
          <p className='section_headingst'>Perviusly shortened by you</p>
          <button 
            className='accent_button_clear ml-8 focus:outline-none'
            >
            Clear History
          </button>
        </div>
        <div className='flex'>
          <div className='w-3/4'>
            <p className='unimportan_text uppercase'>LINK</p>
          </div>
          <div className='flex-1 text-center'>
            <p className='unimportan_text uppercase'>VISITED</p>
          </div>   
          <div className='flex-1 text-center' >
            <p className='unimportan_text uppercase'>LAST VISITED</p>
          </div> 
        </div>
        {getData.map((data)=>(
          <div 
          className='url_table flex'
          key={data.id}
          >
            <div className='w-3/4 mt-4' >
              <div className='flex'>
                <p className='url_body'>{data.shortUrl}</p> 
                <p className='accent_text'>{data.shortCode}</p>
                <button 
                className='accent_button_copy flex-1 focus:outline-none'
                onClick={copyUrl}
                >
                  Click to copy this link
                </button>
              </div>
                <p className='secondary_text'>{data.url}</p>
            </div>
            <div className='flex-1 pt-3 text-center mt-4' >
              <p className='url_body'>{data.followUp.visited}</p>
            </div>
            <div className='flex-1 pt-3 text-center mt-4' >
              <p className='url_body'>{data.followUp.lastVisited}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

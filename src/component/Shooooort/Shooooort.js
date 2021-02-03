import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import '../../assets/Style/Style.css'
let defaultValue = {
  shortUrl:'shooooort.com/',
  shortCode:'f2ks4js',
  url:'https://hayu.com',
  followUp:{
      visited:'1234',
      lastVisited:'2 days ago'
    }
}

export const Shooooort = () => {
  const [dataUrl,setDataUrl] = useState(defaultValue)
  const {register,handleSubmit,formState} = useForm()
  const onClick = (event) =>{
    setDataUrl(event)
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
          ref={register}
          placeholder="Plase the link you want to shorten here"
        />
        <button 
          className='stl_button ml-8 focus:outline-none'
          disabled={!formState.isDirty}
          onClick={handleSubmit(onClick)}
        >
          Shorten This link
        </button>
      </div>
      <div className='max-w-mx w-full mx-auto mt-4 bg-white p-8'>
        <div className='flex mb-7'>
          <p className='section_headingst'>Perviusly shortened by you</p>
          <button className='accent_button_clear ml-8 focus:outline-none'>
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
        <div className='url_table flex'>
          <div className='w-3/4 mt-4' >
            <div className='flex'>
              <p className='url_body'>{defaultValue.shortUrl}</p> 
              <p className='accent_text'>{defaultValue.shortCode}</p>
              <button 
              className='accent_button_copy flex-1 focus:outline-none'
              onClick={copyUrl}
              >
                Click to copy this link
              </button>
            </div>
              <p className='secondary_text'>{dataUrl.url}</p>
          </div>
          <div className='flex-1 pt-3 text-center mt-4' >
            <p className='url_body'>{defaultValue.followUp.visited}</p>
          </div>
          <div className='flex-1 pt-3 text-center mt-4' >
            <p className='url_body'>{defaultValue.followUp.lastVisited}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

const AddPost = () => {
    return (
        <div className='login'>
            <h3>Ilan Ekle</h3>
            <input type="text" placeholder='Pozinyon' />
            <input type="text" placeholder='Şirket' />
            <input type="text" placeholder='Lokasyon' />
            <button className="btn"> Kaydet </button>
        </div>
    )
}

export default AddPost;
import React from 'react'
import { Input, Button } from '../elements';



const AddPost = () => {
    return (
        <div className='login'>
            <h3>Ilan Ekle</h3>

            <Input type="text" placeholder='Pozinyon' />
            <Input type="text" placeholder='Şirket' />
            <Input type="text" placeholder='Lokasyon' />
            <Button className="btn"> Kaydet </Button>
        </div>
    )
}

export default AddPost;
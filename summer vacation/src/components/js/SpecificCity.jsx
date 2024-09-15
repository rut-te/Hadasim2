import '../css/SpecificCity.css'
import { useNavigate } from 'react-router-dom'
import { eylatPicturesArr, new_yorkPicturesArr, alaskaPicturesArr, londonPicturesArr } from '../../data/picturesArr'

export default function SpecificCity({ string }) {

    const navigate = useNavigate();
    let pictursArr;
    switch (string) {
        case 'London':
            pictursArr = londonPicturesArr;
            break;
        case 'Alaska':
            pictursArr = alaskaPicturesArr;
            break;
        case 'Eylat':
            pictursArr = eylatPicturesArr;
            break;
        case 'New_York':
            pictursArr = new_yorkPicturesArr;
            break;

        default:
            break;
    }

    return (

        <div >
            <div className='close'>
                <button className='closePictures' onClick={() => navigate("..")}>❌</button>
            </div>
            <div className='pictures'>
                {pictursArr.map((picture,i) => (<img src={picture} className='i' />))}
            </div>
        </div>
    )
}
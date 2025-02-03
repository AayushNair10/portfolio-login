import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import PhoneContext from '../../../others/PhoneContext';
import '../../../Main Page css/Components/Library/Queue.css'

const Queue = (props) => {
    const phoneContextValue = useContext(PhoneContext);
    /*
    const ChangeSong = () => {
        phoneContextValue.SetCurrentSong({
            song: props.name,
            audio: props.flink,
            src: props.src,
            artist: props.artist,
        });
        phoneContextValue.SetCurrentSongPlay(true);
    }
    */
    return (
            <>
            <Link to="/home_page" className='queue-back' onClick={props.close}>&#8249;</Link>
                {phoneContextValue.SongQueue.map((item)=>(
                    <div className='queue'>
                        <div className='view-all-img' >
                            <img src={item.thumbnail} alt='album' />
                        </div>
                        <div className='view-all-text'>{item.name}
                            <span className='view-all-artist'> by {item.sdesc}</span>
                        </div>
                    </div>
                ))}
            </>
        )
    }
export default Queue;
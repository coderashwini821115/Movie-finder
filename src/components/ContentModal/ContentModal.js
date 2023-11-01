import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import './ContentModal.css'
import Carousel from '../Carousel/Carousel'
import { img_500, unavailable, unavailableLandscape } from '../../config/config'
import { useState, useEffect } from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '80%',
    bgcolor: '#39445a',
    border: '1px solid #282c34',
    borderRadius: 10,
    boxShadow: 24,
    p: 4,

};
const API_KEY = "117a1275a7795cc9963ca3459ea9c667";

export default function ContentModal({ children, id }) {
    const [content, setContent] = useState({});
    const [video, setVideo] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setContent(data);
        console.log(data);
    }
    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        );
        // console.log(data);
        setVideo(data.results[0]?.key);
    }
    useEffect(() => {
        fetchData();
        fetchVideo();
    }, []);
    return (
        <>
            <Button onClick={handleOpen} className='card' style={{ width: '100%' }}>{children}</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} style={{ width: '90%', height: '90%' }} className='outer'>
                       
                            <div className='ContentModal'>
                                <img className='ContentModal__portrait' src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable}
                                    alt={content.name || content.title}
                                />
                                <img className='ContentModal__landscape' src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape}
                                    alt={content.name || content.title}
                                />
                            </div>
                            <div className="ContentModal__about">
                                <span className="ContentModal__title">
                                    {content.name || content.title} (
                                    {(
                                        content.first_air_date ||
                                        content.release_date ||
                                        "-----"
                                    ).substring(0, 4)}
                                    )
                                </span>
                                {content.tagline && (
                                    <i className="tagline">{content.tagline}</i>
                                )}

                                <span className="ContentModal__description">
                                    {content.overview}
                                </span>
                                <div>
                                    <Carousel id={id}/>
                                </div>
                                <Button
                                    variant="contained"
                                    startIcon={<YouTubeIcon />}
                                    color="secondary"
                                    target="__blank"
                                    href={`https://www.youtube.com/watch?v=${video}`}
                                >
                                    Watch the Trailer
                                </Button>
                            </div>
                        
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
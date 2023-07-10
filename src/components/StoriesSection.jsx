import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Story from './Story';
import StoryBig from './StoryBig';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Scrollbar} from 'swiper';
import { HiXMark } from "react-icons/hi2";
import 'swiper/css/navigation';

const StoriesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [story, setStory] = useState(false);

  const closeStory = () => setStory(false);
  const showStory = (index) => {
    setStory(true);
    setActiveSlide(index);
  };

  return (
    <>
      <Swiper
        className="swiper-stories"
        modules={[Navigation, FreeMode]}
        speed={500}
        spaceBetween={10}
        slidesPerView={'auto'}
        navigation
        breakpoints={{
          576: {
            spaceBetween: 20,
            slidesPerView: 'auto',
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 5,
          },
          1200: {
            spaceBetween: 25,
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide>
          <Story 
            onClick={() => showStory(0)} 
            img={"imgs/img2.jpg"} 
            title={"Выгода 30%"}
            viewed={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story 
            onClick={() => showStory(1)} 
            img={"imgs/img4.jpg"} 
            title={"Подзаголовок сторис"}
            viewed={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story 
            onClick={() => showStory(2)} 
            img={"imgs/img4.jpg"} 
            title={"Подзаголовок сторис"}
            viewed={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story 
            onClick={() => showStory(3)} 
            img={"imgs/img4.jpg"} 
            title={"Подзаголовок сторис"}
            viewed={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story 
            onClick={() => showStory(4)} 
            img={"imgs/img4.jpg"} 
            title={"Подзаголовок сторис"}
            viewed={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story 
            onClick={() => showStory(5)} 
            img={"imgs/img4.jpg"} 
            title={"Подзаголовок сторис"}
            viewed={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story 
            onClick={() => showStory(6)} 
            img={"imgs/img4.jpg"} 
            title={"Подзаголовок сторис"}
            viewed={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story 
            onClick={() => showStory(7)} 
            img={"imgs/img4.jpg"} 
            title={"Подзаголовок сторис"}
            viewed={false}
          />
        </SwiperSlide>
      </Swiper>

      <Modal show={story} onHide={closeStory} className="story-modal">
        <Modal.Body>
          <Swiper
            className="swiper-stories-modal"
            modules={[Scrollbar, Navigation]}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            navigation
            onSwiper={(swiper) => swiper.slideTo(activeSlide, 50)}
          >
            <SwiperSlide>
              <StoryBig 
                img={"imgs/img2.jpg"} 
                title={"Выгода 30%"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StoryBig 
                img={"imgs/img4.jpg"} 
                title={"Подзаголовок сторис"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StoryBig 
                img={"imgs/img4.jpg"} 
                title={"Подзаголовок сторис"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StoryBig 
                img={"imgs/img4.jpg"} 
                title={"Подзаголовок сторис"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StoryBig 
                img={"imgs/img4.jpg"} 
                title={"Подзаголовок сторис"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StoryBig 
                img={"imgs/img4.jpg"} 
                title={"Подзаголовок сторис"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StoryBig 
                img={"imgs/img4.jpg"} 
                title={"Подзаголовок сторис"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StoryBig 
                img={"imgs/img4.jpg"} 
                title={"Подзаголовок сторис"}
              />
            </SwiperSlide>
          </Swiper>
          <button className='close' onClick={closeStory}>
            <HiXMark/>
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StoriesSection;
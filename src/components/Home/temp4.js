import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useSpringCarousel } from 'react-spring-carousel';

export default function ImageCarousel() {
  const mockedItems = [
    {
      id: 'item-1 id',
      title: 'Item 1',
    },
    {
      id: 'item-2 id',
      title: 'Item 2',
    },
    {
      id: 'item-3 id',
      title: 'Item 3',
    },
    {
      id: 'item-4 id',
      title: 'Item 4',
    },
    {
      id: 'item-5 id',
      title: 'Item 5',
    },
    {
      id: 'item-6 id',
      title: 'Item 6',
    },
    {
      id: 'item-7 id',
      title: 'Item 7',
    },
    {
      id: 'item-8 id',
      title: 'Item 8',
    },
    {
      id: 'item-9 id',
      title: 'Item 9',
    },
    {
      id: 'item-10 id',
      title: 'Item 10',
    },
  ];

  const { carouselFragment } = useSpringCarousel({
    gutter: 10,
    slideAmount: 10,
    itemsPerSlide: 3 ,
    draggingSlideTreshold: 1,
    freeScroll: true,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: (
        <div className='border d-flex flex-grow-1 align-items-center justify-content-center' style={{textAlign: 'center'}}>
          {i.title}
        </div>
      ),
    })),
  });

  return (
    <div className='border h-100 align-items-center justify-content-center'>
      {carouselFragment}
    </div>
  );
}

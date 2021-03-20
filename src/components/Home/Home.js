import React from 'react';
import Room from '../Room/Room';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const rooms = [
        {
            title: 'BIKE',
            imgUrl: 'https://images.carandbike.com/bike-images/medium/kawasaki/ninja-h2-sx/kawasaki-ninja-h2-sx.webp?v=2',
            capacity: 2,
            vehicleType: 'BIKE',
            avatar: 'BK',
            price: 119
        },
        {
            title: 'CAR',
            imgUrl: 'https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03-696x522.jpg.webp',
            capacity: 3,
            vehicleType: 'CAR',
            avatar: 'C',
            price: 149
        },
        {
            title: 'BUS',
            imgUrl: 'https://assetsw.bus.com/content/uploads/2020/02/14170850/Charter-Bus-Rentals-Photo.jpg',
            capacity: 20,
            vehicleType: 'BUS',
            avatar: 'BS',
            price: 199
        },
        {
            title: 'METRO-RAIL',
            imgUrl: 'http://bsmedia.business-standard.com/_media/bs/img/article/2015-08/12/full/1439365133-9518.jpg',
            capacity: 100,
            vehicleType: 'METRO-RAIL',
            avatar: 'M',
            price: 299
        }
    ]
    return (
        <div style={style}>
            {
                rooms.map(room => <Room key={room.vehicleType} room={room}></Room>)
            }
        </div>
    );
};

export default Home;
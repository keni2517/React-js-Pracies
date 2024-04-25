import React from 'react'
import '../Pages/Home.css'


function Home(props) {
    return (
        <div className='App w-96 mt-20 '>
            <div className="slide-content w-96">
                <div className="card-wrapper swiper-wrapper">
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src={props.img} alt="" class="card-img"></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">{props.name}</h2>
                            <h3 className="name">{props.id}</h3>
                            <p className="description">{props.age}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
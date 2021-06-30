import React from 'react';
import '../assets/styles/views/kiwi.scss';
import Slider from '../components/Slider';

const KiwiView = () => {
  return (
    <>
      <div className="container">
        <div className="WorkDetail__mainWrapper">
          <div
            className="projectDetails__copyWrapper"
          >
            <div className="projectDetails__header">
              KIWI Auto Marketplace
            </div>
            <div className="projectDetails__bodyCopy is--loadedState">
              Myanmar newest 2nd hand car buying, bidding and selling marketplace! You can even add an insurance plan when you buy a car and have the platform settle all the mundane paperwork while you sit back and collect your car when it’s ready.
            </div>
            <div className="projectDetails__bodyCopy is--loadedState">
              <div>Key Features</div>
              <div>
                <ul>
                  <li>Car Inspection with 204 Check Points</li>
                  <li>Real-time Auction Bidding</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="projectDetails__visualWrapper"
          > 
            <div className="is--loadedState react-slider">
              <Slider />
            </div>
          </div>
        </div>
      </div>

      <div class="is--loadedState WorkDetailsHeroSlider__ballBG" style={{backgroundColor: 'rgb(183, 225, 70)'}}></div>
      
    </>
  )
}

export default KiwiView;
import React from 'react';
import Content from '../components/Content.js';
import '../assets/styles/views/work.scss'

const WorkView = () => {
  return (
    <div>
      <div class="Work__mastheadWrapper">
        <p class="Work__mainHeader WorkOnboardAnim__heroCopy">Here’s 5% of
        </p>
        <p class="Work__mainHeader WorkOnboardAnim__heroCopy">our published work.
        </p>
        <p class="color--red Work__mainHeader WorkOnboardAnim__heroCopy">See 100% of our power.
        </p>
        <div class="WorkOnboardAnim__categoryList WorkFilterAndLegend__mainGridWrapper WorkFilterAndLegend--isHorizontal ">
          <div class="workCategory__mainWrapper clearfix">
            <div class="workCategory__itemWrapper is--active">
              <div class="workCategory__itemText">All
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Food &amp; Beverage
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Media
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Transport &amp; Logistics
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Banking &amp; Finance
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Lifestyle
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Co-incubation
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Healthcare
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Retail &amp; Entertainment
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Telco
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Others
              </div>
            </div>
            <div class="workCategory__itemWrapper ">
              <div class="workCategory__itemText">Start-ups
              </div>
            </div>
          </div>
          <div class="workLegend__mainWrapper">
            <p class="workLegend__header">Legend
            </p>
            <div class="workLegend__itemWrapper clearfix">
              <div class="workLegend__item clearfix">
                <div class="workLegend__itemIcon workLegendItemIcon--app">
                </div>
                <p class="workLegend__itemText">APP
                </p>
              </div>
              <div class="workLegend__item clearfix">
                <div class="workLegend__itemIcon workLegendItemIcon--web">
                </div>
                <p class="workLegend__itemText">WEB
                </p>
              </div>
              <div class="workLegend__item clearfix">
                <div class="workLegend__itemIcon workLegendItemIcon--cms">
                </div>
                <p class="workLegend__itemText">CMS
                </p>
              </div>
              <div class="workLegend__item clearfix">
                <div class="workLegend__itemIcon workLegendItemIcon--uiux">
                </div>
                <p class="workLegend__itemText">UI/UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default WorkView;
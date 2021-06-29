import React, { useEffect, useState } from 'react';
import '../assets/styles/views/work.scss';
import workCategories, { legends } from '../data/workCategories';
import { useHistory } from 'react-router-dom';

const WorkView = () => {
  const history = useHistory();
  const urlParams = new URLSearchParams(history.location.search);
  const tags = urlParams.tags || 'all'
  const [categoryList, setCategoryList] = useState(workCategories);

  useEffect(() => {
    history.push(encodeURI(`/work?tags=${tags}`))
  }, [history, tags])

  const onHandleCatClick = (cat) => {
    const catList = [...categoryList]
    catList.map((item) => {
      if (cat.title === item.title) {
        item.active = true
      } else {
        delete item.active
      }
      return item
    })
    setCategoryList(catList)
    history.push(encodeURI(`/work?tags=${cat.key}`))
  }
  return (
    <div>
      <div className="Work__mastheadWrapper">
        <p className="Work__mainHeader WorkOnboardAnim__heroCopy">Here’s 5% of
        </p>
        <p className="Work__mainHeader WorkOnboardAnim__heroCopy">our published work.
        </p>
        <p className="color--red Work__mainHeader WorkOnboardAnim__heroCopy">See 100% of our power.
        </p>
        <div className="WorkOnboardAnim__categoryList WorkFilterAndLegend__mainGridWrapper WorkFilterAndLegend--isHorizontal ">
          <div className="workCategory__mainWrapper clearfix">
            {
              categoryList.map((category) => {
                const styleClass = `workCategory__itemWrapper ${category.active ? 'is--active' : ''}`
                return (
                  <div key={category.key} className={styleClass} onClick={() => onHandleCatClick(category)}>
                    <div className="workCategory__itemText">
                      {category.title}
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="workLegend__mainWrapper">
            <p className="workLegend__header">Legend
            </p>
            <div className="workLegend__itemWrapper clearfix">
              {
                legends.map((item) => (
                  <div key={item.title} className="workLegend__item clearfix">
                    <div className="workLegend__itemIcon workLegendItemIcon--app">
                    </div>
                    <p className="workLegend__itemText">
                      {item.title}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default WorkView;
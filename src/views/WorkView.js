import React, { useEffect, useState } from 'react';
import '../assets/styles/views/work.scss';
import workCategories, { legends, works } from '../data/workCategories';
import { useHistory } from 'react-router-dom';

const WorkView = () => {
  const history = useHistory();
  const urlParams = new URLSearchParams(history.location.search);
  const urlTags = urlParams.get('tags') || 'all';
  const [categoryList, setCategoryList] = useState(workCategories);
  const [tags, setTags] = useState(urlTags);
  const [filteredWorkList, setFilteredWorkList] = useState(works);

  useEffect(() => {
    if (tags && tags !== 'all') {
      const selectedCatIndex = workCategories.findIndex((workCat) => workCat.key === tags)
      setFilteredWorkList(works.filter((work) => work.cat.includes(selectedCatIndex)))

      const catList = [...categoryList]
      catList.map((item) => {
        if (tags === item.key) {
          item.active = true
        } else {
          delete item.active
        }
        return item
      })
      setCategoryList(catList)
    }
    history.push(encodeURI(`/work?tags=${tags}`))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags])

  return (
    <div>
      <div className="Work__mastheadWrapper">
        {/* section 1 */}
        <p className="Work__mainHeader WorkOnboardAnim__heroCopy color--black">Here’s 5% of
        </p>
        <p className="Work__mainHeader WorkOnboardAnim__heroCopy color--black">our published work.
        </p>
        <p className="color--red Work__mainHeader WorkOnboardAnim__heroCopy color--red">See 100% of our power.
        </p>

        {/* section 2 */}
        <div className="WorkOnboardAnim__categoryList WorkFilterAndLegend__mainGridWrapper WorkFilterAndLegend--isHorizontal ">
          <div className="workCategory__mainWrapper clearfix">
            {
              categoryList.map((category) => {
                const styleClass = `workCategory__itemWrapper ${category.active ? 'is--active' : ''}`
                return (
                  <div key={category.key} className={styleClass} onClick={() => setTags(category.key)}>
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
      {/* section 3 */}
      <div className="clearfix">
        <div className="Work__compressorGridWrapper clearfix">
          <div style={{ display: 'block' }}>
            <div className="workGrid__mainWrapper">
              {
                filteredWorkList.map((work) => (
                  <a key={work ? work.title : '-'} className={work.styleClass} href="/work/ocbc-pay-anyone"
                    style={{ animationDelay: '0.172253s' }}>
                    <img alt="Others" className="workGrid__bgImg" src={work.img}
                      sizes="25vw"
                      srcSet={`${work.img} 375w, ${work.img} 750w`} />
                    <div className="workGrid__textCategory_gridWrapper">
                      <p className="workGrid__textCategory_text">
                        {work.cat.map((cat) => workCategories[cat] ? workCategories[cat].title : []).join(', ')}
                      </p>
                    </div>
                    <div className="workGrid__textProjectTitle_gridWrapper">
                      <p className="workGrid__textProjectTitle_text">
                        {work.label}
                      </p>
                    </div>
                    <div className="workGrid__icoPlatformsOnMainWrapper">
                      {
                        work.legends.map((legend) => {
                          return legends[legend] && (
                            <div key={legend.title} className={legends[legend].styleClass}></div>
                          )
                        })
                      }
                    </div>
                  </a>
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
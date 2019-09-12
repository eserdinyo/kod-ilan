import React from "react"
import PropTypes from 'prop-types'


export const IlanBox = ({ position, location, www, tags }) => {

  return (
    <div className="ilan-box">
      <div className="ilan-box__item">
        <div>
          <i className='fa fa-user'></i>
        </div>
        <div>
          <div className="ilan-box__title">Pozisyon</div>
          <div className="ilan-box__desc">{position}</div>
        </div>
      </div>
      <div className="ilan-box__item">
        <div>
          <i className='fa fa-map'></i>
        </div>
        <div>
          <div className="ilan-box__title">Lokasyon</div>
          <div className="ilan-box__desc">{location}</div>
        </div>
      </div>
      <div className="ilan-box__item">
        <div>
          <i className='fa fa-safari'></i>
        </div>
        <div>
          <div className="ilan-box__title">Website</div>
          <div className="ilan-box__desc" ><a href={www} style={{ color: '#34AE62' }} >{www}</a></div>
        </div>
      </div>
      <div className="ilan-box__item">
        <div>
          <i className='fa fa-tag'></i>
        </div>
        <div>
          <div className="ilan-box__title">Etiketler</div>

          <div className="ilan-box__tags">

            {tags.map((tag, idx) =>
              <div key={idx} className="ilan-box__tag">{tag.name}</div>
            )}

          </div>
        </div>
      </div>
      <a className="ilan-box__button" href="foo">E-posta ile başvur</a>
      <a className="ilan-box__button" href="foo">Site üzerinden başvur</a>
      <div className='ilan-box__request'>
        <p>İlan başvurunuzda <a href='https://www.kodilan.com' style={{ color: '#34AE62', textDecoration: 'none' }} >kodilan.com'a</a> referans vererek bize katkıda bulunabilirsiniz.</p>
      </div>
    </div>
  )
};


IlanBox.propTypes = {
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  www: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object)
}


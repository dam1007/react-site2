import React from 'react'

function Slider(props) {
  return (
    <section id="slider" className={props.skill[0]}>
        <div className="inner">
        <div className="desc">
            <h2>Drum School</h2>
            <p>드럼스쿨만의 차별화된 운영철학을 이야기 합니다.</p>
            <a href="/">바로가기</a>
        </div>
        </div>
    </section>
  )
}

export default Slider
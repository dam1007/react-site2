import React from 'react'

function Image() {
  return (
    <section id="image">
          <div className="inner">
            <div className="tit">
              <h2>강사진 프로필</h2>
              <p>드럼 스쿨의 실력 넘치는 강사님들을 소개합니다~</p>
            </div>
            <div className="cont">
              <article>
                <figure><img src="assets/img/photo01.svg" alt="프로필사진1"/></figure>
                <figcaption>
                  <p>한승진 / 전문반</p>
                  <a href="/">자세히 보기</a>
                </figcaption>
              </article>
              <article>
                <figure><img src="assets/img/photo02.svg" alt="프로필사진2"/></figure>
                <figcaption>
                  <p>박상현 / 입시반</p>
                  <a href="/">자세히 보기</a>
                </figcaption>
              </article>
              <article>
                <figure><img src="assets/img/photo03.svg" alt="프로필사진3"/></figure>
                <figcaption>
                  <p>우지현 / 전문반</p>
                  <a href="/">자세히 보기</a>
                </figcaption>
              </article>
            </div>
          </div>
        </section>
  )
}

export default Image
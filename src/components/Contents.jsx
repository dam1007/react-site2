import React from 'react'

function Contents() {
  return (
    <section id="contents">
          <div className="inner">
            <div className="left">
              <em>CLASS</em>
              <h2>드럼스쿨<br/>
                수강생 모집</h2>
              <p>취미반/입시반/전문반<br/>
                전 분야 모집!<br/>
                이런 분들이 들으면 좋아요~
              </p>
              <a className="consult" href="/">상담받기</a>
            </div>
            <div className="right">
              <ul>
                <li>
                  <span className="icon"></span>
                  <h3>취미반</h3>
                  <p>멋있는 취미를 가지고 싶은 분들께 추천해요. 기본기부터 시작하기 때문에 드럼을 처음 치는 초보자 분들이 들으시면 좋습니다.</p>
                </li>
                <li>
                  <span className="icon"></span>
                  <h3>입시반</h3>
                  <p>드럼을 전공으로 하고 싶은 분들께 추천해요. 예중, 예고, 예대 입시를 다니고 싶으신 분들이 들으시면 좋습니다.</p>
                </li>
                <li>
                  <span className="icon"></span>
                  <h3>전문반(프로)</h3>
                  <p>프로를 지망하시는 분들께 추천해요. 취미반보다 심층적이며 프로에 준하는 내용을 배울 수 있습니다. 취미반보다 조금 더 깊게 배우고 싶으신 분들도 환영합니다!</p>
                </li>
                <li>
                  <span className="icon"></span>
                  <h3>전문반(오디션)</h3>
                  <p>오디션을 보시는 분들께 추천해요. 오디션은 입시반, 전문반보다 특수한 케이스로 곡 선정부터 시작해 오디션에 대한 정보들을 알려드립니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
  )
}

export default Contents
import React from "react";


const Thanks = () => {
  function confetti() {
    setInterval(function () {

      const confettiColors = ['#2ecc71'];
      const confettiAnimations = ['slow', 'medium', 'fast'];
      const confettiEl = document.createElement('div');
      const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
      const confettiBackground = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      const confettiLeft = (Math.floor(Math.random() * 100)) + '%';
      const confettiAnimation = confettiAnimations[Math.floor(Math.random() * confettiAnimations.length)];
      confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;
      document.getElementById('confetti').appendChild(confettiEl)
    }, 500)
  }
  confetti()
  return (
    <>
      <div className="row">
        <div class="confetti-container">
          <div id="confetti" className="confetti">
          </div>
          <div className="col-md-6 m-auto">
            <div className="widget widget__thanks">
              <div className="widget__body text-center">
                <h2>GRATULACJE <span>🎉</span></h2>
                <p> Aktywacja oferty przebiegła pomyślnie</p>
                <div className="btn btn-info mr-2">
                  Śledź nas na Facebooku
                </div>
                <div className="btn btn-danger">
                  Subskrybuj na YouTube
                </div>
                <div className="mt-2">
                  <a href="#">przjedź do panelu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thanks;

/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

const grid = document.getElementById('grid');
const btnLeft = document.getElementById('btn-left');
const btnTransform = document.getElementById('btn-transform');
const btnSize = document.getElementById('btn-size');
const btnOpacity = document.getElementById('btn-opacity');
const btnStop = document.getElementById('btn-stop');

const boxes = [];
for (let i = 0; i < 400; i += 1) {
  const div = document.createElement('div');
  div.className = 'box' + (i % 2 ? ' alt' : '');
  grid.appendChild(div);
  boxes.push(div);
}

let rafId = null;
let t = 0;

function stop() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
}

function animate(type) {
  stop();
  const tick = () => {
    t += 0.05;
    const shift = Math.sin(t) * 8;
    boxes.forEach((box, idx) => {
      const local = shift + (idx % 10) * 0.2;
      if (type === 'left') {
        box.style.position = 'relative';
        box.style.left = `${local}px`;
        box.style.top = `${local}px`;
      } else if (type === 'transform') {
        // TODO: добавь will-change: transform в CSS и сравни
        box.style.wiillChange = 'transform';
        box.style.transform = `translate(${local}px, ${local}px)`;
      } else if (type === 'size') {
        box.style.width = `${20 + local}px`;
        box.style.height = `${20 + local}px`;
      } else if (type === 'opacity') {
        box.style.opacity = `${0.6 + (Math.sin(t + idx) + 1) / 4}`;
      }
    });
    rafId = requestAnimationFrame(tick);
  };
  tick();
}

btnLeft.addEventListener('click', () => animate('left'));
btnTransform.addEventListener('click', () => animate('transform'));
btnSize.addEventListener('click', () => animate('size'));
btnOpacity.addEventListener('click', () => animate('opacity'));
btnStop.addEventListener('click', stop);

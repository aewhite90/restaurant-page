const section = () => {
  const homeSect = document.createElement('section');
  homeSect.classList.add('home-section');

  const title = document.createElement('h1');
  const subTitleOne = document.createElement('h6');
  const subTitleTwo = document.createElement('h6');

  title.textContent = 'Come dine with us for a truly memorable experience';
  subTitleOne.textContent = 'at The Open Table we have a seat waiting for you';
  subTitleTwo.textContent = 'and we guarantee you will love it';

  homeSect.appendChild(title);
  homeSect.appendChild(subTitleOne);
  homeSect.appendChild(subTitleTwo);

  return homeSect;
}

const homeActive = () => {
  const btns = Array.from(document.querySelectorAll('.btn'));
  btns.forEach((btn) => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
  });
  const homeBtn = document.getElementById('home');
  homeBtn.classList.add('active');
}

const home = () => {
  homeActive();
  let sectionAppend = section();
  let sectionRemove = document.querySelector('section');

  const content = document.getElementById('content');
  content.removeChild(sectionRemove);
  content.appendChild(sectionAppend);
}

export default home;

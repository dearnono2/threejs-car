import { useRef, useEffect } from 'react';

function Txt({ index }) {
  const txt = useRef(null);

  useEffect(() => {
    const boxs = txt.current.querySelectorAll('article');
    for (const box of boxs) box.classList.remove('on');
    boxs[index].classList.add('on');
  }, [index])

  return (
    <section className='txt' ref={txt}>
      <article>
        <h2>Consect</h2>
      </article>
      <article>
        <h2>Dolor</h2>
      </article>
      <article>
        <h2>Corporis</h2>
      </article>
      <article>
        <h2>Adipisic</h2>
      </article>
      <article>
        <h2>Sit amet</h2>
      </article>
      <article>
        <h2>Lorem</h2>
      </article>
    </section>
  );
}

export default Txt;